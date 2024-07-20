import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { OnShowError, onSearchPhotoFromText } from './js/pixabay-api';
import { onCreateGalleryPhoto, clearGallery } from './js/render-functions';

const cssLoadAnimation = document.querySelector('.loader');
const inputQuery = document.querySelector('.my-input');
const btnSbm = document.querySelector('.form-btn');
const loadMoreBtn = document.querySelector('.load-more-btn');

let pages = 1;
let queryData = '';

loadMoreBtn.addEventListener('click', async () => {
  pages += 1;
  await loadMorePhotos();
});

btnSbm.addEventListener('click', async (evt) => {
  evt.preventDefault();
  cssLoadAnimation.style.display = 'inline-block';

  queryData = inputQuery.value.trim().replace(/\s+/g, '+').toLowerCase();

  if (queryData === "") {
    cssLoadAnimation.style.display = 'none';
    // loadMoreBtn.style.display = 'inline-block,';
    clearGallery();
    iziToast.error({
      title: 'Error',
      backgroundColor: '#ef4040',
      message: 'Please enter a valid search query.',
      messageColor: '#fff',
      messageSize: '16px',
      position: 'topRight',
    });
    return;
  }

  pages = 1;  // Reset pages for a new search
  await searchPhotos();
});

async function searchPhotos() {
  try {
    const data = await onSearchPhotoFromText(queryData, pages);
    cssLoadAnimation.style.display = 'none';
    clearGallery();

    if (data.totalHits === 0) {
      OnShowError();
      loadMoreBtn.style.display = 'none';
    } else {
      onCreateGalleryPhoto(data);
      handleLoadMoreButtonVisibility(data);
    }
  } catch (error) {
    OnShowError();
  } finally {
    inputQuery.value = '';
  }
}

async function loadMorePhotos() {
  try {
    const data = await onSearchPhotoFromText(queryData, pages);
    onCreateGalleryPhoto(data);
    handleLoadMoreButtonVisibility(data);
  } catch (error) {
    OnShowError();
  }
}

function handleLoadMoreButtonVisibility(data) {
  const totalPages = Math.ceil(data.totalHits / 15);

  if (pages >= totalPages) {
    loadMoreBtn.style.display = 'none';
    iziToast.info({
      title: 'Info',
      backgroundColor: '#f39c12',
      message: "We're sorry, but you've reached the end of search results.",
      messageColor: '#fff',
      messageSize: '16px',
      position: 'topRight',
    });
  } else {
    loadMoreBtn.style.display = 'inline-block';
  }
}
