// src/pages/Home.jsx
import useAuthStore from '../../store/authStore';
import Login from '../Login/Login';
import { Welcome, WelcomeMessage, LogoutButton } from './Home.styled';

function Home() {
  const { userId, logout } = useAuthStore();

  return (
    <div>
      {/* 로그인 한 경우 아이디 표시, 로그인하지 않은 경우 로그인 페이지 표시 */}
      {
        userId ?
          <Welcome>
            <WelcomeMessage>{userId}님 환영합니다^^</WelcomeMessage>
            <LogoutButton onClick={logout}>로그아웃</LogoutButton>
          </Welcome>
          :
          <Login />
      }
    </div>
  )
}

export default Home
