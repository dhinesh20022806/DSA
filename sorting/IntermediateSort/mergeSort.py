def merge(list1, list2):
    i = j = 0
    result = []
    while(i < len(list1) and j < len(list2)):
        if(list1[i] < list2[j]):
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
        
    while i < len(list1):
        result.append(list1[i])
        i += 1
    while j < len(list2):
        result.append(list2[j])
        j += 1
   
    return result

def mergeSort(list1):
    
    if len(list1) <= 1:
        return list1
    
    middle = round(len(list1) / 2)
    left = mergeSort(list1[:middle])
    
    right = mergeSort(list1[middle:])

    return merge(left, right)



print(mergeSort([2,1,5,3]))


