/* --------------------------- JS TOGGLE DROPDOWN --------------------------- */
/* ------------------------------ JQUERY OPTION ----------------------------- */
$(document).ready(function(){
    // jq to toggle sub-menu 
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        console.log('hellow');
        $(this).find('.dropdown').toggleClass('rotate')
    });
});