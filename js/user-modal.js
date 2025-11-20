import {isEnterKey, isEscapeKey} from './util.js';

const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = userModalElement.querySelector('.setup-close');

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal()
  }
};

function openUserModal() {
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeyDown);
}

function closeUserModal() {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
}

userModalOpenElement.addEventListener('click', openUserModal);

userModalCloseElement.addEventListener('click', closeUserModal);

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
})

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    closeUserModal();
  }
})

export {openUserModal, closeUserModal};
