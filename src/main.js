
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { OnShowError, onSearchPhotoFromText } from './js/pixabay-api';
import { onCreateGalleryPhoto, clearGallery } from './js/render-functions';

const cssLoadAnimation = document.querySelector('.loader');
const inputQuery = document.querySelector('.my-input');
const btnSbm = document.querySelector('.form-btn');

btnSbm.addEventListener('click', handleClick);

function handleClick(evt) {
  cssLoadAnimation.style.display = 'inline-block';
  evt.preventDefault();

    let queryData = inputQuery.value.trim().replace(/\s+/g, '+').toLowerCase();

  if (queryData === "") {
    cssLoadAnimation.style.display = 'none';
    clearGallery();
     iziToast.error({
    title: 'Error',
    backgroundColor: '#ef4040',
    message:
      'Please enter a valid search query.',
    messageColor: '#fff',
    messageSize: '16px',
    position: 'topRight',
});
    return;
  }

  console.log(queryData);

  onSearchPhotoFromText(queryData)
    .then(data => {
      cssLoadAnimation.style.display = 'none';
      // data.totalHits === 0 ? OnShowError(data); : onCreateGalleryPhoto(data);  // Використовуємо onCreateGalleryPhoto
      if (data.totalHits === 0) {
        OnShowError();
        clearGallery();
        
      }else{onCreateGalleryPhoto(data)}
      
    })
    .catch(OnShowError)
    .finally(() => {
      inputQuery.value = '';
    });
}
