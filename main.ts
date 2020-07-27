function faireQuelqueChose () {
	
}
let colonne_1 = 1
let colonne_2 = 2
let colonne3 = 3
let colonne4 = 4
let ligne = 0
let ligne1 = 1
let ligne2 = 2
let ligne3 = 3
let ligne4 = 4
let direction = 1
let direction1 = 1
let direction2 = 1
let direction3 = 1
let direction4 = -1
basic.forever(function () {
    basic.pause(100)
    led.unplot(colonne3, ligne3)
    ligne3 += direction3
    led.plot(colonne3, ligne3)
    if (ligne3 == 4) {
        direction3 = -1
    }
    if (ligne3 == 0) {
        direction3 = 1
    }
})
basic.forever(function () {
    basic.pause(100)
    led.unplot(colonne4, ligne4)
    ligne4 += direction4
    led.plot(colonne4, ligne4)
    if (ligne4 == 4) {
        direction4 = -1
    }
    if (ligne4 == 0) {
        direction4 = 1
    }
})
basic.forever(function () {
    basic.pause(100)
    led.unplot(colonne_2, ligne2)
    ligne2 += direction2
    led.plot(colonne_2, ligne2)
    if (ligne2 == 4) {
        direction2 = -1
    }
    if (ligne2 == 0) {
        direction2 = 1
    }
})
basic.forever(function () {
    basic.pause(100)
    led.unplot(colonne_1, ligne1)
    ligne1 += direction1
    led.plot(colonne_1, ligne1)
    if (ligne1 == 4) {
        direction1 = -1
    }
    if (ligne1 == 0) {
        direction1 = 1
    }
})
basic.forever(function () {
    let colonne = 0
    basic.pause(100)
    led.unplot(colonne, ligne)
    ligne += direction
    led.plot(colonne, ligne)
    if (ligne == 4) {
        direction = -1
    }
    if (ligne == 0) {
        direction = 1
    }
})
