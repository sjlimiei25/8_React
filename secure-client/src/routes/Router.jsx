// rfce 단축어 사용 : es7+.. snippets 확장팩 추가

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Join from "../pages/Join";
import Home from "../pages/Home";

/*
  * react-router-dom
    : SPA(Single Page Application)에서 URL 변경을 통해
      페이지 이동(화면 전환)을 가능하게 해주는 라이브러리

  [주요 컴포넌트]
  - BrowserRouter
    : HTML History API를 사용하여 브라우저의 주소(URL) 변경을 관리하는 최상위 컴포넌트
    : 라우팅을 사용하는 모든 컴포넌트는 BrowserRouter 내부에 포함되어 있어야 함
  - Routes
    : 여러 Route 들을 감싸는 컨테이너 역할
    : URL 과 가장 일치하는 Route 하나를 선택하여 렌더링함
  - Route
    : 특정 URL(path)에 해당하는 컴포넌트를 지정
    : 형식
      <Route path="URL경로" element={<대상컴포넌트/>} />
      예)
      <Route path="/board" element={<BoardList />} />
  - Link
    : 페이지 새로고침 없이 라우팅을 통한 화면 이동을 가능하게 하는 컴포넌트
      (HTML의 a 태그 역할)
    : 형식
      <Link to="이동할경로">표시할내용</Link>
      예)
      <Link to="/board">게시판</Link>
*/

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/join" element={<Join/>} />
          <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
