'use strict';
import galleryItems from './gallery-items.js';
const createGallery = document.querySelector('.js-gallery');
const gallery = document.querySelector('.js-gallery');
const lightBox = document.querySelector('.js-lightbox');
const madalImg = document.querySelector('.lightbox__image');
const buttonLightBoxExit = document.querySelector('.lightbox__button');
const clearMadolImgSrc = item => {
  return item.removeAttribute('src');
};
const createElementsGallery = el => {
  const markup = el.map(item => {
    const createGalleryItem = document.createElement('li');
    const createGalleryLink = document.createElement('a');
    const createGalleryImage = document.createElement('img');
    createGalleryItem.classList.add('gallery__item');
    createGalleryLink.classList.add('gallery__link');
    createGalleryLink.setAttribute('href', `${item.original}`);
    createGalleryImage.classList.add('gallery__image');
    createGalleryImage.setAttribute('src', `${item.preview}`);
    createGalleryImage.setAttribute('data-source', `${item.original}`);
    createGalleryImage.setAttribute('alt', `${item.description}`);
    createGallery.appendChild(createGalleryItem);
    createGalleryItem.appendChild(createGalleryLink);
    createGalleryLink.appendChild(createGalleryImage);
  });
};
createElementsGallery(galleryItems);
const handlerGallery = event => {
  clearMadolImgSrc(madalImg);
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  const targetAttribute = target.getAttribute('data-source');
  lightBox.classList.add('is-open');
  const changeTargetAttributeSrc = target.getAttribute('src');
  if (madalImg.getAttribute('src' !== ' ')) {
    return target.removeAttribute('src');
  }
  madalImg.setAttribute('src', targetAttribute);
};
gallery.addEventListener('click', handlerGallery);
const handlerButtonExit = event => {
  lightBox.classList.remove('is-open');
};
buttonLightBoxExit.addEventListener('click', handlerButtonExit);
const handlerEscapeExit = event => {
  if (event.key !== 'Escape') {
    return;
  }
  lightBox.classList.remove('is-open');
};
window.addEventListener('keydown', handlerEscapeExit);
const handlerClickExit = event => {
  if (event.target.nodeName === 'IMG') {
    return;
  }
  lightBox.classList.remove('is-open');
};
lightBox.addEventListener('click', handlerClickExit);
