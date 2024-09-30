/* header */
/* gnb */
const menus = document.querySelectorAll(".nav_box > a"); //메뉴
const subMenus = document.querySelectorAll(".sub_menu"); //하위메뉴
const headerBottom = document.querySelector("#header_bottom"); //메뉴 영역
const pan = document.querySelector("#pan"); //투명한 효과

menus.forEach(function (menuTitle, menuTitleIndex) { //하위 메뉴 열기
    menuTitle.addEventListener('mouseover', function () {
        subMenus[menuTitleIndex].classList.add('on')
        menus[menuTitleIndex].classList.add('on');
        pan.style.display = "block"
        headerBottom.style.height = "6.6rem"

        subMenus.forEach(function (subMenu, subMenuIndex) {
            if (subMenuIndex !== menuTitleIndex) {
                subMenu.classList.remove('on');
                menus[subMenuIndex].classList.remove('on');
            }
        });
    });
});

headerBottom.addEventListener('mouseleave', function () { //하위메뉴 닫기
    subMenus.forEach(function(subMenu) {
        subMenu.classList.remove('on');
    });

    menus.forEach(function(menu) {
        menu.classList.add('on');
    })

    pan.style.display = "none"
    headerBottom.style.height = "3rem"
});
/* gnb */

/* 헤더 스크롤 이벤트 */
const header = document.querySelector("header");

window.addEventListener('scroll', function () {
    let windowScrollHeight = window.scrollY
    console.log(windowScrollHeight)

    if (windowScrollHeight > 121) {
        header.style.top = "-139.59px"
    } else {
        header.style.top = 0
    }
});
/* 헤더 스크롤 이벤트 */
/* header */

$(document).ready(function () {
    /* 검색창 */
    const searchBtn = $('.search'); //검색버튼
    const searchCloseBtn = $('.search_close'); //닫기버튼
    const searchBox = $('.search_box'); //검색창
    const pan2 = $('#pan2'); //투명한 효과

    searchBtn.on('click', function (e) { //검색창 열기
        e.preventDefault();
        searchBtn.css({ display: "none" });
        searchCloseBtn.css({ display: "block" });
        pan2.css({ display: "block" });
        searchBox.slideDown(300);
    });

    searchCloseBtn.on('click', function (e) { //검색창 닫기
        e.preventDefault();
        searchBtn.css({ display: "block" });
        searchCloseBtn.css({ display: "none" });
        pan2.css({ display: "none" });
        searchBox.slideUp(300);
    });
    /* 검색창 */
});


