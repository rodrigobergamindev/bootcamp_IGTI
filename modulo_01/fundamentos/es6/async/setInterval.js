window.addEventListener('load', () => {
    const div = document.querySelector('#timer');
    let count = 0;
    const timer = setInterval(() => {
        div.textContent = count++

        if(count % 5 === 0) {
            setTimeout(() => {
                div.textContent = count  + ',5'
            }, 500);
        }

    }, 1000);

})


