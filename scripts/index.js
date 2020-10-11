console.log("Domain Specific News");

const newSource = "bbc-news";
const apiKey = "6326e0f0957b44a2b7dfdcf7db4c6b35";


const apiURL = `https://newsapi.org/v2/top-headlines?sources=${newSource}&apiKey=${apiKey}`;


let xhr = new XMLHttpRequest();
xhr.open("GET", apiURL, true);

xhr.onprogress = function () {
    let loader =`<div class="spinner-grow text-primary" role="status">
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
  <div class="spinner-grow text-warning" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-info" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-dark" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;
    console.log("Processing");
    document.getElementById("newsCard").innerHTML = loader;

};

xhr.onload = function () {
    let news = JSON.parse(this.responseText)
    let articles = news.articles;
    console.log(articles);
    html = "";
    for (let article in articles) {
        console.log(articles[article].title);
        html += `
        <div style="width: 384px;height: 767px;padding: 49px 0px 20px 25px;" class="backImage ml-3 mb-3">
        <div style="width: 329px;height: 685px;" >
            <div class="card" style="max-width: 21rem;">
                <img src="${articles[article].urlToImage}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${articles[article].title}</h5>
    <p class="card-text">${articles[article].content}</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">Author : ${articles[article].author}</li>
    <li class="list-group-item">${articles[article].publishedAt}</li>
</ul>
<div class="card-body">
    <a href="${articles[article].url}" target="_blank" class="card-link">Read more</a>
</div>
</div>
</div>
</div>
     `;
    }

    document.getElementById("newsCard").innerHTML = html;

    console.log("done");
};

xhr.send();








