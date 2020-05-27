import re
from collections import Counter
p = re.compile("[a-z]{2}")

def solution(str1, str2):
    list1=decomposer(str1.lower())
    list2=decomposer(str2.lower())
    if list1 == list2:return 65536
    inter = Counter(list1) & Counter(list2)
    #print(list(inter.values()))
    #print(sum(list(inter.values())))
    inter_len = sum(list(inter.values()))
    union_len = len(list1) + len(list2) - inter_len
    print(int((inter_len/union_len)*65536))
    return int((inter_len/union_len)*65536)

def decomposer(str):
    list=[]
    for idx in range(len(str)):
        if p.match(str[idx:idx+2]):
            list.append(str[idx:idx+2])
    
    #print(list)
    return list

solution("FRANCE","french")
solution("E=M*C^2","e=m*c^2")
solution("aa1+aa2", "AAAA12")
solution("handshake", "shake hands")