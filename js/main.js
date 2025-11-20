import './setup.js';
import {closeUserModal} from './user-modal.js';
import {setUserFormSubmit} from './user-form.js';
import {renderSimilarList} from './similar-list.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

const SIMILAR_WIZARD_COUNT = 4;

getData()
  .then((wizards) => {
    renderSimilarList(wizards.slice(0, SIMILAR_WIZARD_COUNT));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUserModal);

// async function init() {
//   try {
//     const wizards = await getData();
//     renderSimilarList(wizards.slice(0, SIMILAR_WIZARD_COUNT));
//   } catch (err) {
//     showAlert(err.message);
//   }
// }
//
// async function onFormSubmit(formData) {
//   try {
//     await sendData(formData);
//     closeUserModal();
//   } catch (err) {
//     showAlert(err.message);
//   }
// }
