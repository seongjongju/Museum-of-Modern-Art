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