(() => {
    const app = Stimulus.Application.start();

    app.register("greeter", class extends Stimulus.Controller {
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
    });
})();