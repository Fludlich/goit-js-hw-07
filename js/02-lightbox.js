import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery=document.querySelector('.gallery')


const makeGalery = galleryItems.map(({original, description, preview}) =>{
        return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>
        `
    }).join('')

gallery.innerHTML=makeGalery

gallery.addEventListener('click', clickImage)

function clickImage(event){
    event.preventDefault()
    if(event.target===event.currentTarget){

return
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData:'alt',
        captionsDelay: 250
    })

}

