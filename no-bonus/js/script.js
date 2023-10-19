(function oderCampoMinato(){
    const startbtn = document.getElementById('start');

    const playground = document.getElementById('playground');

//bottone per iniziare il gioco
startbtn.addEventListener('click', function() {
    playground.innerHTML = '' ;
    startbtn.classList.add('d-none');
    playground.classList.remove('d-none') ;

    const numSquare = 100;
    
    for(let i = 1 ; i <= numSquare ; i++){
        let square = createSquare(i , numSquare);

        playground.append(square) ;
    }
})


// utility

function createSquare(squareIndex , rowSquare){
    const squareWidth = Math.sqrt(rowSquare);
    const square = document.createElement('div');

    square.classList.add('square');
    square.style.width = `calc(100% /  ${squareWidth} )`;
    square.style.height = `calc(100% /  ${squareWidth} )`;
    square.innerHTML = squareIndex ;

    square.addEventListener('click' , function(){
        square.classList.toggle('active');
        console.log(squareIndex);

    })

    return square;
}

})();

