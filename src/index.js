import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// let breeds = [];

// function populateBreedSelect(breeds) {
//   breeds.forEach(breed => {
//     const option = document.createElement('option');
//     option.value = breed.id;
//     option.textContent = breed.name;
//     breedSelect.appendChild(option);
//   });
// }

// function displayCatInfo(cat) {
//   const image = cat[0].url;
//   const breedName = cat[0].breeds[0].name;
//   const description = cat[0].breeds[0].description;
//   const temperament = cat[0].breeds[0].temperament;

//   const catImage = document.createElement('img');
//   catImage.src = image;
//   catImage.alt = breedName;

//   const catBreedName = document.createElement('h2');
//   catBreedName.textContent = breedName;

//   const catDescription = document.createElement('p');
//   catDescription.textContent = `Description: ${description}\nTemperament: ${temperament}`;

//   catInfo.innerHTML = '';
//   catInfo.appendChild(catImage);
//   catInfo.appendChild(catBreedName);
//   catInfo.appendChild(catDescription);
//   catInfo.style.display = 'block';
// }

// function showLoader() {
//   loader.style.display = 'block';
//   breedSelect.style.display = 'none';
//   catInfo.style.display = 'none';
//   error.style.display = 'none';
// }

// function hideLoader() {
//   loader.style.display = 'none';
// }

// function showError() {
//   error.style.display = 'block';
// }

// function loadBreeds() {
//   //   showLoader();
//   fetchBreeds()
//     .then(data => {
//       breeds = data;
//       populateBreedSelect(breeds);
//     })
//     .catch(error => {
//       console.error('Error fetching breeds:', error);
//       showError();
//     })
//     .finally(() => hideLoader());
// }

// function loadCatByBreed(breedId) {
//   showLoader();
//   fetchCatByBreed(breedId)
//     .then(data => {
//       displayCatInfo(data);
//     })
//     .catch(error => {
//       console.error('Error fetching cat by breed:', error);
//       showError();
//     })
//     .finally(() => hideLoader());
// }

// breedSelect.addEventListener('change', () => {
//   const selectedBreedId = breedSelect.value;
//   if (selectedBreedId) {
//     loadCatByBreed(selectedBreedId);
//   } else {
//     catInfo.style.display = 'none';
//   }
// });

// loadBreeds();
