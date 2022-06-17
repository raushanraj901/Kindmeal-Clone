let bollo=JSON.parse(localStorage.getItem("madta"));

let mymouse=()=>{
    event.preventDefault();
    let cake={
        uemail:lol.email.value,
        upass:lol.password.value,
    }
    if(bollo==null){
        alert("Create Account");
    }
    else if(bollo.email==cake.uemail && bollo.password==cake.upass){
        alert("Login Successful");
        window.location.href="index.html";
    }
    else{
        alert("User Does'nt Exist");
    }
}
document.querySelector("form").addEventListener("submit",mymouse);