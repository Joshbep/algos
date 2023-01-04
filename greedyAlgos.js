//greedy algos are an algorithm that solves the
//problem pretty well. And that’s where greedy algorithms shine, because
//they’re simple to write and usually get pretty close.

//8.1
//Answer: A greedy strategy would be to pick the largest box that
//will fit in the remaining space, and repeat until you can’t pack any
//more boxes. No, this won’t give you the optimal solution.
//8.2
//Answer: Keep picking the activity with the highest point value that
//you can still do in the time you have left. Stop when you can’t do
//anything else. No, this won’t give you the optimal solution.


//exercises
//8.3
//no
//8.4
// Greedy
//8.5
//Greedy

//there’s no easy way to tell if the problem you’re working
//on is NP-complete. Here are some giveaways:
//• Your algorithm runs quickly with a handful of items but really slows
//down with more items.
//• “All combinations of X” usually point to an NP-complete problem.
//• Do you have to calculate “every possible version” of X because you
//can’t break it down into smaller sub-problems? Might be
//NP-complete.
//• If your problem involves a sequence (such as a sequence of cities, like
//traveling salesperson), and it’s hard to solve, it might be NP-complete.
//• If your problem involves a set (like a set of radio stations) and it’s hard
//to solve, it might be NP-complete.
//• Can you restate your problem as the set-covering problem or the
//traveling-salesperson problem? Then your problem is definitely
//NP-complete.
