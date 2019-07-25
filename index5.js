const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  // classList가 아니라 className으로 추가, 삭제를 하면 모든 클래스를 삭제할 수 있는 위험이 존재.
  // classList로 대응하자
  /*const hasClass = title.classList.contains(CLICKED_CLASS);

  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }*/

  // 아래와 위는 같은 동작을 함.
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
