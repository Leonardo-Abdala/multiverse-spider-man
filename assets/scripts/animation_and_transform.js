
function handleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('s-card');
    

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener("mouseenter", handleMouseEnter);

        card.addEventListener("mouseleave", handleMouseLeave);
        
    }
}

addEventListenersToCards();

function selectCarouselItem(selectedButton){
    const selectedItem = selectedButton.id;
    const carousel = document.querySelector('.s-card-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activedButton = document.querySelector('.s-controller__button--active');
    activedButton.classList.remove('s-controller__button--active');
    selectedButton.classList.add('s-controller__button--active');

}