const toggler = document.querySelector('.dropdown-toggler')
const menu = document.querySelector('.menu-mega')

toggler.addEventListener('click',e=>{
    e.preventDefault();
    menu.classList.toggle('active')
    // console.log(e.target.parentNode.children[1])
})