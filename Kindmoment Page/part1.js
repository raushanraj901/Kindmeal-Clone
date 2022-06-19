//  // var articles=userarr[0].article;
//  let i=0;
 var userarr=JSON.parse(localStorage.getItem("userinfo"))||[];
 var images=userarr[0].article[0].slideImg
 var date=userarr[0].article[0].date
 var g=userarr[0].article[0].about
//  console.log(about)
 //  console.log(about)
 //  console.log(date)
 // // console.log(userarr[0].article)
 
 let container=document.getElementById('contents');
 
 
 var i=0;
 id= setInterval(function(){
     if(i===images.length){
         i=0;
        }
        container.innerHTML=null;
        let image=images[i]//images[0]
        

  //append the image

  let img=document.createElement('img');
  img.setAttribute("class","ite")
  img.src=image; 
// img.setAttribute("src",image);


var box=document.createElement("div");
box.setAttribute("class","hslide")
 var p1=document.createElement("p")
 p1.innerText=date;

var heads=document.createElement("h3");
heads.innerText="Simple is the Best ☻"
heads.setAttribute("src","hslide")
var foot=document.createElement("h3")
foot.setAttribute("class","foote")
foot.innerText=g;

var logo=document.createElement("img")
logo.setAttribute("src","https://www.kindmeal.my/photos/deal/7/707-4819-s.jpg")
var box2=document.createElement("div")
box2.append(logo,heads)
box2.setAttribute("class","kuch")




box.append(box2,p1)
  container.append(box,img,foot);
  i++; 



  
//    container.append(heads)


},2000); 

  



