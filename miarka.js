function obliczKat() {
    let L1 = parseFloat(document.getElementById("L1").value);
    let L2 = parseFloat(document.getElementById("L2").value);
    let L3 = parseFloat(document.getElementById("L3").value);
    let thetaDeg = parseFloat(document.getElementById("theta").value);

    let theta = thetaDeg * Math.PI / 180;

    // zakładamy α2 = 0, α1 = α3 = α, szukamy α numerycznie
    let alpha = 0;
    let step = 0.001;
    let found = false;

    for (let i = -Math.PI/4; i <= Math.PI/4; i += step) {
        let x = L1 * Math.cos(i) + L2 + L3 * Math.cos(i);
        let y = L1 * Math.sin(i) + L3 * Math.sin(i);
        let angle = Math.atan2(y, x);
        if (Math.abs(angle - theta) < 0.001) {
            alpha = i;
            found = true;
            break;
        }
    }

    let resultDiv = document.getElementById("result");
    if (found) {
        resultDiv.innerHTML = `Kąt przegięcia segmentów 1 i 3: ${ (alpha*180/Math.PI).toFixed(2) }°`;
    } else {
        resultDiv.innerHTML = "Nie udało się znaleźć rozwiązania.";
    }
}
