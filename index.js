let inputEl = document.getElementById("input-el")
let convertEl = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.28084
const footToMeter = 0.3048
const literToGallon = 0.264172
const gallonToLiter = 3.78541
const kiloToPound = 2.20462
const poundToKilo = 0.453592



convertEl.addEventListener("click", function() {
    let baseValue = parseFloat(inputEl.value)

    let mf = (baseValue * meterToFeet).toFixed(4)
    let fm = (baseValue * footToMeter).toFixed(4)

    lengthEl.textContent = `${baseValue} meter =  ${mf} feet | ${baseValue} feet = ${fm} meters`

    let lg = (baseValue * literToGallon).toFixed(4)
    let gl = (baseValue * gallonToLiter).toFixed(4)

    volumeEl.textContent = `${baseValue} liters = ${lg} gallons | ${baseValue} gallons = ${gl} liters`

    let kp = (baseValue * kiloToPound).toFixed(4)
    let pk = (baseValue * poundToKilo).toFixed(4)

    massEl.textContent = `${baseValue} kilos = ${kp} pounds | ${baseValue} pounds = ${pk} kilos`
})