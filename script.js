const containter = document.getElementById('container')
const selectColor = document.getElementById('select')


colorsObj = {
    neon: ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4'],
    pastel: ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'],
    red: ['#d90202', '#c20303', '#ab0404', '#930505', '#7c0606'],
    green: ['#007f5f', '#2b9348', '#55a630', '#80b918', '#aacc00'],
    blue: ['#002029', '#00303d', '#004052', '#005066', '#00607a']
}


let colors = colorsObj[selectColor.value]
selectColor.addEventListener('change', (event) => {
    colors = colorsObj[selectColor.value]

})


const noSquares = 1000

for (i = 0; i < noSquares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))


    containter.appendChild(square)

}


function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}