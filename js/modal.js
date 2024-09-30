$(document).ready(function() {
    /* 구독하기 모달창 변수 */
    const subscribeModal = $(".subscribeModal"); //.modal_area 중복클래스
    const subscribeBtn = $(".subscribe"); //구독하기 버튼
    /* 구독하기 모달창 변수 */
    const closeBtn = $(".close"); //닫기 버튼

    subscribeBtn.on('click', function() {
        subscribeModal.fadeIn(100)
    });

    closeBtn.on('click', function(e) {
        e.preventDefault()
        $(".modal_area").fadeOut(100)
    });
});




