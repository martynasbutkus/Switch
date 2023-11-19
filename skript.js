//SWITCH 1 UZDUOTIS
var car = prompt("Iveskite marke")

switch(car){
    case "vw":
    case "bentley":
    case "buggati":
    case "lamborghini":
    case "porshe":
    case "audi":
    alert(car + " priklauso VW group.")
    break
    case "bmw":
    case "mini":
    case "rolls-royce":
    alert(car + " priklauso BMW group.")
    break
    default: alert("Nepriklauso nei BMW, nei VW group.")
}


//SWITCH 2 UZDUOTIS

var userInput = 'Obuolys'

switch(userInput){
    case 'Obuolys':
    case 'Mandarinas':
    case 'Apelsinas':
    case 'Kriause':
    case 'Slyva':
    alert(userInput + " tai yra vaisius.")
    break
    case 'Pomidoras':
    case 'Morka':
    case 'Paprika':
    case 'Agurkas':
    case 'Kopustas':
    alert(userInput + " tai yra darzove.")
    break
    default: alert(userInput + " tai nei darzove, nei vaisius.")
}

//SWITCH 3 UZDUOTIS

var weekDay = 0

switch(weekDay){
    case 0:
        weekDay = "Pirmadienis"
    break
    case 1:
        weekDay = "Antradienis"
    break
    case 2:
        weekDay = "Treciadienis"
    break
    case 3:
        weekDay = "Ketvirtadienis"
    break
    case 4:
        weekDay = "Penktadienis"
    break
    case 5:
        weekDay = "Sestadienis"
    break
    case 6:
        weekDay = "Sekmadienis"
    break
    default:
        weekDay = "Neteisingai ivedete"
}
console.log(weekDay);