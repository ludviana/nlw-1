function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states){
            ufSelect.innerHTML += `<option value=${state.id}>${state.nome}</option>`
        }
        
    })


}


populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a Cidade </option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities){
            citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`
        }
        
        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// items de coleta


const itensToCollet = document.querySelectorAll(".items-grid li")

for(const item of itensToCollet){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


function handleSelectedItem(event){
    const itemli = event.target

    //adiciona ou remove uma classe com javascript
    itemli.classList.toggle("selected")

    const itemid = itemli.dataset.id


    //veriificar se exsistem itens selecionados, se sim
    // pegar itens selecionados 

    const alreadySelected = selectedItems.findIndex(function(item){
        const itemFound = item == itemid //isso sera um true ou false
        return itemFound
    })

    //se ja tiver selecionado

    if( alreadySelected >= 0 ){
        //tirar da seleçao
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemid //false
            return itemIsDifferent
        })


        selectedItems = filteredItems
    } else {
        //se nao estiver selecionado
        //adicionar a seleçao

        selectedItems.push(itemid)
    }

    //atualiza o campo escrito com os itens selecionados
    collectedItems.value = selectedItems   
}