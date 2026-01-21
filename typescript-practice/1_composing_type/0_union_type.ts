// * 유니온 타입으로 복합 타입 정의
// [형식] type 타입명 = 제한할 항목들을 파이프(|)로 구분하여 나열
type StatusType = "success" | "error" | "info";
// => statusType 타입에는 "success", "error", "loading" 값 만을 사용할 수 있음

function printStatus(status: StatusType) {
  console.log(`현재 상태는 ${status} 입니다.`)
}

printStatus("success");
// printStatus("unknown");   // Error!

// -------------- * --------------

// 테마 상태 타입 정의
type IsDark = true | false;

// 반환될 스타일 객체의 인터페이스
interface ThemeStyle {
  backgroundColor: string;
  color: string;
  border: string;
}

// 상태에 따라 다른 스타일 객체를 반환하는 함수
function getTheme(isDark: IsDark): ThemeStyle {
  if (isDark) {
    return {
      backgroundColor: "#222", // 어두운 배경
      color: "#fff",           // 흰색 글자
      border: "1px solid #444"
    };
  } else {
    return {
      backgroundColor: "#fff", // 밝은 배경
      color: "#000",           // 검은색 글자
      border: "1px solid #ddd"
    };
  }
}

const currentTheme: IsDark = true;
const style = getTheme(currentTheme);

console.log("현재 적용된 스타일:", style);