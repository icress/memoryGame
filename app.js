let random = Math.floor(Math.random() * 16);
let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const flip = function () {
    if (this.getAttribute('src') != 'images/blank.png') {
        this.setAttribute('src', 'images/blank.png')
    } else {
        let name = this.getAttribute('name')
        this.setAttribute('src', `images/${name}.png`)
    }
};

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
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const number = document.createElement('p');
    number.innerText = random;
    grid.appendChild(number);
    let rows = Array.from(document.querySelectorAll('.row'))

    for (item of itemArr) {
        for (let i = 0; i < 2; i++) {
            const tile = document.createElement('img');
            tile.setAttribute('src', 'images/blank.png');
            tile.setAttribute('name', item.name)
            tile.classList.add('tile');
            let randRow = rows[Math.floor(Math.random() * rows.length)]
            randRow.appendChild(tile);
            if (randRow.children.length >= 4) {
                rows.splice(rows.indexOf(randRow), 1)
            }
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