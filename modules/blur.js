class Blur {
    header;
    main;
    footer;
    blurLayer;

    constructor() {
        this.header = document.querySelector('header');
        this.main = document.querySelector('main');
        this.footer = document.querySelector('footer');
        this.blurLayer = document.getElementById('blur-layer');
    }

     addBlur() {
         this.header.className = 'blur';
         this.main.className = 'blur';
         this.footer.className = 'blur';

         this.blurLayer = document.createElement('div');
         this.blurLayer.id = 'blur-layer';
         this.blurLayer.className = 'blur-layer';

         document.body.append(this.blurLayer);
    }

    removeBlur() {
        this.header.className = '';
        this.main.className = '';
        this.footer.className = '';

        this.blurLayer && document.body.removeChild(this.blurLayer);
    }
}

export default new Blur();