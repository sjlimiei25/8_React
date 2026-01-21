// src/services/axios.js
import axios from 'axios';
import useAuthStore from '../store/authStore';

// 공통으로 사용될 axios 객체를 설정한 후 export
// const SERVER_URL = 'http://localhost:8080'
const SERVER_URL = process.env.REACT_APP_API_SERVER_URL
/*
// process.env => {REACT_APP_API_SERVER_URL: 'xxx',  }
const {
  REACT_APP_API_SERVER_URL
} = process.env;
*/

// axios 객체 생성
const api = axios.create({
  baseURL: SERVER_URL
})

const getAuthStore = useAuthStore.getState

// 요청 전에 토큰이 있으면 요청 헤더에 담아서 전송
// -> Request Interceptor
api.interceptors.request.use(
  (config) => {
    // 토큰 정보가 있을 경우 -> 전역 상태(스토어, authStore)
    if(getAuthStore) {
      const token = getAuthStore().token;
      if (token) {
        // 요청 헤더에 토큰을 담기
        config.headers.Authorization = `Bearer ${token}` // "Bearer " + token
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)


// 응답 정보에 대한 공통 처리 로직 추가
// -> Response Interceptor
api.interceptors.response.use(
  (response) => {
    // 통신 성공 시 응답 데이터만 전달
    return response.data;
  },
  (error) => {
    // 통신 실패 시 에러 정보 전달
    return Promise.reject(error);
  }
)


export default api;