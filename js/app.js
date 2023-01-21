let ratings = document.querySelectorAll('.circle');
let btn = document.getElementById('btn');
let card = document.querySelector('.card-contents');
let thankyou = document.querySelector('.thankyou');
let star = document.querySelector('.star-icon');
let span = document.getElementById('rating');


for (let i=0; i < ratings.length; i++) {

    ratings[i].addEventListener('click', () => {

        let rating = ratings[i].innerHTML;

        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected')
            ratings[i].classList.remove('selected');
        }

        ratings[i].classList.add('selected');

        btn.addEventListener('click', () => {
            card.style.display = 'none';
            star.style.display = 'none';
            thankyou.style.display = 'block';

            span.innerHTML = rating;
        });


    });


    
}