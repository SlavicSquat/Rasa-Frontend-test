class Slider {
    constructor(container) {
        this.container = container;
        this.slider = container.querySelector('.slider__slides');
        this.slides = container.querySelectorAll('.slider__slide');
        this.prevBtn = container.querySelector('.slider__prev');
        this.nextBtn = container.querySelector('.slider__next');
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.move(-1));
        this.nextBtn.addEventListener('click', () => this.move(1));
        this.updateSlider();
        this.updateButton();
    }
    
    move(direction) {
        this.currentIndex += direction;

        if (this.currentIndex < 0) {
            this.currentIndex = 0;
        } else if (this.currentIndex >= this.slides.length) {
            this.currentIndex = this.slides.length - 1;
        }
                
        this.updateSlider();
        this.updateButton();
    }
    
    updateSlider() {
        this.slides.forEach(slide => slide.classList.remove('slide_active'));
        this.slides[this.currentIndex].classList.add('slide_active');
    }

    updateButton(){
        this.nextBtn.classList.remove('hidden');
        this.prevBtn.classList.remove('hidden');
        if (this.currentIndex == 0) { this.prevBtn.classList.add('hidden'); }
        else if (this.currentIndex == this.slides.length - 1) { this.nextBtn.classList.add('hidden'); }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(container => new Slider(container));
});