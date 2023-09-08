

(function(){
 
  'use strict';
  /**sticky header**/
  window.addEventListener('scroll', function() {
   const header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY);
  });
  
  /***navigation**/
  const nav = document.querySelector('#nav');
  const toggleBtn = document.querySelector('#toggle');
  const icon = document.querySelector('#toggle>img');
  const logo = document.querySelector('#logo>img');
  
  
  const cancel = "images/icon-close.svg";
  const hamburger = 'images/icon-hamburger.svg';
  const bodyScroll = document.querySelector('body');
  
  toggleBtn.addEventListener('click', function(){
    
    
  nav.classList.toggle('open');
    
    if (nav.classList.contains('open')){
    icon.src = cancel;
    
    bodyScroll.style.overflow = 'hidden';
    logo.src ='images/logo-bookmark-white.svg'
    
  } else {
    icon.src= hamburger;
    bodyScroll.style.overflow = 'visible';
    logo.src='images/logo-bookmark.svg'
  }
  });
  
  //tabs section
  
  
  const tabs = document.querySelectorAll('.tabs-container>ul>li>a');
  tabs.forEach(function(tab) {
    // body...
    tab.addEventListener('click', selectTab);
  });
  
  function selectTab(e) {
    // body...
    e.preventDefault();
    
    
    //for switching the active to the click one
    tabs.forEach(tab => {
      tab.removeAttribute('class');
    });
    
 event.target.className = 'active';
 
 //
 var thisTab = event.target.getAttribute('href');
 
 var thisContent = document.querySelector(thisTab);
 
 var prevTab = document.querySelector('.visible');
 
 prevTab.className ='visuallyhidden';
 
 prevTab.addEventListener('transitionend', function() {
  
prevTab.className= "hidden";
thisContent.className='visible visuallyhidden';

setTimeout(function() {
  // body...
  thisContent.classList.remove('visuallyhidden');
},20);



 }, {once:true});
 
  };
  
  
  
  
  //FAQS 
  
 const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');


const eachfaqs = document.querySelectorAll('.each-faq');
eachfaqs.forEach(eachfaq=>{
  eachfaq.addEventListener('click',()=>{
    
    eachfaq.classList.toggle('show');
    
   
   
  })
})

//form validation

const emailField = document.querySelector('.email-field');
const input = document.querySelector('.input');
const errorMsg = document.querySelector('.err-msg');

const errImg = document.querySelector('.err-img');


function validationAction() {
  // body...
  errorMsg.innerHTML = " Whoops! Make sure it's an email ";
    errImg.src ='images/icon-error.svg';
    emailField.style.background ='var(--soft-red)';
    
  
};



input.addEventListener('keyup',validateMail);



function validateMail() {
  // body...
  if (!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    
    validationAction();
    return false;
    
  } else {
    
    errorMsg.innerHTML = "  ";
    errImg.src ='';
    emailField.style.background ='';
    return true;
  }
};


  const submitBtn = document.querySelector('.submit');



submitBtn.addEventListener('click',function () {
  // body... 
  validateMail();
});



})();

 
