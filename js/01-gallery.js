//імпорт з іншого файлу масиву з обєктами даних
import { galleryItems } from './gallery-items.js';
// Change code below this line

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
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `
    });
    // console.log(murcup.join(''))
    return murcup.join('');
}

//////////ДРУГА ЧАСТИНА(СПРОБУВАВ)
// делегую слухача подій на список
gallaryContainerElem.addEventListener('click', onPhotoClick);
//калбек для слухача
function onPhotoClick(event) {
    //забороняю скачвати картинки по кліку на них
    event.preventDefault();
    //знаходжу URL до кожної картинки
    const imgURL = event.target.dataset.source;
    //перевіряю чи клацнув саме на картинку
    if (event.target.tagName === 'IMG') {
        console.log("Клацнули саме по картинці!")        
        console.log(imgURL);
        /////////////////4 та 5 частини////////
        //створюю модалкуу з бібліотекою basicLightbox
        const instance = basicLightbox.create(`
        <img src="${imgURL}" width="800" height="600">
        `)
        //відкриваю модалку
        instance.show()

        /////////////Додаткове завдання////////
        //ставлю слухача на keydown на документі
        document.addEventListener("keydown", onKeyPress);
        //калбек
        function onKeyPress(evt) {
            //якщо нажали Escape закриваємо модалку бібліотеки та видаляємо слухача
            if (evt.key === "Escape") {
                instance.close();
                document.removeEventListener("keydown", onKeyPress);
            }
        }
    }
    
}
