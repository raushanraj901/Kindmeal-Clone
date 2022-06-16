
 let dContent =document.getElementById("dContent")
let dirArr = [
    {
        dHead:"AENON The Health Kitchen",
        dmore:"AENON Health Kitchen, a hygienic restaurant that provides simple, palatable, wholesome & healthy food at affordable prices. We are dedicated in offering an extraordinary dining experience...",
        dAdd:"1, Jalan 4/93, Taman Miharja, Jalan Cheras, 55200 Kuala Lumpur, Wilayah Persekutuan",
        dphone:"03 - 9201 0972",
        dohrs:"Sun - Thu: 11am - 3pm & 6pm - 9pm; Fri - Sat: Closed",
        mapimg:"https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x200&maptype=roadmap&center=3.1228325000000000,101.7209007000000200&markers=color:red%7C3.1228325000000000,101.7209007000000200&key=AIzaSyDAYcLxbtZDWZXU9zbM_vm9F-ajLSEwfQE"

    }
]




dirArr.forEach(el=>{

    let showmore = "show more"
    


    let div1 =document.createElement("div");
    div1.setAttribute("class","ddata");

    let title=document.createElement("h2");
     title.innerText=el.dHead;
    let des = document.createElement("p");
    des.innerText = el.dmore + showmore;
    let line =document.createElement("input");
    line.setAttribute("class","line");
    let h3=document.createElement("h3");
   h3.innerText = "Address";
   let address = document.createElement("p");
   address.innerText = el.dAdd;
    let h3p= document.createElement("h3");
    h3p.innerText = "Phone";

    let phone = document.createElement("p");
    phone.innerText = el.dphone;
    
    let h32 = document.createElement("h3");
    h32.innerText = "Opening Hours";

    let ohrs =document.createElement("p");
    ohrs.innerText = el.dohrs;

    div1.append(title,des,line,h3,address,h3p,phone,h32,ohrs)

    let div2 = document.createElement("div");
    
    let img = document.createElement("img");
    img.src=el.mapimg;

    div2.append(img)


    let div = document.createElement("div");
    div.append(div1,div2);
    dContent.append(div)





})





