var myChart;

function cadastroFatura() {


    const saldo = document.getElementById('saldo').value;
    const fatura = document.getElementById('fatura').value;

    console.log('saldo:', saldo);
    console.log('fatura:', fatura);

    var faturaJSON = {
        saldo: saldo,
        fatura: fatura,
    }
    localStorage.setItem('db', JSON.stringify(faturaJSON));
}

function mostrarDadosRecuperados() {
    var dados = localStorage.getItem('db');
    if (dados) {
        var fatura = JSON.parse(dados);
        var dadosRecuperadosDiv = document.getElementById('dadosRecuperados');
        dadosRecuperadosDiv.innerHTML = `<p>Saldo: ${fatura.saldo}</p><p>Fatura: ${fatura.fatura}</p>`;
        atualizarGrafico(fatura);
        console.log(fatura);
    }
}

function atualizarGrafico(fatura) {
    console.log(fatura);
    console.log(fatura.saldo);
    var ctx = document.getElementById('myChart').getContext('2d');

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Saldo', 'Fatura'],
            datasets: [{
                label: 'Valores',
                data: [fatura.saldo, fatura.fatura],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const enviarBtn = document.getElementById('enviar');
    enviarBtn.addEventListener('click', cadastroFatura);
    mostrarDadosRecuperados();
});