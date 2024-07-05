calculateButton.addEventListener('click', function() {
    const input = document.getElementById('numInput').value.trim();
    if (!input) {
        document.getElementById('result').textContent = 'Lack of Parameter';
        return;
    }
    const number = parseInt(document.getElementById('numInput').value);

    if (isNaN(number) || number <= 0 || !Number.isInteger(number )) {
        document.getElementById('result').textContent = 'Wrong Parameter';
        return;
    }
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