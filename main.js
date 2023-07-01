/*
  Started On june 30th
*/

window.addEventListener('load', function(){
  
  //Variables 
const welcomeText = document.getElementById('welcomeText');
const buttonEnter = document.getElementById('enter');
const logo = document.getElementById('logoImg');
const logoText = document.getElementById('logo');
const loadingText = document.getElementById('loadingScreen');
const span1 = document.getElementById('part1');
const span2 = document.getElementById('2');
const span3 = document.getElementById('3');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');
const imgOfMars = document.getElementById('imgOfMars');
const imgOfMars1 = document.getElementById('imgOfMars1');
const imgOfMars2 = document.getElementById('imgOfMars2');
const imgOfMars3 = document.getElementById('imgOfMars3');
const building = document.getElementById('buildinprogress');
const footer = document.getElementById('footer');
const displayNone = 'none';
const visibleHidden = 'hidden';

 //Timeout Of Elements
 
setTimeout(hidingElements, 2000);

//Functions Of ClearTiming

function clearTime(){
  clearTimeout(hidingElements);
}

//Hiding Elements

function hidingElements(){
  buttonEnter.style.opacity = 1;
  welcomeText.style.transform = 'scale(0%)';
  buttonEnter.style.transform = 'scale(100%)';
  clearTime();
}

//After Clicking The Button

buttonEnter.addEventListener('click', function(){
  buttonEnter.style.transform = 'scale(0%)';
  loadingText.style.transform = 'scale(100%)';
  logo.classList.add('added');
  setTimeout(loadingScreens, 1000);
});

//Loading Text

function loadingScreens(){
  span3.style.opacity = 0;
  span2.style.opacity = 0;
  span1.style.opacity = 0;
  span3.style.transitionDelay = '0.3s';
  span2.style.transitionDelay = '0.7s';
  span1.style.transitionDelay = '1s';
  clearTimeout(loadingScreens);
  setTimeout(removeLoadingText, 1000);
  setTimeout(secondSection, 2000);
}

//Removing Text After a certain period of time

function removeLoadingText(){
  loadingText.style.transform = 'scale(0%)';
  footer.style.display = 'flex';
  clearTimeout(removeLoadingText);
  logo.classList.remove('added');
}

//Reveal of Second Section

function secondSection(){
  section1.style.opacity = 0;
  section1.style.width = 0;
  section1.style.height = 0;
  section1.style.display = 'none';
  section1.style.visibility = 'hidden';
  section2.style.transform = 'scale(100%)';
  section2.style.display = 'flex';
  section3.style.display = 'flex';
  section4.style.display = 'flex';
  section5.style.display = 'flex';
}

//Function Of elements of scrolling

window.onscroll = function() {
  scrollRotate();
};

//Rotating images on scroll

function scrollRotate() {
  let imageOfLogo = document.getElementById("logoImg");
  imageOfLogo.style.transform = "rotate(" + window.pageYOffset / 2.5 + "deg)";
  imgOfMars.style.transform = "rotate(" + window.pageYOffset / 25 + "deg)";
  imgOfMars2.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)";
  imgOfMars3.style.transform = "rotate(" + window.pageYOffset / 20 + "deg)";
  imgOfMars1.style.transform = "rotate(" + window.pageYOffset / 30 + "deg)";
 }
building.addEventListener('click', function(){
  alert('Still In Development! We will update it soon! Thanks for your patience!')
})
});
/*Ended on July 2 2:30
//By shaikAli
//All right reserved.
//2023
//Thank you!
//Next one is going more awesome
*/