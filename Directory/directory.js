
import{footer} from "../footer/footercomponents/footer.js"

document.getElementById("footer").innerHTML=footer()



let dContent = document.getElementById("dContent");
let dirArr = [
  {
    dHead: "AENON The Health Kitchen",
    dmore:
      "AENON Health Kitchen, a hygienic restaurant that provides simple, palatable, wholesome & healthy food at affordable prices. We are dedicated in offering an extraordinary dining experience...",
    dAdd: "1, Jalan 4/93, Taman Miharja, Jalan Cheras, 55200 Kuala Lumpur, Wilayah Persekutuan",
    dphone: "03 - 9201 0972",
    dohrs: "Sun - Thu: 11am - 3pm & 6pm - 9pm; Fri - Sat: Closed",
    mapimg:
      "https://maps.google.com/maps?q=Taman Miharja&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    dHead: "Annalakshmi Vegetarian Restaurant",
    dmore:
      "We serve delicious home-cooked vegetarian meals, crafted with the healthiest ingredients and plenty of love. We also sell natural, handmade clay and wooden Buddhist crafts, health suppleme…",
    dAdd: "15, Jalan 12/144A, Taman Bukit Cheras , 56000 Kuala Lumpur, Wilayah Persekutuan",
    dphone: "019-275 9973",
    dohrs: "Fri - Wed: 9am - 4pm; Thu: Closed",
    mapimg:
      "https://maps.google.com/maps?q=Taman Bukit Cheras&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    dHead: "Alam N-Ion",
    dmore:
      "We serve delicious home-cooked vegetarian meals, crafted with the healthiest ingredients and plenty of love. We also sell natural, handmade clay and wooden Buddhist crafts, health suppleme…",
    dAdd: "15, Jalan 12/144A, Taman Bukit Cheras , 56000 Kuala Lumpur, Wilayah Persekutuan",
    dphone: "019-275 9973",
    dohrs: "Fri - Wed: 9am - 4pm; Thu: Closed",
    mapimg:
      "https://maps.google.com/maps?q=Taman Bukit Cheras&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    dHead: "Ba Xian Vegetarian Court",
    dmore: "Recipe Cakes & Café Group. Extensive Menu range inspired by all fresh Recipe Cakes & Café Group. Extensive Menu range inspired by all fresh and natural products with a selection of natural products...",
    dAdd: "15, Jalan 12/144A, Taman Bukit Cheras , 56000 Kuala Lumpur, Wilayah Persekutuan",
    dphone: "03-62778052",
    dohrs: "Daily 10am-10pm.",
    mapimg:"https://maps.google.com/maps?q=Kuala Lumpur&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    dHead: "Bakti Woodlands Vegetarian Food Cafe",
    dmore: "Recipe Cakes & Café Group. Extensive Menu range inspired by all fresh and natural products with a selection of natural productsRecipe Cakes & Café Group. Extensive Menu range inspired by all fresh...",
    dAdd: "55 Leboh Ampang (at near Masjid Jamek LRT station), Kuala Lumpur, 50100, Wilayah Persekutuan",
    dphone: "03-62778099",
    dohrs: "Mon-Sun 7:30am-9:30pm",
    mapimg:"https://maps.google.com/maps?q=Kuala Lumpur&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    dHead: "Berjaya Cafe",
    dmore: "Berjaya Cafe, the epitome for the vegetarian lovers that brings the opulence, style, and is entwined with the gastronomic taste from the best chef’s in town. With the current trend of life…",
    dAdd: "Level 14 West, Berjaya Times Square Hotel, No. 1, Jalan Imbi, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan",
    dphone: "03-21178000",
    dohrs: "Daily: 6:30am - 9:00pm",
    mapimg:"https://maps.google.com/maps?q=Berjaya Times Square Hotel&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    dHead: "Beyond Veggie - Nexus Bangsar South ",
    dmore: " A refreshing Meatless Dining Concept from Secret Recipe Cakes & Café Group. Extensive Menu range inspired by all fresh and natural products with a selection of natural products and ingredi…",
    dAdd: "Unit G-8, Ground Floor, Nexus, No. 7, Jalan Kerinchi, 59200 Kuala Lumpur, Wilayah Persekutuan",
    dphone: "+603-2242 1473",
    dohrs: "Mon-Sun, 10am-10pm",
    mapimg:"https://maps.google.com/maps?q=Jalan Kerinchi&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    dHead: "Beyond Veggie - TTDI Branch",
    dmore: "A refreshing Meatless Dining Concept from Secret Recipe Cakes & Café Group. Extensive Menu range inspired by all fresh and natural products with a selection of natural products and ingredi…",
    dAdd: "Lot 54, Ground Floor, Jalan Tun Mohd. Fuad 1, Taman Tun Dr Ismail, 600000 Kuala Lumpur, Wilayah Persekutuan",
    dphone: "+603-7722 1142",
    dohrs: "Mon-Sun, 10am-10pm",
    mapimg:"https://maps.google.com/maps?q=JTaman Tun Dr Ismai&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
];

dirArr.forEach((el) => {
  let showmore = "show more";

  let div1 = document.createElement("div");
  div1.setAttribute("class", "ddata");

  let title = document.createElement("h2");
  title.innerText = el.dHead;
  let des = document.createElement("p");
  des.innerText = el.dmore + showmore;
  let line = document.createElement("input");
  line.setAttribute("class", "line");
  let h3 = document.createElement("h3");
  h3.innerText = "Address";
  let address = document.createElement("p");
  address.innerText = el.dAdd;
  let h3p = document.createElement("h3");
  h3p.innerText = "Phone";

  let phone = document.createElement("p");
  phone.innerText = el.dphone;

  let h32 = document.createElement("h3");
  h32.innerText = "Opening Hours";

  let ohrs = document.createElement("p");
  ohrs.innerText = el.dohrs;

  div1.append(title, des, line, h3, address, h3p, phone, h32, ohrs);

  let div2 = document.createElement("div");
  div2.setAttribute("class", "maps");

  let img = document.createElement("iframe");
  img.src = el.mapimg;

  let b1 = document.createElement("button");

  b1.innerText = "Visit Website ";
  let b2 = document.createElement("button");
  b2.innerText = "|";
  b2.setAttribute("class", "bar");
  let b3 = document.createElement("button");
  b3.innerText = "Visit Website ";
  let b4 = document.createElement("button");
  b4.innerText = "|";
  b4.setAttribute("class", "bar");
  let b5 = document.createElement("button");
  b5.innerText = "Visit Website ";

  div2.append(img, b1, b2, b3, b4, b5);

  let div = document.createElement("div");
  div.append(div1, div2);
  dContent.append(div);
});

// let iframe =document.getElementById("gmap_canvas");
// iframe.src=`https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed`;

// function getlocationWeather(){
//     navigator.geolocation.getCurrentPosition(success)
//     function success(position)
//     {
//         const latitude =position.coords.latitude;
//         const longitude =position.coords.longitude;
//         getData(latitude,longitude)
//     }
// }
// getlocationWeather();