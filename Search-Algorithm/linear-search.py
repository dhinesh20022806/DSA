def linear_search(arr,val):
    for i in range(len(arr)):
        if arr[i] == val: return i
    
    return -1

print(linear_search([1,2,3,4,5,6],7))