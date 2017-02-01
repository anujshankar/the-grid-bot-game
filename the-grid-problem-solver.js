function gridProblemSolver(grid, initialBotPosition, directionCommands) {
  var directions = {
    N: 0,
    E: 1,
    S: 2,
    W: 3
  };
  var currentX = initialBotPosition[0];
  var currentY = initialBotPosition[1];
  var currDirectionCharacter = initialBotPosition[2];
  var currDirection = directions[currDirectionCharacter];
  var xAxisBoundary = grid[0];
  var yAxisBoundary = grid[1];

  for (var i = 0; i < directionCommands.length; i++) {
    var move = directionCommands[i];
    if (move === 'R') {
      currDirection = (currDirection + 1) % 4;
    }
    else if (move === 'L') {
      currDirection = (4 + currDirection - 1) % 4;
    }
    else {
      if (currDirection === directions['N'] && currentY > 0)
        currentY--;
      else if (currDirection === directions['E'] && currentX < xAxisBoundary)
        currentX++;
      else if (currDirection === directions['S'] && currentY < yAxisBoundary)
        currentY++;
      else if (currDirection === directions['W'] && currentX > 0)
        currentX--;
    }
  }
  var finalDirection;
  switch (currDirection) {
    case 0: finalDirection = 'North'; break;
    case 1: finalDirection = 'East'; break;
    case 2: finalDirection = 'South'; break;
    case 3: finalDirection = 'West'; break;
  }
  var result = [currentX, currentY, finalDirection];
  return result;
};

module.exports = gridProblemSolver;