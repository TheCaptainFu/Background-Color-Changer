function change() {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    const result ='#' + randomNumber;
    var backGroundColor = document.querySelector('.background__color');
    var backGroundText = document.querySelector('.text');
    backGroundText.innerText='BackGround Color: '+ result;
    backGroundColor.style.backgroundColor=result;
}