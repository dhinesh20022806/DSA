def selection_sort(arr):

    for i in range (len(arr)):
        target = i
        minIndex = i
        for j in range(i, len(arr) - 1):
            print(arr, "Compare ",  arr[minIndex], arr[j + 1])
            if arr[minIndex] > arr[j + 1]:
                minIndex = j + 1

        arr[target], arr[minIndex] = arr[minIndex], arr[target]

    return arr


array = [21, 22, 50, 20, 19, 50, 47, 11, 14, 21]
result = selection_sort(array)
print(result)
