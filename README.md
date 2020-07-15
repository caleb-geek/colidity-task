# colidity-task
Given a string 
# "13 DUP 4 POP 5 DUP + DUP + -" 

The string is used as sequence of operations in a function


write a function called solution(), that does the following
#You are given an empty stack

[13,7]

7


For an integer X it pushes X into the stack
For DUP = duplicates the last number in the stack
For POP = it removes the last element in the stack
For + it removes the last two elements in the stack and adds them then pushes the sum back to the stack.
# should return an error(-1) if the stack is empty or if the stack has a single number.

For - it removes the last two elements. Subtracts last element -second last element and pushes the difference to the stack.

# should return an error(-1) if the stack is empty or if the stack has a single number or if the difference is negative

#Test cases
str = "5 6 + -" = should return -1
str = "3 DUP 5 - -" should return -1
