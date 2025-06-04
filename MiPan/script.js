function calcularPan() {
    // Obtener el tipo de pan seleccionado
    const tipoPan = document.getElementById('tipoPan').value;
    
    // Obtener la cantidad de harina del campo de entrada
    const harina = parseFloat(document.getElementById('cantidadHarina').value);

    // Validar que la harina sea un número válido
    if (isNaN(harina) || harina <= 0) {
        document.getElementById('resultados').innerHTML = "<p style='color: red;'>Por favor, ingresa una cantidad válida de harina.</p>";
        return;
    }

    let resultadosHTML = ''; // Variable para almacenar el HTML de los resultados

    switch (tipoPan) {
        case 'molde':
            // Cálculos para Pan de Molde Clásico
            const aguaMolde = Math.round(harina * 0.6);
            const mantecaMolde = Math.round(harina * 0.08);
            const salMolde = Math.round(harina * 0.02);
            const mielMolde = Math.round(harina * 0.03);
            const azucarMolde = Math.round(harina * 0.02);
            const levaduraMolde = Math.round(harina * 0.01);

            resultadosHTML = `
                <h3>Resultados para Pan de Molde Clásico</h3>
                <p><strong>Harina:</strong> ${harina} Gramos</p>
                <p><strong>Agua:</strong> ${aguaMolde} Gramos</p>
                <p><strong>Manteca:</strong> ${mantecaMolde} Gramos</p>
                <p><strong>Sal:</strong> ${salMolde} Gramos</p>
                <p><strong>Miel:</strong> ${mielMolde} Gramos</p>
                <p><strong>Azucar:</strong> ${azucarMolde} Gramos</p>
                <p><strong>Levadura:</strong> ${levaduraMolde} Gramos</p>
            `;
            break;

        case 'hokkaido':
            // Cálculos para Pan de Hokkaido
            const tangzhongHarina = Math.round(harina * 0.05);
            const tangzhongAgua = Math.round(tangzhongHarina * 5);
            const harinaParaPan = Math.round(harina * 0.95);
            const azucarHokkaido = Math.round(harina * 0.1);
            const salHokkaido = Math.round(harina * 0.02);
            const levaduraFresca = Math.round(harina * 0.015);
            const lecheFluida = Math.round(harina * 0.37);
            const huevo = Math.round(harina * 0.08);
            const mantecaHokkaido = Math.round(harina * 0.08);

            resultadosHTML = `
                <h3>Resultados para Pan de Hokkaido</h3>
                <p><strong>Harina Inicial:</strong> ${harina} Gramos</p>
                <p><strong>Tangzong Harina:</strong> ${tangzhongHarina} Gramos</p>
                <p><strong>Tangzong Agua:</strong> ${tangzhongAgua} Gramos</p>
                <p><strong>Harina para pan:</strong> ${harinaParaPan} Gramos</p>
                <p><strong>Azucar:</strong> ${azucarHokkaido} Gramos</p>
                <p><strong>Sal:</strong> ${salHokkaido} Gramos</p>
                <p><strong>Levadura Fresca:</strong> ${levaduraFresca} Gramos</p>
                <p><strong>Leche Fluida:</strong> ${lecheFluida} Gramos</p>
                <p><strong>Huevo:</strong> ${huevo} Gramos</p>
                <p><strong>Manteca:</strong> ${mantecaHokkaido} Gramos</p>
            `;
            break;

        default:
            resultadosHTML = "<p style='color: orange;'>Por favor, selecciona un tipo de pan para calcular.</p>";
            break;
    }

    // Mostrar los resultados en la única div de resultados
    document.getElementById('resultados').innerHTML = resultadosHTML;
}

// Puedes añadir esta línea para que al cargar la página se realice un cálculo inicial
// window.onload = calcularPan; // Descomenta si quieres que calcule al cargar la página