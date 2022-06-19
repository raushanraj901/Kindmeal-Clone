// import { navbar , categoryItems} from "./navbar.js";
// let n = document.getElementById("navbar");
// let cItems = document.getElementById("items_category");
// cItems.innerHTML = categoryItems();
// n.innerHTML = navbar();


var posts = document.getElementById('posts');
var buttons1 = document.getElementById('buttons1');
var buttons2 = document.getElementById('buttons2');
const body = document.getElementById('posts');
var mockapi = [{ name:"Your Healthier Options",back:"https://www.kindmeal.my/photos/deal/7/717-5054-l.jpg",alt:"",votes:15,rating:4.5,discount:10,hotel:"EatHami Cafe" ,location: " Balakong, Selangor",desc:"EatHami Cafe pampers you with healthy and delicious meals, prepared from fresh, quality ingredients. Enjoy our delectable meat-fr..",
    expiry:"13 Days",
    egg:true,
    milk:true,
    drink:false,
    food:"burger",
    },{
        name:"Scrumptious Croutons",
        back:"https://www.kindmeal.my/photos/deal/5/529-2478-l.jpg",
        votes:11,
        rating:5,
        discount:20,
        hotel:"Croutons Cafe" ,
        location: "Seri Kembangan, Selangor",
        desc:" Croutons brings you a sumptuous variety of international cuisines. Indulge in any of the meat-free items from our menu below: • ..",
        expiry:"13 Days",
        egg:false,
        milk:true,
        drink:false,
        food:"pasta"
        },
        {
            name:"Dining Bowl Asian Delicacies",
            back:"https://www.kindmeal.my/photos/deal/3/383-1189-l.jpg",
            votes:0,
            rating:0,
            discount:20,
            hotel:"Dining Bowl " ,
            location: "Kuala Lumpur, Wilayah Persekutuan",
            desc:"Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality ingredients, in an envir..",
            expiry:"11 Days",
            egg:true,
            milk:true,
            drink:false,
            food:"breakfast",
            },
            {
                name:"Lovely Fusion Meals",
                back:"https://www.kindmeal.my/photos/deal/6/633-3874-l.jpg",
                votes:4,
                rating:4,
                discount:20,
                hotel:"Love Veggie" ,
                location: "Klang, Selangor",
                desc:"Enjoy a cozy dining experience where we pamper you with a variety of healthy, exquisite and natural foods. Select from any of our..",
                expiry:"13 Days",
                egg:true,
                milk:true,
                drink:false,
                food:"breakfast",
                },
                {
                    name:"Wellness Meal + 10% Off Organic Products",
                    back:"https://www.kindmeal.my/photos/deal/4/403-1390-l.jpg",
                    votes:4,
                    rating:4,
                    discount:20,
                    hotel:"Juve Wellness Puchong " ,
                    location: " Puchong, Selangor",
                    desc:"Select from Ala Carte meal items from the menu, served with a cup of Wellness Tea! Featured food menu items include: Juve Four Se..",
                    expiry:"7 Hours",
                    egg:false,
                    milk:false,
                    drink:false,
                    food:"burger",
                    },
                    {
                        name:"Creative Home-Style Dining",
                        back:"https://www.kindmeal.my/photos/deal/6/683-4718-l.jpg",
                        votes:9,
                        rating:5,
                        discount:15,
                        hotel:"Red House 2 " ,
                        location: "Cheras, Kuala Lumpur",
                        desc:"Indulge in creative, delicious meat-free cuisine within our cozy, home-style cafe! We only serve healthy Brown Rice Beehoon, Mixi..",
                        expiry:"13 Days",
                        egg:true,
                        milk:true,
                        drink:false,
                        food:"pasta",
                        },
                        {
                            name:"Waffles & Sweet Treats",
                            back:"https://www.kindmeal.my/photos/deal/7/716-5042-l.jpg",
                            votes:0,
                            rating:0,
                            discount:10,
                            hotel:"Lolla Paluza" ,
                            location: "Petaling Jaya, Selangor",
                            desc:"Chill out at our cozy hangout and indulge in our refreshing desserts and sweet treats! Enjoy any items from our menu: WAFFLE - O..",
                            expiry:"6 Days",
                            egg:true,
                            milk:true,
                            drink:false,
                            food:"salad",
                            }, {
                                name:"Churros,Coffee & Meals",
                                back:"https://www.kindmeal.my/photos/deal/4/467-2796-l.jpg",
                                votes:3,
                                rating:4.5,
                                discount:20,
                                hotel:"PCLO Cafe" ,
                                location: " Kuala Lumpur, Wilayah Persekutuan",
                                desc:"Think of Churros, think of PCLO Cafe! Each batch of eggless Churros is made with passion and from scratch in our kitchen. Which ..",
                                expiry:"5 Days",
                                egg:true,
                                milk:true,
                                drink:false,
                                food:"japanesekorean",
                                }, {
                                    name:"Flavours Around the World",
                                    back:"https://www.kindmeal.my/photos/deal/4/457-2109-l.jpg",
                                    votes:24,
                                    rating:5,
                                    discount:20,
                                    hotel:"The Black Cat Cafe" ,
                                    location: "Kuala Lumpur, Wilayah Persekutuan",
                                    desc:"Western and Asian cuisine, all prepared in our humble kitchen with utmost passion and love. On Weekdays, select ANY items from ..",
                                    expiry:"12 Days",
                                    egg:true,
                                    milk:true,
                                    drink:false,
                                    food:"japanesekorean"
                                    }, {
                                        name:"Nature Dining",
    back:"https://www.kindmeal.my/photos/deal/6/617-3503-l.jpg",
    votes:0,
    rating:0,
    discount:10,
    hotel:"Camp Forest " ,
    location: "Kepong, Selangor",
    desc:"Camp Forest presents a pure, natural dining ambience, serving you a healthy, delectable selection of fusion Chinese and Western de..",
    expiry:"12 Days",
    egg:true,
    milk:true,
    drink:false,
    food:"salad",
    },{
        name:"Healthy Personal Salad",
        back:"https://www.kindmeal.my/photos/deal/4/469-1822-m.jpg",
        votes:14,
        rating:4.5,
        discount:20,
        hotel:" Salad Atelier" ,
        location: "Bangsar, Wilayah Persekutuan",
        desc:"Enjoy a crispy, crunchy adult-sized salad prepared with fresh greens, fruits and healthy ingredients!",
        expiry:"11 days",
        egg:false,
        milk:true,
        drink:false,
        food:"salad",
        },
        {
            name:"Pies Conquer The World",
            back:"https://www.kindmeal.my/photos/deal/1/177-1118-l.jpg",
            votes:8,
            rating:5,
            discount:20,
            hotel:"A Pie Thing" ,
            location: "Petaling Jaya & 1 Branch",
            desc:"When Pies conquer the world, you sit back, relax and have pies. Enjoy any delicious meat-free Savoury or Sweet Pies available in store",
            expiry:"12 Days",
            egg:true,
            milk:true,
            drink:false,
            food:"soup",
            },
            {
                name:"Tasty, Joyful Moments",
                back:"https://www.kindmeal.my/photos/deal/7/701-4904-l.jpg",
                votes:1,
                rating:5,
                discount:10,
                hotel:"Moment of Joy" ,
                location: "Cheras & 1 Branch",
                desc:"We are committed to sustainability and plant-based diet. When food is melting into our mouths with an Unami flavor, life becomes ..",
                expiry:"5 Days",
                egg:false,
                milk:true,
                drink:false,
                food:"chinesevegetarian",
                },
                {
                    name:"Honestly Superb Meals",
                    back:"https://www.kindmeal.my/photos/deal/6/621-3576-l.jpg",
                    votes:16,
                    rating:5,
                    discount:20,
                    hotel:"Honest Bakery Cafe " ,
                    location: "Subang Jaya , Selangor",
                    desc:"Experience a delightful selection of creative meat-free meals from our menu: • Ala Carte Meat-Free Menu • Meat-Free Set Lunch ...",
                    expiry:"12 Hours",
                    egg:true,
                    milk:true,
                    drink:false,
                    food:"chinesevegetarian",
                    },
                    {
                        name:"Plant-Based Culinary Experience",
                        back:"https://www.kindmeal.my/photos/deal/6/684-4446-l.jpg",
                        votes:8,
                        rating:5,
                        discount:15,
                        hotel:"PC Studio Cafe" ,
                        location: "Petaling Jaya, Selangor",
                        desc:"We indulge you in a delightful meat-free Western culinary experience within a cozy ambience, while also offering plant-based cooki..!",
                        expiry:"12 Days",
                        egg:true,
                        milk:true,
                        drink:false,
                        food:"chinesevegetarian",
                        },
                        {
                            name:"Smooth Teas & Cold Brews ",
                            back:"https://www.kindmeal.my/photos/deal/6/682-4370-l.jpg",
                            votes:1,
                            rating:5,
                            discount:15,
                            hotel:"Fulleaf Tea Store" ,
                            location: "Bandar Sunway, Selangor",
                            desc:"Chill out with our ready-to-drink Cold Brew Teas! Invigorate yourself with our healthy, refreshing selection of Pure and Smooth T..",
                            expiry:"8 Days",
                            egg:false,
                            milk:true,
                            drink:false,
                            }, {
                                name:"Yishensu Oriental Cuisine",
                                back:"https://www.kindmeal.my/photos/deal/5/518-3788-l.jpg",
                                votes:24,
                                rating:4.5,
                                discount:15,
                                hotel:"Yishensu " ,
                                location: " Petaling Jaya, Selangor",
                                desc:"Yishensu offers a wide range of delicious oriental dishes, from traditional favorites to creative fusion delights. Enjoy discount..",
                                expiry:"12 Days",
                                egg:true,
                                milk:true,
                                drink:false,
                                }, {
                                    name:"Simple Is the Best",
                                    back:"https://www.kindmeal.my/photos/deal/7/707-4819-l.jpg",
                                    votes:2,
                                    rating:5,
                                    discount:10,
                                    hotel:"Simple Garden Cafe" ,
                                    location: " Sri Petaling, Kuala Lumpur",
                                    desc:"We strive to delight you with simple yet tasty and nutritious meals that you would simply love! Feast on any items from our meatl...",
                                    expiry:"6 Days",
                                    egg:true,
                                    milk:true,
                                    drink:false,
                                    }, {
                                        name:"Waffles & Snacks",
                                        back:"https://www.kindmeal.my/photos/deal/3/369-3697-l.jpg",
                                        votes:27,
                                        rating:4.5,
                                        discount:25,
                                        hotel:"Chequers " ,
                                        location: "Taman Tun Dr. Ismail, Kuala Lumpur",
                                        desc:"You'll only hear crisps and taste the soft centered waffles here, drizzled with their flavourful sauces in Chequers. Everything is..",
                                        expiry:"5 Days",
                                        egg:true,
                                        milk:true,
                                        drink:false,
                                        food:"burger",
                                        },
            {
                name:"Imperial Feast",
                back:"https://www.kindmeal.my/photos/deal/4/498-2202-l.jpg",
                votes:51,
                rating:5,
                discount:10,
                hotel:"Imperial Art Cottage 文献坊 " ,
                location: "Sri Petaling, Kuala Lumpur",
                desc:"Dine like an emperor on a variety of Japanese and Western meals! Feast on delightful items from our selected menu sections below:..",
                expiry:"8 Days",
                egg:true,
                milk:true,
                drink:false,
                food:"burger",
                },
                {
                    name:"Simply Delectable Meals ",
                    back:"https://www.kindmeal.my/photos/deal/6/692-4538-l.jpg",
                    votes:4,
                    rating:4,
                    discount:10,
                    hotel:"Simply Good Food" ,
                    location: "Kuala Lumpur, Wilayah Persekutuan",
                    desc:"Simply Good Food delights you with our passion for authentic ingredients, honest cooking, and an enjoyable atmosphere. We serve y..",
                    expiry:"11 Days",
                    egg:true,
                    milk:true,
                    drink:false,
                    food:"burger",
                    },
                    {
                        name:"Tasty midas touch",
                        back:"https://www.kindmeal.my/photos/deal/7/700-4802-l.jpg",
                        votes:1,
                        rating:5,
                        discount:15,
                        hotel:"Midas Cuisine" ,
                        location: "Banting, Selangor",
                        desc:"Let our Midas touch transform your meal into a gastronomic adventure. Indulge in healthy and delicious Chinese cuisine within our..",
                        expiry:"12 Days",
                        egg:true,
                        milk:true,
                        drink:false,
                        },
                        {
                            name:"Salad, Sammich And Juices For 2",
                            back:"https://www.kindmeal.my/photos/deal/2/271-519-l.jpg",
                            votes:10,
                            rating:4.5,
                            discount:20,
                            hotel:"Salad Atelier" ,
                            location: "Jalan Tun Razak & 4 Branches",
                            desc:"Want Salad but also additional Vege-power-packed Sandwich that would add a kick to your day, leaving you feeling sexy? This is the...",
                            expiry:"10 Hours",
                            egg:true,
                            milk:false,
                            drink:false,
                            },
                            {
                                name:"Japanese Fusion Delights",
                                back:"https://www.kindmeal.my/photos/deal/6/628-4921-l.jpg",
                                votes:28,
                                rating:5,
                                discount:15,
                                hotel:"Sushi Kitchen Kota Damansara " ,
                                location: "Petaling Jaya, Selangorr",
                                desc:"Enjoy creative, delicious and healthy fusion Japanese cuisine at Sushi Kitchen! Meticulously prepared with fresh, quality ingredi..",
                                expiry:"11 Days",
                                egg:false,
                                milk:false,
                                drink:false,
                                },
                                {
                                    name:"Authentic Italian Idulgences",
                                    back:"https://www.kindmeal.my/photos/deal/6/685-4392-l.jpg",
                                    votes:1,
                                    rating:5,
                                    discount:15,
                                    hotel:"The Italian Job " ,
                                    location: "Petaling Jaya, Selangor",
                                    desc:"Enjoy authentic Italian cuisine within a cozy environment! Pizza, breads and sometimes cakes or cookies are baked within the in-h..",
                                    expiry:"10 Days",
                                    egg:true,
                                    milk:true,
                                    drink:false,
                                    }, {
                                        name:"Lovely Fusion Meals",
                                        back:"https://www.kindmeal.my/photos/deal/6/633-3874-l.jpg",
                                        votes:4,
                                        rating:4,
                                        discount:20,
                                        hotel:"Love Veggie" ,
                                        location: "Pudu, Selangor",
                                        desc:"Enjoy a cozy dining experience where we pamper you with a variety of healthy, exquisite and natural foods.",
                                        expiry:"9 Days",
                                        egg:false,
                                        milk:true,
                                        drink:false,
                                        }, {
                                            name:"Rawsome Lifestyle",
                                            back:"https://www.kindmeal.my/photos/deal/5/590-3137-l.jpg",
                                            votes:6,
                                            rating:4.5,
                                            discount:20,
                                            hotel:"Rawsome" ,
                                            location: " Sungai Buloh, Selangor",
                                            desc:"Enjoy healthy, guilt-free, raw food meals artfully crafted for a nutritious and delicious experience. Indulge in a satisfying mea...",
                                            expiry:"13 Days",
                                            egg:true,
                                            milk:false,
                                            drink:false,
                                            }, {
                    name:"Creative Burger & Snacks",
                    back:"https://www.kindmeal.my/photos/deal/7/706-4801-l.jpg",
                    votes:1,
                    rating:5,
                    discount:10,
                    hotel:"Burger On 16 " ,
                    location: "Petaling Jaya & 1 Branchr",
                    desc:"Our burger recipes range from traditional to special, for those seeking to discover outrageous burger tastes. We serve creative co..",
                    expiry:"5 Days",
                    egg:true,
                    milk:true,
                    drink:false,
                    }, {
                        name:"Hearty Comfort Food",
                        back:"https://www.kindmeal.my/photos/deal/6/680-4384-l.jpg",
                        votes:4,
                        rating:5,
                        discount:20,
                        hotel:"Su Zhi Yuan Cafe 素之缘餐厅" ,
                        location: "Sungai Buloh, Selangor",
                        desc:"Su Zhi Yuan Cafe strives to serve you delicious and healthy vegetarian meals within a comfortable dining environment. All our food..",
                        expiry:"12 Days",
                        egg:false,
                        milk:true,
                        drink:false,
                        }, {
                            name:"Melakan Indian Fusion Cuisine",
                            back:"https://www.kindmeal.my/photos/deal/6/698-4639-l.jpg",
                            votes:0,
                            rating:4.5,
                            discount:20,
                            hotel:"Ssihat Kafe" ,
                            location: "Melaka",
                            desc:"Ignite your taste buds with indian spices and flavours at Melaka's only Indian fully Vegetarian Cafe. We humbly welcome you and y..",
                            expiry:"9 Days",
                            egg:false,
                            milk:true,
                            drink:false,
                            },
        ]
 places={60:"Kuala Lumpur",
        42:"Petaling Jaya",
          20: "Ampang",
          21: "Ara Damansara",
          22: "Bangsar",
          23: "Bangsar South",
          24: "Bukit Bintang",
          26: "Damansara",
          27: "Cheras",
          29: "Damansara Heights",
          30: "Damansara Perdana",
          31: "Damansara Utama",
          62: "Ipoh",
          33: "Kelana Jaya",
          34: "Kepong",
          35: "Klang",
          37: "Kota Damansara",
          39: "Mont Kiara",
          40: "Mutiara Damansara",
          41: "Old Klang Road",
          44: "Puchong",
          45: "Pudu",
          46: "Putrajaya",
          48: "Sepang",
          50: "Seri Kembangan",
          51: "Setapak",
          52: "Shah Alam",
          53: "Sri Hartamas",
          54: "Sri Petaling",
          55: "Subang",
          56: "Taman Desa",
          58: "Taman Tun",
          41361:"Terengganu",
          41330:"perak",

}
var limit = Math.ceil(mockapi.length/10);
function createButton(){
    var span = document.createElement('span');
    span.setAttribute('class','inline');
    span.innerHTML="Page:"
    let cloneSpan = span.cloneNode(true);
    buttons1.appendChild(span);
    buttons2.appendChild(cloneSpan)
    for(i=0;i<limit;i++){
        let button = document.createElement('button');
        button.setAttribute('id',i);
        button.setAttribute('class','inline')
        button.innerHTML = i+1;
        button.onclick = createNums;
        let cloneBut = button.cloneNode(true);
        cloneBut.onclick = createNums;
        buttons1.append(button);
        buttons2.appendChild(cloneBut)
    }
    let button = document.createElement('button');
    button.setAttribute('id','next');
    button.setAttribute('class','inline');
    button.innerHTML="Next";
    button.onclick = next;
    let clone = button.cloneNode(true);
    clone.onclick= next;
    buttons1.appendChild(button);
    buttons2.appendChild(clone);
}
function next(){
   let data =  localStorage.getItem('val');
   let start = + data[0];
   let end = + data[2];
   start = start + 10;
   end += 10;
   addPosts(start,end);
 }
