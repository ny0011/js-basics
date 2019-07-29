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
- localStorage는 URL 마다 다른 저장소를 사용함. facebook의 localStorage를 가져
  올 수는 없는 것임.

- loadName() 함수를 만들어보자
- currentUser 변수가 저장돼 있지 않으면 사용자 입력을 받고
- currentUser 변수가 저장돼있으면 인사 메시지를 출력

- form에 문자를 입력하고 엔터를 치면 문자가 사라지고 페이지 새로고침이 기본 동
  작임(Default) -> 이 기본 동작을 하고 싶지 않음 -> event.preventDefault(); ->
  문자가 사라지지 않고 페이지도 새로고침 되지 않음.

- js 파일을 여러개 만들다보면 const 변수 이름이 중복되어 사용될 수 있음 -> 변
  수이름을 다르게 만들어야 함.
- 자바 스크립트 모듈들을 분리시켜서 만드는 방법?
  https://stackoverflow.com/questions/20311604/module-pattern-how-to-split-the-code-for-one-module-into-different-js-files
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules
- 이름 중복을 피하려면?
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules#Renaming_imports_and_exports

#### 3. todo list를 만들자

- paintToDo : 화면에 todo 내역을 표시하자 text가 표시되는 span 태그 생성 + 삭
  제 버튼 button 태그 생성 -> 두 태그를 감싸는 li태그 생성 -> 두 태그를 li태그
  밑으로(자식으로) 붙이기 -> li태그를 html에 있는 ul 태그 밑에 붙이기

- saveToDo : local storage "toDos" key에 todo list를 저장하자! 그런데 변수 그
  대로를 저장하면 object object라고 깨짐. 저장소에는 자바스크립트 변수를 저장
  하지 못하고 string으로만 저장가능함. -> javascript -> local storage 로 저장
  : JSON.stringify()를 사용해 원하는 양식대로 만들자 -> local storage ->
  javascript 로 불러오기 : JSON.parse()

- array의 각 원소마다 실행시키고 싶을 때 :
  array.forEach(function(x){console.log(x.text);})

- 페이지를 새로고침하면 변수 toDos는 비어있으므로 ul에 붙어있는게 없음 ->
  local storage에서 데이터를 불러와서 ul에 그려주는 작업이 필요함. -> array 각
  원소마다 paintToDo 실행하기!

#### 4. todo list를 삭제하자

- 1. local storage에서 list를 삭제하고 저장
- 2. html에서 list를 삭제

  -> deleteToDo 에서 event를 받음. 하지만 이벤트 자체는 클릭한 내용만 있어서
  event.target으로 클릭한 태그의 객체를 받게 함 -> 그 태그의 부모 태그를 알고
  싶음 -> console.log 대신 console.dir로 parent가 있는 부분을 찾자 ->
  parentNode!

- event.target.parentNode
- 자식을 삭제하는 방법? delete child element mdn 검색 ㄱㄱ ->
  Node.removeChild()
- toDoList에서 버튼이 눌린 li만 지우면 끗 -> toDoList.removeChild(li);
- 하지만 local storage에 저장하지 않아서 새로고침하면 삭제되지 않았음

- toDos array를 변경하려면? -> array.filter(함수) 로 array 변수 들 중 함수 조
  건에 해당하는 것을 array로 리턴하는 필터 함수를 사용하자 -> li.id는 삭제한
  li의 id를 갖고 있음 -> 전체 toDos 배열에서 li.id에 해당하는 것만 빼서 toDos
  를 덮어씌우면 됨. -> toDos가 const라서 대입 연산자(=)를 사용할 수 없음 ->
  toDos를 let으로 선언하자

  => toDos를 지우면 li의 id와 변경된 toDos의 id가 달라짐 -> syncToDos 변수 :
  제거된 id < li의 id ? li의 id를 1 감소 (1, 2, 3 ,4, 5 중 3이 지워지면
  1,2,4,5 가 남아서 4, 5를 3,4로 변경해줘야 함.)

#### 5. 배경사진을 넣자

- https://unsplash.com/
- body에 img 태그를 삽입 -> 단순 삽입은 배경이 아니라 body 하위 태그로 작동하
  기 때문에 class도 추가해서 css에서 이미지 태그 -> 배경 태그로 역할이 바뀌도
  록 한다.

#### 6. 위치를 기록하자

- navigator.geolocation.getCurrentPosition(위치 정보를 가져오는 데 성공했을 때 실행할 함수, 실패했을 때 실행할 함수)
- https://home.openweathermap.org/api_keys
  이 지도 사이트의 API를 사용해보자
