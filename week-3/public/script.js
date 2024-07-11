document.getElementById('calculateButton').addEventListener('click', () => {
    const input = document.getElementById('numInput').value.trim();
    if (!input) {
        document.getElementById('result').textContent = 'Lack of Parameter';
        return;
    }
    const number = parseInt(input);

    fetch(`/getData?number=${number}`)
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                    throw new Error(err.message);
                });
            }
            return res.json();
        })
        .then(data => {
            if (data.sum !== undefined) {
                document.getElementById('result').textContent = `Sum from 1 to ${number} is ${data.sum}`;
            } else {
                document.getElementById('result').textContent = `Error: ${data.message}`;
            }
        })
        .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
            document.getElementById('result').textContent = `Error: ${err.message}`;
        });
});