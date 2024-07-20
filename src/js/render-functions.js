import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const allGallery = document.querySelector('.js-markup-list');


let userDataLog = new SimpleLightbox('.js-markup-list a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function onCreateMarkup(photo) {
  return photo.map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {


      return `
        <li class="gallery-item">
          <div class="list">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}" 
                alt="${tags}"
              />
            </a>
            <ul class="adds-list">
              <li class="info-item">
                <p class="text-item text-item-name">Likes</p>
                <p class="text-item">${likes}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Views</p>
                <p class="text-item">${views}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Comments</p>
                <p class="text-item">${comments}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Downloads</p>
                <p class="text-item">${downloads}</p>
              </li>
            </ul>
          </div>
        </li>`;
    }
  ).join('');
}

export function onCreateGalleryPhoto(data) {
  allGallery.innerHTML = '';
  allGallery.insertAdjacentHTML('beforeend', onCreateMarkup(data.hits));
  userDataLog.refresh();
}

export function clearGallery() {
  allGallery.innerHTML = '';
}