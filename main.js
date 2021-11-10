let garage = [
    { brand: 'fiat', model: 'punto', color: '#832232' },
    { brand: 'bmw', model: 'x4', color: '#0B0033' },
    { brand: 'bmw', model: 'x3', color: '#0B0033' },
    { brand: 'bmw', model: 'x1', color: '#0B0033' },
    { brand: 'bmw', model: 'x5', color: '#0B0033' },
    { brand: 'fiat', model: 'tipo', color: '#832232' },
    { brand: 'mercedes', model: 'classe A', color: '#EAF27C' },
    { brand: 'fiat', model: 'cinquencento', color: '#832232' },
]


/* MOSTRA TUTTE LE CARD DELLE AUTO */
function showCars(cars) {

    let wrapper = document.querySelector('#carsWrapper')


    cars.forEach(auto => {

        let card = document.createElement("div");
        card.classList.add('col-12', 'col-md-4', 'my-3');

        card.innerHTML =

            `
        <div class="box" style="border-top: ${auto.color} 5px solid;">
        <h2>${auto.brand}</h2>
        <p class="fs-5 text-secondary fw-bolder">${auto.model}</p>
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
        if (auto.brand.includes(search)) {

            filtered.push(auto)

        }


        /* FILTRA PER MODELLO */
        if (auto.model.includes(search)) {

            filtered.push(auto)

        }
    })

    showCars(filtered);
})

