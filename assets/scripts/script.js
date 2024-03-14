'use strict'

const button = document.getElementById('button');

async function getJokes() {

    let joke = '';

   
    try {
        const apiUrl = 'https://v2.jokeapi.dev/joke/Any';
        const response = await fetch(apiUrl);
        const data = await response.json();
       
        if (data.setup) {
            // for 2 part joke
            joke = `${data.setup} ... ${data.delivery} `; 
        } else {
            // for single line joke
            joke = data.joke;
        }

        const setup = data.setup;
        const delivery =data.delivery

        const preElement = document.getElementById('json-data');
        const preElementt = document.getElementById('json-dataa');
        preElement.innerHTML = JSON.stringify(setup , null , 50);
        preElementt.innerHTML = JSON.stringify(delivery , null , 50);

        
        console.log(joke,'joke is')
      
    } catch (error) {
        console.log('error thrown', error);
        
    }
}


button.addEventListener('click', ()=>{
    getJokes()
});

