//3.1
//the greet function is called with maggie
//then greet 2 is claled, but greet is left in a  suspending state until greet2 is done
//once greet2 is finished we return to greet
//3.2
//it is full of partially finished functions
//Answer: The stack grows forever. Each program has a limited
//amount of space on the call stack. When your program runs
//out of space (which it eventually will), it will exit with a stackoverflow error.

//4.1
const sum = (list) => {
  if(list == []) {
    return 0
  }
  return list[0] + sum(list[1:])
}

sum()
