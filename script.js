document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const today = new Date();
    let age = today.getFullYear() - year;

    const birthDate = new Date(year, month - 1, day);
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `Your Age is: ${age} years`;
});
