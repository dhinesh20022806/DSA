def bubble_sort(arr):
    print(arr)
    print(len(arr))
    for i in range(len(arr), 0, -1):
        swap = False
        print("outside of the loop", arr)
        for j in range(i - 1):

            # print(j, j+1)
            if arr[j] > arr[j+1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swap = True
            print(arr, "Compare", arr[j], arr[j + 1])

        if not swap:
            break
    return arr


array = [29, 10, 14, 37, 14]
result = bubble_sort(array)
print(result)