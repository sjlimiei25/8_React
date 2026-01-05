import { Link, Outlet } from "react-router-dom"

/*
    * Layout 컴포넌트는 고정된 틀로서 사용될 컴포넌트
    * Outlet 컴포넌트는 페이지마다 바뀌는 화면이 렌더링되는 영역을 지정
 */
function Layout() {
  return (
    <div>
      <Link to="/"><h2>Secure Client</h2></Link>
      
      <Outlet />
    </div>
  )
}

export default Layout
