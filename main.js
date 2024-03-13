
function menu(e){
    let list = document.querySelector('ul');
    console.log(list)
    e.name === "menu" ? (e.name = "close",
    list.classList.add ('top-[50px]'),list.classList
    .add('opacity-100')) : (e.name = "menu",
    list.classList.remove('top-[50px]'),list.classList.remove('opacity-100'))
}
