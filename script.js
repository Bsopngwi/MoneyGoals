let currentBalance = 0;
let targetAmount = 0;

function startTracking() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    targetAmount = parseFloat(document.getElementById('targetAmount').value);

    if (!initialAmount || !targetAmount || targetAmount <= 0) {
        alert('Please enter valid initial and target amounts.');
        return;
    }

    currentBalance = initialAmount;
    document.getElementById('setupPage').style.display = 'none';
    document.getElementById('trackingPage').style.display = 'block';
    updateJar();
}

function updateJar() {
    let jarContainer = document.getElementById('jarContainer');
    jarContainer.innerHTML = ''; // Clear old content

    for (let i = 1; i <= 12; i++) {
        let jar = document.createElement('div');
        jar.style.height = currentBalance / targetAmount * 100 + '%';
        jar.style.background = '#0288d1';
        jar.style.margin = '5px';
        jarContainer.appendChild(jar);
    }
}

function addSavings() {
    const semiMonthlySaving = parseFloat(document.getElementById('semiMonthlySaving').value);
    if (!semiMonthlySaving) return;

    currentBalance += semiMonthlySaving;
    updateJar();
}
