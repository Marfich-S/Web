const increaseTextButton = document.getElementById('increaseText');
const toggleContrastButtonon = document.getElementById('toggleContrast');
let textSize = 16;
let isHighContrast = false;
increaseTextButton.onclick = function() {
textSize += 2;
document.body.style.fontSize = textSize + 'px';
};
toggleContrastButton.onclick = function() {
isHighContrast = !isHighContrast;
if (isHighContrast) {
document.body.style.backgroundColor = '#000';
document.body.style.color = '#FFF';
} else {
document.body.style.backgroundColor = '';
document.body.style.color ='';
}
};