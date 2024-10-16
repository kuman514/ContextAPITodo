# ContextAPIPractice
React를 사용하면서 체득하지 못했던 Context API를 학습하기 위해 만든 레포지토리.

## 이 투두 앱에 포함되어야 할 것들
- 투두 앱
  - 메인 화면
    - 투두 리스트 (투두의 제목만 표시하도록)
    - 투두 아이템 추가 버튼
  - 투두 아이템 클릭 시 화면
    - 투두 아이템 상세 (투두의 제목, 내용, 작성일자 표시)
    - 투두 아이템 수정 버튼
    - 투두 아이템 삭제 버튼
  - 새 투두 아이템 만들기 화면 또는 수정 화면
    - 투두 입력 폼 (각종 인풋과 버튼)
- 투두 아이템
  - 투두의 ID
  - 투두의 제목
  - 투두의 내용
  - 투두의 일자

## 도전할 챌린지들
- ~~`TodoContext`가 반드시 `TodoContextProvider`에서만 사용될 수 있도록 만들기 (그렇지 않을 경우 Error Throw)~~ `완료`
  - [`createContext`에 default value를 사용하지 않도록 설정.](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/#without-default-context-value)
  - useContext가 Provider 밖에서 사용되어 value가 없을(null일) 때 에러를 던지도록 로직 작성.
- ~~`useTodoContext`에서 설렉터 추가해보기~~ `완료`
  - `useTodoContext`에 기본 타입이 있는 제네릭 타입 선언.
  - `useTodoContext`의 파라미터로, `context`를 매개변수로 하는 선언했던 제네릭 타입을 리턴하는 타입의 함수 `selector`를 추가.
  - `selector`를 `context` 파라미터로 호출한 값을 리턴.
- Context API를 테스트하는 테스트 케이스 작성
