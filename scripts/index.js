console.log("Domain Specific News");


// BBC NEWS FEEDS
// const newSource = "bbc-news";
// const apiKey = "6326e0f0957b44a2b7dfdcf7db4c6b35"; //BBC news
// const apiURL = `https://newsapi.org/v2/top-headlines?sources=${newSource}&apiKey=${apiKey}`;

//NYT NEWS
const newSource = "bbc-news";
const apiKey = "mP9TmBctdqcRjsnFviBw9FrUD6r80dnE"; //NYT wire feeds key
const apiURL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apiKey}`;


setLoader();

let xhr = new XMLHttpRequest();
xhr.open("GET", apiURL, true);

xhr.onprogress = function () {
  console.log("onprogress started");
 
  console.log("onprogress ended");
};

xhr.onload = function () {
  console.log("Onload strted");
  // console.log(this.responseText);
  // console.log("*****************************");
  let news = JSON.parse(this.responseText)
  let articles = news.results;
  let imageURL = "";
  // console.log(articles);
  html = "";
  for (let article in articles) {
    // console.log(articles[article].title);
    // console.log(articles[article].multimedia);
    for (urlkey in articles[article].multimedia) {
      // console.log(urlkey);
      imageURL = articles[article].multimedia[2].url;
      // console.log("LOOP uRLLLLLLLLLL", articles[article].multimedia[2].url);
      
    }
    if (imageURL === "") {
      imageURL = "assets/pictures/defaultNewsImage.PNG";
    }
    // console.log("uRLLLLLLLLLL",articles[article].multimedia[2].url);
    html += `
    <div style="width: 384px;height: 767px;padding: 49px 0px 20px 25px;" class="backImage ml-3 mb-3">
    <div style="width: 329px;height: 685px;" >
    <div class="card" style="max-width: 21rem;">
    <img src="${imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${articles[article].title}</h5>
    <p class="card-text">${articles[article].abstract}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Author : ${articles[article].source}</li>
    <li class="list-group-item">${articles[article].updated_date}</li>
    </ul>
    <div class="card-body">
    <a href="${articles[article].url}" target="_blank" class="card-link">Read more</a>
    </div>
    </div>
    </div>
    </div>
    `;
  }
  console.log("setting news");
  
  document.getElementById("newsCard").innerHTML = html;
  
  console.log("Onload ended");
};

xhr.send();


function setLoader() {
  console.log("setting loader");
  let loader = `<div style="padding: 8em 35em">
  <div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
  </div>
</div>`;

  document.getElementById("newsCard").innerHTML = loader;
}





