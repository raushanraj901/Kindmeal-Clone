let navbar = () =>{
    return `<div class="nav_logo">
    <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="logo">
</div>
<div class="social_media_rediretion">
    <a href=""><i class="fa-solid fa-link"></i></a>
    <a href="https://www.facebook.com/KindMeal.my"><i class="fa-brands fa-facebook"></i></a>
    <a href="https://twitter.com/KindMeal"><i class="fa-brands fa-twitter"></i></a>
</div>
<div class="nav_login_signup">
    <p>Login</p>
    <button id="nav_social_facebook_button" class="nav_social_button">Facebook</button>
    <button id="nav_social_twitter_button" class="nav_social_button">Email</button>
    <p class="line">|</p>
    <a href="">Sign Up</a>
</div>`;
}

let categoryItems = () =>{
    return `<ul id="items_category_list">
    <li><a class="active" href="./index.html">Home</a></li>
    <li><a href="../meal_deal/meal.html">Meal Deals</a></li>
    <li><a href="">KindMoments</a></li>
    <li><a href="">Hot Picks</a></li>
    <li><a href="">Recipes</a></li>
    <li><a href="./Directory/directory.html">Directory</a></li>
    <li><a href="./Article/article.html">Articles</a></li>
    <li><a href="">Help</a></li>
</ul>`
}

export {navbar, categoryItems};