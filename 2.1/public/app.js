(() => {
    const app = Stimulus.Application.start();

    app.register("greeter", class extends Stimulus.Controller {
        static get targets() {
            return ['input', 'output']
        }
        connect() {
            
            console.log('Greeter controller connected to element');

            this.inputTarget.value = 'Bob';
            this.outputTarget.innerHTML = 'This is the output';
        }
    });
})();