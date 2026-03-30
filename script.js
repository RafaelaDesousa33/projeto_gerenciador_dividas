/* selecionando elementos */
const btn_divida = document.querySelector(".btn_divida");
const pessoa = document.querySelector(".name_user");
const valorDivida = document.querySelector(".valor");
const valorTotal = document.querySelector(".valor_total");
const containerFuncionalidades = document.querySelector(".container_funcionalidades_dividas__pessoas");


/*funcoes*/
const validarDados = (nome, valor) => {
    if (nome.trim() === "" || valor.trim() === "" || isNaN(valor)) {
        pessoa.style.border = "1px solid red";
        valorDivida.style.border = "1px solid red";

        return

    }
    const valorNumero = parseFloat(valor);
    pessoa.style.border = "1px solid black";
    valorDivida.style.border = "1px solid black";

    return {
        nome: nome,
        valor: valorNumero
    }




};



let total = 0;
const calcularTotal = (valor) => {

    const nome = valor.nome;
    const valor_numero = valor.valor;

    total += valor_numero;
    valorTotal.textContent = total.toFixed(2);
    return total;

}



const adicionarDividas = (valor) => {
    const nome = valor.nome;
    const valor_numero = valor.valor;

    // criando elementos
    const div = document.createElement("div");
    const btnExcluir = document.createElement("button")

    // configurando elementos

    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("btnCustom");







    div.innerHTML =
        `<div class="box-dividas"> 
       <p><img src="usuario_icone.png" alt="icone usuario" class="img_user"> 
       ${nome} R$ ${valor_numero} </p> 


       
       </div>  `

    // inserindo elementos
    div.appendChild(btnExcluir);
    containerFuncionalidades.appendChild(div);
    console.log(div);

    //inserindo acao de excluir
    btnExcluir.addEventListener("click", () => {
        div.remove();
        total -= valor_numero;
        valorTotal.textContent = total.toFixed(2);


    });


}




btn_divida.addEventListener("click", (e) => {
    e.preventDefault();


    let valores = validarDados(pessoa.value, valorDivida.value);

    if (!valores) return;

    const total_dividas = calcularTotal(valores);
    adicionarDividas(valores);





})


