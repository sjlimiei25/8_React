// * 기본 타입 단언 (Type Assertion)
//   : 타입스크립트는 값이 any 또는 unknown 일 때 as를 통해 타입을 확정지을 수 있음
let value: any = "this is a string";
let strLength:  number = (value as string).length;

console.log(`value 길이 : ${strLength}`)


// * 객체 초기화 시 단언 사용
/*
// 기존 자바스크립트 코드
const character = {};
character.name = "루피";
character.age = 19;
*/

interface Character {
  name: string;
  age: number;
}

/*
// 기존 코드와 동일하게 처리하고자 할 경우 오류 발생 => character가 정의되는 시점에 name, age 속성이 정의되지 않았기 때문
const character: Character = {};    // Error!
character.name = "루피";
character.age = 19;
*/

const character = {} as Character;
character.name = "루피";
character.age = 19;
// => as 키워드를 사용하여 타입 문제 해결 가능

console.log("캐릭터 정보:", character);