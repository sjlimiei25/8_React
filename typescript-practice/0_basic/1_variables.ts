// * 변수 선언

let message = "Hello World!";               // 타입 추론
let typed_message:string = "Hello World";   // 명시적 타입 선언

// message = 1000;         // Error!
// typed_message = 1000;   // Error!
// => 변수 선언과 동시에 할당(초기화)하는 경우 타입스크립트가 자동으로 타입을 결정함.

// 암시적 any 타입 (주의 필요)
let message1;
message1 = 1000;
message1 = "1000";
// => 타입을 지정하지 않고 선언된 변수에는 타입 제한 없이 값이 할당됨 (js와 동일)

let message2:string;
// message2 = 1000;    // Error!
// => 변수 선언 시 타입을 지정하면 해당 타입의 값으로만 할당 가능. (명시적 타입 선언)

// * 타입 정의 전: 일반 객체 선언
const user = {
  name: "kim",
  id: 0
}

// * 인터페이스 정의
// 타입스크립트에서는 interface 키워드를 통해 객체의 형식을 미리 정의할 수 있음.
interface User {
  name: string;
  id: number;
}

// * 인터페이스 적용: 정의된 형식을 따르는 객체 생성
// [형식] const 변수명: 인터페이스명 = {필드:값, 필드:값}
const user1: User = {
  name: "Kim",
  id: 1,
}
/*
// [주의] 존재하지 않는 필드는 사용할 수 없음!
const user2: User = {
  username: "Kim",    // 존재하지 않는 필드
  id: 2,
}
*/

// * 클래스 활용
// 자바와 같이 클래스를 선언하고 인터페이스와 결합하여 다형성을 적용할 수 있음
class UserClass {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// * 다형성 적용: 클래스로 생성한 인스턴스를 인터페이스 타입으로 관리
const user3: User = new UserClass("Kim", 3)