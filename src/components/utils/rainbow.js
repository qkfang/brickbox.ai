export function applyRainbowEffect(element) {
    element.style.animation = 'rainbow-text 5s infinite, move-text 10s infinite linear';
    element.style.backgroundImage = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
    element.style.backgroundSize = '400% 100%';
    element.style.webkitBackgroundClip = 'text';
    element.style.webkitTextFillColor = 'transparent';
    // element.style.display = 'inline-block';
  }