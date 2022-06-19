// navbar
import { navbar , categoryItems} from "../navbar.js";
let n = document.getElementById("navbar");
// let cItems = document.getElementById("items_category");
// cItems.innerHTML = categoryItems();
n.innerHTML = navbar();

// footer
import{footer} from "../footer/footercomponents/footer.js"

document.getElementById("footer").innerHTML=footer()



//art content headlines


import{artCont} from "../Article/Articlecomponents/artcontent.js"
document.getElementById("artContent").innerHTML=artCont()


// Article javascript

   
let articleArr = [
    { 
    image:"https://www.kindmeal.my/photos/article/19/19846-l.jpg",
    title: "Eathami Cafe , Balakong Pampers You With Healthy And Delicious Meals, Prepared F..",
    stitle:"by KindMeal.my",
    para:"EatHami Cafe 食坊, Balakong pampers you with healthy and delicious meals, prepared from fresh, quality ingredients. Feast on their signature teriyaki tofu brown rice, vegan soba, tofu milky pasta, Hami green tea waffle and more! Enjoy 10% off:",
    date:"16 June 2022",
    iframesrc:"https://www.kindmeal.my/photos/article/19/19846-l.jpg"
},
    { 
    image:"https://www.kindmeal.my/photos/article/19/19843-l.jpg",
    title: "🌶️vegan Food Adventures With Raw Chef Yin - Veggielicious Thai 🇹🇭",
    stitle:"by KindMeal.my",
    para:"Raw Chef Yin shares her spicylicious moment at Veggielicious Thai. Experience it now at 20% off:",
    date:"16 June 2022"
},
    { 
    image:"https://www.kindmeal.my/photos/article/19/19839-l.jpg",
    title: "Swedish Meatballs With Mash And Gravy 🇸🇪",
    stitle:"by KindMeal.my",
    para:"These vegan Swedish meatballs are packed full of punch and served on a bed of the creamiest mash with rich, creamy gravy.",
    date:"14 June 2022"
},
    { 
    image:"https://www.kindmeal.my/photos/article/19/19838-l.jpg",
    title: "Scientists Use Crispr Gene Editing To Alter The Social Behavior Of Animals.",
    stitle:"by KindMeal.my",
    para:"These vegan Swedish meatballs are packed full of punch and served on a bed of the creamiest mash with rich, creamy gravy.",
    date:"13 June 2022"
},
    { 
    image:"https://www.kindmeal.my/photos/article/19/19845-l.jpg",
    title: "Take A Stand For Animals. Take Them Off Your Plate. Govegan. Image Victoria De M..",
    stitle:"by Compassion Over Killing",
    para:"Take a stand for animals. Take them off your plate. #GoVegan Image: Victoria de Martigny / We Animals Media",
    date:"16 June 2022"
},
    { 
    image:"https://www.kindmeal.my/photos/article/19/19842-l.jpg",
    title: "Animals Are Loving, Sentient Beings, Many Of Whom Are Trapped In The Animal Agri..",
    stitle:"by Compassion Over Killing",
    para:"Take a stand for animals. Take them off your plate. #GoVegan Image: Victoria de Martigny / We Animals Media",
    date:"15 June 2022"
},
    { 
    image:"https://www.kindmeal.my/photos/article/19/19841-l.jpg",
    title: "A Message From Our President: Make Double The Impact!",
    stitle:"by Animal Equality",
    para:"You can make twice the impact for animals in factory farms & slaughterhouses by donating until June 30 ✨ Watch this message from our President Sharon Núñez Gough to learn more! A generous Animal Equality donor is matching donations for the month of June during our Matching Gift Challenge, meaning y..",
    date:"15 June 2022"
},
    { 
    image:"https://www.kindmeal.my/photos/article/19/19840-l.jpg",
    title: "Is Foie Gras Really Any Worse Than Factory Farmed Meat?",
    stitle:"by Compassion Over Killing",
    para:"“There’s a purity to the foie gras issue” that forces people to confront the suffering inflicted on animals raised for food, said Cheryl Leahy. This quote, along with the work we've done to combat foie gras production, was featured in @mbolotnikova's new piece for @gridnews in which she breaks down ..",
    date:"14 June 2022"
},
    { 
    image:"https://www.kindmeal.my/photos/article/19/19837-l.jpg",
    title: "Undercover Investigators Know The Depth Of Suffering That Animals Endure Each Da..",
    stitle:"by Animal Equality",
    para:"Undercover investigators know the depth of suffering that animals endure each day trapped on a factory farm. Your support means that our investigators like Sean can expose this cruelty to the public to help put it to an end. Right now all donations are being matched – please give today to make TWIC",
    date:"14 June 2022"
},


]
console.log(articleArr)
var aContent =document.getElementById("aContent");
articleArr.forEach(el => {
let img =document.createElement("img");
img.src=el.image;
img.setAttribute("class","setimg")
let head =document.createElement("h2");
head.innerText=el.title;
let stit = document.createElement("p");
stit.innerText=el.stitle;
let parag =document.createElement("p");
parag.innerText=el.para;
let tarik = document.createElement("p");
tarik.innerText=el.date;
let div1 =document.createElement("div");
div1.setAttribute("class","artdiv1")
let divimg =document.createElement("div");
divimg.setAttribute("class","artimgdiv");

let btn = document.createElement("h3");
btn.setAttribute("class","btnset");
btn.innerText ="View Video";
btn.addEventListener("click",function(){
    viewvideo(el)
})


let div = document.createElement("div");
div.setAttribute("class","artdiv")

let btndiv = document.createElement("div");
btndiv.setAttribute("class","btndiv")
btndiv.append(btn,tarik)
div1.append(head,stit,parag,btndiv)
divimg.append(img);
div.append(divimg,div1)
  
aContent.append(div)



});
function viewvideo(el){
     console.log(el)
    localStorage.setItem("viewvideocontent",JSON.stringify(el) )
    window.location.href="viewArtVideo.html"
}
