import blur from './blur.js';

class PopupMessage {
    closeButton;

    addPopupInfoMessage(message) {
        blur.addBlur();

        const div = document.createElement('div');
        div.id = 'popup';
        div.className = 'popup-wrapper';
        div.innerHTML = `
            <h3>SUCCESS!</h3>
            <p>${message}</p>
            <button id="button-popup-close">Close</button>
        `;

        document.body.append(div);
        this.closeButton = document.getElementById('button-popup-close');
        this.closeButton.addEventListener("click", this.removePopupMessage);
    }

    addPopupErrorMessage(message) {
        blur.addBlur();

        const div = document.createElement('div');
        div.id = 'popup';
        div.className = 'popup-wrapper';
        div.innerHTML = `
            <h3>FORBIDDEN!</h3>
            <p>${message}</p>
            <button id="button-popup-close">Close</button>
        `;

        document.body.append(div);
        this.closeButton = document.getElementById('button-popup-close');
        this.closeButton.addEventListener("click", this.removePopupMessage);
    }

    removePopupMessage() {
        blur.removeBlur();

        const popupMessage = document.getElementById('popup');
        if (popupMessage) {
            const parent = popupMessage.parentNode;
            parent.removeChild(popupMessage);
        }
    }

}

export default new PopupMessage();

