const menuButton = document.getElementById('menu');
const listMenu = document.getElementById('list');
menuButton.addEventListener('click', function(){
    listMenu.classList.toggle('hidden');
})