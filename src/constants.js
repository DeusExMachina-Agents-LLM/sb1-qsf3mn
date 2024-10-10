export const H4FOLD_MATRIX = [
  [1.618033988749895, 0, 0, 0, 0.6180339887498948, 0, 0, 0],
  [0, 1, 1.618033988749895, 0, 0, -1, 1.618033988749895, 0],
  [0, 1.618033988749895, 0, 1, 0, 1.618033988749895, 0, -1],
  [0, 0, 1, 1.618033988749895, 0, 0, -1, 1.618033988749895],
  [0.6180339887498948, 0, 0, 0, 1.618033988749895, 0, 0, 0],
  [0, -1, 1.618033988749895, 0, 0, 1, 1.618033988749895, 0],
  [0, 1.618033988749895, 0, -1, 0, 1.618033988749895, 0, 1],
  [0, 0, -1, 1.618033988749895, 0, 0, 1, 1.618033988749895]
];

export const E8_SRE_MATRIX = [
  [1, -1, 0, 0, 0, 0, 0, 0],
  [0, 1, -1, 0, 0, 0, 0, 0],
  [0, 0, 1, -1, 0, 0, 0, 0],
  [0, 0, 0, 1, -1, 0, 0, 0],
  [-0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, -1, 0, 0],
  [0, 0, 0, 0, 0, 1, -1, 0]
];

export const PARTICLE_ASSIGNMENTS = [
  { type: 'boson', generation: 0, color: 'red' },
  { type: 'fermion', generation: 1, color: 'green' },
  { type: 'boson', generation: 0, color: 'blue' },
  { type: 'fermion', generation: 2, color: 'yellow' },
  { type: 'boson', generation: 1, color: 'magenta' },
  { type: 'fermion', generation: 3, color: 'cyan' },
  // Add more particle assignments as needed
];