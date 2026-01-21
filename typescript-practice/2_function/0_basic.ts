// 함수 정의

// * 기명 함수 (named function)
// [형식] function 함수명(매개변수: 타입): 반환타입 { ... }
function add(x: number, y: number): number {
  return x + y;
}

const n1: number = 5;
const n2: number = 3;
// 함수 호출
const result: number = add(n1, n2);
console.log(`${n1} + ${n2} = ${result}`)

// * 익명 함수 (anonymous function) : 변수에 함수를 할당하는 방식
const subtraction = function(x: number, y: number): number { return x - y; }
const result2 = subtraction(n1, n2)
console.log(`${n1} - ${n2} = ${result2}`)


// * 화살표 함수 (arrow function) : 리액트 컴포넌트나 이벤트 핸들러에서 가장 많이 쓰이는 방식
const multiply = (x: number, y: number): number => {
  return x * y;
};
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);


// * 선택적 매개변수 (optional parameters) : 매개변수 뒤에 '?'를 붙여서 인자 전달을 선택적으로 만듦
// [주의] 선택적 매개변수는 반드시 마지막에 위치해야 함
function greet(name: string, message?: string): string {
  if (message) {
    return `안녕하세요, ${name}님! ${message}`;
  } else {
    return `안녕하세요, ${name}님!`;
  }
}

console.log(greet("김철수"));             // 안녕하세요, Kim님!
console.log(greet("이영희", "반가워요!")); // 안녕하세요, Lee님! 반가워요!


// * 기본값 매개변수 (default parameters) : 인자가 전달되지 않을 경우 사용할 기본값을 지정
function login(id: string, isAdmin: boolean = false): void {
  console.log(`ID: ${id}, 관리자여부: ${isAdmin}`);
}

login("user01");          // ID: user01, 관리자여부: false
login("admin", true);     // ID: admin, 관리자여부: true