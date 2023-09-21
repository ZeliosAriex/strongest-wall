import { buildWall } from './wall';

test('should build a wall with 5 rows and 5 bricks', () => {
  const expectedWall = `■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■`;
  expect(buildWall(5, 5)).toBe(expectedWall);
});

test('should build a wall with 10 rows and 7 bricks', () => {
  const expectedWall = `■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■`;
  expect(buildWall(10, 7)).toBe(expectedWall);
});

test('should build a wall with 1 row and 1 brick', () => {
  const expectedWall = '■■';
  expect(buildWall(1, 1)).toBe(expectedWall);
});

test('should build a wall with 2 rows and 2 bricks', () => {
  const expectedWall = `■|■■|■\n■■|■■`;
  expect(buildWall(2, 2)).toBe(expectedWall);
});

test('should return null for invalid inputs', () => {
  expect(buildWall(-1, 5)).toBeNull(); // rows negativas
  expect(buildWall(5, -1)).toBeNull(); // bricks negativos
  expect(buildWall(0, 5)).toBeNull(); // cero rows
  expect(buildWall(5, 0)).toBeNull(); // cero bricks
  expect(buildWall(NaN, 5)).toBeNull(); // rows no es un número
  expect(buildWall(5, NaN)).toBeNull(); // bricks no es un número
});

test('should return resignation message for too many bricks', () => {
  const expectedMessage = "Naah, too much...here's my resignation.";
  expect(buildWall(101, 100)).toBe(expectedMessage); // 10100 bricks
});

test('should handle edge case with maximum allowed bricks', () => {
  const bricks = 100;
  const rows = 100;
  const wall = buildWall(rows, bricks);
  expect(wall).toBeTruthy(); // No debe ser null o un mensaje de renuncia.
  expect(wall!.split('\n').length).toBe(100); // Debe haber 100 filas
});
