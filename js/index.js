import {dates} from './data.js'


const background = document.querySelector('.timeline')

makeTimeline(dates)



function makeTimeline(timelines){
    background.innerHTML = ''
    const headerEl = document.createElement('h2')
    headerEl.classList.add('timeline-header')
    headerEl.textContent = 'Timeline'
    background.appendChild(headerEl)

    const timelineItemsEL = document.createElement('div')
    timelineItemsEL.classList.add('timeline-items')
    background.appendChild(timelineItemsEL)

   

    timelines.forEach((item) => {
        const {title, date, fullDescription, image, summary} = item

        const dateEl = document.createElement('div')
        dateEl.classList.add('timeline-item')
        const modalElem = document.createElement('div')
        modalElem.classList.add("modal-container","modal-multi")
        modalElem.id = "hide"
        dateEl.innerHTML =`
                <div class="info">
                    <span class="timeline-item-date">${date}</span>
                    <h2 class="timeline-itme-title">${title}</h2>
                    <p class="timeline-item-summary">${summary} </p>
                    <button class="timeline-item-more-info" id="showButton">Read More</button>
                </div>
        `
        modalElem.innerHTML= `
           
            <div class="modal-header">
                <button id="hideIcon">
                    <i class="fa fa-close"></i>
                </button>
            </div>
            <div class="modal-body">
                <h1 class="modal-title">${title}<h1>
                <img class="modal-image" src=${image} alt="...">
                <h3 id="model-date">${date}</h3>
                <p class="modal-full-description">
                    ${fullDescription}
                </p>
                <button class="modal-close-button" id="hideButton">
                    close
                </button>
            </div>
        `

        timelineItemsEL.appendChild(dateEl)
        document.body.appendChild(modalElem)
    })

}


var modalMulti = document.getElementsByClassName("modal-multi");
var showButtons = document.getElementsByClassName("timeline-item-more-info");
var closeButton = document.getElementsByClassName("modal-close-button");

console.log(closeButton)


function setDataIndex() {
    for (let i=0; i<showButtons.length; i++){
        showButtons[i].setAttribute('data-index',i)
        modalMulti[i].setAttribute('data-index', i)
        closeButton[i].setAttribute('data-index', i)
    }
}


for (let j = 0; j < showButtons.length; j++)
    {
        showButtons[j].onclick = function() {
            var ElementIndex = this.getAttribute('data-index');
            modalMulti[ElementIndex].id = 'show';
            background.classList.add('blur')
            console.log(j)
        };

        // When the user clicks on <span> (x), close the modal
        closeButton[j].onclick = function() {
            var ElementIndex = this.getAttribute('data-index');
            modalMulti[ElementIndex].id = "hide";
            background.classList.remove('blur')
            console.log('closing',j)
        };

    }

window.onload = function() {
    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modalMulti[event.target.getAttribute('data-index')]) {
        modalMulti[event.target.getAttribute('data-index')].id = "hide";
        // console.log('here!!!')
    }
};



const cards = document.querySelectorAll('.info')

window.addEventListener('scroll', checkCards)

checkCards()

function checkCards() {
    const triggerBottom = window.innerHeight / 5 * 4

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top

        if(cardTop < triggerBottom){
            card.classList.add('roll-in')
        } else {
            card.classList.remove('roll-in')
        }
    })
}