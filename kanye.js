const loadquote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayquote(data))
}

const displayquote= quote =>{
        
    const quoteElement= document.getElementById('quote')
    quoteElement.innerText=quote.quote
} 
