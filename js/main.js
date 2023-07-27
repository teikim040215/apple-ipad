// 장바구니!
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

// 검색!
const headerEl = document.querySelector("header");
const headerMenuEls = [...document.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);

function showSearch() {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transtitionDelay = (index * 0.4) / headerMenuEls.length + "s";
  });
  searchDelayEls.forEach(function (el, index) {
    el.style.transtitionDelay = (index * 0.4) / searchDelayEls.length + "s";
  });
  setTimeout(function () {
    searchInputEl.focus();
  }, 600);
}
function hideSearch() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transtitionDelay = (index * 0.4) / headerMenuEls.length + "s";
  });
  searchDelayEls.reverse().forEach(function (el, index) {
    el.style.transtitionDelay = (index * 0.4) / searchDelayEls.length + "s";
  });
  searchDelayEls.reverse();
  searchInputEl.velue = " ";
}
