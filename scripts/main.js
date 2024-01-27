// Toggle visibility of biography section on click
document.getElementById('bio').addEventListener('click', function() {
    this.style.display = this.style.display === 'none' ? 'block' : 'none';
});

// Toggle visibility of the content list section
document.getElementById('content').addEventListener('click', function() {
    let contentList = document.querySelector('#content ul');
    contentList.style.display = contentList.style.display === 'none' ? 'block' : 'none';
});

// Add event listener to a button to change the theme
let themeButton = document.getElementById('theme-button');
if (themeButton) {
    themeButton.addEventListener('click', changeThemeColor);
}

// Function to change theme color
function changeThemeColor() {
    let body = document.body;
    body.classList.toggle('dark-theme');
}

// Add event listener to images to enlarge on click
let galleryImages = document.querySelectorAll('#image img');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});
