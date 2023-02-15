import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
let menuElt= document.querySelector('.header__menu');
let menuItem= [...document.querySelectorAll('.menu__item')]
let subMenu= [...document.querySelectorAll('.submenu')];

// show top position of  header submenu
menuItem.forEach((item,index,arr)=>{
    item.addEventListener('mousemove',function(e){
       arr.forEach(el=> el.classList.remove('active'));
       let innerHeight= parseFloat(getComputedStyle(menuElt).height) + parseFloat(getComputedStyle(menuElt).paddingBottom)
        item.querySelector('.submenu').style.top=`${innerHeight + 6}px`
       item.classList.add('active')
       
    })
    item.addEventListener('mouseleave',function(e){
    
      setTimeout(()=>  item.classList.remove('active'),300)
        
    })
})

// hide top position of  header submenu
let submenus= [...document.querySelectorAll('.submenu')];
submenus.forEach((subMenu,index,arr)=>{
    subMenu.addEventListener('mouseenter',function(e){
        this.setAttribute('id','menu-active')
    })
    subMenu.addEventListener('mouseleave',function(e){
       setTimeout(()=> this.removeAttribute('id','menu-active'),500)
    })
})


let introFormElt= document.querySelector('.form-intro')
// introFormElt.style.right=getComputedStyle(introFormElt).width

// set value range input intro
let valueRangeIntroElt= document.querySelector('.form-intro__surface-value')
let inputRangeIntro= document.querySelector('.form-intro__surface input')
valueRangeIntroElt.innerText= inputRangeIntro.value

inputRangeIntro.addEventListener('input',function(e){
    valueRangeIntroElt.innerText='';
    valueRangeIntroElt.innerText=this.value;

})

//


const swiper = new Swiper('.slider-remonte .swiper',{
    spaceBetween: 25,

    pagination: {
        el: '.slider-remonte .slider-pagination',
        clickable:true
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 'auto',
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2.4

        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,

        }
      }

})

// slider portfolio
const swiperPortfolio = new Swiper('.item-tab__slider .swiper',{
    // Navigation arrows

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      768:{
        slidesPerView: 'auto',
        centeredSlides:true
      }
    }
})


// tab script
let tabTitle= [...document.querySelectorAll('.tab__title')];
let tabContent= [...document.querySelectorAll('.tab__content')];

tabTitle.forEach((item,index,arr)=>{
 item.addEventListener('click',function(e){
  let currentIdActive= this.dataset.tabindex;
    arr.forEach(elt=> elt.classList.remove('active'))
    this.classList.add('active')

    tabContent.forEach((tab,index,arr)=>{
      tab.classList.remove('active')

      if(tab.dataset.tabindex === currentIdActive){
        tab.classList.add('active')
      }
    })
 })

})

let imgPreview =[...document.querySelectorAll('.house-detail__preview')]

imgPreview.forEach((img,index,arr)=>{
  img.addEventListener('click',function(e){
    let activeImgSrc= this.querySelector('img').src;
      arr.forEach(elt=>elt.classList.remove('active'))
      this.classList.add('active')

      document.querySelector('.house-detail__img img').src=activeImgSrc
  })

})
// preview img porfolio


