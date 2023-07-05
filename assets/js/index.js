function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),



        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', (ev) => {
                if(ev.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        btnClearDisplay() {
            this.display.value = '';
        },

        realizaConta() {
            this.display.value = eval(this.display.value);
        },

        cliqueBotoes() {
            document.addEventListener('click', (evento) => {
                const element = evento.target;

                
                if(element.classList.contains('btn-num')) {
                    this.btnParaDisplay(element.innerText);
                } 
                if(element.classList.contains('btn-clear')) {
                    this.btnClearDisplay();
                } 
                if(element.classList.contains('btn-del')) {
                    this.apagaUm();
                } 
                if(element.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();