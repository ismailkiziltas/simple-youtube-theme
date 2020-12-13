"use strict";

var videoCard = `
    <div class="video-card">
    <div class="video-img">
        <img src="assets/img/youtube-img.jpg" alt="" width="350" height="230">
        <span>22:30</span>
    </div>
    <div class="video-content">
        <img src="assets/img/profile-image.png" alt="" width="30" height="30">
        <div class="video-info">
            <h2>RTX 3080'i TEST ETTİK</h2>
            <p>webtekno <img src="assets/img/tick-mark.svg" alt="" width="10" height="10"></p>
            <p>1 Mn görüntüleme - 3 saat önce</p>
        </div>
    </div>
    </div>
`;

function getVideos() {
    for (var i = 1; i <=20; i++) {
        document.getElementById('videos').innerHTML += videoCard;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    getVideos();
});