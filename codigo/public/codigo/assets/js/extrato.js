function  leDados(){
  let strDados = localStorage.getItem('db2');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  else {
    objDados = { Extratos: [
        ]
      
    }
  }

  return objDados;

}

function salvaDados(dados){
  localStorage.setItem ('db2', JSON.stringify(dados));
}

function incluir () {
   //ler os dados do LocalStorage
  let objDados = leDados();

  //incluir um novo extrato
  let strMês = document.getElementById ('inputmes').value;
  let strExtrato = document.getElementById ('inputextrato').value;
  let novoExtrato = {
      Mês: strMês,
      Extrato: strExtrato 
  };
  objDados.Extratos.push (novoExtrato);

  //salvar os dados no LocalStroage novamente
  salvaDados (objDados);

  //atualiza os dados da tela

  imprimeDados();
}

function imprimeDados () {
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leDados ();

  for (i = 0; i < objDados.Extratos.length; i++){
    strHtml += `<h6 id="teste"> ${objDados.Extratos[i].Mês} - ${objDados.Extratos[i].Extrato} <br> <hr> </h6>`
  }

  tela.innerHTML = strHtml;
}
//removendo dados

function removedados (){   

  localStorage.removeItemItem ('db',(dados));

}

//configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnupload').addEventListener ('click', incluir);

document.getElementById('btnexcluir').addEventListener('click', function() {
  var key = 'db';
  if (localStorage.getItem(key) !== null) {
      localStorage.removeItem(key);
      alert('Itens excluídos com sucesso!');
  } else {
      alert('Não existem itens!');
  }
});
