## objective

Understand the limitations of the sorting algorithms we've learned so far

implement merge sort

implement quick sort

implement radix sort

# Why Learn this?

# Faster Sorts 

There is a family of sorting algorithms
that can improve time complexity 
from o(n ^2) to O(n log n)

There's a tradeoff between efficiency
and simplicity

The more efficient algorithms are much 
less simple, and generally take longer to 
understand
let's dive in!


# Quick Sort 

Like merge Sort, exploits the fact that arrays of 0 or 1 element are always sorted

Works by selecting one element (called the 'Pivot')
and finding the index where the pivot should end up in 
the sorted array