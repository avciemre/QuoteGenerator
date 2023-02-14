let apiQuotes = [];

//Show New Quote
function newQuote(){
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

//Get Qutotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
const response = await fetch(apiUrl);
apiQuotes = await response.json();
newQuote();
//console.log(apiQuotes[12]);
    } catch (error) {
        //Catch error here
    }
}

//On Load
getQuotes();