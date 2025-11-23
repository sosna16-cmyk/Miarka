function obliczMiarke() {
    const thetaDeg = parseFloat(document.getElementById("theta").value);
    if (isNaN(thetaDeg) || thetaDeg <= 0 || thetaDeg >= 90) {
        document.getElementById("result").innerHTML = "Błędny kąt!";
        return;
    }

    const L1 = 200; // mm
    const L2 = 200; // mm (środkowy segment prosty)
    const L3 = 200; // mm

    const theta = thetaDeg * Math.PI / 180;

    // Dokładny wzór analityczny na kąt przegięcia α
    const alpha = theta + Math.atan((L2 * Math.tan(theta)) / (L1 + L3));

    // Odległość ustawienia początkowego
    const ustawienie = L1 * Math.cos(alpha) + L2;

    document.getElementById("result").innerHTML =
        `Ustaw początek miarki: ${ustawienie.toFixed(0)} mm`;
}
