n =3
def solution(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        return solution(n-1) + solution(n-2)

print(solution(30))
