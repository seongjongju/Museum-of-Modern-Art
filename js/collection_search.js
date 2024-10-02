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