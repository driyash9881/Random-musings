document.addEventListener('DOMContentLoaded', function() {
    // Font Name options
    var fontNames = ['Arial', 'Verdana', 'Times New Roman', 'Georgia', 'Courier New', 'Comic Sans MS'];
    var fontNameSelect = document.getElementById('fontName');
    for (var i = 0; i < fontNames.length; i++) {
        var option = document.createElement('option');
        option.value = fontNames[i];
        option.text = fontNames[i];
        fontNameSelect.appendChild(option);
    }

    // Font Size options
    var fontSizes = ['8px', '12px', '16px', '20px', '24px', '28px', '32px'];
    var fontSizeSelect = document.getElementById('font-size');
    for (var j = 0; j < fontSizes.length; j++) {
        var option = document.createElement('option');
        option.value = fontSizes[j];
        option.text = fontSizes[j];
        fontSizeSelect.appendChild(option);
    }

    // Text formatting buttons
    var optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var command = button.classList[1];
            document.execCommand(command, false, null);
        });
    });
    // List buttons (Ordered List and Unordered List)
    // List buttons (Ordered List and Unordered List)
    var orderedListButton = document.querySelector('.oderedlist');
    var unorderedListButton = document.querySelector('.list');

    orderedListButton.addEventListener('click', function() {
        document.execCommand('insertOrderedList', false, null);
    });

    unorderedListButton.addEventListener('click', function() {
        document.execCommand('insertUnorderedList', false, null);
    });
    // Undo
    var undoButton = document.querySelector('.undo');
    undoButton.addEventListener('click', function() {
        document.execCommand('undo', false, null);
    });

    // Redo
    var redoButton = document.querySelector('.redo');
    redoButton.addEventListener('click', function() {
        document.execCommand('redo', false, null);
    });
    // Heading options
    var formatClassSelect = document.getElementById('formatclass');
    formatClassSelect.addEventListener('change', function() {
        var format = formatClassSelect.value;
        document.execCommand('formatBlock', false, format);
    });

    // Font Name and Font Size
    var fontNameSelect = document.getElementById('fontName');
    fontNameSelect.addEventListener('change', function() {
        var font = fontNameSelect.value;
        document.execCommand('fontName', false, font);
    });
    var listoptn = document.querySelector(".list");
    listoptn.addEventListener('change', function() {

    })

    var fontSizeSelect = document.getElementById('font-size');
    fontSizeSelect.addEventListener('change', function() {
        var fontSize = fontSizeSelect.value;
        document.execCommand('fontSize', false, fontSize);
    });

    // Font and Background Color
    var foreColorInput = document.getElementById('foreColor');
    foreColorInput.addEventListener('change', function() {
        var color = foreColorInput.value;
        document.execCommand('foreColor', false, color);
    });

    var backColorInput = document.getElementById('backColor');
    backColorInput.addEventListener('change', function() {
        var color = backColorInput.value;
        document.execCommand('hiliteColor', false, color);
    });
    //download
    document.getElementById('downloadImageBtn').addEventListener('click', function() {
        const textInputDiv = document.getElementById('text-input');

        // Use html2canvas to capture the content as an image
        html2canvas(textInputDiv).then(function(canvas) {
            // Convert the canvas to a data URL
            const dataURL = canvas.toDataURL('image/png');

            // Create a temporary link element to trigger the download
            const downloadLink = document.createElement('a');
            downloadLink.href = dataURL;
            downloadLink.download = 'text_editor_content.png';

            // Trigger the download
            downloadLink.click();
        });
    });
});