// ============================================
// CARROSSEL DE IMAGENS - CONFIGURAÇÃO
// ============================================

/**
 * Array com as URLs das imagens do carrossel
 * Você pode substituir estas URLs pelas suas próprias imagens
 * Para usar imagens locais, coloque os arquivos na mesma pasta e use: './nome-da-imagem.jpg'
 */
const carouselImages = [
    'img/foto-1.jpg',
    'img/foto-2.jpg',
    'img/foto-3.jpg',
    'img/foto-4.jpg',
    'img/foto-5.jpg',
    'img/foto-6.jpg',
];

/**
 * Função que cria o carrossel de imagens infinito
 * Duplica as imagens para criar o efeito de loop infinito
 */
function createCarousel() {
    // Obtém o elemento HTML onde o carrossel será inserido
    const carouselTrack = document.getElementById('carouselTrack');
    
    // Verifica se o elemento existe antes de continuar
    if (!carouselTrack) {
        console.error('Elemento do carrossel não encontrado!');
        return;
    }
    
    // Limpa qualquer conteúdo anterior (caso exista)
    carouselTrack.innerHTML = '';
    
    // Cria as imagens duas vezes para o efeito infinito funcionar
    // Primeira passagem - imagens originais
    carouselImages.forEach((imageUrl, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Foto da Festa Junina ${index + 1}`;
        img.loading = 'lazy';
        
        carouselItem.appendChild(img);
        carouselTrack.appendChild(carouselItem);
    });
    
    // Segunda passagem - duplicação das imagens para loop infinito
    carouselImages.forEach((imageUrl, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Foto da Festa Junina ${index + 1}`;
        img.loading = 'lazy';
        
        carouselItem.appendChild(img);
        carouselTrack.appendChild(carouselItem);
    });
}

// ============================================
// INICIALIZAÇÃO DA PÁGINA
// ============================================

/**
 * Aguarda o carregamento completo da página antes de executar o código
 * Isso garante que todos os elementos HTML estejam prontos
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    // Cria o carrossel quando a página estiver pronta
    createCarousel();
});

