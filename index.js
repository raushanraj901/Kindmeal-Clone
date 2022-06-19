import { navbar , categoryItems} from "./navbar.js";
let n = document.getElementById("navbar");
// let cItems = document.getElementById("items_category");
// cItems.innerHTML = categoryItems();
n.innerHTML = navbar();

import {footer}  from "./footer/footercomponents/footer.js"
let foot = document.getElementById("footer");
foot.innerHTML = footer();


let homeData = data.Page[0].Home_Page[0].latestNewsAndVideo;
console.log(homeData)

let latestNewsData = data.Page[0].Home_Page[0].latestNewsAndVideo;
let yummyMomentsData = data.Page[0].Home_Page[0].Yummylicious_Moments;
let discoverRestaurentsData = data.Page[0].Home_Page[0].Discover_Restaurants;
let amazingSuperherosData = data.Page[0].Home_Page[0].Amazing_Superheroes;


// Slide Show ************************* Start here *************************
let i=0;
let id;

let slideData = data.Page[0].Home_Page[0].slidingImg;

let productContainer = document.getElementById("productSlide");
let logoContainer = document.getElementById("logoSlide");

let imgs = document.createElement('img');
imgs.src = slideData[i].image;
imgs.classList.add("slido_product_img")

let imgs2 = document.createElement('img');
imgs2.src = slideData[i].sideLogo;
imgs2.classList.add("slido_logo_img")

let p1 = document.createElement('p');
p1.innerText = slideData[i].offer

productContainer.append(imgs, p1);
logoContainer.append(imgs2);
productContainer.addEventListener("click", function(){
    let obj = {
        image:slideData[i-1].image,
        offer:slideData[i-1].offer,
        sideLogo:slideData[i-1].sideLogo,
        backgroundImg:slideData[i-1].backgroundImg,
        profilePic:slideData[i-1].profilePic,
        name: slideData[i-1].name,
        details: "Nourish your body and delight your taste buds with our tasty selection of vegetarian dishes. Choose from any of our menu items, including: • Signature Steamboat with 6 flavours (Tom Yum, Cheese, Seaweed, Herbal Soup, Burdock & Yam Salty Vegetable)• Rice Sets • Noodle • Side Dishes • Desserts • Beverages Note: Discount is applicable on weekdays (Mon - Fri) only. Not valid for set lunch and promotional items.",
        location: "31, Jalan SS21/56B, Damansara Utama , 47400 Petaling Jaya, Selangor.Opens: Mon - Sun: 11am - 3pm; 5.30pm - 10pmTel: 03-7497 6356 / 017-573 9796 / 012-3833 996",
        terms_and_conditions : "Coupon Validity	Must use coupon by Jun 22nd, 2022 Exclusivity	Valid with other KindMeal.my coupons only Reservation	Not required Repeat Customers	You can get this coupon once per week Dining Terms No Service Charge & SST Discount is applicable on weekdays (Mon - Fri) only Discount is not applicable for set lunch and promotional items",
        rating: "(58 Votes)"
    }

    localStorage.setItem("slideShowData", JSON.stringify(obj));
    window.location.href = "slideshowdetails.html";
})

i++


function slideShow(){

    id = setInterval(function () {
        if(i===slideData.length){
            i=0;
        }
        productContainer.innerHTML = null;
        logoContainer.innerHTML = null;


        let image = slideData[i].image;
        let image2 = slideData[i].sideLogo;

        let img = document.createElement('img');
        img.src = image;
        img.classList.add("slido_product_img")

        let img2 = document.createElement('img');
        img2.src = image2;
        img2.classList.add("slido_logo_img")

        let p = document.createElement('p');
        p.innerText = slideData[i].offer
        


        productContainer.append(img, p);
        logoContainer.append(img2);
        productContainer.addEventListener("click", function(){
            let obj = {
                image:slideData[i-1].image,
                offer:slideData[i-1].offer,
                sideLogo:slideData[i-1].sideLogo,
                backgroundImg:slideData[i-1].backgroundImg,
                profilePic:slideData[i-1].profilePic,
                name: slideData[i-1].name,
                details: "Nourish your body and delight your taste buds with our tasty selection of vegetarian dishes. Choose from any of our menu items, including: • Signature Steamboat with 6 flavours (Tom Yum, Cheese, Seaweed, Herbal Soup, Burdock & Yam Salty Vegetable)• Rice Sets • Noodle • Side Dishes • Desserts • Beverages Note: Discount is applicable on weekdays (Mon - Fri) only. Not valid for set lunch and promotional items.",
                location: "31, Jalan SS21/56B, Damansara Utama , 47400 Petaling Jaya, Selangor.Opens: Mon - Sun: 11am - 3pm; 5.30pm - 10pmTel: 03-7497 6356 / 017-573 9796 / 012-3833 996",
                terms_and_conditions : "Coupon Validity	Must use coupon by Jun 22nd, 2022 Exclusivity	Valid with other KindMeal.my coupons only Reservation	Not required Repeat Customers	You can get this coupon once per week Dining Terms No Service Charge & SST Discount is applicable on weekdays (Mon - Fri) only Discount is not applicable for set lunch and promotional items",
                rating: "(58 Votes)"
            }

            localStorage.setItem("slideShowData", JSON.stringify(obj));
            window.location.href = "slideshowdetails.html";
        })


        i++;

    }, 3000);
}

