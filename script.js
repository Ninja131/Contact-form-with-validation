const name1 = document.querySelector("#name");
const phoneN = document.querySelector("#phoneN");
const email = document.querySelector("#email");
const para = document.querySelector("#para");
const btn = document.querySelector(".Button");
// const input_group = document.querySelectorAll(".input_group");
const logo = document.querySelector(".Contact_logo");


const Name_error = document.querySelector(".Name_error");
const Phone_error = document.querySelector(".Phone_error");
const Email_error = document.querySelector(".Email_error");
const para_error = document.querySelector(".para_error");
const Error_main = document.querySelector(".Error_main");

function validate_name(){
    Input_value = name1.value;

    if(Input_value.length ==0){
        Name_error.innerText = "Name is Required";
        return false;
    }
    else if(!Input_value.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        Name_error.innerText = "Write full name";
        return false;

    }
    
    Name_error.innerHTML ='<i class="fa-solid fa-circle-check success"></i>';
    return true;

};


function validate_Phone(){
    Input_value = phoneN.value;

    if(Input_value.length == 0){
         Phone_error.innerText = "Phone No. is Required";
        return false;
    }
    else if(Input_value.length !==10){
        Phone_error.innerText = "Write a valid phone Number";
        return false;

    }
    else if(!Input_value.match(/^[0-9]{10}$/)){
        Phone_error.innerText = "Only digits";
        return false;

    }
    
    
    Phone_error.innerHTML ='<i class="fa-solid fa-circle-check success"></i>';
    return true;
}


function validate_Email(){
    Input_value = email.value;
    
    if(Input_value == 0){
        Email_error.innerText = "Enter and email"
        return false;
    }
    else if (!Input_value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        Email_error.innerText = "Enter valid email"
        return false;
    }

    Email_error.innerHTML = '<i class="fa-solid fa-circle-check success"></i>';
    return true;
}


function validate_Text(){
    let Input_value = para.value;
    let Required_words = 60;
    let left = Required_words-Input_value.length;

   
     if(Input_value == 0){
        Email_error.innerText = "Enter your message"
        return false;
    }
    
    if(Input_value.length <60){
         para_error.innerText = left+" more letters Required";
         return false;

    }

    para_error.innerHTML = '<i class="fa-solid fa-circle-check success"></i>';
    return true;

}


function Validate_form(){
    if(validate_name() && validate_Phone() && validate_Email() && validate_Text()){
        console.log("form Submitted");
        Error_main.innerText = "";
        btn.innerText = "Form Submitted";
        btn.disabled = true;
        btn.style.backgroundColor = "rgba(158, 158, 158, 0.359)";
        name1.value = "";
        Name_error.innerText = "";

        phoneN.value = "";
        Phone_error.innerText = "";

        email.value = "";
        Email_error.innerText = "";

        para.value = "";
        para_error.innerText = "";

        logo.style.backgroundColor = "green";
        logo.innerHTML = '<i class="fa-solid fa-circle-check white"></i>';
    }
    else{
        Error_main.innerText = "Pleae fix Error";
    }
}

