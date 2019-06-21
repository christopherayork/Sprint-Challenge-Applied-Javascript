class Carousel {
    constructor(element) {
        this.element = element;
        this.images = this.element.querySelectorAll('img');
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');

        this.leftButton.addEventListener('mousedown', () => this.scrollLeft());
        this.leftButton.addEventListener('mouseup', () => this.endAnimation());
        this.rightButton.addEventListener('mousedown', () => this.scrollRight());
    }
    scrollLeft() {
        this.setInfiniteScroll('left');
        //const active = document.querySelector('.active-img');
        //let next = Number(active.dataset.number) - 1;
        //if(next < 0) next = this.images.length - 1;
        //let scrollTo = this.images[next];
        //active.classList.remove('active-img');
        //scrollTo.classList.add('active-img');

    }
    scrollRight() {
        this.setInfiniteScroll('right');
        //const active = document.querySelector('.active-img');
        //let next = Number(active.dataset.number) + 1;
        //if(next + 1 > this.images.length) next = 0;
        //let scrollTo = this.images[next];
        //active.classList.remove('active-img');
        //scrollTo.classList.add('active-img');
    }

    setInfiniteScroll(direction) {
        let sliderWidth = 0;
        let animationWidth = 0;
        let sliderHeight = this.element.offsetHeight;
        this.images.forEach(current => animationWidth += current.offsetWidth);
        let slidesVisible = this.element.width / this.images[0].outerWidth;
        let slidesNumber = this.images.length;
        let speed = slidesNumber * 2;
        let copies = [...this.element.children].forEach((current, index) => {
            if(index > slidesNumber) return;
            let newChild = this.element.appendChild(current.cloneNode());
            [...this.images].push(newChild);
        });
        this.images.forEach(current => sliderWidth += current.offsetWidth);
        this.element.style.width = sliderWidth;
        this.element.style.height = sliderHeight;

        let left = [{'margin-left': '0px'}, {'margin-left': `${animationWidth}px`}];
        let right = [{'margin-left': '0px'}, {'margin-left': `-${animationWidth}px`}];

        if(direction === 'left') TweenMax.fromTo(this.images[0], 10, left[0], left[1]);
        else TweenMax.fromTo(this.images[0], 10, right[0], right[1]);


    }

    endAnimation() {

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
