word = 'baabaa'
def split(word):
    return [char for char in word]
def solution(s):
#     cmp = []
#     cmp = split(s)
    cmp = split(s)
    while True:
        print(cmp)
        if len(cmp) == 0:
            return 1
        tmp = cmp
        for idx in range(1,len(cmp)):
            print(idx)
            if tmp[idx-1] == tmp[idx]:
                tmp.pop(idx-1)
                tmp.pop(idx-1)
                break
        if len(cmp) == len(tmp):
            return 0
        cmp = tmp
        print(cmp)

        return None

solution(word)
