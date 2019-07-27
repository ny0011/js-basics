# js-basics

Vanila JS

#### 1. 시계를 만들자

- XX:XX:XX AM/PM 으로 표시되는 시계
- 1초마다 갱신됨
- ``(backtick) 을 사용하면 변수와 문자열을 쉽게 표기할 수 있음
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
- 함수를 매 초 call할 때 성능이 안좋진 않을까?
- 몇 자리수를 string으로 반환하는 함수 : str.padStart()
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
- 내가 시계 구현한 것을 Date.prototype.toLocaleString()이 지원해줌!!!
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

#### 2. 사용자 이름을 얻자

- **local storage** : 데이터를 사용자 저장소에 저장한다
- localStorage.setItem("ny", "ee") : key-value를 저장함
- localStorage.getItem("ny") : "ny"의 value를 가져옴
- localStorage는 URL 마다 다른 저장소를 사용함. facebook의 localStorage를 가져올 수는 없는 것임.

- loadName() 함수를 만들어보자
- currentUser 변수가 저장돼 있지 않으면 사용자 입력을 받고
- currentUser 변수가 저장돼있으면 인사 메시지를 출력

- form에 문자를 입력하고 엔터를 치면 문자가 사라지고 페이지 새로고침이 기본 동작임(Default)
  -> 이 기본 동작을 하고 싶지 않음
  -> event.preventDefault();
  -> 문자가 사라지지 않고 페이지도 새로고침 되지 않음.
