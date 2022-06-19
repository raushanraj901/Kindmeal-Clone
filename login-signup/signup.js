function priya(email,re_email,password,username,select,dayone,year,country,state,male,female){
    this.email=email;
    this.re_email=re_email;
    this.password=password;
    this.username=username;
    this.select=select;
    this.dayone=dayone;
    this.year=year;
    this.country=country;
    this.state=state;
    this.male=male;
    this.female=this.female;

}
let bollo=JSON.parse(localStorage.getItem("madta"));
console.log(bollo)
let priyanka=()=>{
    event.preventDefault();
    let email=document.querySelector("#email").value;
    let re_email=document.querySelector("#re-email").value;
    let password=document.querySelector("#password").value;
    let username=document.querySelector("#username").value;
    let select=document.querySelector("#Month").value;
    let dayone=document.querySelector("#Day").value;
    let year=document.querySelector("#Year").value;
    let country=document.querySelector("#Country").value;
    let state=document.querySelector("#State").value;
    let male=document.querySelector("#Male").value;
    let female=document.querySelector("#Female").value;
    let giveoutput=new priya(email,re_email,password,username,select,dayone,year,country,state,male,female);
    localStorage.setItem("madta",JSON.stringify(giveoutput));
    window.location.href="valid.html";
}
document.querySelector("form").addEventListener("submit",priyanka);