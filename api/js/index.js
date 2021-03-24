// menu mobile
const burgerIcon = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
})

//listening for the "enter" or click, and fetching data
const input = document.querySelector(".input");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let item = input.value;
    search(item);
})

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        e.preventDefault();
        let item = input.value;
        search(item);
    }
})

async function search(item){
    try{
        const res = await fetch(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content="${item}"&source=nanook`);
        const data = await res.json();
        renderProducts(data);
        renderSuggestions(data);
        pushIntoHistory(item, data);
    } 
    catch(err){
        throw new Error(err);
    }
}

function renderProducts(data){
    const cardContainer = document.querySelector("#card-container");
    cardContainer.innerHTML = "";
    if(data === null){return cardContainer.innerText = "Olá! Digite o produto desejado, click ou aperte enter, e compare os resultados."}
    else if(data.products.length === 0){return cardContainer.innerText = "Nenhum produto encontrado. Tente buscar por outras palavras."}
    else{
        //variables prepended with below and above could be dismissed, are here for better readability of the ternary
        const averageRating = generateScoreAverage(data);
        const belowAverageRating = averageRating * 0.75;
        const aboveAverageRating = averageRating * 1.25;
        const averageVisits = generateVisitAverage(data);
        const belowAverageVisits = averageVisits * 0.75;
        const aboveAverageVisits = averageVisits * 1.25;
        data.products.map(el => {
            const name = el.name;
            const id = el.id;
            const score = el["_meta"].score;
            const visits = +el["_meta"].visitsClickCount;
            cardContainer.innerHTML += `
            <div class="column is-12-mobile is-6-tablet is-4-desktop">
                <div class="card" style="min-height: 200px">
                    <div class="content">
                        <p class="title is-5 ml-2">${name}</p>
                        <p class="is-5 ml-2">Id: ${id}</p>
                        <p class="is-5 ml-2 ${score <= belowAverageRating ? 'has-text-danger' :
                            score >= aboveAverageRating ? 'has-text-success' : 'has-text-black'}">Score: ${score} </p>
                        <p class="is-5 ml-2 mb-3 ${visits <= belowAverageVisits ? 'has-text-danger' :
                            visits >= aboveAverageVisits ? 'has-text-success' : 'has-text-black'}">Visits: ${visits}</p>
                    </div>
                </div>
            </div>
            `
        })
        cardContainer.innerHTML += `
        <div class="column is-12">
            <p class="subtitle is-size-6">Itens na cor verde estão 25% ou mais acima da média. Itens em vermelho estão 25% ou mais abaixo da média. Itens em preto estão na média +- 25%</p>
        </div>
        `
    }
}

function generateScoreAverage(data){
    let allScores = data.products.map(el => el["_meta"].score);
    let averageScore = allScores.reduce((acc,curr) => acc+curr,0)/6;
    return Number(averageScore.toFixed(4));
}

function generateVisitAverage(data){
    let allVisits = data.products.map(el => el["_meta"].visitsClickCount);
    let averageVisits = allVisits.reduce((acc,curr) => +acc + +curr,0)/6;
    return Number(averageVisits.toFixed(4));
}

function renderSuggestions(data){
    const suggTitle = document.querySelector("#sugg-title");
    const suggContainer = document.querySelector("#sugg-container");
    if(data.suggestions.length === 0){
        suggestionTitle.classList.contains("is-hidden") ? "" : suggestionTitle.classList.add("is-hidden");
        suggContainer.innerHTML = "";
        return
    }
    else{
        suggTitle.classList.remove("is-hidden");
        suggContainer.innerHTML = "";
        data.suggestions.map(el => {
            // console.log(el.term)
            suggContainer.innerHTML += `
            <div class="column is-12-mobile is-6-tablet is-4-desktop">
                <span class="tag is-light is-light is-medium" style="cursor:pointer">${el.term}</span>
            </div>
            `
        })
    }
    generateTagLinks();
}

function generateTagLinks(){
    const allTags = document.querySelectorAll(".tag");
    allTags.forEach(tag => {
        tag.addEventListener("click", (e) => {
            search(e.target.innerText);
            input.value = e.target.innerText;
        })
    })
}

//handling the history API
function pushIntoHistory(item,data){
    //store the data in the history object, and then just re-render it, avoiding a new fetch
    history.pushState({id:item, data:data}, null, "");
}

window.addEventListener("popstate", (e) => {
    if (e.state !== null){
        renderProducts(e.state.data)
        renderSuggestions(e.state.data)
        //search(e.state.id);
        input.value = e.state.id;
    }
    else{
        renderProducts(null)
        input.value = "";
    }
})


//to initialize the page with a few hardcoded working suggestions
generateTagLinks();