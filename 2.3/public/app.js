(() => {
    const app = Stimulus.Application.start();

    app.register('greeter', class extends Stimulus.Controller {
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

    app.register('logger', class extends Stimulus.Controller {
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
    })
})();