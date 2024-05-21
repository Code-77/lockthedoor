document.getElementById('lock').addEventListener('click', function() {
    const door = document.getElementById('door');
    door.style.transform = 'rotateY(90deg)';
    door.style.transition = 'transform 1s';
});
