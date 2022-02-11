const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');
menu.addEventListener('click',function(){
    // console.log("hello");
    sidebar.classList.toggle('show-sidebar');
});

const sicon = document.querySelector(".right .sicon");
const smallScreenSearch = document.querySelector(".smallScreenSearch");

sicon.addEventListener('click',()=>{
    if(sicon.innerText=="search"){
        sicon.innerText="keyboard_double_arrow_up";
        smallScreenSearch.style.display = "inline";
     }
    else{
        sicon.innerText="search";
        smallScreenSearch.style.display = "none";
    }
});

const form1 = document.querySelector(".middle #form"),
input1 = form1.querySelector("input"),
sbtn1 = form1.querySelector("button");

sbtn1.addEventListener("click", (e)=>{
    if(input1.value!='')
     {
         requestAPI(input1.value);
     }else{
       console.log("Input Field is enpty");
     }
   });
   
   input1.addEventListener("keyup", (e) =>{
     if(e.key=="Enter" && input1.value!='')
     {
         requestAPI(input1.value);
     }
   });

const form2 = document.querySelector(".smallScreenSearch #form"),
input2 = form2.querySelector("input"),
sbtn2 = form2.querySelector("button");

sbtn2.addEventListener("click", (e)=>{
    if(input2.value!='')
     {
         requestAPI(input2.value);
     }else{
       console.log("Input Field is enpty");
     }
   });
   
   input2.addEventListener("keyup", (e) =>{
     if(e.key=="Enter" && input2.value!='')
     {
         requestAPI(input2.value);
     }
   });


var API_KEY1 = "AIzaSyBoUuITM3lNyt-r4SNGiB2RPGM7mQl1ato";
var API_KEY2 = "AIzaSyBDAF7FciD7duXzPrpWom7QRh9ci0yEOZg";


function requestAPI(search){
api = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY2}&type=video&part=snippet&maxResults=18&q=${search}`;
fetch(api).then(response => response.json()).then(result => dispdata(result));
}

const vidContainer = document.querySelector(".vidContainer"),
eachvid = vidContainer.querySelector(".eachvid");


function dispdata(data)
{
  vidContainer.innerHTML = " ";

  for(var i=0;i<18;i++){

  vidContainer.innerHTML += 
  `<div class="eachVid">             
  <div class="thumbnail">
      <a href=https://www.youtube.com/watch?v=${data.items[i].id.videoId}><img src=${data.items[i].snippet.thumbnails.medium.url} alt=""></a>
  </div>
  <div class="details">
      <div class="author">
      <img src=${data.items[i].snippet.thumbnails.medium.url} alt="">
      </div>
      <div class="title">
          <h3>${data.items[i].snippet.title}</h3>
          <a href="">${data.items[i].snippet.channelTitle}</a>
          <span>10M Views . 3 Months Ago</span>
      </div>
  </div>
</div>
  `;
}

}