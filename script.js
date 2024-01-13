


var feedback_form = document.forms.feedback_form;
console.log(feedback_form);

var error = document.getElementById('error');

var uname =feedback_form.username;
console.log(uname);

var feedback = feedback_form.feeadback_type;
console.log(feedback);

var email = feedback_form.emailid;
var discription = feedback_form.discription;
var checkbox = feedback_form.checkbox;






feedback_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("clicked");


setTimeout(()=>{
console.log("ahalya");
error.classList.remove('sty');
error.style.backgroundColor="";
error.innerText="";
},1500)




    if(uname.value == "" ){
        error.innerText="Enter a username";
        error.classList.add('sty')
    }else if(feedback.value == ''){
          error.innerText="Select the feedback type";
        error.classList.add('sty')
    }else if(email.value == ""){
        error.innerText="Enter a email id";
        error.classList.add('sty')

    }else if(discription.value == ''){
        error.innerText="pleace few lines of discription";
        error.classList.add('sty')


    }else if(checkbox.checked == false){
        error.innerText="accept the all items in the form";
        error.classList.add('sty')
    }else{
        error.innerText ="form submitted successfully";
        error.style.backgroundColor="green";
        error.style.color='white';

    }   
})


