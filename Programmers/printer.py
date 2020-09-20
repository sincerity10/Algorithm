priorities = [3, 3, 4, 2]
location = 3

def solution(priorities, location):
    priority = 1
    while True:
        # print(priorities, location, priority)
        if len(priorities) == 1:
            return priority
        pre = priorities.pop(0)

        if pre < max(priorities):
            if location == 0:
                priorities.append(pre)
                location = len(priorities) -1
            else:
                priorities.append(pre)
                location -= 1
        else:
            if location == 0:
                return priority
            else:
                priority += 1
                location -= 1

solution(priorities, location)
