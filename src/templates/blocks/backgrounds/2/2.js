/* eslint-disable no-plusplus */
window.requestAnimFrame = (() => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    ((callback) => {
      window.setTimeout(callback, 1000 / 60);
    })
  );
})();

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// get DPI
const dpi = window.devicePixelRatio || 1;
context.scale(dpi, dpi);
// console.log(dpi);

function fixDpi() {
  // get CSS height
  // the + prefix casts it to an integer
  // the slice method gets rid of "px"
  const styleHeight = +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
  const styleWidth = +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);

  // scale the canvas
  canvas.setAttribute('height', styleHeight * dpi);
  canvas.setAttribute('width', styleWidth * dpi);
}

const particleCount = 70;
const particles = [];
const colors = ['#3a0088', '#930077', '#e61c5d', '#ffbd39'];
function Particle() {
  this.radius = Math.round(Math.random() * 3 + 5);
  this.x = Math.floor(
    Math.random() *
      (+getComputedStyle(canvas).getPropertyValue('width').slice(0, -2) * dpi - this.radius + 1) +
      this.radius
  );
  this.y = Math.floor(
    Math.random() *
      (+getComputedStyle(canvas).getPropertyValue('height').slice(0, -2) * dpi - this.radius + 1) +
      this.radius
  );
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.speedx = Math.round(Math.random() * 100 + 0) / 100;
  this.speedy = Math.round(Math.random() * 100 + 0) / 100;

  // eslint-disable-next-line default-case
  switch (Math.round(Math.random() * colors.length)) {
    case 1:
      this.speedx *= 1;
      this.speedy *= 1;
      break;
    case 2:
      this.speedx *= -1;
      this.speedy *= 1;
      break;
    case 3:
      this.speedx *= 1;
      this.speedy *= -1;
      break;
    case 4:
      this.speedx *= -1;
      this.speedy *= -1;
      break;
  }

  this.move = () => {
    context.beginPath();
    context.globalCompositeOperation = 'source-over';
    context.fillStyle = this.color;
    context.globalAlpha = 1;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fill();
    context.closePath();

    this.x += this.speedx;
    this.y += this.speedy;

    if (this.x <= 0 + this.radius) {
      this.speedx *= -1;
    }
    if (this.x >= canvas.width - this.radius) {
      this.speedx *= -1;
    }
    if (this.y <= 0 + this.radius) {
      this.speedy *= -1;
    }
    if (this.y >= canvas.height - this.radius) {
      this.speedy *= -1;
    }

    for (let j = 0; j < particleCount; j++) {
      const particleActuelle = particles[j];
      const yd = particleActuelle.y - this.y;
      const xd = particleActuelle.x - this.x;
      const d = Math.sqrt(xd * xd + yd * yd);

      if (d < 200) {
        context.beginPath();
        context.globalAlpha = (200 - d) / (200 - 0);
        context.globalCompositeOperation = 'destination-over';
        context.lineWidth = 1;
        context.moveTo(this.x, this.y);
        context.lineTo(particleActuelle.x, particleActuelle.y);
        context.strokeStyle = this.color;
        context.lineCap = 'round';
        context.stroke();
        context.closePath();
      }
    }
  };
}
for (let i = 0; i < particleCount; i++) {
  fixDpi();
  const particle = new Particle();
  particles.push(particle);
}

function animate() {
  fixDpi();
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleCount; i++) {
    particles[i].move();
  }
  requestAnimFrame(animate);
}

animate();
