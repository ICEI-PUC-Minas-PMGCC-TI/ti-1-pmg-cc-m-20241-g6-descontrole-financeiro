const professionalForm = document.getElementById('professional-form');
const searchForm = document.getElementById('search-form');
const resultsList = document.getElementById('results-list');

let professionals = [];

//adicionar um profissional
function addProfessional(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const specialty = document.getElementById('specialty').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    
    const professional = { name, specialty, city, state, phone, email };
    professionals.push(professional);
    
    professionalForm.reset();
    alert('Profissional adicionado com sucesso!');
}

//pesquisar profissionais
function searchProfessionals(event) {
    event.preventDefault();
    
    const searchSpecialty = document.getElementById('search-specialty').value;
    const searchCity = document.getElementById('search-city').value;
    const searchState = document.getElementById('search-state').value;
    
    const filteredProfessionals = professionals.filter(professional => {
        return professional.specialty === searchSpecialty &&
               professional.city.toLowerCase() === searchCity.toLowerCase() &&
               professional.state.toLowerCase() === searchState.toLowerCase();
    });
    
    displayResults(filteredProfessionals);
}

//exibe os resultados da pesquisa
function displayResults(results) {
    resultsList.innerHTML = '';
    
    if (results.length === 0) {
        resultsList.innerHTML = '<li>Nenhum profissional encontrado.</li>';
        return;
    }
    
    results.forEach(professional => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="contact-details">
                <strong>${professional.name}</strong><br>
                ${professional.specialty}<br>
                ${professional.city}, ${professional.state}<br>
                ${professional.phone}<br>
                <a href="mailto:${professional.email}">${professional.email}</a>
            </div>
        `;
        resultsList.appendChild(listItem);
    });
}

//event listeners para os formulários
professionalForm.addEventListener('submit', addProfessional);
searchForm.addEventListener('submit', searchProfessionals);
