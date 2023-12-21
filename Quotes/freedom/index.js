// Assuming you have an array of quotes
var quotes = [
    { "quote": "Freedom is the oxygen of the soul.", "author": "Moshe Dayan" },
    { "quote": "The only way to deal with this life meaningfully is to find one’s passion, and the only way to do this is to be free.", "author": "Bryant McGill" },
    { "quote": "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.", "author": "Nelson Mandela" },
    { "quote": "Freedom is not worth having if it does not include the freedom to make mistakes.", "author": "Mahatma Gandhi" },
    { "quote": "Those who deny freedom to others deserve it not for themselves.", "author": "Abraham Lincoln" },
    { "quote": "Freedom is never more than one generation away from extinction. We didn't pass it to our children in the bloodstream. It must be fought for, protected, and handed on for them to do the same.", "author": "Ronald Reagan" },
    { "quote": "Freedom is the open window through which pours the sunlight of the human spirit and human dignity.", "author": "Herbert Hoover" },
    { "quote": "The secret to happiness is freedom... And the secret to freedom is courage.", "author": "Thucydides" },
    { "quote": "Freedom is not the absence of commitments, but the ability to choose—and commit myself to—what is best for me.", "author": "Paulo Coelho" },
    { "quote": "Freedom is the right to tell people what they do not want to hear.", "author": "George Orwell" },
    { "quote": "Freedom is the power to choose our own chains.", "author": "Jean Jacques Rousseau" },
    { "quote": "Freedom is not just something that is served to you on a plate. It's something you have to fight for every single day.", "author": "Zaha Hadid" },
    { "quote": "Freedom is not merely the opportunity to do as one pleases; neither is it merely the opportunity to choose between set alternatives. Freedom is, first of all, the chance to formulate the available choices, to argue over them—and then, the opportunity to choose.", "author": "C. Wright Mills" },
    { "quote": "Freedom is the sure possession of those alone who have the courage to defend it.", "author": "Pericles" },
    { "quote": "Freedom is the right to question and change the established way of doing things.", "author": "Ronald Reagan" },
    { "quote": "Freedom means the opportunity to be what we never thought we would be.", "author": "Daniel J. Boorstin" },
    { "quote": "Freedom is nothing but a chance to be better.", "author": "Albert Camus" },
    { "quote": "Freedom lies in being bold.", "author": "Robert Frost" },
    { "quote": "Freedom is the right to live as we wish.", "author": "Epictetus" },
    { "quote": "Freedom is not just a word. It’s a responsibility.", "author": "Atal Bihari Vajpayee" }
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