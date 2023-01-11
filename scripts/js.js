// let currentPic = 1;
//
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
//
// const imgContainer = document.querySelector('.images');
// const myPicture = document.createElement('img');
//
// myPicture.src = 'images/' + currentPic + '.jpg';
// imgContainer.appendChild(myPicture);
//
// prev.addEventListener('click', prevPic);
// next.addEventListener('click', nextOne);
//
// function slider() {
//     myPicture.src = 'images/' + currentPic++ + '.jpg';
//     if (currentPic >= 6) {
//         currentPic = 1;
//     }
// }
//
// function prevPic() {
//     clearInterval(myTimer);
//     myPicture.src = 'images/' + --currentPic + '.jpg';
//
//     if(currentPic<1){
//         currentPic=5;
//     }else{
//     }
//
// }
//
// function nextOne() {
//     myPicture.src = 'images/' + currentPic++ + '.jpg';
//     clearInterval(myTimer);
//     setInterval(slider, 3000);
//
//     if (currentPic > 5) {
//         currentPic = 1;
//     }
// }
//
//
//
// let myTimer = setInterval(slider, 3000);
