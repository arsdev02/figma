const modalButton = document.querySelector('.modalButton')
const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalX = document.querySelector('.modal_img_box')

const toggleModal = () => {
    backdrop.classList.toggle('backdropActiv')
    modal.classList.toggle('modalActiv')
    document.body.classList.toggle('hightScroll')
}
// добовляем класс
modalButton.addEventListener('click',toggleModal)
// убираем классы
backdrop.addEventListener('click',toggleModal)
modalX.addEventListener('click', toggleModal)
modal.addEventListener('click', (e)=>{
    e.stopPropagation()
})