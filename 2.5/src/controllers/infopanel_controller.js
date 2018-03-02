import {Controller} from 'stimulus';

export default class extends Controller {
    static get targets() {
        return ['item', 'content'];
    }

    show(e) {
        e.preventDefault();
        let currentIndex = parseInt(this.data.get('index'));

        this.deactivate(currentIndex);


        this.itemTargets.forEach((item, index) => {
            if (item === e.target) {
                this.activate(index);
            }
        });
        
    }

    deactivate(index) {
        this.itemTargets[index].classList.remove('active');
        this.contentTargets[index].classList.remove('show','active');
    }

    activate(index) {
        this.itemTargets[index].classList.add('active');
        this.contentTargets[index].classList.add('show','active');

        this.data.set('index', index);
    }
}