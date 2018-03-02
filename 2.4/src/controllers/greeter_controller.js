import {Controller } from 'stimulus';

export default class extends Controller {
    static get targets() {
        return ['input', 'output'];
    }

    connect() {
       
    }

    greet(e) {
        e.preventDefault();
        let value = this.inputTarget.value;
        this.outputTarget.innerHTML = `Greetings, ${value}`;
    }
};