slideShow();


function sildoProducts(){
    let container = document.getElementById("silo_product");

    slideData.forEach((el) => {
        let div = document.createElement('div');

        let img = document.createElement('img')
        img.src = el.image;

        div.append(img);
        container.append(div);
    });
}
sildoProducts();

// Slideshow *********************Ends Here ***********************

// Append Function

function append(container, data){

    data.forEach((el) => {
        let div = document.createElement('div');

        let img = document.createElement('img')
        img.src = el.imgUrl;

        let des = document.createElement('p')
        des.innerText = el.discription;

        div.append(img, des);
        container.append(div);
        div.addEventListener("click", function(){
            let obj = {
                image:el.imgUrl,
                offer:el.offer,
                sideLogo:el.imgUrl,
                backgroundImg:el.imgUrl,
                profilePic:el.imgUrl,
                name: el.discription,
                details: "Nourish your body and delight your taste buds with our tasty selection of vegetarian dishes. Choose from any of our menu items, including: • Signature Steamboat with 6 flavours (Tom Yum, Cheese, Seaweed, Herbal Soup, Burdock & Yam Salty Vegetable)• Rice Sets • Noodle • Side Dishes • Desserts • Beverages Note: Discount is applicable on weekdays (Mon - Fri) only. Not valid for set lunch and promotional items.",
                location: "31, Jalan SS21/56B, Damansara Utama , 47400 Petaling Jaya, Selangor.Opens: Mon - Sun: 11am - 3pm; 5.30pm - 10pmTel: 03-7497 6356 / 017-573 9796 / 012-3833 996",
                terms_and_conditions : "Coupon Validity	Must use coupon by Jun 22nd, 2022 Exclusivity	Valid with other KindMeal.my coupons only Reservation	Not required Repeat Customers	You can get this coupon once per week Dining Terms No Service Charge & SST Discount is applicable on weekdays (Mon - Fri) only Discount is not applicable for set lunch and promotional items",
                rating: "(58 Votes)"
            }

            localStorage.setItem("slideShowData", JSON.stringify(obj));
            window.location.href = "slideshowdetails.html";
        })
    });
}

//  -----Append Function Ends

// latest news and video **********starts here***************

function latestNewsAndVideo (){
    let container = document.getElementById('latestNewsBody');
    append(container, latestNewsData);
}
latestNewsAndVideo();

// ***********************************************************

// Yummylicious Moments 

function YummyliciousMoments (){
    let container = document.getElementById('yummyMomentBody');

    yummyMomentsData.forEach((el) => {
        let div = document.createElement('div');

        let img = document.createElement('img')
        img.src = el.imgUrl;

        let name = document.createElement('p');
        name.innerText = el.name;

        let des = document.createElement('p')
        des.innerText = el.discription;

        div.append(img, name, des);
        container.append(div);
        div.addEventListener("click", function(){
            let obj = {
                image:el.imgUrl,
                offer:el.offer,
                sideLogo:el.imgUrl,
                backgroundImg:el.article.backgroundImg,
                profilePic:el.article.profilePic,
                name: el.discription,
                details: "Nourish your body and delight your taste buds with our tasty selection of vegetarian dishes. Choose from any of our menu items, including: • Signature Steamboat with 6 flavours (Tom Yum, Cheese, Seaweed, Herbal Soup, Burdock & Yam Salty Vegetable)• Rice Sets • Noodle • Side Dishes • Desserts • Beverages Note: Discount is applicable on weekdays (Mon - Fri) only. Not valid for set lunch and promotional items.",
                location: "31, Jalan SS21/56B, Damansara Utama , 47400 Petaling Jaya, Selangor.Opens: Mon - Sun: 11am - 3pm; 5.30pm - 10pmTel: 03-7497 6356 / 017-573 9796 / 012-3833 996",
                terms_and_conditions : "Coupon Validity	Must use coupon by Jun 22nd, 2022 Exclusivity	Valid with other KindMeal.my coupons only Reservation	Not required Repeat Customers	You can get this coupon once per week Dining Terms No Service Charge & SST Discount is applicable on weekdays (Mon - Fri) only Discount is not applicable for set lunch and promotional items",
                rating: "(58 Votes)"
            }

            localStorage.setItem("slideShowData", JSON.stringify(obj));
            window.location.href = "slideshowdetails.html";
        })
    });
}
YummyliciousMoments();

