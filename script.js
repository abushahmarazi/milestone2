var toggleButton = document.getElementById('toggle-skills');
var skillsSections = document.querySelectorAll('.left-section ul');

toggleButton.addEventListener('click', function () {
    skillsSections.forEach(function (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    });
});
