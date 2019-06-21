class Carousel {
    constructor(element) {
        this.element = element;
        this.images = this.element.querySelectorAll('img');
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');

        this.leftButton.addEventListener('click', () => this.scrollLeft());
        this.rightButton.addEventListener('click', () => this.scrollRight());
    }
    scrollLeft() {
        const active = document.querySelector('.active-img');
        let next = Number(active.dataset.number) - 1;
        if(next < 0) next = this.images.length - 1;
        let scrollTo = this.images[next];
        active.classList.remove('active-img');
        scrollTo.classList.add('active-img');

    }
    scrollRight() {
        const active = document.querySelector('.active-img');
        let next = Number(active.dataset.number) + 1;
        if(next + 1 > this.images.length) next = 0;
        let scrollTo = this.images[next];
        active.classList.remove('active-img');
        scrollTo.classList.add('active-img');
    }

}

let carousel = document.querySelector('.carousel');
let instance = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
