// src/store/authStore.js
import { create } from 'zustand';

const useAuthStore = create((set, get)=>({
  token: null,    // 상태
  userId: null,   // 상태
  // 토큰, 사용자아이디 값 변경 (액션)
  setAuth: (token, userId) => {
    // set({token: token, userId: userId})
    set({token, userId})  // 단축 속성명(es6)
  },
  // 초기화 -> 로그아웃
  logout: () => {
    set({
      userId: null,
      token: null
    })
  },
  // 토큰 조회
  getToken: () => {
    return get().token;
  }
}));

export default useAuthStore;