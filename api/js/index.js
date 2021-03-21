// menu mobile
const burgerIcon = document.querySelector(".navbar-burger")
const navbarMenu = document.querySelector("#nav-links")

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active")
})

//listening for the "enter" or click, and fetching data
const input = document.querySelector(".input")

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
        render(data)
    } 
    catch(err){
        throw new Error(err)
    }
}

function render(data){
    const cardContainer = document.querySelector("#card-container")
    cardContainer.innerHTML = ""
    if(data.products.length === 0){cardContainer.innerText = "Nenhum produto encontrado. Tente buscar por outras palavras."}
    else{
        console.log("renderizando os dados")
        console.log(data.products, data.suggestions)
        data.products.map(el => {
            // console.log(el.name, el.id, el["_meta"].score, el["_meta"].visitsClickCount)
            cardContainer.innerHTML += `
            <div class="column   is-12-mobile is-6-tablet is-2-desktop">
                <div class="card" style="min-height: 200px">
                    <div class="content">
                        <p class="title is-5 ml-2">${el.name}</p>
                        <p class="is-5 ml-2">Id: ${el.id}</p>
                        <p class="is-5 ml-2">Score: ${el["_meta"].score}</p>
                        <p class="is-5 ml-2 mb-3">Visits: ${el["_meta"].visitsClickCount}</p>
                    </div>
                </div>
            </div>
            `
        })

    }
    
}