var fs = require('fs');
var filePath = process.argv[2];
var gridProblemSolver = require('./the-grid-problem-solver.js');

if (filePath === undefined) {
  var error = "Please enter the path of input file";
  console.log(error);
  return error;
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
  var error = "The grid size entered are not a number. Please check your input file";
  console.log(error);
  return error;
}

var initialBotPosition = (inputArray[1].split(' '));
var initialX = Number(initialBotPosition[0]);
if (isNaN(initialX) === true) {
  var error = "The initial bot -> X position entered is not a number. Please check your input file";
  console.log(error);
  return error;
}
var initialY = Number(initialBotPosition[1]);
if (isNaN(initialY) === true) {
  var error = "The initial bot -> Y position entered is not a number. Please check your input file";
  console.log(error);
  return error;
}
var initialDirection = initialBotPosition[2];
if (initialDirection !== 'N' && initialDirection !== 'S' && initialDirection !== 'E' && initialDirection !== 'W') {
  var error = "The initial bot -> direction entered is not valid. Please check your input file";
  console.log(error);
  return error;
}

initialBotPosition[0] = initialX;
initialBotPosition[1] = initialY;

var directionCommands = inputArray[2];
var pattern = /[^LRM]/;
if (pattern.test(directionCommands)) {
  var error = "Invalid command string. Your string contains characters other than L or R or M. Please check your input file";
  console.log(error);
  return error;
}

var result = gridProblemSolver(grid, initialBotPosition, directionCommands);

console.log(result);