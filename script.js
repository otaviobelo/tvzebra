// Inicializa os players
document.addEventListener('DOMContentLoaded', function() {
    var player1 = videojs('stream1');
    var player2 = videojs('stream2');
    var player3 = videojs('stream3');
});<script>
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.muted = true;  // Garante que o vídeo esteja mudo
        video.autoplay = true; // Ativa o autoplay
        video.playsInline = true; // Evita que entre em tela cheia no mobile

        // Tenta forçar a reprodução do vídeo
        video.play().catch(error => {
            console.error("Erro ao iniciar o vídeo:", error);
        });
    });
});
</script>
