function getWords(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://harold-llxvvcgeyy.now.sh/scrambled');
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        console.log("wooo");
        let wordz = response[0].letters;

        for(let i = 0; i < response.length; i++){
            // console.log(i);
            let element = document.createElement('p');
            element.classList.add('recievemsg');
            parent.appendChild(element);

            let element2 = document.createElement('span');
            element2.textContent = response[i].user + ":";
            element2.classList.add('underline');
            element.appendChild(element2);
            
            let element3 = document.createElement('span');
            element3.textContent = response[i].message;
            element.appendChild(element3);
        }
        })  
        
    
    request.send();
};



window.addEventListener('load', function (){
    let parent = document.querySelector('#scrambler');
    let template = document.querySelector('#scrambler-template').innerHTML;
    let words = [];
    words.push ({

    });
});