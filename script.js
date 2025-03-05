const videoPlayer = document.getElementById('videoPlayer');
const channels = [
  { name: "Canal 1", url: "https://cdn.live.br1.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/chunklist.m3u8", category: "Geral" },
  { name: "Canal 2", url: "https://amazonsat.brasilstream.com.br/hls/amazonsat/index.m3u8", category: "Notícias" },
  { name: "Canal 3", url: "https://8hzcavccys.zoeweb.tv/redeminas/ngrp:redeminas_all/chunklist_b2179072.m3u8", category: "Variedades" },
  { name: "Canal 4", url: "https://video08.logicahost.com.br/istvnacional/srt.stream/chunklist_w745016844.m3u8", category: "Geral" }
];

// Carregar o primeiro canal ao iniciar
videoPlayer.src = channels[0].url;

// Função para carregar a grade de canais
function loadChannels() {
  const categoriesContainer = document.querySelector('.categories');
  channels.forEach(channel => {
    const channelElement = document.createElement('div');
    channelElement.className = 'channel';
    channelElement.innerHTML = `<p>${channel.name}</p>`;
    channelElement.addEventListener('click', () => {
      videoPlayer.src = channel.url;
    });
    categoriesContainer.appendChild(channelElement);
  });
}

loadChannels();
