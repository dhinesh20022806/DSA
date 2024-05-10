def insertion_sort(arr):

    for i in range(1, len(arr)):
        current_val = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > current_val:
            arr[j + 1] = arr[j]
            print(arr)
            j -= 1
        arr[j + 1] = current_val

    return arr


# array = [24, 5, 41, 22, 19, 25, 29, 5, 21, 28]
array = [2, 1, 9, 76, 4]
result = insertion_sort(array)
print(result)
