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
    let num = 1;
    timelines.forEach((item) => {
        const {title, date, fullDescription, image, summary} = item

        const dateEl = document.createElement('div')
        dateEl.classList.add('timeline-item')
        const modalElem = document.createElement('div')
        modalElem.classList.add("modal-container","modal-multi", "modal")
        modalElem.id = "hide"
        dateEl.innerHTML =`
                <div class="info">
                    <span class="timeline-item-date">${date}</span>
                    <h2 class="timeline-itme-title">${title}</h2>
                    <p class="timeline-item-summary">${summary} </p>
                    <button class="timeline-item-more-info" id="showButton" data-index=${num}>Read More</button>
                </div>
        `
        modalElem.innerHTML = `
        <div class= "more-info">
          <p class = "full-description">${fullDescription}</p>
          <img class="picture" src="${image}" alt="descriptive image">
          <button class= "multi-close" data-index=${num}>Close</button>
     </div>`
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
        multi_modal[ElementIndex].id= "show";
    };

    // When the user clicks on <close button>, close the modal
    close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        multi_modal[ElementIndex].id= "hide";
        this.parentElement.style.display = 'none';
        
    };
    
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

// var multi_info_displ = document.querySelector(".timeline-item-more-info")

// for (let i = 0; i < multi_info_displ.length; i++) {
// multi_info_displ[i].setAttribute("data-index", i);

// document
// .querySelector("data-index",)
// .addEventListener("click", clickOnShowButton);

// function clickOnShowButton() {
//     //document.body.innerHTML = ''
//     // const paragraph = document.createElement('div')
//     // paragraph.classList.add('div')
//     // document.body.appendChild(paragraph)


//  dates.forEach((itemFulldescription) => {


//     const fullDesc = document.createElement('div')
//     fullDesc.classList.add('item-fullDesc')

//     const {title, date, fullDescription, image, summary} = itemFulldescription
//     fullDesc.innerHTML = 
//     `<div class= "more-info">
//     <p class = "full-description">${fullDescription}</p>
//     <img class="picture" src="${image}" alt="descriptive image">
//     </div>`

//     document.body.appendChild(fullDesc)
// }
// )
// }

// document.querySelector(".more-info")
    
// }









