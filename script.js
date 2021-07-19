const c = function(el){
    return document.querySelector(el);
}
const cs = function(el){
    return document.querySelectorAll(el);
}

pizzaJson.map(function(item, index){
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', function(e){
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name; 
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description; 
        
      

        c('.pizzaWindowArea').style.opacity = 0; 
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(function(){
            c('.pizzaWindowArea').style.opacity =1;
        }, 200);
    });


    

    c('.pizza-area').append(pizzaItem);
});


// Duvidas:
// passa index e item dentro da função
// Chamar json com 'item.'
// Pega as informações da pizza e mostra elas no modal