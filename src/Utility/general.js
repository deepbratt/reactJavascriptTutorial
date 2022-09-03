export function areaRect(length, width) {
  const area = length * width;
  return area;
}

export function areaCircle(radius) {
  const PI = Math.PI;
  const area = PI * radius * radius;
  return area.toFixed(2);
}
