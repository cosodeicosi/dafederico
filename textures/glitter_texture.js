// Funzione per generare una texture glitter
function generateGlitterTexture(canvas, color) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Pulisci il canvas
    ctx.clearRect(0, 0, width, height);
    
    // Estrai i componenti RGB dal colore
    let r, g, b;
    if (color.startsWith('#')) {
        r = parseInt(color.slice(1, 3), 16);
        g = parseInt(color.slice(3, 5), 16);
        b = parseInt(color.slice(5, 7), 16);
    } else {
        // Colore di default blu
        r = 30;
        g = 100;
        b = 200;
    }
    
    // Crea punti glitter di diverse dimensioni
    const numPoints = Math.floor(width * height / 30); // Densità dei punti
    
    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 0.5; // Dimensione variabile
        const brightness = Math.random() * 0.7 + 0.3; // Luminosità variabile
        
        // Colore base con luminosità variabile
        const pointR = Math.min(255, r + (255 - r) * brightness);
        const pointG = Math.min(255, g + (255 - g) * brightness);
        const pointB = Math.min(255, b + (255 - b) * brightness);
        
        // Disegna il punto glitter
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${pointR}, ${pointG}, ${pointB})`;
        ctx.fill();
        
        // Aggiungi un piccolo riflesso bianco
        if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
        }
    }
    
    // Aggiungi alcuni punti più luminosi per simulare riflessi intensi
    const numBrightPoints = Math.floor(numPoints * 0.1);
    for (let i = 0; i < numBrightPoints; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 3 + 1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
    }
    
    // Aggiungi un leggero effetto di brillantezza generale
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = `rgba(${r/2}, ${g/2}, ${b/2}, 0.2)`;
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
    
    return canvas;
}
