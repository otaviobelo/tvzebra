document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const channelList = document.querySelectorAll('.channels-list li');
    const thumbnails = document.querySelectorAll('.thumbnail');

    let hls = new Hls();

    function loadChannel(url) {
        if (Hls.isSupported()) {
            hls.loadSource(url);
            hls.attachMedia(videoPlayer);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                videoPlayer.play();
            });
        } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            videoPlayer.src = url;
            videoPlayer.addEventListener('loadedmetadata', function() {
                videoPlayer.play();
            });
        }
    }

    function setActiveChannel(channel) {
        channelList.forEach(ch => ch.classList.remove('active'));
        channel.classList.add('active');
    }

    channelList.forEach(channel => {
        channel.addEventListener('click', function() {
            const url = this.getAttribute('data-channel');
            loadChannel(url);
            setActiveChannel(this);
            localStorage.setItem('lastChannel', url);
        });
    });

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const url = this.getAttribute('data-channel');
            loadChannel(url);
            localStorage.setItem('lastChannel', url);
        });
    });

    const lastChannel = localStorage.getItem('lastChannel');
    if (lastChannel) {
        loadChannel(lastChannel);
    } else {
        loadChannel(channelList[0].getAttribute('data-channel'));
    }
});
