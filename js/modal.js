$(document).ready(function() {
    const subscribeBtn = $(".subscribe"); //구독하기 버튼
    const displayItem1 = $(".display_item1"); //관람참여 -> 전시 -> 접속하는 몸
    const displayItem2 = $(".display_item2"); //관람참여 -> 전시 -> 다원예술: 우주엘리베이터
    const displayItem3 = $(".display_item3"); //관람참여 -> 전시 -> MMCA 과천프로젝트 2023: 연결
    const closeBtn = $(".close"); //닫기 버튼

    subscribeBtn.on('click', function(e) {
        e.preventDefault();
        $(".subscribeModal").fadeIn(100)
    });

    displayItem1.on('click', function(e) { //관람참여 -> 전시 -> 접속하는 몸
        e.preventDefault();
        $(".displayModal1").fadeIn(100)
    });

    displayItem2.on('click', function(e) { //관람참여 -> 전시 -> 다원예술: 우주엘리베이터
        e.preventDefault();
        $(".displayModal2").fadeIn(100)
    });

    displayItem3.on('click', function(e) { //관람참여 -> 전시 -> MMCA 과천프로젝트 2023: 연결
        e.preventDefault();
        $(".displayModal3").fadeIn(100)
    });

    closeBtn.on('click', function(e) {
        e.preventDefault()
        $(".modal_area").fadeOut(100)
    });
});




