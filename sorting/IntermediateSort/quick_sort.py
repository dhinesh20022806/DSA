def quick_sort(array, left=0, right=None):
    if right is None:
        right = len(array) - 1

    if left < right:
        pivot_point = pivot(array, left, right)
        quick_sort(array, left, pivot_point - 1)
        quick_sort(array, pivot_point + 1, right)

    return array


def pivot(item, start=0, end=None):
    if end is None:
        end = len(item)
    print(end)
    pivot_value = item[start]
    swap_index = start
    for i in range(start + 1, end + 1):
        if pivot_value > item[i]:
            swap_index += 1
            item[i], item[swap_index] = item[swap_index], item[i]
    item[start], item[swap_index] = item[swap_index], item[start]
    return swap_index


arr = [5, 2, 1, 8, 4, 7, 6, 3]

# 3, 2 , 1, 4, 5

# quick_sort(arr)
# print(pivot(arr))
quick_sort(arr)
print(arr)
