var typed = new Typed(".typing",{
    strings:["Software Engineering","Product Design","Data Science","Product Marketing","Data Analysis", "Product Management", ],
    typeSpeed:70,
    backSpeed:70,
    loop:true

}
)
window.addEventListener('scroll', function() {
    var header = document.querySelector('.sticky-header');
    var isSticky = header.classList.contains('sticky');
  
    if (window.pageYOffset > 0 && !isSticky) {
      header.classList.add('sticky');
    } else if (window.pageYOffset === 0 && isSticky) {
      header.classList.remove('sticky');
    }
  });
  

  const mainMenu = document.querySelector('.navbar');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .navbar li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
