// 함수 정의

// * 기명 함수 (named function)
function add(x, y) {
  return x + y;
}

const n1 = 5;
const n2 = 3;
// 함수 호출
const result = add(n1, n2)
console.log(`${n1} + ${n2} = ${result}`)

// * 익명 함수 (anonymous function)
const subtraction = function(x,y) { return x-y; }
const result2 = subtraction(n1, n2)
console.log(`${n1} - ${n2} = ${result2}`)

// * 화살표 함수 (arrow function)
const multiply = (x, y) => { return x * y; };
console.log(`${n1} * ${n2} = ${ multiply(n1, n2) }`)

// * 선택적 매개변수 (optional parameters) => 타입스크립트에서 지원

// * 기본값 매개변수 (default parameters)
function login(id, isAdmin=false) {
  console.log(`ID: ${id}, 관리자여부: ${isAdmin}`)
}

login("user01");          // ID: user01, 관리자여부: false
login("admin", true);     // ID: admin, 관리자여부: true