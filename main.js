function getQuote() {
    const quote = document.getElementById('quote'); 
    const author = document.getElementById('author'); 

    $.ajax({
        url: 'https://api.whatdoestrumpthink.com/api/v1/quotes'
    }).done(function(response) {
        console.log(response); 
        const data = response.messages.non_personalized; 
        let randomNum = Math.floor(Math.random() * (data.length)); 

        quote.innerHTML = data[randomNum]; 
        author.innerHTML = 'Donald Trump'; 
        console.log(quote.innerHTML);
    })
}

getQuote(); 

document.getElementById('quoteButton').addEventListener('click', () => {
    getQuote(); 
}); 