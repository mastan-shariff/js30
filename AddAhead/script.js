const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
// first get the data  from endpoint 
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

// get only those cities or state that macthes with what user has entered

function findMacth(wordentered, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordentered, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}
function displaymatch() {
    const matchArray = findMacth(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityname = place.city.replace(regex, `<span class="highlight">${this.value}</span>`);
        const statename = place.state.replace(regex, `<span class='highlight'>${this.value}</span>`);
        return `
        <li>
        <span class="name">${cityname},${statename}</span>
        </li>
        `;
    }).join('');

    // select from suggestions

    suggestions.innerHTML = html;
    const list=document.querySelectorAll('.suggestions li');
    list.forEach((item)=>{
        const options=item.querySelector('.name');
        item.addEventListener('click',()=>{
            
            input.value=options.innerText;
            suggestions.innerHTML='';
        });
        

    })
}



input.addEventListener('keyup', displaymatch);
// on click remove placeholder
input.addEventListener('focusin',()=>{
    input.setAttribute('placeholder','');
    
})








