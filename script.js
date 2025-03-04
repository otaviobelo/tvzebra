<script>
document.addEventListener("DOMContentLoaded", function () {
    // Inicializa os players Video.js
    var players = {
        stream1: videojs('stream1'),
        stream2: videojs('stream2'),
        stream3: videojs('stream3')
    };

    Object.values(players).forEach(player => {
        player.muted(true);  // Garante que o vídeo esteja mudo
        player.autoplay(true); // Ativa o autoplay
        player.playsinline(true); // Evita tela cheia automática no mobile

        // Força a reprodução do vídeo
        player.ready(function () {
            player.play().catch(error => {
                console.error("Erro ao iniciar o vídeo:", error);
            });
        });
    });
});
</script>
