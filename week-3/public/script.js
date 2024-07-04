calculateButton.addEventListener('click', function() {
    const number = document.getElementById('numInput').value;
    
    fetch(`/getData?number=${number}`)
        .then(res => {
            if(!res.ok){
                throw new Error('network response error')
            }
            return res.json();
        })
        .then(data => {
            document.getElementById('result').textContent = `sum from 1 to ${number} is ${data}`;
        })
        .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
            document.getElementById('result').textContent = 'Error: Unable to fetch data.';
        })
});