def selectionSort(arr):
    for i in range(len(arr)):
        lowest = i
        for j in range(i + 1,len(arr)):
            print(i, j)
            if(arr[j] < arr[lowest]):
                lowest = j
        
        if i != lowest:

            arr[i],arr[lowest] = arr[lowest], arr[i]
        
    return arr


print(selectionSort([4,3,2,1]))
