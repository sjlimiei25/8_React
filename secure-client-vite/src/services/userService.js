import api from "./axios"

export const login = async (loginData) => {

  return await api.post("/login", loginData);

}

// join 함수 추가
export const join = async (joinData) => {
  return await api.post("/join", joinData);
}