let garage = [
    { brand: 'fiat', model: 'punto', name: 'Marco Musa', color: '#832232' },
    { brand: 'bmw', model: 'x4', name: 'Mario Rossi', color: '#0B0033' },
    { brand: 'bmw', model: 'x3', name: 'Mario Rossi', color: '#0B0033' },
    { brand: 'bmw', model: 'x1', name: 'Mario Rossi', color: '#0B0033' },
    { brand: 'bmw', model: 'x5', name: 'Mario Rossi', color: '#0B0033' },
    { brand: 'fiat', model: 'tipo', name: 'Mario Rossi', color: '#832232' },
    { brand: 'mercedes', model: 'classe A', name: 'Mario Rossi', color: '#EAF27C' },
    { brand: 'fiat', model: 'cinquencento', name: 'Mario Rossi', color: '#832232' },
]


/* MOSTRA TUTTE LE CARD DELLE AUTO */
function showCars(cars) {

    let wrapper = document.querySelector('#carsWrapper')

    wrapper.innerHTML = ''


    cars.forEach(auto => {

        let card = document.createElement("div");
        card.classList.add('col-12', 'col-md-4', 'my-3');

        card.innerHTML =

            `
        <div class="box" style="border-top: ${auto.color} 5px solid;">
        <h2>${auto.brand}</h2> <span class="fs-3 text-white fw-bold">${auto.name}</span>
        <p class="fs-5 text-white fw-bolder">${auto.model}</p>
        <img
            class="icon"
            src="https://www.cauccisicurezza.it/wp-content/uploads/2018/03/key-inside.png"
            alt=""
        />
    </div>
        
        
        `

        wrapper.appendChild(card)
    })
}

function hideCars() {

    let wrapper = document.querySelector('#carsWrapper')

    wrapper.innerHTML = ''

}

const btnShowGarage = document.querySelector('#btnShowGarage')


/* EVENTO CLICK MOSTRA/NON MOSTRA AUTO */
btnShowGarage.addEventListener('click', () => {

    let wrapper = document.querySelector('#carsWrapper')

    if (wrapper.children.length > 0) {

        hideCars()

    } else {

        showCars(garage)
    }
})

/* CONTROLLA SE IL BRAND AUTO ESISTE */
let inputSearch = document.querySelector('#inputSearch')

inputSearch.addEventListener('input', () => {
    let search = inputSearch.value

    let filtered = []

    garage.forEach(auto => {

        /* FILTRA PER BRAND */
        if (auto.brand.includes(search) || auto.model.includes(search) || auto.name.includes(search)) {

            filtered.push(auto)

        }


        /* FILTRA PER MODELLO */
        /* if (auto.model.includes(search)) {

            filtered.push(auto)

        } */
    })

    showCars(filtered);
})

/* CREO FUNZIONE NUOVA AUTO */
function addCar(brand, model, name, color = '#0b0033') {
    let newCar = {
        brand: brand,
        model: model,
        name: name,
        color: color,

    }


    garage.push(newCar)
}

/* EVENTO CLICK BOTTONE NUOVA AUTO */
let addBtnCar = document.querySelector('#addBtnCar')

addBtnCar.addEventListener('click', () => {



    let inputBrand = document.querySelector('#inputBrand')
    let inputModel = document.querySelector('#inputModel')
    let inputName = document.querySelector('#inputName')
    let inputColor = document.querySelector('#inputColor')

    console.log(inputColor.value);


    addCar(inputBrand.value, inputModel.value, inputName.value, inputColor.value)
    showCars(garage)
    reset()


})

function reset() {
    inputBrand.value = ""
    inputModel.value = ""
    inputName.value = ""
}



