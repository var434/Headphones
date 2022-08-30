$(document).ready(function(){

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

})


const signUp = e => {
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        phone = document.getElementById('phone').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.name.toLowerCase() == name.toLowerCase() 
        );

    if(!exist){
        formData.push({ name, email, phone, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('name').focus();
        alert("Account Created.\n\nPlease Sign In");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "products.html";
    }
    e.preventDefault();
}


const  contact = e => {
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        phone = document.getElementById('phone').value,
        msg = document.getElementById('msg').value;

    let contactData = JSON.parse(localStorage.getItem('contactData')) || [];

    let exist = contactData.length && 
        JSON.parse(localStorage.getItem('contactData')).some(data => 
            data.name.toLowerCase() == name.toLowerCase() 
        );

    if(!exist){
        contactData.push({ name, email, phone, msg });
        localStorage.setItem('contactData', JSON.stringify(contactData));
        document.querySelector('form').reset();
        document.getElementById('name').focus();
        alert("successfully submitted");
    }
    else{
        alert("successfully submitted");
    }
    e.preventDefault();
}