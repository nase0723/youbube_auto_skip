if (location.host === "www.youtube.com") {
    setInterval(
        function () {
            try {
                const close = document.getElementsByClassName("ytp-ad-overlay-close-container");
                close[0].click();
            } catch (e) {
                ;
            }
            try {
                const skip = document.getElementsByClassName("ytp-ad-skip-button-container");
                skip[0].click();
            } catch (e) {
                ;
            }
        }, 500
    )
}