import { useForm } from 'react-hook-form';

import * as z from 'zod';   // 검증 도구
import { zodResolver } from '@hookform/resolvers/zod';
import { join } from '../../services/userService';
import { ErrorMessage, Input, JoinButton } from './JoinForm.styled';
import { useNavigate } from 'react-router-dom';


import { errorAlert, successAlert } from '../../utils/SwalUtil';

/*
  react-hook-form (useForm)
  [1] 불필요한 리렌더링 방지 (성능 최적화)
  - useState  : 키보드를 한 번 누를때마다 화면 전체를 다시 그림(리렌더링). 필드가 20개라면..입력 시 버벅일 수 있음.
  - useForm   : 비제어 컴포넌트 방식.
                입력 중 조용히 저장만 하다가, 꼭 필요한 순간에 화면을 업데이트 함. 성능이 훨씬 가벼움.

  [2] 반복되는 코드 감소
  - useState  : 모든 입력 필드에 value={state}, onChange={setState}를 일일이 만들고 연결해줘야 함. 코드가 길어짐
  - useForm   : {...register("이름")} 하나로 value, onChange, ref 를 한번에 처리할 수 있음

  * useState 를 사용하는 경우 *
    - 입력 필드가 1~2개로 단순할 경우
    - 입력값에 따라 화면이 실시간으로 변해야 할 때 (ex. 실시간 글자 수 표시, 타이핑 즉시 결과를 보여줄 때)

  * useForm 을 사용하는 경우 *
    - 입력 필드가 3개 이상인 경우 (대부분의 폼형식, 회원가입)
    - 입력값 검증 로직이 복잡할 때 (이메일 형식, 비밀번호 일치 등)
*/

// 입력값 검증 항목 정의
const validRules = z.object({
  userId: z.string().min(4, "4자 이상 입력하세요.").max(12, "12자 이하로 입력하세요."),
  userPwd: z.string().min(10, "비밀번호는 10자 이상 입력하세요.")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^*()_\-+=])[A-Za-z\d!@#$%^*()_\-+=]*$/, "영문, 숫자, 특수문자를 포함하여 입력하세요."),
  checkUserPwd: z.string().min(1, "비밀번호 확인을 입력하세요."),
  email: z.email("올바른 이메일 형식으로 입력하세요."),
  age: z.coerce.number().min(1, "1 이상으로 입력하세요.")
})
  .refine((data) => data.userPwd === data.checkUserPwd, {  // refine : zod 객체 내부의 여러 필드를 비교할 때 사용
    message: "비밀번호가 일치하지 않습니다.",           // 조건에 해당되지 않을 때 표시할 메시지
    path: ["checkUserPwd"]                              // 에러 메시지(message)를 표시할 위치
  });
// .refine((data)=>{ return data.userPwd == data.checkUserPwd });


function JoinForm() {

  const { register,       // 입력 요소(input)를 react-hook-form에 등록하는 함수
    handleSubmit,   // 폼 제출 시 호출되어 데이터 검증 후 콜백을 실행하는 함수. 자체적으로 e.preventDefault() 처리를 해줌
    formState: { errors } // 실시간으로 검증 에러 상태를 담고 있는 객체
  } = useForm({
    resolver: zodResolver(validRules)
  });

  const navigate = useNavigate();


  const joinRequest = async (data) => {
    // 비밀번호 확인(checkUserPwd) 데이터는 클라이언트에서 확인용으로 사용
    // -> 서버로 요청 시 제외!

    const { checkUserPwd, ...requestData } = data;

    // console.log(data)
    // console.log(requestData)

    // * axios를 사용하여 스프링 서버로 요청 *
    // (요청주소) [POST] http://localhost:8080/join
    try {
      // const response = await axios.post('http://localhost:8080/join', requestData)
      const response = await join(requestData);

      // console.log(response)     // 개발자 입장에서 확인용
      // alert('회원 가입 성공')   // 사용자에게 표시용
      successAlert('회원 가입 성공')
      navigate('/')
    } catch (error) {
      console.log(error)
      // alert('문제가 발생했습니다.')
      errorAlert('문제가 발생했습니다.')
    }
  }

  return (
    <form onSubmit={handleSubmit(joinRequest)}>
      {/* 아이디 입력 */}
      <Input type="text" placeholder='아이디는 4~12자' {...register('userId')} />
      {errors.userId && <ErrorMessage>{errors.userId.message}</ErrorMessage>}
      <br />

      {/* 비밀번호 입력 */}
      <Input type="password" placeholder='비밀번호 10자 이상' {...register('userPwd')} />
      {errors.userPwd && <ErrorMessage>{errors.userPwd.message}</ErrorMessage>}
      <br />

      {/* 비밀번호 확인 입력 */}
      <Input type="password" placeholder='비밀번호 확인 입력' {...register('checkUserPwd')} />
      {errors.checkUserPwd && <ErrorMessage>{errors.checkUserPwd.message}</ErrorMessage>}
      <br />

      {/* 이메일 입력 */}
      <Input type="text" placeholder='이메일 입력' {...register('email')} />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <br />
      {/* 나이 입력 */}
      <Input type="number" placeholder='1살 이상만 입력' {...register('age')} />
      {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
      <br />

      <JoinButton type="submit">가입하기</JoinButton>
    </form>
  )

}

export default JoinForm;