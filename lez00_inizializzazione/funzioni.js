// function saluta(varNome){
//     console.log(`Ciao ${varNome}`)
// }

const saluta = (varNome) => {
    console.log(`Ciao ${varNome}`)
}


setTimeout(() => {
    saluta("GIovani");
}, 1500)
