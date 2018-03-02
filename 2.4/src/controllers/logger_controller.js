import {Controller } from 'stimulus';

export default class extends Controller {
    static get targets() {
        return [];
    }

    connect() {
       
    }

    log(e) {
        let tag = e.target.tagName;
        let type = e.type;
        let value = e.target.value;

        let message = `${tag} event: ${type}`;

        if (value) {
            message += `; user data: ${value}`;
        }

        console.log(message);
    }
};