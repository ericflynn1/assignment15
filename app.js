function getWord() {
    let request = new XMLHttpRequest()
    request.open('GET', 'https://harold-jtpegfzoyg.now.sh/scrambled');
    request.addEventListener('load', function(){
    let word = JSON.parse(request.responseText);
        (word.scrambled);
        console.log(word);


    });
    request.send();
}
window.addEventListener('load', function(){
    getWord();
})