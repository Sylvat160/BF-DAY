function circle(){
    let amount = 85;
    let body = document.querySelector('body');
    let i = 0;
    

    while(i < amount){
        let element = document.createElement('i');
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 10;
        // element.classList.add('circle');
        let size = Math.random() * 250;
        element.style.width = 10 + size + 'px';
        element.style.height = 10 + size + 'px';
        element.style.left = posX + 'px';
        element.style.animationDelay = delay + 's';
        element.style.animationDuration = 20 + duration + 's';
        element.style.webkitBoxShadow = '0 30px #0002';
        // element.style.transform = 'translateY(100 px)';
        // element.style.transform = 'translateX( 100 em )';
        
        

        body.appendChild(element);
        i++;
    }

    // let circles = document.querySelectorAll('i');
    // circles.forEach(circle => {
    //     circle.style.transform = 'translate(Math.floor(Math.random() + 100 * 100 ) px, Math.random() + 10000 * 100 px)';
    // })

}

let like = document.querySelector('#like-number');
let liking = document.querySelector('.like');

liking.addEventListener('click', function(){
    let likeNumber = parseInt(like.textContent);
    likeNumber++;
    like.textContent = likeNumber;
});


circle();