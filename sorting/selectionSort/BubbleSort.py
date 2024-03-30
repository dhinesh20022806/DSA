def bubble_sort(list):

    for i in range(len(list), 0 , -1):
        swap = True
        for j in range(i - 1):
           if (list[j] > list[j + 1]) :
               list[j],list[j + 1] = list[j + 1] , list[j]
               swap = False

        

        print("One pass complete")
        if swap :
           break
    return list


print(bubble_sort([6,1,3,4,5]))
# print(bubble_sort([6,1,3,4,5]))
print(bubble_sort([8,3,4,5,26,14,61,3546,62,33,233,6,67]))

