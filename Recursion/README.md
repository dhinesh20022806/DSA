# Recursion


## Objective 

Define what recursion is and how it can be used

Understand the two essential components of a recursive function

Visualize the call Stack to better debug and 
understand recursive functions

Use helper method recursion and pure recursion to solve more difficult problems 

### What is recursion ? 

A process (a function in our case ) that calls itself

## it's Everywhere!

JSON.parse / JSON.stringify

document.getElementById and DOM traversal algorithms

Object traversal

We will see it with more complex data structures

it's sometimes a cleaner alternative to iteration

## But first let's talk about functions

In almost all program languages, there is a built in data structure that manages what happens when functions are invoked

## The Call Stack

it's a stack data Structure - we'll talk about that later!

Any time a function is invoked it is placed (pushed) on the top of the call stack

When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

## Why do i care ?

You're used to functions being pushed on the call stack and popped off when they are done 

When we write recursive functions, we keep pushing new functions onto the call stack!

## How recursive functions work

invoke the same function with a different input until you reach your base case!

# Base Case

The Condition when the recursion ends.

This is the most important concept to understand

## Two essential parts of a recursive function! 

base case
Different input

### Where things go Wrong

No base case
Forgetting to return or returning the wrong thing!
stack overflow!

