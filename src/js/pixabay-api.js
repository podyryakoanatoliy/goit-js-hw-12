import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
    

const options = {
    key: '44940230-793e0fb44ed42533ed2f4cfc1',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
}

export function onSearchPhotoFromText(query) {


    
    const URL = `https://pixabay.com/api/?key=${options.key}&q=${query}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}`;
    return fetch(URL)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json();
        });
}

export function OnShowError() {
    iziToast.error({
    title: 'Error',
    backgroundColor: '#ef4040',
    message:
      'Sorry, there are no images matching </br> your search query. Please, try again!',
    messageColor: '#fff',
    messageSize: '16px',
    position: 'topRight',
});
}
