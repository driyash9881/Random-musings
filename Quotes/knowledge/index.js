// Assuming you have an array of quotes
var quotes = [
    { "quote": "Knowledge is power.", "author": "Sir Francis Bacon" },
    { "quote": "The only true wisdom is in knowing you know nothing.", "author": "Socrates" },
    { "quote": "Knowledge which is acquired under compulsion obtains no hold on the mind.", "author": "Plato" },
    { "quote": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", "author": "Stephen Hawking" },
    { "quote": "Knowledge is of no value unless you put it into practice.", "author": "Anton Chekhov" },
    { "quote": "To attain knowledge, add things every day. To attain wisdom, remove things every day.", "author": "Lao Tzu" },
    { "quote": "Real knowledge is to know the extent of one's ignorance.", "author": "Confucius" },
    { "quote": "The only source of knowledge is experience.", "author": "Albert Einstein" },
    { "quote": "Knowledge is like money: to be of value it must circulate, and in circulating it can increase in quantity and, hopefully, in value.", "author": "Louis L'Amour" },
    { "quote": "Knowledge is love and light and vision.", "author": "Helen Keller" },
    { "quote": "The true sign of intelligence is not knowledge but imagination.", "author": "Albert Einstein" },
    { "quote": "Knowledge is power, community is strength, and positive attitude is everything.", "author": "Lance Armstrong" },
    { "quote": "Knowledge, like air, is vital to life. Like air, no one should be denied it.", "author": "Alan Moore" },
    { "quote": "To know what you know and what you do not know, that is true knowledge.", "author": "Confucius" },
    { "quote": "The more you know, the more you realize you don't know.", "author": "Aristotle" },
    { "quote": "Knowledge is a treasure, but practice is the key to it.", "author": "Thomas Fuller" },
    { "quote": "Science is organized knowledge. Wisdom is organized life.", "author": "Immanuel Kant" },
    { "quote": "Knowledge of the self is the mother of all knowledge. So it is incumbent on me to know my self, to know it completely, to know its minutiae, its characteristics, its subtleties, and its very atoms.", "author": "Kahlil Gibran" },
    { "quote": "Knowledge is not simply another commodity. On the contrary. Knowledge is never used up. It increases by diffusion and grows by dispersion.", "author": "Daniel J. Boorstin" },
    { "quote": "Knowledge is a weapon. I intend to be formidably armed.", "author": "Terry Goodkind" }

];

// Iterate through each quote in the array
quotes.forEach(function(quoteObj) {
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