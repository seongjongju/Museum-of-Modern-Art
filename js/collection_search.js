/* 상세검색 */
$(document).ready(function() {
    const collection_DetailedSearchBtn = $('.collection_DetailedSearch');
    const DetailedSearch_container = $('.DetailedSearch_container');
    /* console.log(DetailedSearch_container) */

    collection_DetailedSearchBtn.on('click', function() {
        let icon_arrow = $('.icon_arrow');
        DetailedSearch_container.slideToggle();
        icon_arrow.toggleClass('on');
    });
});

/* 검색어 체크박스 체크 옵션 */
function checkAll(checkBox) {
    const checkBoxes = document.querySelectorAll('.DetailedSearch_check input[type="checkbox"]');

    for(let i=1; i < checkBoxes.length; i++) {
        if(checkBoxes[i] !== checkBox) {
            checkBoxes[i].checked = false
        }
    }
}

function checkBoxes() {
    const allCheckBox = document.querySelector('#all');

    if(allCheckBox.checked) {
        allCheckBox.checked = false
    }
}
/* 검색어 체크박스 체크 옵션 */


/* 상세검색 */