window.addEventListener("DOMContentLoaded", () => {
    let num01 = 0;
    let num02 = 0;
    const audioAdd = new Audio("../sounds/happy-pop-2-185287.mp3");
    const audioRemove = new Audio("../sounds/shooting-sound-fx-159024.mp3");

    document.getElementById("addPonto01").addEventListener("click", () => {
        addNum01();
        audioAdd.play();
    });

    document.getElementById("removePonto01").addEventListener("click", () => {
        removeNum01();
        audioRemove.play();
    });

    function addNum01() {
        let ponto01 = document.getElementById("ponto01");
        num01++;
        if (num01 > 12) {
            num01 = 0;
        }

        if (num01 >= 11) {
            addAnimacao(ponto01);
        } 
        else if(num01 == 12){
            pontoVencedor(ponto01)
        }
        else {
            removeAnimacao(ponto01);
        }

        ponto01.innerHTML = num01;
    }

    function removeNum01() {
        let ponto01 = document.getElementById("ponto01");
        num01--;
        ponto01.innerHTML = num01;

        if (num01 < 0) {
            num01 = 0;
        }
        ponto01.innerHTML = num01;
    }

    document.getElementById("addPonto02").addEventListener("click", () => {
        addNum02();
        audioAdd.play();
    });

    document.getElementById("removePonto02").addEventListener("click", () => {
        removeNum02();
        audioRemove.play();
    });

    function addNum02() {
        let ponto02 = document.getElementById("ponto02");
        num02++;
        if (num02 > 12) {
            num02 = 0;
        }
        if (num02 >= 11) {
            addAnimacao(ponto02);
        } 
        else if(num02 == 12){
            pontoVencedor(ponto02)
        }
        else {
            removeAnimacao(ponto02);
        }
        ponto02.innerHTML = num02;
    }

    function removeNum02() {
        let ponto02 = document.getElementById("ponto02");
        num02--;
        ponto02.innerHTML = num02;

        if (num02 < 0) {
            num02 = 0;
        }
        ponto02.innerHTML = num02;
    }

    document.getElementById("btnReset").addEventListener("click", () => {
        num01 = 0;
        num02 = 0;
        ponto01.innerHTML = num01;
        ponto02.innerHTML = num02;
        removeAnimacao(ponto01)
        removeAnimacao(ponto02)
    });

    function addAnimacao(valor) {
        valor.classList.add('pontoAnimado');
    }
    
    function pontoVencedor(valor) {
        valor.classList.remove('pontoAnimado'); 
        valor.classList.add('pontoVencedor');
    }
    
    function removeAnimacao(valor) {
        valor.classList.remove('pontoAnimado', 'pontoVencedor'); 
    }
    

});
