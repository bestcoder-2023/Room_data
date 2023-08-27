// Function to shuffle an array randomly using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to shuffle names in a room
function shuffleRoom(roomElement) {
    const rows = Array.from(roomElement.getElementsByTagName('tr'));
    const names = rows.slice(1).map(row => row.lastElementChild.textContent);
    shuffleArray(names);
    names.forEach((name, index) => {
        rows[index + 1].lastElementChild.textContent = name;
    });
}

// Event listener for the Shuffle button
document.addEventListener('DOMContentLoaded', function () {
    const shuffleButton = document.getElementById('shuffleButton');
    shuffleButton.addEventListener('click', function () {
        const roomElements = document.querySelectorAll('.head table');
        roomElements.forEach(room => shuffleRoom(room));
    });
});
