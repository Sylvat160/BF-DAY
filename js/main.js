function circle(){
    let amount = 85;
    let body = document.querySelector('body');
    let i = 0;
    
    while(i < amount){
        let element = document.createElement('i');
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 10;
        let size = Math.random() * 250;
        element.style.width = 10 + size + 'px';
        element.style.height = 10 + size + 'px';
        element.style.left = posX + 'px';
        element.style.animationDelay = delay + 's';
        element.style.animationDuration = 20 + duration + 's';
        element.style.boxShadow = '0 30px #0002';
        body.appendChild(element);
        i++;
    }
}

let like = document.querySelector('#like-number');
let liking = document.querySelector('.like');

liking.addEventListener('click', function(){
    let likeNumber = parseInt(like.textContent);
    likeNumber++;
    like.textContent = likeNumber;
});


circle();