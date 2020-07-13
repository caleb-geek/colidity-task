
str= "13 DUP 4 POP 5 DUP + DUP + -"
#str = "5 6 + -"
#str = "3 DUP 5 - -"
# Main function
def solution(str):
    arr = str.split(" ")
    stack = []
    for i in arr:
        #Duplicate element in the stack
        if i == "DUP":
            if empty_stack(stack):
                return -1
            else:
                last = stack[-1]
                stack.append(last)
        elif i == "POP":
            #Remove the last element in the stack
            if empty_stack(stack):
                return -1
            else:
                stack.pop()
        elif i == "+":
            if empty_stack(stack) or check_one_num(stack):
                return -1
            else:
                # subtract the last two numbers in the stack
                sum = stack[-1]+stack[-2]
                # remove the last two numbers in the stack
                del stack[len(stack)-2:len(stack)+1]
                # push the sum to the stack
                stack.append(sum)
        elif i == "-":
            if empty_stack(stack) or check_one_num(stack):
                return -1
            else:
                #subtract the last two numbers in the stack
                sub = stack[-1] - stack[-2]
                # remove the last two numbers in the stack
                del stack[len(stack)-2:len(stack)+1]
                # push the difference to the stack
                stack.append(sub)
        else:
            #add numbers to the stack
            if check_integer(i):
                stack.append(int(i))
    result = -1 if empty_stack(stack) else stack[-1]
    return result

# Helper functions
# helper function to check if stack is empty
def empty_stack(stack):
    result = False if len(stack) > 0  else True
    return result

#helper function to check if the stack has one element
def check_one_num(stack):
    result = True if len(stack) == 1 else False
    return result

# check if the numbers are in the range of 0 to 2^20
def check_integer(i):
    result = True if isinstance(int(i), int) and 0 <= int(i) < 2 ** 20 else False
    return result

#calling our function
print(solution(str))