createButton()
function createNums(){
    localStorage.clear();
    let cur = event.target.id;
    let l = Number(cur);
    //console.log(l,a,cur)
    let a =0;
    for(let i=l-1;i<l+1;i++){
        if(i==l-1){
            start = Number(l+"0")
        }else{
            a=l;
            end = Number(l+"9")
        }
    }
     let vars = [start,end];
     localStorage.setItem('val',vars);
    addPosts(start,end);
}

function addPosts(start=0,end=9){
 body.innerHTML="";
 for(let i=start;i<=end;i++){
     createPost(i);
 }

}
function createPost(i){
    let egg = "";
    let milk = "";
    let wine = "";
    let estate = "";
    let mstate = "";
    let wstate = "";
    const starTotal = 5;  
    if(mockapi[i].egg==true){
        egg="https://www.kindmeal.my/images/icon_egg.png";
        estate="popuptext";
    }
    if(mockapi[i].milk==true){
       milk="https://www.kindmeal.my/images/icon_milk.png";
       mstate="popuptext";
    }
    if(mockapi[i].drink==true){
        wine="https://www.kindmeal.my/images/icon_alcohol.png";
        wstate="popuptext";
    }
    if(mockapi[i].egg==false){
        egg="https://www.kindmeal.my/images/icon_egg_disabled.png";
        estate="disabled";
    }
    if(mockapi[i].milk==false){
        milk="https://www.kindmeal.my/images/icon_milk_disabled.png";
        mstate="disabled";
    }
    if(mockapi[i].drink==false){
        wine="https://www.kindmeal.my/images/icon_alcohol_disabled.png";
        wstate="disabled";
    }
     var div = document.createElement('div');
     div.setAttribute('class','flex');
     div.innerHTML = ` <div onclick="newPage(${i})" id="imgs" style="background-image: url(${mockapi[i].back});">
     <div class="top-left"><h2 class="circle" style="color:rgb(70, 69, 69); margin-top:5px; text-align: center; font-size: 22px;">-${mockapi[i].discount}%</h2></div>
     <h2><span class="background">${mockapi[i].name}</span></h2>
 </div>
 <div class="padded" style="margin-bottom:2px;">
     <span class="inline"><p style="font-size: 18px; font-weight: 600; color: rgb(151, 151, 151);" class="inline">${mockapi[i].hotel}</p></span><pre class="inline"> - </pre><span class="lighter inline" style="font-size: 14px;">${mockapi[i].location}</span>
 </div>
<p class="padded" style="margin: 3px 3px 7px 3px;">${mockapi[i].desc}</p>
<button onclick="newPage(i)" class="inline post-buttons">Get FREE Coupon</button> <div class=star${i} style="display:inline-block;"><div class="stars-outer"><div class="stars-inner"></div></div></div><p class="inline" style="margin-left: 2%; font-size: 12px;">(15)</p>
<div class=" bordertop" style="margin-bottom: 0px;display: flex; flex-wrap: nowrap; padding: 0% 2%;margin-top: 10px;height: 55px;" >
     <div style="flex-direction: row;flex-grow: 1;width: 0%; padding-top: 10px;" class="borderright">
         <span class="selected icons popup"><img  class="scale" src=${egg} alt=""><span class=${estate} id="myPopup">Contains egg</span></span><span class="selected icons popup"><img class="scale" src=${milk} alt=""><span class=${mstate} id="myPopup1">Contains Dairy products<br/>(i.e milk,cheese)</span></span><span class="selected icons popup" ><img class="scale" src=${wine} alt=""><span class=${wstate} id="myPopup2">Contains Alcohol<br/>(i.e beer,wine,liqour)</span></span>
     </div>
     <div style="flex-direction: row;flex-grow: 1; text-align:center; " class="borderright">
         <p style="margin: 3px 1px 1px 1px;">kindMEal Discount</p>
         <h2 style="color: red;  margin:1px">${mockapi[i].discount} off</h2>
     </div>
     <div style="flex-direction: row;flex-grow: 1; text-align:center;  width: 0%;">
         <p style="margin: 1px;">Expires in</p>
         <h2 style="color: rgb(119, 119, 119);  margin:1px">${mockapi[i].expiry}</h2>
     </div>`;
     body.append(div);
  const starPercentage = (mockapi[i].rating / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.querySelector(`.star${i} .stars-inner`).style.width = starPercentageRounded; 

}
window.onload =  addPosts();

document.getElementById('search').addEventListener('click',search);

function search(){
    let res = document.getElementById('searchs').value;
    let food = document.getElementById('option').value;
    let num = + document.getElementById('city').value;
    let loc = getLocation(num);
    console.log(location)
    body.innerHTML="";
    search_val = [];
    for(i in mockapi){
        var mock_location = (mockapi[i].location).split(',')
        if(mockapi[i].food == food && res.toLowerCase() == (mockapi[i].hotel).toLocaleLowerCase() && mock_location[0]==loc){
            search_val.push(i);
        }
        else if( mock_location[0]==loc && mockapi[i].food == food ){
          search_val.push(i);
        }
        else if(mock_location[0]==loc){
            createPost(i);
        }
        else if((mockapi[i].hotel).toLocaleLowerCase() == res.toLowerCase()){
            search_val.push(i);
        }
        else  if(mockapi[i].food == food){
            createPost(i);
        }
        else if(food==""&&num==""&&res==""){
            addPosts();
        }
    }
    console.log(search_val)
    if(search_val.length>0){
        body.innerHTML="";
        for(i of search_val){
            createPost(i);
        }
    }

}

function getLocation(num){
       return places[num];
}

function newPage(i){
    location.href = `./meal_ex.html?q=${i}`;
}
