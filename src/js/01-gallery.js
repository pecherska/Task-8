// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", onClick);
console.dir(ulEl); 
const markUp = galleryItems
    .map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li> `)
    .join("");
ulEl.insertAdjacentHTML("beforeend", markUp);

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });
// lightbox.open();


 
function onClick(event) {    
   event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
   
    lightbox.open();
}