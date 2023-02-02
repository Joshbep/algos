//intermediate sorting algos

//pseudocode

//objectives
//understand the limitations of the sorting algos weve learned so far
//implement merge sort
//implement quick sort
//implement radix sort

//the simpler algos weve learned so far don't scale well
//try out bubbles ort on an array of 10,000 elements, it will take quite some time

//faster sorts
//they can improve time complexity from O(n^2) to O(n log n)
//theres a trade off between efficiency and simplicity
//the more efficient algos are much less simple, and generally
//take longer to understand

//merge sort intro
// its a combo of two things - merging and sorting!
//explooits the fact that arrays of 0 or 1 element are alwasy sorted
//works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

//split down to 0 or 1 element and then merge smallest first. Then merge back together again
