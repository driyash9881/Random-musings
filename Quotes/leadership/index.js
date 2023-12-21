// Assuming you have an array of quotes
var quotes = [
    { "quote": "A good leader takes a little more than his share of the blame, a little less than his share of the credit.", "author": "Arnold H. Glasow" },
    { "quote": "A leader is one who knows the way, goes the way, and shows the way.", "author": "John C. Maxwell" },
    { "quote": "The function of leadership is to produce more leaders, not more followers.", "author": "Ralph Nader" },
    { "quote": "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others.", "author": "Douglas MacArthur" },
    { "quote": "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.", "author": "Ronald Reagan" },
    { "quote": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.", "author": "Lao Tzu" },
    { "quote": "Leadership is not about being in charge. It is about taking care of those in your charge.", "author": "Simon Sinek" },
    { "quote": "The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are.", "author": "John C. Maxwell" },
    { "quote": "A true leader must have enough backbone to stand alone, even when the crowd wants to take the easy road.", "author": "John C. Maxwell" },
    { "quote": "A leader is one who knows the way, goes the way, and shows the way.", "author": "John C. Maxwell" },
    { "quote": "A leader is someone who demonstrates what's possible.", "author": "Mark Yarnell" },
    { "quote": "A good leader leads the people from above them. A great leader leads the people from within them.", "author": "M.D. Arnold" },
    { "quote": "The function of leadership is to produce more leaders, not more followers.", "author": "Ralph Nader" },
    { "quote": "A great leader's courage to fulfill his vision comes from passion, not position.", "author": "John C. Maxwell" },
    { "quote": "A leader is one who knows the way, goes the way, and shows the way.", "author": "John C. Maxwell" },
    { "quote": "A leader is not an administrator who loves to run others, but someone who carries water for his people, so that they can get on with their jobs.", "author": "Robert Townsend" },
    { "quote": "A good leader takes a little more than his share of the blame, a little less than his share of the credit.", "author": "Arnold H. Glasow" },
    { "quote": "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others.", "author": "Douglas MacArthur" },
    { "quote": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.", "author": "Lao Tzu" },
    { "quote": "A genuine leader is not a searcher for consensus but a molder of consensus.", "author": "Martin Luther King Jr." }
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