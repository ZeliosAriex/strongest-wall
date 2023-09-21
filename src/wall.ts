/**
 * Construye una representación string de una pared compuesta de ladrillos y mortero.
 *
 * La pared se representa mediante caracteres que simulan los ladrillos ('■■' y '■') y el mortero ('|').
 * Se alterna la posición de los ladrillos y el mortero en cada fila para simular el patrón de una pared de ladrillos real.
 *
 * @function
 * @name buildWall
 *
 * @param {number} rows - El número de filas de la pared. Debe ser un número entero positivo.
 * @param {number} bricks - El número de ladrillos en cada fila. Debe ser un número entero positivo.
 *
 * @returns {string | null} - Retorna un string que representa la pared construida con el patrón adecuado si los parámetros son válidos.
 * Retorna un mensaje de renuncia ("Naah, too much...here's my resignation.") si el número total de ladrillos (rows * bricks) excede 10000.
 * Retorna null si los parámetros de entrada no son válidos (no son números, son menores a 1, o no son enteros).
 *
 */
export const buildWall = (rows: number, bricks: number): string | null => {
  // Validación de entradas, con diferentes respuestas para casos inválidos
  if (isNaN(rows) || isNaN(bricks) || rows < 1 || bricks < 1) return null;
  if (rows * bricks > 10000) return "Naah, too much...here's my resignation.";

  // El array 'wall' contendrá cada fila de la pared como un string
  let wall: string[] = [];
  // Se determina si el número total de filas es par o impar
  const isRowsEven = rows % 2 === 0;

  for (let i = 0; i < rows; i++) {
    let row: string = '';
    // Si el número total de filas es par, alternamos a partir de la fila par
    // Si el número total de filas es impar, alternamos a partir de la fila impar
    if (isRowsEven ? i % 2 !== 0 : i % 2 === 0) {
      row = Array(bricks).fill('■■').join('|');
    } else {
      row = '■' + Array(bricks).fill('|■').join('■');
    }
    wall.push(row);
  }
  return wall.join('\n');
}
