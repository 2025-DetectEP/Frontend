# Pribee : SNS 개인정보 탐지 보조 서비스

---

### ▶️ 기술 스택

- **프레임워크**
    - React(18.3.1)
- **상태관리**
    - React Router
    - Context API
- **스타일링**
    - styled-components
    - CSS Modules
- **HTTP 클라이언트**
      - Axios
- **빌드 도구**
      - npm

---

### ▶️ Github 규칙

- **브랜치**
    - main: 운영 배포 브랜치
    - develop: 개발 브랜치
    - KAN-1/feat/UI/{기능명}: UI 개발
    - KAN-1/feat/{기능명}: 새로운 기능 개발
    - KAN-1/fix/{버그명}: 긴급 버그 수정
    - KAN-1/chore/{작업내용}: CI/CD 및 기타 설정 변경
 
    - *ex) KAN-1/feat/UI/Home*

- **커밋 메시지 규칙**
  | 타입 | 설명 | 예시 |
  |------|------|------|
  | `feat` | 새로운 기능 추가 | `feat: 사용자 프로필 페이지 추가` |
  | `fix` | 버그 수정 | `fix: 버튼 클릭 시 비활성화 문제 수정` |
  | `style` | 스타일 (코드 형식, 세미콜론 추가, 비즈니스 로직 변경X) | `fix: CSS 클래스 이름 통일 및 정리` |
  | `refactor` | 코드 리팩토링 | `refactor: 컴포넌트 구조 개선 및 파일 이름 변경` |
  | `docs` | 문서 수정 | `docs: README에 API 사용 예제 추가` |
  | `test` | 테스트 코드 추가 및 변경 | `test: FormValidation 컴포넌트의 단위 테스트 추가` |
  | `chore` | 그 외 자잘한 수정 | `chore: package.json 의존성 정리` |
  | `remove` | 코드 삭제 | `remove: 사용하지 않는 리소스 삭제` |
  | `build` | 코드 삭제 | `build: Webpack 설정 최적화` |
