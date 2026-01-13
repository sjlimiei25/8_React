import { Outlet } from "react-router-dom"
import Logo from "../../components/Logo/Logo"
import { LayoutContainer, LogoArea, ContentArea } from "./Layout.styled"

/*
    * Layout 컴포넌트는 고정된 틀로서 사용될 컴포넌트
    * Outlet 컴포넌트는 페이지마다 바뀌는 화면이 렌더링되는 영역을 지정
 */
function Layout() {
  return (
    <LayoutContainer>
      <LogoArea>
        <Logo to="/"></Logo>
      </LogoArea>

      <ContentArea>
        <Outlet />
      </ContentArea>
    </LayoutContainer>
  )
}

export default Layout
