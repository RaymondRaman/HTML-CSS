#def sort_by_age(list1):
def sort_by_age(list1):
    for i in range(len(list1)-1):
        for j in range(i+1, len(list1)):
            if list1[i][1] > list1[j][1]:
                list1[i], list1[j] = list1[j], list1[i]
            elif list1[i][1] == list1[j][1]:
                if list1[i][0] > list1[j][0]:
                    list1[i], list1[j] = list1[j], list1[i]
    return list1

#Better: Written by ChatGPT
def sort_by_age(list1):
    return sorted(list1, key=lambda x: (x[1], x[0]))
