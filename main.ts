let liste: number[] = []
let ligne = 0
let direction = 0
function faireQuelqueChose () {
    liste = [0, 5]
}
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
