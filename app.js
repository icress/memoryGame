let random = Math.floor(Math.random() * 16);
let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const flip = function() {
    if (this.getAttribute('src') != 'images/blank.png') {
        this.setAttribute('src', 'images/blank.png')
    } else {
        let name = this.getAttribute('name')
        this.setAttribute('src', `images/${name}.png`)
    }
}

const itemArr = [
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const number = document.createElement('p');
    number.innerText = random;
    grid.appendChild(number);
    const tileArr = document.querySelectorAll('.tile');
    const rows = document.querySelectorAll('.row')

    for (tile of tileArr) {
        tile.setAttribute('name', itemArr[Math.floor(Math.random() * itemArr.length)].name)
        tile.setAttribute('src', itemArr[Math.floor(Math.random() * itemArr.length)].image)
        tile.addEventListener('click', () => {
            if (tile.getAttribute('src') != 'images/blank.png') {
                tile.setAttribute('src', 'images/blank.png')
            } else {
                let name = tile.getAttribute('name')
                tile.setAttribute('src', `images/${name}.png`)
            }
        })
    }


    for (item of itemArr) {
        for (let i = 0; i < 2; i++) {
            const tile = document.createElement('img');
            tile.setAttribute('src', 'images/blank.png');
            tile.setAttribute('name', item.name)
            tile.classList.add('tile');
            grid.appendChild(tile);
            tile.addEventListener('click', () => {
                if (tile.getAttribute('src') != 'images/blank.png') {
                    tile.setAttribute('src', 'images/blank.png')
                } else {
                    let name = tile.getAttribute('name')
                    tile.setAttribute('src', `images/${name}.png`)
                }

            })
        }
    }



})