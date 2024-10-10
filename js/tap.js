const TapTitles = document.querySelectorAll(".TapTitle");
const Taps = document.querySelectorAll(".Tap");
/* console.log(Taps) */

TapTitles.forEach(function(TapTitle, TapTitleIndex) {
    TapTitle.addEventListener('click', function(e) {
        e.preventDefault();
        Taps[TapTitleIndex].classList.add('on')
        TapTitles[TapTitleIndex].classList.add('on')
        
        Taps.forEach(function(Tap, TapIndex) {
            if(TapIndex !== TapTitleIndex) {
                Tap.classList.remove('on')
            }

            TapTitles.forEach(function(Title, TitleIndex) {
                if(TitleIndex !== TapTitleIndex) {
                    Title.classList.remove('on')
                }
            });
        });
    });
}); 

/* 관람참여 -> 오시는 길 */
const MapTapTitles = document.querySelectorAll(".MapTapTitle");
const MapTaps = document.querySelectorAll(".MapTap");

MapTapTitles.forEach(function(MapTapTitle, MapTapTitleIndex) {
    MapTapTitle.addEventListener('click', function(e) {
        e.preventDefault();
        MapTaps[MapTapTitleIndex].classList.add('on')
        MapTapTitles[MapTapTitleIndex].classList.add('on')
        
        MapTaps.forEach(function(MapTap, MapTapIndex) {
            if(MapTapIndex !== MapTapTitleIndex) {
                MapTap.classList.remove('on')
            }

            MapTapTitles.forEach(function(MapTitle, MapTitleIndex) {
                if(MapTitleIndex !== MapTapTitleIndex) {
                    MapTitle.classList.remove('on')
                }
            });
        });
    });
}); 
/* 관람참여 -> 오시는 길 */

/* 반응형 관람참여 -> 오시는 길 */
const TapTitleMTitle = document.querySelector('.TapTitleM_title');
const TapTitleMInventory = document.querySelector('.TapTitleM_inventory');
const TapTitleMs = document.querySelectorAll('.TapTitleM > a');
const TapMs = document.querySelectorAll('.TapM');
/* console.log(TapMs) */

TapTitleMTitle.addEventListener('click', function() {
    $(TapTitleMInventory).slideToggle(100);
});
 
TapTitleMs.forEach(function(TapTitleM, TapTitleMIndex) {
    TapTitleM.addEventListener('click', function(e) {
        e.preventDefault();

        let TapTitleMInner = TapTitleMs[TapTitleMIndex].innerHTML //각 인덱스 번호에 맞는 탭의 요소를 저장

        TapTitleMTitle.innerHTML = "" //기존 탭 비우기

        TapTitleMTitle.innerHTML = TapTitleMInner //현재 선택한 탭 넣기

        /* 현재 선택한 탭의 하위탭 요소 */
        TapMs.forEach(function(TapM, TapMIndex) {
            TapMs[TapTitleMIndex].classList.add('on');

            if(TapMIndex !== TapTitleMIndex) {
                //TapM.classList.remove('on');
            }
        });
        /* 현재 선택한 탭의 하위탭 요소 */

        $(TapTitleMInventory).slideUp(100);
    });
});
/* 반응형 관람참여 -> 오시는 길 */



