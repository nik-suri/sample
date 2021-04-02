const units = ['minutes', 'seconds', 'hours', 'inches', 'feet'];

// mocked API endpoint
export function getUnits() {
  return units[Math.floor(Math.random() * units.length)];
}