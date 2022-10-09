import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)
let getEl
const gallery=document.querySelector('.gallery')
console.log(gallery)

const makeGalery = galleryItems.map (({original, description, preview}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`
}).join('');

gallery.innerHTML=makeGalery

gallery.addEventListener('click', clickImage)
function clickImage(event){
    event.preventDefault()
    if(event.target===event.currentTarget){
        return
    }
    console.log(event.target)
    const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800px" height="600px">
`).show()
    gallery.addEventListener('keydown', (evet)=>{
        if(evet.code == 'KeyZ'){
        closable:true
        }
    })
}
