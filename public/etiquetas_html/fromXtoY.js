function generateTableRowsfromXtoYsplitInZ(fromX, toY, inZ) {
    let rows = "<tr><td id='title'>Numbers from 1 to 100</td></tr>"; 
    
    for (let row = fromX; row <= toY; row += inZ) {
        rows += "<tr><td>"; 

        for (let element = 0; element < inZ; element++) {
            let currentNumber = row + element; 
            if (currentNumber > toY) break; 
            rows += currentNumber + " ";
        }

        rows += "</td></tr>"; 
    }

    return rows; 
}

let fromX = parseInt(prompt("Ingrese el número inicial:"));
let toY = parseInt(prompt("Ingrese el número final:"));
let inZ = parseInt(prompt("Ingrese cuántos números por fila:"));


if (!isNaN(fromX) && !isNaN(toY) && !isNaN(inZ) && inZ > 0 && fromX < toY) {
    const rows = generateTableRowsfromXtoYsplitInZ(fromX, toY, inZ);
    document.getElementById('myTable').innerHTML = rows; 
} else {
    alert("Por favor, ingrese valores válidos. Asegúrese de que el número inicial sea menor que el número final y que las divisiones sean mayor que 0.");
}
