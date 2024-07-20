import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  key: '44940230-793e0fb44ed42533ed2f4cfc1',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 15,
};

export async function onSearchPhotoFromText(query, page = 1) {
  const URL = `https://pixabay.com/api/?key=${options.key}&q=${query}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}&per_page=${options.per_page}&page=${page}`;

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}

export function OnShowError() {
  iziToast.error({
    title: 'Error',
    backgroundColor: '#ef4040',
    message: 'Sorry, there are no images matching your search query. Please, try again!',
    messageColor: '#fff',
    messageSize: '16px',
    position: 'topRight',
  });
}
