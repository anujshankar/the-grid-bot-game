var fs = require('fs');
var filePath = process.argv[2];
var gridProblemSolver = require('./the-grid-problem-solver.js');

if (filePath === undefined) {
  console.log("Please enter the path of input file");
  return;
}

var buffer = fs.readFileSync(filePath);
var contentOfFile = buffer.toString();

var inputArray = contentOfFile.split('\n');
var gridWithStringElements = (inputArray[0].split(' '));
var isGridInputValid = true;
var grid = gridWithStringElements.map(function (element) {
  var element = Number(element);
  if (isNaN(element) === true) {
    isGridInputValid = false;
  }
  return element;
});
if (!isGridInputValid) {
  console.log("The grid size entered are not a number. Please check your input file");
  return;
}

var initialBotPosition = (inputArray[1].split(' '));
var initialX = Number(initialBotPosition[0]);
if (isNaN(initialX) === true) {
  console.log("The initial bot -> X position entered is not a number. Please check your input file");
  return;
}
var initialY = Number(initialBotPosition[1]);
if (isNaN(initialY) === true) {
  console.log("The initial bot -> Y position entered is not a number. Please check your input file");
  return;
}
var initialDirection = initialBotPosition[2];
if (initialDirection !== 'N' && initialDirection !== 'S' && initialDirection !== 'E' && initialDirection !== 'W') {
  console.log("The initial bot -> direction entered is not valid. Please check your input file");
  return;
}

initialBotPosition[0] = initialX;
initialBotPosition[1] = initialY;

var directionCommands = inputArray[2];
var pattern = /[^LRM]/;
if (pattern.test(directionCommands)) {
  console.log("Invalid command string. Your string contains characters other than L or R or M. Please check your input file");
  return;
}

var result = gridProblemSolver(grid, initialBotPosition, directionCommands);

console.log(result);