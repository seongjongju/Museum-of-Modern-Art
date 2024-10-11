/* 상세검색 */
$(document).ready(function () {
    const collection_DetailedSearchBtn = $('.collection_DetailedSearch');
    const DetailedSearch_container = $('.DetailedSearch_container');
    /* console.log(DetailedSearch_container) */

    collection_DetailedSearchBtn.on('click', function () {
        let icon_arrow = $('.icon_arrow');
        DetailedSearch_container.slideToggle();
        icon_arrow.toggleClass('on');
    });
});

/* 검색어 체크박스 체크 옵션 */
function checkAll(checkBox) {
    let checkBoxes = document.querySelectorAll('.DetailedSearch_check input[type="checkbox"]');

    for (let i = 1; i < checkBoxes.length; i++) {
        if (checkBoxes[i] !== checkBox) {
            checkBoxes[i].checked = false
        }
    }
}

function checkBoxes() {
    let allCheckBox = document.querySelector('#all');

    if (allCheckBox.checked) {
        allCheckBox.checked = false
    }
}
/* 검색어 체크박스 체크 옵션 */

/* 선택한 조건에 나타내기 */
const outPutBox = document.querySelector(".DetailedSearch_outputBox"); //선택한 조건 박스
const inputBtn = document.querySelector(".inputBtn"); //입력 버튼
const resetBtn = document.querySelector(".resetBtn"); // 리셋버튼

/* 검색어 */
function input() {
    let newSpan = document.createElement('span');
    let newCloseImg = document.createElement('img');  // img 요소 생성
    newCloseImg.src = "collections_search_img/icon_dialog_closeL.png";  // src 속성 설정
    newCloseImg.alt = "지우기버튼";  // alt 속성 설정
    let inputBox = document.querySelector('.DetailedSearch_check_input input[type="text"]');
    let inputValue = inputBox.value;

    newSpan.textContent = inputValue //검색창에 입력한 내용 적용
    newSpan.appendChild(newCloseImg); //x버튼 적용

    outPutBox.appendChild(newSpan); //선택한 조건에 나타내기

    inputBox.value = "";

    newCloseImg.addEventListener('click', function () { //선택한 조건에서 없애기
        newSpan.innerHTML = ""
    });
}
/* 검색어 */

/* 작가 */
const initials = document.querySelectorAll('.authors_check > a');

initials.forEach(function (initial, initialIndex) {
    initial.addEventListener('click', function () {
        initials[initialIndex].classList.add('active');

        /* 선택한 조건에 나타내기 */
        let newSpan = document.createElement('span');
        let newCloseImg = document.createElement('img');  // img 요소 생성
        newCloseImg.src = "collections_search_img/icon_dialog_closeL.png";  // src 속성 설정
        newCloseImg.alt = "지우기버튼";  // alt 속성 설정
        let initialText = initials[initialIndex].textContent

        newSpan.textContent = initialText;
        newSpan.appendChild(newCloseImg);

        outPutBox.appendChild(newSpan);
        /* 선택한 조건에 나타내기 */

        newCloseImg.addEventListener('click', function () { //선택한 조건에서 없애기
            newSpan.innerHTML = ""
            initial.classList.remove('active');
        });

        initials.forEach(function (initial2, initial2Index) {
            if (initial2Index !== initialIndex) {
                initial2.classList.remove('active');
            }
        });
    });
});
/* 작가 */

/* 체크박스 선택한 조건에 나타내기 */
const CheckedBoxes = document.querySelectorAll('.CheckedBoxes')
/* console.log(CheckedBoxes) */

CheckedBoxes.forEach(function (CheckedBox) {
    CheckedBox.addEventListener('change', function () {
        let CheckedBoxText = CheckedBox.nextSibling.textContent

        let newSpan = document.createElement('span');
        let newCloseImg = document.createElement('img');  // img 요소 생성
        newCloseImg.src = "collections_search_img/icon_dialog_closeL.png";  // src 속성 설정
        newCloseImg.alt = "지우기버튼";  // alt 속성 설정

        newSpan.textContent = CheckedBoxText;
        newSpan.appendChild(newCloseImg);
        if (CheckedBox.checked) {
            outPutBox.appendChild(newSpan);
        }
        newCloseImg.addEventListener('click', function () { //선택한 조건에서 없애기
            newSpan.innerHTML = ""
            CheckedBox.checked = false;
        });
    });
});
/* 체크박스 선택한 조건에 나타내기 */
/* 선택한 조건에 나타내기 */

/* 선택한 조건 초기화 */
resetBtn.addEventListener('click', function () {
    outPutBox.innerHTML = ""
    CheckedBoxes.forEach(function (CheckedBox) {
        CheckedBox.checked = false;
    })
});
/* 선택한 조건 초기화 */
/* 상세검색 */

/* 체크박스 옵션에 따른 정렬 */
const collectionsContainer = document.querySelector('.collections_container');
const collectionCheckBoxes = document.querySelectorAll('.collection_checkbox > input[type="checkbox"')

let collectionsContainerInner = collectionsContainer.innerHTML //초기화

function collectionsAll() { //전체
    collectionsContainer.innerHTML = collectionsContainerInner

    let collectionsAllItems = document.querySelectorAll('.collections_item[data-all="all"]');

    collectionsContainer.innerHTML = ""

    collectionsAllItems.forEach(function (collectionsAllItem) {

        collectionsContainer.appendChild(collectionsAllItem)
    });
}

function display() { //전시중
    collectionsContainer.innerHTML = collectionsContainerInner

    let displayItems = document.querySelectorAll('.collections_item[data-keyword="display"]');

    collectionsContainer.innerHTML = ""

    displayItems.forEach(function (displayItem) {

        collectionsContainer.appendChild(displayItem)
    });
}

function image() { //이미지
    collectionsContainer.innerHTML = collectionsContainerInner
    let imageItems = document.querySelectorAll('.collections_item[data-keyword2="image"]');

    collectionsContainer.innerHTML = ""

    imageItems.forEach(function (imageItem) {

        collectionsContainer.appendChild(imageItem)
    });
}

function nationalHeritage() { //국가유산
    collectionsContainer.innerHTML = collectionsContainerInner
    let nationalHeritageItems = document.querySelectorAll('.collections_item[data-keyword3="national_heritage"]');

    collectionsContainer.innerHTML = ""

    nationalHeritageItems.forEach(function (nationalHeritageItem) {

        collectionsContainer.appendChild(nationalHeritageItem)
    });
}

function donatedWork() { //기증작품
    collectionsContainer.innerHTML = collectionsContainerInner
    let donatedWorkItems = document.querySelectorAll('.collections_item[data-keyword4="donated_work"]');

    collectionsContainer.innerHTML = ""

    donatedWorkItems.forEach(function (donatedWorkItem) {

        collectionsContainer.appendChild(donatedWorkItem)
    });
}

collectionCheckBoxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            collectionCheckBoxes.forEach(function (otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false; // 다른 체크박스 해제
                }
            });
        }
    });
});

/* 체크박스 옵션에 따른 정렬 */

/* 윈도우가 로드 하면 전체 체크박스에 체크되어있음 */
window.addEventListener('load', function () {
    const collectionAll = document.querySelector('#collectionsAll');

    if (!collectionAll.checked) {
        collectionAll.checked = true
    }
});
/* 윈도우가 로드 하면 전체 체크박스에 체크되어있음 */