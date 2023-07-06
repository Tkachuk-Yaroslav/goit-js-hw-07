import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//присвоююю змінній результат функції(рядок коду HTML)
const cardsMurkup = createMurcup(galleryItems);

//ловлю список в якій вставлятиму створені лішки
const gallaryContainerElem = document.querySelector(".gallery");
//вставляю готову розмітку в HTML
gallaryContainerElem.insertAdjacentHTML('beforeend', cardsMurkup);
//функція, що створює рядок з розміткою
function createMurcup(gallarys) {
    const murcup = gallarys.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>
        `
    });
    // console.log(murcup.join(''))
    return murcup.join('');
}


//використовую бібліотеку SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    // captionPosition: 'outside'
});