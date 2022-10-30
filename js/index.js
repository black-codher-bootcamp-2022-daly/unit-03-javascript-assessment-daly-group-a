import {dates} from './data.js'


const background = document.querySelector('.timeline')

makeTimeline(dates)



function makeTimeline(timelines){
    background.innerHTML = ''
    const headerEl = document.createElement('h2')
    headerEl.classList.add('timeline-header')
    headerEl.textContent = 'Timeline'
    background.appendChild(headerEl)

    // const timelineItemsEL = document.createElement('div')
    // timelineItemsEL.classList.add('timeline-items')
    // background.appendChild(timelineItemsEL)

   

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
        background.appendChild(dateEl)
    })

}





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