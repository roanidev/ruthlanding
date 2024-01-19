// js for mobile navbar toggler 
var mobilebar = document.getElementById('togglerbar')
function mobileNav() {
    var mobile = document.querySelector(".right");
    if (mobile.style.display === "none") {
      mobile.style.display = "flex";
    } else {
      mobile.style.display = "none";
    }
  }
  // js for mobile navbar toggler 






/* -------------------------------------------------------------------------- */
/*                   ES6 function structure (arrow function)                  */
/* -------------------------------------------------------------------------- */
const openSidebar = () => {
  /* ------------------------- get the needed elements ------------------------ */
  let sidebar = document.querySelector('.sidebar');
  let maincontent = document.querySelector('.mainwrapper');

  
  if(sidebar.classList.contains('removeSidebar') && maincontent.classList.contains('maincontent-full')){
    sidebar.classList.remove('removeSidebar');
    maincontent.classList.remove('maincontent-full')
  }else{
    sidebar.classList.add('removeSidebar');
    maincontent.classList.add('maincontent-full')
  }

}

