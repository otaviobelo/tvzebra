document.addEventListener("DOMContentLoaded", function() {
    const player = videojs('videoPlayer', {
        controls: true,
        autoplay: true,
        muted: true,
        preload: 'auto'
    });

    const canais = document.querySelectorAll('.canal');
    let canalAtual = 0;

    // Função para carregar um canal específico
    function carregarCanal(index) {
        if (index < 0) index = canais.length - 1; // Volta para o último canal
        if (index >= canais.length) index = 0; // Vai para o primeiro canal

        const src = canais[index].getAttribute('data-src');
        player.src({ src, type: 'application/x-mpegURL' });
        player.play();
        canalAtual = index;
    }

    // Iniciar com o primeiro canal
    carregarCanal(canalAtual);

    // Navegação entre canais
    window.trocarCanal = function(direcao) {
        carregarCanal(canalAtual + direcao);
    };

    // Evento de clique nos canais da grade
    canais.forEach((canal, index) => {
        canal.addEventListener('click', () => {
            carregarCanal(index);
        });
    });

    // Ajustar setas no modo de tela cheia
    player.on('fullscreenchange', function() {
        const isFullscreen = player.isFullscreen();
        const arrows = document.querySelectorAll('.nav-arrow');

        arrows.forEach(arrow => {
            if (isFullscreen) {
                arrow.style.fontSize = '40px'; // Aumenta o tamanho das setas no modo de tela cheia
                arrow.style.padding = '15px';
            } else {
                arrow.style.fontSize = '30px'; // Volta ao tamanho original
                arrow.style.padding = '10px';
            }
        });
    });
});
