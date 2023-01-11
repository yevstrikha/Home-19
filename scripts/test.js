const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',];
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

const imgContainer = document.querySelector('.images');
const myPicture = document.createElement('img');
let currentPic = 1;
myPicture.src = 'images/' + currentPic + '.jpg';
imgContainer.appendChild(myPicture);

function showImg() {
    myPicture.src = 'images/' + ++currentPic + '.jpg';
    if (currentPic === arr.length) {
        currentPic = 0;
    }
}

function showNext() {
    clearInterval(mySlider);
    myPicture.src = 'images/' + ++currentPic + '.jpg';
    if (currentPic === arr.length) {
        currentPic = 0;
    }
    setInterval(showImg, 3000);
}

function showPrev() {
    --currentPic;
    clearInterval(mySlider);

    if(currentPic < 0){
        currentPic = arr.length -1;
        myPicture.src = 'images/' + arr[currentPic] + '.jpg';

    }else{
        myPicture.src = 'images/' + arr[currentPic] + '.jpg';
    }
    setInterval(showImg, 3000);
}


let mySlider = setInterval(showImg, 3000);