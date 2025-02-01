function updateTime() {
    const timeElement = document.getElementById("current-time");
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Or use any format you like
    timeElement.innerText = formattedTime;
}

setInterval(updateTime, 1000);
function toggleBio() {
    const bioContent = document.getElementById('bio-content');
    if (bioContent.style.display === 'block') {
        bioContent.style.display = 'none';
    } else {
        bioContent.style.display = 'block';
    }
}
