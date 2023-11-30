// JavaScript/jQuery can be used to dynamically generate and animate multiple snowflakes

// Generate multiple snowflakes
for (let i = 0; i < 50; i++) {
    let snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Varying animation duration
    document.querySelector('.snowflakes').appendChild(snowflake);
}
