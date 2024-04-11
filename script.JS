[9:36] Švarc Adam
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Sčítání Binárních Čísel</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Sčítání Binárních Čísel</h2>
        <div class="input-group">
            <label for="binary1">Binární číslo 1:</label>
            <input type="text" id="binary1" required>
        </div>
        <div class="input-group">
            <label for="binary2">Binární číslo 2:</label>
            <input type="text" id="binary2" required>
        </div>
        <button onclick="addBinary()">Sečíst</button>
        <h3>Výsledek: <span id="result"></span></h3>
    </div>
</body>
</html>
[9:36] Švarc Adam
function addBinary() {
    var binary1 = document.getElementById('binary1').value;
    var binary2 = document.getElementById('binary2').value;
 
    if(!/^[01]+$/.test(binary1) || !/^[01]+$/.test(binary2)) {
        alert('Oba vstupy musí být platná binární čísla!');
        return;
    }
 
    var sum = (BigInt("0b" + binary1) + BigInt("0b" + binary2)).toString(2);
    document.getElementById('result').textContent = sum;
}