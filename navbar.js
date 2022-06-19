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
    <button onclick="https://www.facebook.com/KindMeal.my"; id="nav_social_facebook_button" class="nav_social_button">Facebook</button>
    <button id="nav_social_twitter_button" class="nav_social_button"><a id= "signin"href="../login-signup/login.html">Email</a></button>
    <p class="line">|</p>
    <a href="../login-signup/popuppage.html">Sign Up</a>
</div>`;
}

let categoryItems = () =>{
    return `<ul id="items_category_list">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../meal_deal/meal.html">Meal Deals</a></li>
    <li><a href="../Kindmoment Page/kindmoment.html">KindMoments</a></li>
    <li><a href="../Hot Pics page/hot.html">Hot Picks</a></li>
    <li><a href="../Recipe Page/recipes.html">Recipes</a></li>
    <li><a href="../Directory/directory.html">Directory</a></li>
    <li><a href="../Article/article.html">Articles</a></li>
    <li><a href="../login-signup/help.html">Help</a></li>
</ul>`
}

export {navbar, categoryItems};