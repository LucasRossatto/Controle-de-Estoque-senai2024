const nomeProduto = document.querySelector("#nomeProduto");
const valorUnidade = document.querySelector("#valorUnidade");
const qtdEstoque = document.querySelector("#qtdEstoque");
const btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();

  const produto = {
    nomeDoProduto: nomeProduto.value,
    estoqueProduto: qtdEstoque.value,
    ValorProduto: valorUnidade.value,
  };

  nomeProduto.value = "";
  qtdEstoque.value = "";
  valorUnidade.value = "";

  console.log(produto);
});