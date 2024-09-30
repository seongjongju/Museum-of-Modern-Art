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