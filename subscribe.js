import popupMessage from './modules/popup.js';
import httpAPI from './dal/http.api.js';
import emailValidator from './modules/emailValidator.js';

// DOM
const form = document.forms.subscribe;
const btn = document.getElementById('button-submit');

const submitHandler = async (event) => {
    event.preventDefault();

    if (!emailValidator.validate(form.input.value)) {
        popupMessage.addPopupErrorMessage('Incorrect email');
        return;
    }

    btn.disabled = true;
    btn.classList.toggle('loading-button');
    form.input.disabled = true;

    try {
        const response = await httpAPI.subscribe(form.input.value);
        popupMessage.addPopupInfoMessage(response.data.fullMessage);
        form.reset();
    } catch (reason) {
        popupMessage.addPopupErrorMessage(reason);
    }

    btn.disabled = false;
    btn.classList.toggle('loading-button');
    form.input.disabled = false;
};

form.addEventListener("submit", submitHandler);