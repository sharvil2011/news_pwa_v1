// refereed to code with harry's news api video


let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=b43e9942b64b4deea3465ac1f04b8694`, true);

// Note for future refernce: xmlhttp request enables a Web page to update just part of a page without disrupting what the user is doing.
xhr.onload = function () {
    // Note for future reference: This.status === 200 means request was received and understood
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
        let articles = json.articles;
        console.log(articles);
        let news1 = "";
        articles.forEach(function(element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            news1 += news;
        });
        newsAccordion.innerHTML = news1;
    }
    else {
        console.log("Some error occured")
    }
}

// this sends request to server
xhr.send()




