// Assuming you have an array of quotes
var quotes = [
    { "quote": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.", "author": "Albert Einstein" },
    { "quote": "The true sign of intelligence is not knowledge but imagination.", "author": "Albert Einstein" },
    { "quote": "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.", "author": "George Bernard Shaw" },
    { "quote": "Logic will get you from A to B. Imagination will take you everywhere.", "author": "Albert Einstein" },
    { "quote": "Imagination is the only weapon in the war against reality.", "author": "Lewis Carroll" },
    { "quote": "Imagination is everything. It is the preview of life's coming attractions.", "author": "Albert Einstein" },
    { "quote": "Imagination is the power of the mind over the possibilities of things.", "author": "William Stevens" },
    { "quote": "Live out of your imagination, not your history.", "author": "Stephen R. Covey" },
    { "quote": "Imagination is a force that can actually manifest a reality.", "author": "James Cameron" },
    { "quote": "Imagination is like a muscle. I found out that the more I wrote, the bigger it got.", "author": "Philip José Farmer" },
    { "quote": "Imagination is the voice of daring. If there is anything Godlike about God, it is that. He dared to imagine everything.", "author": "Henry Miller" },
    { "quote": "The man who has no imagination has no wings.", "author": "Muhammad Ali" },
    { "quote": "Imagination is greater than knowledge because it has no limits.", "author": "Dr. Seuss" },
    { "quote": "Imagination is the only key to the future. Without it, none exists - with it, all things are possible.", "author": "Idris Elba" },
    { "quote": "Imagination is the soil that brings dreams to life.", "author": "Albert Einstein" },
    { "quote": "Imagination should be used, not to escape reality, but to create it.", "author": "Colin Wilson" },
    { "quote": "Imagination is the power of mental picture-making. It is the dark light that is focused into concrete images.", "author": "Edith Sitwell" },
    { "quote": "Imagination is a palette of bright colors. You can use it to touch up memories — or you can use it to paint dreams.", "author": "Robert Brault" },
    { "quote": "The possible's slow fuse is lit by the imagination.", "author": "Emily Dickinson" },
    { "quote": "Imagination is the golden-eyed monster that never sleeps. It must be fed; it cannot be ignored.", "author": "Patricia A. McKillip" }
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