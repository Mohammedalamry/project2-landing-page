/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation, 
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// this varbile to get the ul elemet by id.
  let list_sections = document.querySelector('#navbar__list');
// this varbile to get All sections in page .
  let secctions = document.getElementsByTagName('section'); 
  // this varbile to get class home Bruger menu of div .
  let homebrugerMenue = document.querySelector('.homebruger');
  // this varbile to get the ul elemet.

  let list_hombruge = document.querySelector('.navbar__menu ul');
  // let bound ;
  // let x ,y;
  
  // let innerHtmlList =''
/**
 * End Global Variables
 * Start Helper Functions
 * 
 * 
 * 
*/
/**  
 *  @description this function is used to check if sections is nearst to the top of viewport 
 * and active the class if section nearts to top through scrolling event listiner. 

*/
 function checkElmentisinviewport(){
 
  for (let section of secctions){ 
    // section.classList.remove('your-active-class'); 
    console.log(section.id+ "this is top " +  section.getBoundingClientRect().top  )
    // section.classList.remove('your-active-class');
    // bound =  section.getBoundingClientRect().top;
    if( section.getBoundingClientRect().top<100&& section.getBoundingClientRect().top>= -200){
      section.classList.add('your-active-class');}
      else{section.classList.remove('your-active-class'); }    
  } 



 }

// add event listener for scroll and call the checkElmentisinviewport method
window.addEventListener('scroll', checkElmentisinviewport);
// console.log(bound);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
  for (let section of secctions){  
    // toget section numbers by data-nav
    let secNum = section.getAttribute('data-nav');
  // let secNum = section.dataset.nav;
  // let secId = section.id ;
// add sections nav list to Unorder list 
  list_sections.innerHTML+= `<li><a class=menu__link >${secNum}</a></li>`;
  //revome the active class of all sections
  section.classList.remove('your-active-class')
  }
  
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
  function scrollTosectionLinkClick (eve) { 
 

 if (eve.target.matches('a.menu__link')){
  //  target anchore elemnt 
  let an = eve.target
 // meddiquery to apply resposive web for moblie phone 
  let meddiquery =window.matchMedia('(max-width:35rem)');
  if(meddiquery.matches){
  list_hombruge1.style.display='none';}

  eve.preventDefault();
    console.log(an)
  console.log('ancclicked'+ an.innerHTML )
    // let d =   an.getAttribute("dataset.nav");
    // console.log(d+'h')
  for(let section of secctions){

    if(section.dataset.nav == an.innerHTML){
    section.scrollIntoView({block:"start" , behavior:"smooth"})
   section.classList.add('your-active-class')
    //  x= section.getBoundingClientRect().x
    //  y= section.getBoundingClientRect().y
    //  console.log(x)
    // console.log(y)
    // window.scrollTo({top:section.getBoundingClientRect().y,
    //  left:section.getBoundingClientRect().x,
    //  behavior: "smooth"
    // });
    
    } 
    else {  section.classList.remove('your-active-class')  }

     
    
    }
  



 }
 


     }
// add envent lisiner for cliclk to scroll to a section after click
list_sections.addEventListener("click",scrollTosectionLinkClick);


// homebruger menue show 
let list_hombruge1 = document.querySelector('.navbar__menu ul');
/**
 *  @description this a function that to  display a list of nav bar as homebrugerMenue
 
 */
 
 
function homebrugerMenueShow (event) {
  if (event.target.matches('.homebrugermenue')){ 
    // let an = event.target

    // console.log("hjk")
    event.preventDefault();

    // an.style.display='none';
  
    list_hombruge1.style.display='flex';
    // list_hombruge1.classList.toggle('.homebrugermenue')

}}


// add event Listener  as click and call homerbrugerMenueshow method 
homebrugerMenue.addEventListener("click",homebrugerMenueShow);

 


