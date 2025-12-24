import { useForm } from 'react-hook-form';

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

function JoinForm() {

  const { register,       // 입력 요소(input)를 react-hook-form에 등록하는 함수
          handleSubmit,   // 폼 제출 시 호출되어 데이터 검증 후 콜백을 실행하는 함수. 자체적으로 e.preventDefault() 처리를 해줌
          formState: { errors } // 실시간으로 검증 에러 상태를 담고 있는 객체
        } = useForm();

  const joinRequest = (data) => {

    console.log(data)
    // * axios를 사용하여 스프링 서버로 요청 *
  }

  return (
    <form onSubmit={handleSubmit(joinRequest)}>
      {/* 아이디 입력 */}
      <input type="text" placeholder='아이디는 4~12자' {...register('userId')} />
      { errors.userId && <span>{errors.userId.message}</span> }
      <br/>
      {/* 이메일 입력 */}
      <input type="text" placeholder='이메일 입력' {...register('email')} />
      { errors.email && <span>{errors.email.message}</span> }
      <br/>
      {/* 나이 입력 */}
      <input type="number" placeholder='1살 이상만 입력' {...register('age')} />
      { errors.age && <span>{errors.age.message}</span> }
      <br/>

      <button type="submit">가입하기</button>
    </form>
  )

}

export default JoinForm;