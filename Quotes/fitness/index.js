// Assuming you have an array of quotes
var quotes = [
    { "quote": "Strength does not come from the body. It comes from the will.", "author": "Unknown" },
    { "quote": "Do not pray for an easy life, pray for the strength to endure a difficult one.", "author": "Bruce Lee" },
    { "quote": "You never know how strong you are until being strong is your only choice.", "author": "Bob Marley" },
    { "quote": "Courage isn't having the strength to go on—it is going on when you don't have strength.", "author": "Napoleon Bonaparte" },
    { "quote": "True strength is keeping everything together when everyone expects you to fall apart.", "author": "Unknown" },
    { "quote": "Strength and growth come only through continuous effort and struggle.", "author": "Napoleon Hill" },
    { "quote": "The world breaks everyone, and afterward, some are strong at the broken places.", "author": "Ernest Hemingway" },
    { "quote": "Strength lies in differences, not in similarities.", "author": "Stephen R. Covey" },
    { "quote": "Strength is the product of struggle, you must do what others don't to achieve what others won't.", "author": "Henry Rollins" },
    { "quote": "Sometimes you don't realize your own strength until you come face to face with your greatest weakness.", "author": "Susan Gale" },
    { "quote": "Life doesn't get easier or more forgiving; we get stronger and more resilient.", "author": "Steve Maraboli" },
    { "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "author": "Christian D. Larson" },
    { "quote": "I am not a product of my circumstances. I am a product of my decisions.", "author": "Stephen R. Covey" },
    { "quote": "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.", "author": "Arnold Schwarzenegger" },
    { "quote": "Strength is not the absence of fear, but the ability to confront it.", "author": "Unknown" },
    { "quote": "Our greatest glory is not in never falling, but in rising every time we fall.", "author": "Confucius" },
    { "quote": "The strong man is not the good wrestler; the strong man is only the one who controls himself when he is angry.", "author": "Prophet Muhammad" },
    { "quote": "Strength of character means the ability to overcome resentment against others, to hide hurt feelings, and to forgive quickly.", "author": "Lawrence G. Lovasik" },
    { "quote": "You have within you, right now, everything you need to deal with whatever the world can throw at you.", "author": "Brian Tracy" },
    { "quote": "Make up your mind that no matter what comes your way, no matter how difficult, no matter how unfair, you will do more than simply survive. You will thrive in spite of it.", "author": "Joel Osteen" }
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