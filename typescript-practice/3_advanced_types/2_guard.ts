// * 타입 가드 (Type Guard)
//   : 'as'는 강제로 타입을 지정하는 것 
//   :  타입 가드는 '검사'를 통해 타입을 좁히는 안전한 방식

function printLength(input: string | number) {
  // input.length; // Error! number 타입일 수도 있어서 에러 발생

  // * typeof 연산자를 사용한 타입 가드
  if (typeof input === "string") {
    // 이 블록 안에서 input은 자동으로 string 타입으로 취급됨
    console.log(`문자열 길이: ${input.length}`);
  } else {
    // 이 블록 안에서 input은 자동으로 number 타입으로 취급됨
    console.log(`숫자 데이터: ${input}`);
  }
}

printLength("Hello TS");
printLength(2026);


// * 특정 속성이 있는지 확인하는 'in' 연산자 가드
interface Dog {
  bark: () => void;
}
interface Cat {
  meow: () => void;
}

function makeNoise(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // Dog 타입으로 판명
  } else {
    animal.meow(); // Cat 타입으로 판명
  }
}

// * 클래스 인스턴스 확인 'instanceof' 가드
class Bird {
  fly() { console.log("푸드덕"); }
}

function move(action: Bird | string) {
  if (action instanceof Bird) {
    action.fly(); // Bird 클래스의 인스턴스인 경우
  } else {
    console.log(action); // 일반 문자열인 경우
  }
}