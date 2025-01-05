const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#8A2BE2", "#FF69B4"];
        const button = document.getElementById('colorBtn');

        button.addEventListener('click', () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        });