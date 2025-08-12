const mobileNav= () =>{

const header_btn= document.querySelector(".header__bars");
const mobile_nav = document.querySelector(".mobile-nav");
const mob_links = document.querySelectorAll(".mobile-nav__link");

let ismobileNavopen = false;

header_btn.addEventListener('click',()=>{
    ismobileNavopen=!ismobileNavopen;
    if(ismobileNavopen){
    mobile_nav.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    } 
    else{
    mobile_nav.style.display = 'none';
    document.body.style.overflow = 'auto';
    } 
});

mob_links.forEach(link =>{
    link.addEventListener('click',()=>{
    ismobileNavopen=false;
    mobile_nav.style.display = 'none';
    document.body.style.overflow = 'auto';
    });
});

};

export default mobileNav;