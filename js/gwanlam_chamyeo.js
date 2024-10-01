/* header */
/* gnb */
const gwanlam_chamyeo_header = document.querySelector('#gwanlam_chamyeo_header'); //헤더 전체
const gwanlam_chamyeo_header_bottom = document.querySelector('#gwanlam_chamyeo_header_bottom'); //헤더 바텀
const top_titles = document.querySelectorAll('.header_top_title > a'); //헤더 탑 메뉴
const sub_menus = document.querySelectorAll('.sub_menu'); //하위메뉴
const pan = document.querySelector("#pan");

/* console.log(top_titles) */

top_titles.forEach(function (top_title, top_title_index) { //하위메뉴 열기
    top_title.addEventListener('mouseover', function () {
        sub_menus[top_title_index].classList.add('on');
        top_titles[top_title_index].classList.add('on');
        gwanlam_chamyeo_header_bottom.classList.add('on');
        gwanlam_chamyeo_header.style.height = "7.95rem";
        pan.style.display = "block"

        sub_menus.forEach(function (sub_menu, sub_menu_index) {
            if (sub_menu_index !== top_title_index) {
                sub_menu.classList.remove('on');
                top_titles[sub_menu_index].classList.remove('on');
            }
        });
    });
});

gwanlam_chamyeo_header.addEventListener('mouseleave', function () { //하위메뉴 닫기
    sub_menus.forEach(function (sub_menu) {
        sub_menu.classList.remove('on');
    });

    top_titles.forEach(function (top_title) {
        top_title.classList.add('on');
    })

    gwanlam_chamyeo_header_bottom.classList.remove('on');
    gwanlam_chamyeo_header.style.height = "3.75rem";
    pan.style.display = "none"
});
/* header */
/* gnb */

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

    /* 안내창 */
    const guide_box_area = $('.guide_box_area');
    const guide_arrow_left = $('.guide_arrow_left');
    const guide_arrow_right = $('.guide_arrow_right');

    guide_arrow_left.on('click', function (e) { //안내창 닫기
        e.preventDefault();

        guide_box_area.css({ left: "-309px" });
        guide_arrow_left.css({ display: "none" });
        guide_arrow_right.css({ display: "block" });
    });

    guide_arrow_right.on('click', function (e) { //안내창 열기
        e.preventDefault();

        guide_box_area.css({ left: "0.7%" });
        guide_arrow_left.css({ display: "block" });
        guide_arrow_right.css({ display: "none" });
    });
    /* 안내창 */
});

/* guide_header 스크롤 이벤트 */
const guide_header = document.querySelector(".guide_header");
const guide_header_titles = document.querySelectorAll(".guide_header_nav_box > a");

console.log(guide_header_titles)

window.addEventListener('scroll', function () {
    let windowScrollY = window.scrollY;
    console.log(windowScrollY)
    if (windowScrollY > 880) {
        guide_header.classList.add('fixed');
    } else {
        guide_header.classList.remove('fixed');
    }
});

window.addEventListener('scroll', function() {
    let windowScrollY = window.scrollY;
    let activeIndex = -1;

    if(windowScrollY > 880 && windowScrollY < 1600) { //전시
        activeIndex = 1;
    } else if (windowScrollY > 1570 && windowScrollY < 2330) { //교육
        activeIndex = 2;
    } else if (windowScrollY > 2330 && windowScrollY < 3172) { //이벤트
        activeIndex = 3
    } else if (windowScrollY > 3172 && windowScrollY < 4172) { //관람정보
        activeIndex = 4
    } else if (windowScrollY > 4172 && windowScrollY < 4922) { //층별안내
        activeIndex = 5
    } else if (windowScrollY > 4922 && windowScrollY < 5622) { //편의시설
        activeIndex = 6
    } else if (windowScrollY > 5622 && windowScrollY < 6248) { //문화시설
        activeIndex = 7
    } else if (windowScrollY > 6248) { //오시는 길
        activeIndex = 8
    } else { //메인
        activeIndex = 0
    }
 
    guide_header_titles.forEach((title, index) => { //해당하는 인덱스값과 같을 경우에만 실행
        title.classList.toggle('on', index === activeIndex);
    });
});
/* guide_header 스크롤 이벤트 */



