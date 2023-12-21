// Assuming you have an array of quotes
var quotes = [
    { "quote": "The only true wisdom is in knowing you know nothing.", "author": "Socrates" },
    { "quote": "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.", "author": "Doug Larson" },
    { "quote": "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.", "author": "Lao Tzu" },
    { "quote": "The fool doth think he is wise, but the wise man knows himself to be a fool.", "author": "William Shakespeare" },
    { "quote": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", "author": "Albert Einstein" },
    { "quote": "The truest wisdom is a resolute determination.", "author": "Napoleon Bonaparte" },
    { "quote": "A wise man learns more from his enemies than a fool from his friends.", "author": "Baltasar Gracián" },
    { "quote": "The invariable mark of wisdom is to see the miraculous in the common.", "author": "Ralph Waldo Emerson" },
    { "quote": "Wisdom is the ability to discern what is right and true.", "author": "Unknown" },
    { "quote": "It is the province of knowledge to speak, and it is the privilege of wisdom to listen.", "author": "Oliver Wendell Holmes Sr." },
    { "quote": "Turn your wounds into wisdom.", "author": "Oprah Winfrey" },
    { "quote": "The beginning of wisdom is the definition of terms.", "author": "Socrates" },
    { "quote": "Wisdom is the daughter of experience.", "author": "Leonardo da Vinci" },
    { "quote": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", "author": "Albert Einstein" },
    { "quote": "The truest wisdom is a resolute determination.", "author": "Napoleon Bonaparte" },
    { "quote": "A wise man learns more from his enemies than a fool from his friends.", "author": "Baltasar Gracián" },
    { "quote": "The invariable mark of wisdom is to see the miraculous in the common.", "author": "Ralph Waldo Emerson" },
    { "quote": "Wisdom is the ability to discern what is right and true.", "author": "Unknown" },
    { "quote": "It is the province of knowledge to speak, and it is the privilege of wisdom to listen.", "author": "Oliver Wendell Holmes Sr." },
    { "quote": "Turn your wounds into wisdom.", "author": "Oprah Winfrey" }

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