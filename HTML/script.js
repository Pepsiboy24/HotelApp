let btn = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

let container = document.querySelector('.container');

let secondCard = document.querySelector('.second-card');
let closeBtn = document.querySelector('.closeBtn');
let cardText = document.querySelector('.card-text-popup');
let popupHeader = document.querySelector('.popup-header');
let highlightsCard = document.querySelector('.highlights');
let highlightsList = document.querySelector('.hightlights-list');
let comfortList = document.querySelector('.comfort-list');
let convenienceList = document.querySelector('.convenience-list');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
const li7 = document.createElement('li');
const li8 = document.createElement('li');

const li9 = document.createElement('li');
const li10 = document.createElement('li');
const li11 = document.createElement('li');
const li12 = document.createElement('li');
const li13 = document.createElement('li');
const li14 = document.createElement('li');
const li15 = document.createElement('li');
const li16 = document.createElement('li');
const li17 = document.createElement('li');
const li18 = document.createElement('li');
const li19 = document.createElement('li');
const li20 = document.createElement('li');

const li21 = document.createElement('li');
const li22 = document.createElement('li');
const li23 = document.createElement('li');
const li24 = document.createElement('li');
const li25 = document.createElement('li');
const li26 = document.createElement('li');
const li27 = document.createElement('li');
const li28 = document.createElement('li');
const li29 = document.createElement('li');
const li30 = document.createElement('li');
const li31 = document.createElement('li');
const li32 = document.createElement('li');


btn.addEventListener('click', ()=>{
	// container.classList.add('none')
	secondCard.classList.add('open');
	cardText.textContent = `Panoramic city view, high floor, art deco-style room, Executive Lounge access. You'll find a great view of the city from the large windows of this Executive room. Executive room guests also get access to the Executive Lounge, open daily for complimentary breakfast, snacks throughout the day and drinks and canapés in the evening plus private check in and check out. Keep in touch with friends and family using our WiFi, or relax on one of the chaise chairs with your complimentary fruit and watch a movie on the 48-inch TV. Freshen up in the spacious bathroom that features a bathtub, toilet and bidet before slipping into your bathrobe and slippers. Sleeps 2 adults and 1 child. Rooms on the 10th floor require additional supplement.`;
	popupHeader.textContent =`KING EXECUTIVE ROOM`;
	// highlightsCard.textContent = `Room Highlights`

	highlightsList.appendChild(li1);
    highlightsList.appendChild(li2);
    highlightsList.appendChild(li3);
    highlightsList.appendChild(li4);
    highlightsList.appendChild(li5);
    highlightsList.appendChild(li6);
    highlightsList.appendChild(li7);
    highlightsList.appendChild(li8);

    comfortList.appendChild(li9);
    comfortList.appendChild(li10);
    comfortList.appendChild(li11);
    comfortList.appendChild(li12);
    comfortList.appendChild(li13);
    comfortList.appendChild(li14);
    comfortList.appendChild(li15);
    comfortList.appendChild(li16);
    comfortList.appendChild(li17);
    comfortList.appendChild(li18);
    comfortList.appendChild(li19);
    comfortList.appendChild(li20);

    convenienceList.appendChild(li21);
    convenienceList.appendChild(li22);
    convenienceList.appendChild(li23);
    convenienceList.appendChild(li24);
    convenienceList.appendChild(li25);
    convenienceList.appendChild(li26);
    convenienceList.appendChild(li27);
    convenienceList.appendChild(li28);
    convenienceList.appendChild(li29);
    convenienceList.appendChild(li30);
    // convenienceList.appendChild(li31);
    // convenienceList.appendChild(li32);

    li1.textContent = `Sleeps 2`
    li2.textContent = `Hand-held shower`
    li3.textContent = `Hairdryer`
    li4.textContent = `Iron/ironing board`
    li5.textContent = `Bathrobe`
    li6.textContent = `Bath slippers`
    li7.textContent = `Mini bar`
    li8.textContent = `Air conditioning`

    li9.textContent = `Sleeps 2`
    li10.textContent = `Bathrobe`
    li11.textContent = `Bath slippers`
    li12.textContent = `Air conditioning`
    li13.textContent = `Bidet`
    li14.textContent = `Black-Out Curtains`
    li15.textContent = `Complimentary Beverage`
    li16.textContent = `Duvet Covers`
    li17.textContent = `Ergonomic Desk Chair`
    li18.textContent = `TV-Standard Network`
    li19.textContent = `Widescreen Television`
    li20.textContent = `Workstation`

    li21.textContent = `Hand-held shower`
    li22.textContent = `Hairdryer`
    li23.textContent = `Iron/ironing board`
    li24.textContent = `Bathroom amenities`
    li25.textContent = `Mini bar`
    li26.textContent = `24 Hour Housekeeping`
    li27.textContent = `Newspaper Deliv'd M-F (Local)`
    li28.textContent = `Telephone - Two Phones`
    li29.textContent = `Telephone - Voice Mail`
    li30.textContent = `Telephone - in Bath`
    // li31.textContent = `Widescreen Television`
    // li32.textContent = `Workstation`
});
// btn2.addEventListener('click', ()=>{
// 	secondCard.classList.add('open')
// });
// btn3.addEventListener('click', ()=>{
// 	secondCard.classList.add('open')
// });
closeBtn.addEventListener('click', ()=>{
	secondCard.classList.remove('open')
});