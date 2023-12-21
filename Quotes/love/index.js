// Assuming you have an array of quotes
var quotes = [
    { "quote": "The best thing to hold onto in life is each other.", "author": "Audrey Hepburn" },
    { "quote": "Love is not just looking at each other, it's looking in the same direction.", "author": "Antoine de Saint-Exupéry" },
    { "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "author": "Dr. Seuss" },
    { "quote": "Love is an endless mystery, for it has nothing else to explain it.", "author": "Rabindranath Tagore" },
    { "quote": "To love and be loved is to feel the sun from both sides.", "author": "David Viscott" },
    { "quote": "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", "author": "Unknown" },
    { "quote": "The greatest happiness you can have is knowing that you are loved for who you are and nothing more.", "author": "Unknown" },
    { "quote": "Being deeply loved by someone gives you strength while loving someone deeply gives you courage.", "author": "Lao Tzu" },
    { "quote": "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.", "author": "Franklin P. Jones" },
    { "quote": "In love, one and one are one.", "author": "Jean-Paul Sartre" },
    { "quote": "Love is the flower you've got to let grow.", "author": "John Lennon" },
    { "quote": "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.", "author": "Nicholas Sparks" },
    { "quote": "To love oneself is the beginning of a lifelong romance.", "author": "Oscar Wilde" },
    { "quote": "Love is the greatest refreshment in life.", "author": "Pablo Picasso" },
    { "quote": "Love is when the other person's happiness is more important than your own.", "author": "H. Jackson Brown Jr." },
    { "quote": "Love is the only force capable of transforming an enemy into a friend.", "author": "Martin Luther King Jr." },
    { "quote": "Love is the silent saying and saying of a single name.", "author": "Mignon McLaughlin" },
    { "quote": "The art of love is largely the art of persistence.", "author": "Albert Ellis" },
    { "quote": "Love is a canvas furnished by nature and embroidered by imagination.", "author": "Voltaire" },
    { "quote": "Life without love is like a tree without blossoms or fruit.", "author": "Khalil Gibran" }

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