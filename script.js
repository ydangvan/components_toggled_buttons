let currentActivePair = null;

function toggleButtons(pair) {
    // If there is a currently active pair and it's different from the clicked pair, revert it
    if (currentActivePair && currentActivePair !== pair) {
        document.getElementById('button' + currentActivePair.button).style.display = 'inline';
        document.getElementById('button' + currentActivePair.twin).style.display = 'none';
    }

    // Toggle the clicked pair
    const button = document.getElementById('button' + pair.button);
    const twin = document.getElementById('button' + pair.twin);

    if (button.style.display === 'none') {
        button.style.display = 'inline';
        twin.style.display = 'none';
    } else {
        button.style.display = 'none';
        twin.style.display = 'inline';
    }

    // Update the currently active pair
    currentActivePair = pair;
}

// Set up the event listeners for each pair of buttons
const buttonPairs = [
    { button: 'A', twin: 'Aa' },
    { button: 'B', twin: 'Bb' },
    { button: 'C', twin: 'Cc' }
];

buttonPairs.forEach(pair => {
    // Add event listener for the main button (e.g., A, B, C)
    document.getElementById('button' + pair.button).addEventListener('click', function() {
        toggleButtons(pair);
    });

    // Add event listener for the twin button (e.g., Aa, Bb, Cc)
    document.getElementById('button' + pair.twin).addEventListener('click', function() {
        toggleButtons(pair);
    });
});
