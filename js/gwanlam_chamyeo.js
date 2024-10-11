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
const guide_header_titles = document.querySelectorAll(".guide_header_nav_box a"); //데스크탑 - 태블릿 가이드 헤더
const guide_headerM_titles = document.querySelectorAll(".guide_header_swiper .swiper-slide > a"); //모바일 가이드 헤더

/* console.log(guide_header_titles) */

window.addEventListener('scroll', function () {
    let windowScrollY = window.scrollY;
    console.log(windowScrollY)
    if (windowScrollY > 860) {
        guide_header.classList.add('fixed');
    } else {
        guide_header.classList.remove('fixed');
    }

    let activeIndex = -1;
    let activeIndexM = -1;

    /* 데스크탑 - 태블릿 */
    if(windowScrollY > 891 && windowScrollY <= 1491) { //전시
        activeIndex = 1;
    } else if (windowScrollY > 1491 && windowScrollY <= 2191) { //교육
        activeIndex = 2;
    } else if (windowScrollY > 2191 && windowScrollY <= 3041) { //이벤트
        activeIndex = 3
    } else if (windowScrollY > 3041 && windowScrollY <= 4043) { //관람정보
        activeIndex = 4
    } else if (windowScrollY > 4043 && windowScrollY <= 4843) { //층별안내
        activeIndex = 5
    } else if (windowScrollY > 4843 && windowScrollY <= 5557) { //편의시설
        activeIndex = 6
    } else if (windowScrollY > 5557 && windowScrollY <= 6157) { //문화시설
        activeIndex = 7
    } else if (windowScrollY > 6157) { //오시는 길
        activeIndex = 8
    } else { //메인
        activeIndex = 0
    }
    /* 데스크탑 - 태블릿 */

     /* 모바일 */
     if(windowScrollY > 860 && windowScrollY <= 1400) { //전시
        activeIndexM = 1;
    } else if (windowScrollY > 1400 && windowScrollY <= 2000) { //교육
        activeIndexM = 2;
    } else if (windowScrollY > 2000 && windowScrollY <= 2700) { //이벤트
        activeIndexM = 3
    } else if (windowScrollY > 2700 && windowScrollY <= 3620) { //관람정보
        activeIndexM = 4
    } else if (windowScrollY > 3620 && windowScrollY <= 4350) { //층별안내
        activeIndexM = 5
    } else if (windowScrollY > 4350 && windowScrollY <= 4950) { //편의시설
        activeIndexM = 6
    } else if (windowScrollY > 4950 && windowScrollY <= 5500) { //문화시설
        activeIndexM = 7
    } else if (windowScrollY > 5500) { //오시는 길
        activeIndexM = 8
    } else { //메인
        activeIndexM = 0
    }
    /* 모바일 */
 
    guide_header_titles.forEach((title, index) => { //데스크탑 - 태블릿
        title.classList.toggle('on', index === activeIndex);
    });

    guide_headerM_titles.forEach((titleM, indexM) => { //모바일
        titleM.classList.toggle('on', indexM === activeIndexM);
    });
});
/* guide_header 스크롤 이벤트 */

/* 반응형 gnb */
/* gnb 서브메뉴 열고 닫기 */
const deps1 = document.querySelectorAll('.dep1');
const depSubMenus = document.querySelectorAll('.depSubMenu');

deps1.forEach(function(dep1, dep1Index) {
  dep1.addEventListener('click', function(e) {
      e.preventDefault();
      $(depSubMenus[dep1Index]).slideToggle();
      dep1.classList.toggle('active');

     depSubMenus.forEach(function(depSubMenu, depSubMenuIndex) {
      if(depSubMenuIndex !== dep1Index) {
          $(depSubMenu).slideUp();
          deps1[depSubMenuIndex].classList.remove('active');
      }
     });
  });
});
/* gnb 서브메뉴 열고 닫기 */

/* gnb열고 닫기 */
const menuBtn = document.querySelector('.menu');
const gnbCloseBtn = document.querySelector('.gnb_close');
const gnbArea = document.querySelector('.gnb_area');

menuBtn.addEventListener('click', function(e) { //gnb 열기
  e.preventDefault();
  gnbArea.style.right = "0"
});

gnbCloseBtn.addEventListener('click', function(e) { //gnb 닫기
  e.preventDefault();
  gnbArea.style.right = "-100%"
});
/* gnb열고 닫기 */

/* 반응형 헤더 스크롤 이벤트 */
const responsiveHeader = document.querySelector('#responsive_header');

window.addEventListener('scroll', function() {
    let windowScrollY = window.scrollY;
    /* console.log(windowScrollY) */

    if(windowScrollY > 800) {
        responsiveHeader.style.top = "-100%"
    } else {
        responsiveHeader.style.top = "0"
    }
})
/* 반응형 헤더 스크롤 이벤트 */
/* 반응형 gnb */



