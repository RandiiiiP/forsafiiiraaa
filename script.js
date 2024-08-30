// Function to hide all popups
function hideAllPopups() {
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
}

// Event listener for love image click
document.getElementById('loveImage').addEventListener('click', function() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('popup1').style.display = 'flex';
    document.getElementById('backgroundMusic').play(); // Start background music
});

// Event listeners for popup navigation
document.getElementById('nextButton1').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup2').style.display = 'flex';
});

document.getElementById('nextButton2').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup3').style.display = 'flex';
});

document.getElementById('nextButton3').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup4').style.display = 'flex';
});

document.getElementById('nextButton4').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup5').style.display = 'flex';
});

document.getElementById('nextButton5').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup6').style.display = 'flex';
});

document.getElementById('nextButton6').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup7').style.display = 'flex';
});

document.getElementById('nextButton7').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup8').style.display = 'flex';
});
document.getElementById('nextButton8').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup9').style.display = 'flex';
});

document.getElementById('nextButton9').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup10').style.display = 'flex';
});

document.getElementById('nextButton10').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup11').style.display = 'flex';
});

document.getElementById('nextButton11').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup12').style.display = 'flex';
});

document.getElementById('nextButton12').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup13').style.display = 'flex';
});

document.getElementById('nextButton13').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup14').style.display = 'flex';
});
// Event listener for "Ya" and "Tidak" buttons
document.getElementById('yesButton').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup15').style.display = 'flex';
});

document.getElementById('noButton').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup18').style.display = 'flex';
});

// Event listeners for answer buttons in popup5
document.querySelectorAll('#popup15 .popup-button').forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.getAttribute('data-answer');
        hideAllPopups();
        if (answer === '2') {
            document.getElementById('popup16').style.display = 'flex';
        } else {
            document.getElementById('popup16').style.display = 'flex';
        }
    });
});

// Event listeners for final popups
document.getElementById('nextButton14').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup17').style.display = 'flex';
});

document.getElementById('nextButton15').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup18').style.display = 'flex';
});

document.getElementById('nextButton16').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup19').style.display = 'flex';
});

document.getElementById('nextButton17').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup20').style.display = 'flex';
});

document.getElementById('nextButton18').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('popup21').style.display = 'flex';
});

document.getElementById('nextButton19').addEventListener('click', function() {
    hideAllPopups();
    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('finalVideo').play(); // Play the final video
});

document.getElementById('closeButton').addEventListener('click', function() {
    hideAllPopups();
});
