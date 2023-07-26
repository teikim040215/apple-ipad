// 장바구니 토글만들기
// 웹 페이지에 존재하는 html 요소에 접근하고자 할 때는 반드시 document 객체부터 시작해야함
const basketStarterEl = document.querySelector("header .basket-starter");
const basketEl = basketStarterEl.querySelector(".basket");

basketStarterEl.addEventListener("click", function (event) {
  event.stopPropagation();
  // console.log("click");
  if (basketEl.classList.contains("show")) {
    // console.log("click if statement2");
    // console.log(basketEl.classList);
    basketEl.classList.remove("show");
  } else {
    // console.log("click if statement3");
    basketEl.classList.add("show");
  }
});
// 버튼을 클릭해서 show라는 class가 있는지 없는지 확인하고 있으면 제거하고 없으면 추가함

window.addEventListener("click", function () {
  basketEl.classList.remove("show");
});
// 장바구니 토글창 영역 이외의 영역을 클릭했을떄 토글창(?) 닫기
