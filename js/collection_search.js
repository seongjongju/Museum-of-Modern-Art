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
console.log(CheckedBoxes)

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
    CheckedBoxes.forEach(function(CheckedBox) {
        CheckedBox.checked = false;
    })
});
/* 선택한 조건 초기화 */
/* 상세검색 */