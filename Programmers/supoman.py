def solution(answers):
    student1 = [1,2,3,4,5]
    student2 = [2,1,2,3,2,4,2,5]
    student3 = [3,3,1,1,2,2,4,4,5,5]

    solved = [0, 0, 0]
    result = []

    for answer in answers:
        solving = student1.pop(0)
        if solving == answer:
            solved[0] += 1
        student1.append(solving)

        solving = student2.pop(0)
        if solving == answer:
            solved[1] += 1
        student2.append(solving)

        solving = student3.pop(0)
        if solving == answer:
            solved[2] += 1
        student3.append(solving)

    for idx, count in enumerate(solved):
        if count == max(solved):
            result.append(idx+1)

    return result
