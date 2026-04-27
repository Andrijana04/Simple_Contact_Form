const form=document.getElementById("contactForm");
const error = document.getElementById("error");
form.addEventListener("submit",function (e)
{
    e.preventDefault()
    let first_name=document.getElementById("first-name").value;
    let last_name=document.getElementById("last-name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;

    if(first_name==="" || last_name==="" || message===""){
        error.textContent="All fields are required!";
        error.style.color="red";
        return;

    }
    if (!email.includes("@")){
        error.textContent="Invalid email!";
        error.style.color="red";
        return;
    }
    error.textContent="";
    alert("Message sent!")
});

