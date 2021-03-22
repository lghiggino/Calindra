// menu mobile
const burgerIcon = document.querySelector(".navbar-burger")
const navbarMenu = document.querySelector("#nav-links")

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active")
})

//listening for the "enter" or click, and fetching data
const input = document.querySelector(".input")
const searchButton = document.querySelector("#search-button")

searchButton.addEventListener("click", () => {
    let item = input.value
    search(item)
})

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        let item = input.value
        search(item)
    }
})

async function search(item){
    try{
        const res = await fetch(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content="${item}"&source=nanook`)
        const data = await res.json()
        renderProducts(data)
        renderSuggestions(data)
    } 
    catch(err){
        throw new Error(err)
    }
}

function renderProducts(data){
    const cardContainer = document.querySelector("#card-container")
    cardContainer.innerHTML = ""
    if(data.products.length === 0){return cardContainer.innerText = "Nenhum produto encontrado. Tente buscar por outras palavras."}
    else{
        //variables prepended with below and above could be dismissed, are here for better readability of the ternary
        let averageRating = renderScoreColors(data)
        let belowAverageRating = averageRating * 0.75
        let aboveAverageRating = averageRating * 1.25
        let averageVisits = renderVisitColors(data)
        let belowAverageVisits = averageVisits * 0.75
        let aboveAverageVisits = averageVisits * 1.25
        data.products.map(el => {
            let name = el.name
            let id = el.id
            let score = el["_meta"].score
            let visits = +el["_meta"].visitsClickCount
            cardContainer.innerHTML += `
            <div class="column is-12-mobile is-6-tablet is-4-desktop">
                <div class="card" style="min-height: 200px">
                    <div class="content">
                        <p class="title is-5 ml-2">${name}</p>
                        <p class="is-5 ml-2">Id: ${id}</p>
                        <p class="is-5 ml-2 ${score <= belowAverageRating ? 'has-text-danger' 
                            : score >= aboveAverageRating ? 'has-text-success' 
                                : 'has-text-black'}">Score: ${score} </p>
                        <p class="is-5 ml-2 mb-3 ${visits <= belowAverageVisits ? 'has-text-danger' 
                            : visits >= aboveAverageVisits ? 'has-text-success' 
                                : 'has-text-black'}">Visits: ${visits}</p>
                    </div>
                </div>
            </div>
            `
        })
        cardContainer.innerHTML += `
        <div class="column is-12">
            <p class="subtitle is-size-6">Itens na cor verde estão 25% ou mais acima da média. Itens em vermelho estão 25% ou mais abaixo da média. Itens em preto estão no intervalo da média +- 25%</p>
        </div>
        `
    }
    input.value = ""
}

function renderScoreColors(data){
    let allScores = []
    data.products.map(el => {
        allScores.push(el["_meta"].score)
    })
    let average = allScores.reduce((acc,curr) => acc+curr,0)/6
    return Number(average.toFixed(3));
}

function renderVisitColors(data){
    let allVisits= []
    data.products.map(el => {
        allVisits.push(el["_meta"].visitsClickCount)
    })
    let visits = allVisits.reduce((acc,curr) => +acc + +curr,0)/6
    return Number(visits.toFixed(3));
}

function renderSuggestions(data){
    const suggTitle = document.querySelector("#sugg-title")
    const suggContainer = document.querySelector("#sugg-container")
    if(data.suggestions.length === 0){return suggestionTitle.classList.contains("is-hidden") ? "" : suggestionTitle.classList.add("is-hidden")}
    else{
        suggTitle.classList.remove("is-hidden")
        suggContainer.innerHTML = ""
        data.suggestions.map(el => {
            // console.log(el.term)
            suggContainer.innerHTML += `
            <div class="column is-12-mobile is-6-tablet is-4-desktop">
                <span class="tag is-light is-light is-medium" style="cursor:pointer">${el.term}</span>
            </div>
            `
        })
    }
    generateTagLinks()
}

function generateTagLinks(){
    const allTags = document.querySelectorAll(".tag")
    allTags.forEach(tag => {
        tag.addEventListener("click", (e) => {
            search(e.target.innerText)
        })
    })
}