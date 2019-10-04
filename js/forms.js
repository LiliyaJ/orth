/*Form function -- open -- close if clicked somewhere else */

/*====== Express Form ======*/

let button = document.querySelectorAll('.express-popup');
const express_form = document.querySelector('.express-form-box');
button.forEach(function(btn){
    btn.addEventListener('click', function(){
        express_form.style.display = 'block'; 
        closeBoxIfClickedOutside();
    });
});

/*====== Question Form ======*/

let question_button = document.querySelectorAll('.question-popup');
const question_form = document.querySelector('.question-form-box');
question_button.forEach(function(btn){
    btn.addEventListener('click', function(){
        question_form.style.display = 'block'; 
        closeBoxIfClickedOutside();
    });
});

/*====== check List Form ======*/

let cl_button = document.querySelectorAll('.check-list-popup');
const cl_form = document.querySelector('.check-list-form-box');
cl_button.forEach(function(btn){
    btn.addEventListener('click', function(){
        cl_form.style.display = 'block'; 
        closeBoxIfClickedOutside();
    });
});

/*===== Help method =====*/
function closeBoxIfClickedOutside(){
    if(express_form.style.display==='block' || question_form.style.display === 'block'|| cl_form.style.display === 'block'){
        document.addEventListener("click", function(event) {
            // If user clicks inside the element, do nothing
            if (event.target.closest('.express-form-box') || event.target.closest('.express-popup') || event.target.closest('.question-form-box') || event.target.closest('.question-popup') || event.target.closest('.check-list-popup') || event.target.closest('.check-list-popup')) {
                return;
            }else{
            // If user clicks outside the element, hide it!
            express_form.style.display = 'none'; 
            question_form.style.display = 'none'; 
            cl_form.style.display = 'none'; 
            };
        });
    }
}

