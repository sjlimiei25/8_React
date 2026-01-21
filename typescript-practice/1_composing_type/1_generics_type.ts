// 제네릭 적용 가능 범위 : 타입 지정, 인터페이스, 클래스

// * 타입 지정 시 사용
//   : 기본 자료형 배열을 선언할 때 제네릭을 사용하여 내부 요소의 타입을 강제할 수 있음
type StringArray = Array<string>;

const names:StringArray = [];
names.push("Kim");
// names.push(100);    // Error!

type NumberArray = Array<number>;

const nums:NumberArray = [];
nums.push(10);
// nums.push("10");    // Error!

// * 인터페이스와 결합
//   : 서버로부터 받는 응답 데이터는 동일한 부분과 다른 부분이 있음
//     다른 부분에 제네릭을 사용하면 중복 코드를 줄일 수 있음
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;          // 전달되는 데이터의 타입만 유연하게 변경
}

interface User {
  email: string;
  phone: string;
}
const userResponse: ApiResponse<User[]> = {
  status: 200,
  message: "success",
  data: [{email: 'user01@kh.or.kr', phone:'010-0000-0000'}]
}

interface Post {
  title: string;
  content: string;
}
const postResponse: ApiResponse<Post[]> = {
  status: 200,
  message: "success", 
  data: [{title: '게시글제목1', content: '게시글내용@@@@'}]
}