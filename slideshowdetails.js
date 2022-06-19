import { navbar , categoryItems} from "./navbar.js";
let n = document.getElementById("navbar");
let cItems = document.getElementById("items_category");
cItems.innerHTML = categoryItems();
n.innerHTML = navbar();

import {footer}  from "../footer/footercomponents/footer.js"
let foot = document.getElementById("footer");
foot.innerHTML = footer();



function slideShowDetails () {
    let data = JSON.parse(localStorage.getItem("slideShowData"));
    
    let backImgContainer = document.getElementById("background_image");
    let logoContainer = document.getElementById("slideLogo");
    let titleContainer = document.getElementById("title");
    let productDetailContainer = document.getElementById("productDetails");
    let locationContainer = document.getElementById("location");
    let termsContainer = document.getElementById("terms");
    let ratingsContainer = document.getElementById("ratings");

    let backImg = document.createElement("img");
    backImg.src = data.backgroundImg;
    backImgContainer.append(backImg);

    let logo = document.createElement("img");
    logo.src = data.profilePic;
    logoContainer.append(logo);

    let title = document.createElement('p');
    title.innerText = data.name;
    titleContainer.append(title);

    let details = document.createElement('p');
    details.innerText = data.details;
    productDetailContainer.append(details);

    let location = document.createElement('p');
    location.innerText = data.location;
    locationContainer.append(location);

    let terms = document.createElement('p');
    terms.innerText = data.terms_and_conditions;
    termsContainer.append(terms);

    let rating = document.createElement('p');
    rating.innerText = data.rating;
    ratingsContainer.append(rating);
    
}

slideShowDetails()