//cria um h1 com o nome exemplo com a cor verde
var elemento = document.getElementById("container") 
var h1 = document.createElement('h1');
h1.textContent = "Exemplo";
h1.style.color = 'green';
elemento.append(h1);

//um alerta no pagina avisando algo
var btnExemplo = document.getElementById('bnt-exemplo');
btnExemplo.addEventListener('click', () =>{
    alert("botão Clicado");
});

//mostra as teclas clicadas no console do F12
document.addEventListener('ketdown', (event) => {
    console.log(event.key);
})