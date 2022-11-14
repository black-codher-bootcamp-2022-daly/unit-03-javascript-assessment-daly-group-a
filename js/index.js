import {dates} from './data.js'


/*1. As a user, I want to see the summary of each historical 
item in a summary card, so that I can see a brief 
introduction of each historical item  (31st October)
 
-   	Title and a date created (color:  https://palettes.shecodes.io/ )
-   	The box that contains the summary
 
*/ 


const background = document.querySelector('.timeline')

makeTimeline(dates)


function makeTimeline(timelines){
    background.innerHTML = ''
    const headerEl = document.createElement('h2')
    headerEl.classList.add('timeline-header')
    headerEl.textContent = "Timeline for Mayme's Bakery"
    background.appendChild(headerEl)
    let num = 0;

    const modalElem = document.createElement('div')
    modalElem.classList.add("modal","modal-multi")

    const timelineItemsEL = document.createElement('div')
    timelineItemsEL.classList.add('timeline-items')
    background.appendChild(timelineItemsEL)

    timelines.forEach((item) => {
        const {title, date, fullDescription, image, summary} = item

        const dateEl = document.createElement('div')
        dateEl.classList.add('timeline-item')

        const modalElem = document.createElement('div')
        modalElem.classList.add("modal-multi", "modal")
        modalElem.id = "modal-container"
        dateEl.innerHTML =`
                <div class="info">
                    <span class="timeline-item-date">${date}</span>
                    <h2 class="timeline-item-title">${title}</h2>
                    <p class="timeline-item-summary">${summary} </p>
                    <button class="timeline-item-more-info" id="showButton" data-index=${num}>Read More</button>
                </div>
        `
        
        modalElem.innerHTML = `
        <div class="modal-inner">
            <h1 id="modal-title">${title}<h1>
            <img id="modal-image" src=${image} alt="...">
            <h3 id="modal-date">${date}</h3>
            <p id="modal-full-description">
                ${fullDescription}
            </p>
            <button class="multi-close" id="modal-close-button" data-index=${num}>Close</button>
        </div>
        `
     
        background.appendChild(dateEl)
        modalElem.setAttribute('data-index', num)
        document.body.appendChild(modalElem)
        num++
    })
   
}


//ON CLICK BUTTON
var multi_modal = document.getElementsByClassName("modal-multi");

// Get the button that opens the modal
var modal_btn_multi = document.getElementsByClassName("timeline-item-more-info");
var close_multi = document.getElementsByClassName("multi-close");


for (let i = 0; i < modal_btn_multi.length; i++)
{
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        multi_modal[ElementIndex].id= "show"
        background.classList.add('blur')
        console.log(multi_modal)
    };

    // When the user clicks on <close button> (x), close the modal
    close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        // console.log(ElementIndex)
        console.log(multi_modal)
        multi_modal[ElementIndex].id = "modal-container"
        background.classList.remove('blur');
        // console.log('hello')
    };

}

// if modal on page but click is not on modal
window.onclick = function(event) {
    if (event.target === multi_modal[event.target.getAttribute('data-index')]) {
        multi_modal[event.target.getAttribute('data-index')].id = "hide";
        background.classList.remove('blur');
        // console.log('here!!!')
    }
};


// create scroll animation
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