// *******************

//  Discover Restaurents
function DiscoverRestaurants (){
    let container = document.getElementById('discoverRestaurentsBody');

    discoverRestaurentsData.forEach((el) => {
        let div = document.createElement('div');

        let img = document.createElement('img')
        img.src = el.imgUrl;

        let name = document.createElement('p');
        name.innerText = el.name;

        div.append(img, name);
        container.append(div);
        div.addEventListener("click", function(){
            let obj = {
                image:el.imgUrl,
                offer:el.offer,
                sideLogo:el.imgUrl,
                backgroundImg:el.article.backgroundImg,
                profilePic:el.article.profilePic,
                name: el.article.name,
                details: "Nourish your body and delight your taste buds with our tasty selection of vegetarian dishes. Choose from any of our menu items, including: • Signature Steamboat with 6 flavours (Tom Yum, Cheese, Seaweed, Herbal Soup, Burdock & Yam Salty Vegetable)• Rice Sets • Noodle • Side Dishes • Desserts • Beverages Note: Discount is applicable on weekdays (Mon - Fri) only. Not valid for set lunch and promotional items.",
                location: "31, Jalan SS21/56B, Damansara Utama , 47400 Petaling Jaya, Selangor.Opens: Mon - Sun: 11am - 3pm; 5.30pm - 10pmTel: 03-7497 6356 / 017-573 9796 / 012-3833 996",
                terms_and_conditions : "Coupon Validity	Must use coupon by Jun 22nd, 2022 Exclusivity	Valid with other KindMeal.my coupons only Reservation	Not required Repeat Customers	You can get this coupon once per week Dining Terms No Service Charge & SST Discount is applicable on weekdays (Mon - Fri) only Discount is not applicable for set lunch and promotional items",
                rating: "(58 Votes)"
            }

            localStorage.setItem("slideShowData", JSON.stringify(obj));
            window.location.href = "slideshowdetails.html";
        })
    });
}
DiscoverRestaurants();

// *******************

//  Amazing Superheros
function amazingSuperheroes (){
    let container = document.getElementById('amazingSuperHerosBody');

    amazingSuperherosData.forEach((el) => {
        let div = document.createElement('div');

        let img = document.createElement('img')
        img.src = el.imgUrl;

        let name = document.createElement('p');
        name.innerText = el.name;

        div.append(img, name);
        container.append(div);
        div.addEventListener("click", function(){
            let obj = {
                image:el.imgUrl,
                offer:el.offer,
                sideLogo:el.imgUrl,
                backgroundImg:el.article.backgroundImg,
                profilePic:el.article.profilePic,
                name: el.article.name,
                details: "Nourish your body and delight your taste buds with our tasty selection of vegetarian dishes. Choose from any of our menu items, including: • Signature Steamboat with 6 flavours (Tom Yum, Cheese, Seaweed, Herbal Soup, Burdock & Yam Salty Vegetable)• Rice Sets • Noodle • Side Dishes • Desserts • Beverages Note: Discount is applicable on weekdays (Mon - Fri) only. Not valid for set lunch and promotional items.",
                location: "31, Jalan SS21/56B, Damansara Utama , 47400 Petaling Jaya, Selangor.Opens: Mon - Sun: 11am - 3pm; 5.30pm - 10pmTel: 03-7497 6356 / 017-573 9796 / 012-3833 996",
                terms_and_conditions : "Coupon Validity	Must use coupon by Jun 22nd, 2022 Exclusivity	Valid with other KindMeal.my coupons only Reservation	Not required Repeat Customers	You can get this coupon once per week Dining Terms No Service Charge & SST Discount is applicable on weekdays (Mon - Fri) only Discount is not applicable for set lunch and promotional items",
                rating: "(58 Votes)"
            }

            localStorage.setItem("slideShowData", JSON.stringify(obj));
            window.location.href = "slideshowdetails.html";
        })
    });
}
amazingSuperheroes();

// *******************


function offers (){
    let container = document.getElementById('offerContainer');

    offerData.forEach((el) => {
        let div = document.createElement('div');

        let img = document.createElement('img')
        img.src = el.image;

        let title = document.createElement('h4');
        title.innerText = el.title;

        let des = document.createElement('p');
        des.innerText = el.desc;

        div.append(img, title, des);
        container.append(div);
        div.addEventListener("click", function(){
            if(el.id == 1){
                window.location.href = "./meal_Deal/meal.html"
            }
            else if(el.id == 2){
                window.location.href = "./Kindmoment Page/kindmoment.html"
            }
            else if(el.id == 3){
                window.location.href = "./Directory/directory.html"
            }
            else if(el.id == 4){
                window.location.href = "./Kindmoment Page/kindmoment.html"
            }
        })
    });
}
offers();



