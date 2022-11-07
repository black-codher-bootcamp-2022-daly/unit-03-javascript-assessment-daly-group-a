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
    headerEl.textContent = 'Timeline'
    background.appendChild(headerEl)
    //let num = 1;
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



// Animation scrolling 

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
 // Setting index to each button
  
// function setDataIndex() {
  
//    for (let i= 0; i<multi_info_displ.length; i ++) 
//    {
//      multi_info_displ[i].setAttribute("data-index", i);
    
//    }
  
   
// }

// window.onload = function() {

//     setDataIndex();
// };


//WORKING ON CLICK EVENT 

var multi_info_displ = document.querySelector(".timeline-item-more-info")
for (let i = 0; i < multi_info_displ.length; i++) {
document
.querySelector(multi_info_displ[i])
.addEventListener("click", clickOnShowButton);

function clickOnShowButton() {
    //document.body.innerHTML = ''
    // const paragraph = document.createElement('div')
    // paragraph.classList.add('div')
    // document.body.appendChild(paragraph)


 dates.forEach((itemFulldescription) => {


    const fullDesc = document.createElement('div')
    fullDesc.classList.add('item-fullDesc')

    const {title, date, fullDescription, image, summary} = itemFulldescription
    fullDesc.innerHTML = 
    `<div class= "more-info">
    <p class = "full-description">${fullDescription}</p>
    <img class="picture" src="${image}" alt="descriptive image">
    </div>`

    document.body.appendChild(fullDesc)
}
)
}

document.querySelector(".more-info")
    
}









