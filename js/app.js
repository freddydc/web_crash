// let entrada = prompt('Escribe un numero: ')
// let entrada_2 = prompt('Escribe un numero dos: ')

// console.log(typeof(entrada))
// console.log(typeof(entrada_2))

// alert(entrada + ' ' + entrada_2)
// alert(parseInt(entrada) + parseInt(entrada_2))

let frutas = ['apple', 'blueberry', 'orange', 'pineaple', 'lemon']

let index = 0

for (index; index < frutas.length; index += 1) {
    let ver_frutas = frutas[index]
    if (frutas[index] == 'orange') {
        console.log('Naranja')
        // continue
        break
    }
    console.log(ver_frutas)
}

let password = 'admin123'


function first(){

    let ind = 1

    while (ind <= 3) {
        let check_password = prompt('Your password:')
        if (check_password == password) {
            alert('Login successfully!')
            break
        } else {
            // alert('Try again!')
        }

        ind += 1
    }
}

function check() {
    // first()

    // let get_try = prompt('Can you try again yes ( y )?')

    if (get_try == 'y') {
        // first()
    }
}

let name = ''

while (name != 'freddy') {
    alert('Please type your name.')
    name = prompt()
}

alert('Thanks for you time.')
