// fetch('https://openapi.programming-hero.com/api/ai/tools')
// .then(res => res.json())
// .then(data => console.log(data))

const  loadCards =  async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res =await fetch(url);
    const data = await res.json();
    displayCards(data.data);

}
const displayCards = cards =>{
    console.log(cards);
    const cardsContainer = document.getElementById('card-container');
    cardsContainer.textContent='';

    cards=cards.slice(0,20);
    cards.forEach(card =>{
        const cardDiv = document.createElement('col');
        cardDiv.classList.add('col')
        cardDiv.innerHTML=`
        <div class="col">
        <div class="card p-4">
          <img src="${card.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${card.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
        `;

        cardsContainer.appendChild(cardDiv);
       

    })
}


document.getElementById('search-btn').addEventListener('click',function(){
  const searchField =document.getElementById('search-field');
  const searchText= searchField.value;
  loadCards(searchText);
})


loadCards();
