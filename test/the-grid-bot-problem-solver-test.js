var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var gridProblemSolver = require('../the-grid-problem-solver');

// assert.deepEqual(obtainedResult, expectedResult);

describe('gridProblemSolver function with input as grid,initialPosition and directionCommands', function () {

  it('should return an array', function () {
    var grid = [5, 5];
    var initialPosition = [0, 0, 'E'];
    var directionCommands = 'MMMM';
    var expectedResult = [4, 0, 'East'];
    var obtainedResult = gridProblemSolver(grid, initialPosition, directionCommands);
    assert.deepEqual(obtainedResult, expectedResult);
  });

  it('should return an array when x-axis boundary is reached', function () {
    var grid = [5, 5];
    var initialPosition = [0, 0, 'E'];
    var directionCommands = 'MMMMMMMM';
    var expectedResult = [5, 0, 'East'];
    var obtainedResult = gridProblemSolver(grid, initialPosition, directionCommands);
    assert.deepEqual(obtainedResult, expectedResult);
  });

  it('should return an array', function () {
    var grid = [5, 5];
    var initialPosition = [0, 0, 'N'];
    var directionCommands = 'MMMMMMMM';
    var expectedResult = [0, 0, 'North'];
    var obtainedResult = gridProblemSolver(grid, initialPosition, directionCommands);
    assert.deepEqual(obtainedResult, expectedResult);
  });

  it('should return an array', function () {
    var grid = [5, 5];
    var initialPosition = [1, 1, 'E'];
    var directionCommands = 'RMMR';
    var expectedResult = [1, 3, 'West'];
    var obtainedResult = gridProblemSolver(grid, initialPosition, directionCommands);
    assert.deepEqual(obtainedResult, expectedResult);
  });

  it('should return an array', function () {
    var grid = [10, 10];
    var initialPosition = [3, 3, 'N'];
    var directionCommands = 'MMLMLMLMLML';
    var expectedResult = [3, 1, 'West'];
    var obtainedResult = gridProblemSolver(grid, initialPosition, directionCommands);
    assert.deepEqual(obtainedResult, expectedResult);
  });
});
