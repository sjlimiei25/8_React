import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as z from 'zod';
import axios from 'axios';

// react-hook-form을 사용하지 않고 구성.
// * zod를 사용하여 값이 입력되었는 지만 검증 *
const loginRules = z.object({
  userId: z.string().min(1, "아이디를 입력하세요"),
  userPwd: z.string().min(1, "비밀번호를 입력하세요")
})

function LoginForm() {
  /*
  const [userId, setUserId] = useState("");  // 아이디
  const [userPwd, setUserPwd] = useState(""); // 비밀번호
  */
  // * 아이디, 비밀번호를 함께 관리
  const [loginData, setLoginData] = useState({
    userId: "",
    userPwd: ""
  });

  const loginHandler = async () => {
    // 로그인 요청 시 입력 여부만 체크!
    // const result = loginRules.safeParse({userId: userId, userPwd: userPwd})
    const result = loginRules.safeParse(loginData)

    console.log(result)
    if (!result.success) {  // 유효성 검증을 통과하지 못한 경우 (success == false)
      alert("아이디 또는 비밀번호가 입력되지 않았습니다.")
      return
    }

    // 서버로 로그인 요청! --> fetch , axios
    //  [POST] /login 
    //  { userId: xx, userPwd: xx }
    try {
      const response = await axios.post("http://localhost:8080/login", loginData)
      console.log(response)

      alert("로그인 성공")
    } catch (error) {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.")
    }  
  }
  
  const changeHandler = (e) => {
    // console.log(e)
    const { name, value } = e.target;

    setLoginData({
      ...loginData,     // {userId: "", userPwd: ""}
      [name]: value     // userPwd: "a" -> {userId: "", userPwd: "a"}
    });
  }

  // 아이디, 비밀번호 값을 상태로 관리
  return (
    <div>
      <h3>Login</h3>
      {/* 아이디 입력 */}
      <div>
        <input type="text" 
               name="userId" 
               placeholder='아이디'
               //value={userId}
               value={loginData.userId}
               //onChange={(e)=>{setUserId(e.target.value)}} />
               onChange={changeHandler} />
      </div>

      {/* 비밀번호 입력 */}
      <div>
        <input type="password" 
               name="userPwd" 
               placeholder="비밀번호"
               // value={userPwd}
               value={loginData.userPwd}
               // onChange={(e)=>{setUserPwd(e.target.value)}} />
               onChange={changeHandler} />
      </div>

      {/* 로그인 버튼 - button, input:button */}
      <button onClick={loginHandler}>로그인</button>

      {/* 회원 가입 페이지 연결 */}
      <p>
        <Link to="/join">회원가입</Link>
      </p>
    </div>
  )
}

export default LoginForm
