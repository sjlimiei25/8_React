// * 인터페이스 확장 (Extends)
interface User {
  id: number;
  name: string;
}

// User 인터페이스 확장
// + subject 속성 추가
interface Student extends User {
  subject: string;
}

const student1: Student = {
  id: 101,
  name: "Kim",
  subject: "Typescript"
}

// User 인터페이스 확장
// + className 속성 추가
interface Teacher extends User {
  className: string;
}

const teacher: Teacher = {
  id: 201,
  name: "Lee",
  className: "A"
}

// * 선택적 속성 (Optional Property)
interface Course {
  title: string;
  days?: number;
  isFinished: boolean;
}

const course1: Course = { title: "Basic TS", isFinished: true }
const course2: Course = { title: "React TS", days: 30, isFinished: false }

// * 읽기 전용 속성 (Readonly)
interface SystemConfig {
  readonly serverUrl: string;
  port: number;
}

const config: SystemConfig = {
  serverUrl: "https://api.kh",
  port: 8080
}

// config.serverUrl = "https://api.com";     // Error!
config.port = 8443;
