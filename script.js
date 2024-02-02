// Function to generate a motivational quote using Quotable API
async function generateMotivationalQuote() {
    const apiUrl = 'https://api.quotable.io/random?tags=motivational';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const quoteContainer = document.getElementById('quote-text');
        const authorContainer = document.getElementById('author');

        quoteContainer.textContent = data.content;
        authorContainer.textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching motivational quote:', error);
    }
}
