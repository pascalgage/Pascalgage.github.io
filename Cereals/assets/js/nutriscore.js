const Nutriscores={
        checkboxes: document.querySelectorAll('.nutriscore   input[type="checkbox"]'),

        initialize(){
            this.toSelect();
        },

        toSelect(){
            const checkboxes=this.checkboxes;
            let lastchecked;

            checkboxes.forEach(checkboxes=>checkboxes.addEventListener('click', handlecheck));
        }
};

Nutriscores.initialize();