// You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

// The building blocks are cubes
// The structure is built in layers
// The top layer is a single block
// A block in an upper layer must be supported by four blocks in a lower layer
// A block in a lower layer can support more than one block in an upper layer
// You cannot leave gaps between blocks
// Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

// Understand the Problem

// We are given an amount of blocks/cubes and must return the leftover amount of blocks
// after the tallest possible valid structure is built.

// - Rules
// The uppermost layer is a singular block
// any upper layer blocks must be supported by 4 blocks underneath
// lower layer blocks can support multiple upper layer blocks
// What do gaps mean?

// Explicit Requirements
// - Return a number that represents leftover blocks
// Implictit Requirements
// - create some sort of data structure that matches the requirements

// We can assume that since the top layer is one block, the second layer is 4 blocks
// The second layer cubes are arranged in a 2x2 fashion with the upper layer placed above them in the middle
// Since lower level cubes can support multiple upper level blocks we can use this in our third layer
// Each layer has the cube amount equal too
// let cubesAmtPerLayer = layer * layer;

// Example and Test Cases
// console.log(calculateLeftoverBlocks(0) === 0); //true
// console.log(calculateLeftoverBlocks(1) === 0); //true
// console.log(calculateLeftoverBlocks(2) === 1); //true
// console.log(calculateLeftoverBlocks(4) === 3); //true
// console.log(calculateLeftoverBlocks(5) === 0); //true
// console.log(calculateLeftoverBlocks(6) === 1); //true
// console.log(calculateLeftoverBlocks(14) === 0); //true

// There can be blocks left over
// Adding more blocks to lower layers is not permitted
// Layers are built in perfect squares

// Data Structures
// We will be creating an object with the layer number as the key and the cubes as the value
let structure = {
  "layer 1": 1,
  "layer 2": 4,
  "layer 3": 9,
};

// Algorithm
// First check if the number is 0, 1 as both return 0
// Create a while loop checking if the amount of cubes remaining can create a new layer
// if there enough cubes (loop continuing)
// create a new layer
// subtract the used cubes from the remaining total
// increase the layer by 1
// if not enough cubes
// return the amount of numbers

// My Own solution using Recursion

function calculateLeftoverBlocks(cubes, layers = 1) {
  let blocksRemaining = cubes;
  let cubesRequired = Math.pow(layers, 2);

  return cubesRequired > blocksRemaining
    ? blocksRemaining
    : calculateLeftoverBlocks(blocksRemaining - cubesRequired, (layers += 1));
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
