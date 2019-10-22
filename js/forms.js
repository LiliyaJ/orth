
const express_form = document.querySelector('.express-form-box');
const question_form = document.querySelector('.question-form-box');
const cl_form = document.querySelector('.check-list-form-box');

document.addEventListener('click', function(event){
    if(event.target.matches('.express-popup')){
        express_form.style.display = 'block';
    }else if(event.target.matches('.question-popup')){
        question_form.style.display = 'block';
    }else if(event.target.matches('.check-list-popup')){
        cl_form.style.display = 'block';
    }
    closeBoxIfClickedOutside();
})

/*===== Help method =====*/

function closeBoxIfClickedOutside(){
    if(express_form.style.display==='block' || question_form.style.display === 'block'|| cl_form.style.display === 'block'){
        document.addEventListener("click", function(event) {
            // If user clicks inside the element, do nothing
            if ((event.target.closest('.express-form-box') || event.target.closest('.express-popup') || event.target.closest('.question-form-box') || event.target.closest('.question-popup') || event.target.closest('.check-list-popup') || event.target.closest('.check-list-form-box')) && !event.target.matches('.close-icon')) {
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

