"""
Exercise 1:
is_square(width, height),  
diagonal_len (width, height), 
area(width, height), perimeter(width, height) 
"""

import math


def is_square(width, height):
    if width == height:
        return True
    else:
        return False


def diagonal_len(width, height):
    return math.sqrt(width * width + height * height)


def area(width, height):
    return width * height


def perimeter(width, height):
    return 2 * width + 2 * height

#Better: Written by ChatGPT
import math

is_square = lambda width, height: True if width == height else False

diagonal_len = lambda width, height: math.sqrt(width * width + height * height)

area = lambda width, height: width * height

perimeter = lambda width, height: 2 * width + 2 * height

#Exercise 2: Divisible items
def divisible_items(list1, p=2, q=3, r=5):
    list2 = []
    for i in range(len(list1)):
        if (list1[i] % p) == 0:
            list2.append(list1[i])
        elif (list1[i] % q) == 0:
            list2.append(list1[i])
        elif (list1[i] % r) == 0:
            list2.append(list1[i])
    return list2
  
#Better: Written by ChatGPT
def divisible_items(list1, p=2, q=3, r=5):
    return [i for i in list1 if i % p == 0 or i % q == 0 or i % r == 0]

#Exercise 3: Find common items
def common_items(list1, list2):
    list3 = []
    if len(list1) >= len(list2):
        for i in range(len(list1)):
            if list1[i] in list2:
                list3.append(list1[i])

    elif len(list1) < len(list2):
        for i in range(len(list2)):
            if list2[i] in list1:
                list3.append(list2[i])
    return list3
  
#Better: Written by ChatGPT
def common_items(list1, list2):
    list3 = []
    for item in list1:
        if item in list2 and item not in list3:
            list3.append(item)
    return list3
 
#Exercise 4 Check whether the word is shiritori
def is_shiritori(words):
    if len(set(words)) != len(words):
        return False

    j = len(words) - 1
    while j > 0:
        if words[j][0] != words[j-1][-1]:
            return False
        j = j - 1

    return True
  
#Exercise 5: Find the longest run of consective numbers
def longest_run(list1):
    count = 1
    largest_length = 1
    for i in range(len(list1) - 1):
        if list1[i + 1] == list1[i] + 1:
            count += 1
            largest_length = max(largest_length, count)
        elif list1[i + 1] == list1[i] - 1:
            count += 1
            largest_length = max(largest_length, count)
        else:
            count = 1
    return largest_length

#Better: Written by ChatGPT
def longest_run(list1):
    count = 1
    largest_length = 1
    for i in range(len(list1) - 1):
        if list1[i + 1] == list1[i] + 1 or list1[i + 1] == list1[i] - 1:
            count += 1
            largest_length = max(largest_length, count)
        else:
            count = 1
    return largest_length



