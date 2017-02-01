#TEST-1
actual=$(node the-grid-bot-problem.js)
expected='Please enter the path of input file'

echo "1. should return a error message saying filepath not mentioned"
if [ "$actual" == "$expected" ]; then
   echo "Test Passed -- 👍"
else
   echo "Test Failed -- 👎"
fi

#TEST-2
actual=$(node the-grid-bot-problem.js file-with-wrong-input-1)
expected="The grid size entered are not a number. Please check your input file"

echo "2. should return a error message saying grid size incorrect"

if [ "$actual" == "$expected" ]; then
   echo "Test Passed -- 👍"
else
   echo "Test Failed -- 👎"
fi