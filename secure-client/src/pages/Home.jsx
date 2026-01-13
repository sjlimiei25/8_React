// src/pages/Home.jsx
import React from 'react'
import useAuthStore from '../store/authStore';
import Login from './Login';

function Home() {
  const { userId, logout } = useAuthStore();
  const userList = [];
  return (
    <div>
      {/* 로그인 한 경우 아이디 표시, 로그인하지 않은 경우 로그인 페이지 표시 */}
      { 
        userId ?
        <>
          <p>{userId}님 환영합니다^^</p>
          <button onClick={logout}>로그아웃</button>
        </>
        :
        <Login />
      }
    </div>
  )
}

export default Home
