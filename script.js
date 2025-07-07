// Este script garante que o menu funcione bem em diferentes dispositivos.
// Por enquanto, ele apenas confirma que o DOM está carregado.

document.addEventListener('DOMContentLoaded', function() {
    
    const menuItemHasChildren = document.querySelector('.menu-item-has-children');
    const subMenu = document.querySelector('.sub-menu');

    if (menuItemHasChildren) {
        // Para desktops, o CSS já cuida do hover.
        // Para mobile, podemos adicionar um evento de clique.
        menuItemHasChildren.addEventListener('click', function(event) {
            // Previne que o link '#' navegue para o topo da página
            event.preventDefault();
            
            // Alterna a classe 'active' no submenu para exibi-lo ou escondê-lo
            // (requer CSS adicional para a classe .active)
            if (window.innerWidth < 768) { // Exemplo de condição para mobile
                 subMenu.style.opacity = subMenu.style.opacity === '1' ? '0' : '1';
                 subMenu.style.visibility = subMenu.style.visibility === 'visible' ? 'hidden' : 'visible';
            }
        });
    }

    console.log("E-commerce Vintage pronto!");

});