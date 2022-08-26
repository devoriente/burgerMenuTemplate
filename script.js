//Je sélectionne et je stocke
//l'icône burger
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
//La DIV modal
const modal = document.querySelector('.modal');
console.log(modal);

//Je soumets l'icône au clic
icone.addEventListener('click', function(){
    console.log("icône cliquée");
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
});