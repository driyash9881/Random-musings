// Sample array of love quotes
var quotes = [
    { quote: 'Love is not just looking at each other, it\'s looking in the same direction.', author: 'Antoine de Saint-Exupéry' },
    { quote: 'The best thing to hold onto in life is each other.', author: 'Audrey Hepburn' },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { quote: "Without deviation from the norm, progress is not possible.", author: "Frank Zappa" },
    { quote: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.", author: "Epictetus" },
    { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { quote: "I think therefore I am (Cogito, ergo sum).", author: "René Descartes" },
    { quote: "The greater the difficulty, the more glory in surmounting it.", author: "Epicurus" },
    { quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", author: "Plato" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "I cannot teach anybody anything. I can only make them think.", author: "Socrates" }

];

var limit = 20;
var page = 1;

// Function to generate and append quotes to the #quoteContainer
function generateQuotes() {
    // Clear existing content in #quoteContainer
    $('#quoteContainer').empty();

    // Calculate the starting index based on the page and limit
    var startIndex = (page - 1) * limit;

    // Slice the array to get the quotes for the current page
    var quotesForPage = quotes.slice(startIndex, startIndex + limit);

    // Iterate through each love quote in the array
    quotesForPage.forEach(function(quoteObj, index) {
        var quote = quoteObj.quote;
        var author = quoteObj.author;

        // Create a new div element for each quote with styling
        var quoteDiv = $('<div>').addClass('quote-box card-zoom'); // Add a CSS class for styling

        // Create and style the quote content
        var quoteContent = $('<blockquote>').addClass('quote-text').text(quote); // Add a CSS class for typography

        // Create and style the author
        var authorElement = $('<p>').addClass('author-name').text('- ' + author); // Add a CSS class for typography

        // Create a new div element for share buttons
        var shareButtonsDiv = $('<div>').addClass('share-buttons d-flex  gap-2 ')

        // Instagram share button
        var instagramButton = $('<button>').addClass('btn btn-secondary rounded-circle .ms-2  ').css({
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem"
        });
        var instagramIcon = $('<i>').addClass('fab fa-instagram'); // Add Font Awesome classes to the <i> element
        instagramButton.append(instagramIcon); // Append the <i> element to the button
        instagramButton.on('click', function() {
            // Replace 'your-url' with the URL you want to share on Instagram
            var url = 'your-url';
            window.open('https://www.instagram.com/sharer.php?u=' + encodeURIComponent(url));
        });

        // Facebook share button
        var facebookButton = $('<button>').addClass('btn btn-secondary rounded-circle .ms-2 ').css({
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem"
        });
        var facebookIcon = $('<i>').addClass('fab fa-facebook'); // Add Font Awesome classes to the <i> element
        facebookButton.append(facebookIcon); // Append the <i> element to the button
        facebookButton.on('click', function() {
            // Replace 'your-url' with the URL you want to share on Facebook
            var url = 'your-url';
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url));
        });

        // Twitter share button
        var twitterButton = $('<button>').addClass('btn btn-secondary rounded-circle .ms-2 ').css({
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem"
        });
        var twitterIcon = $('<i>').addClass('fab fa-twitter'); // Add Font Awesome classes to the <i> element
        twitterButton.append(twitterIcon); // Append the <i> element to the button
        twitterButton.on('click', function() {
            // Replace 'your-text' and 'your-url' with your desired tweet text and URL
            var text = 'your-text';
            var url = 'your-url';
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url));
        });

        // WhatsApp share button
        var whatsappButton = $('<button>').addClass('btn btn-secondary rounded-circle .ms-2 ').css({
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem"
        });;
        var whatsappIcon = $('<i>').addClass('fab fa-whatsapp'); // Add Font Awesome classes to the <i> element
        whatsappButton.append(whatsappIcon); // Append the <i> element to the button
        whatsappButton.on('click', function() {
            // Replace 'your-text' and 'your-url' with your desired message text and URL
            var text = 'your-text';
            var url = 'your-url';
            window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(text + ' ' + url));
        });

        // Copy to Clipboard button
        var copyButton = $('<button>').addClass('btn btn-secondary rounded-circle .ms-2').css({
            "--bs-btn-padding-y": ".25rem",
            "--bs-btn-padding-x": ".5rem",
            "--bs-btn-font-size": ".75rem"
        });
        var copypasteIcon = $('<i>').addClass('far fa-copy ');
        copyButton.append(copypasteIcon);
        copyButton.on('click', function() {
            var textToCopy = quote + ' - ' + author;
            var tempInput = $('<input>').val(textToCopy);
            $('body').append(tempInput);
            tempInput.select();
            document.execCommand('copy');
            tempInput.remove();
            alert('Text copied to clipboard: ' + textToCopy);
        });

        // Append share buttons to the shareButtonsDiv
        shareButtonsDiv.append(instagramButton, facebookButton, twitterButton, whatsappButton, copyButton);

        // Append quote content, author, and share buttons to the quote div
        quoteDiv.append(quoteContent, authorElement, shareButtonsDiv);

        // Append the quote div to the quote container
        $('#quoteContainer').append(quoteDiv);
    });
}

// Call the function to generate and append quotes when the page is ready
$(document).ready(function() {
    generateQuotes();
});