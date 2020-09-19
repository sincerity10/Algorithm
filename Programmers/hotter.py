def solution(scoville, K):
    sc  = -1
    cnt = 0

    while True:
        scoville.sort()
        if scoville[0] >= K:
            break
        try:
            scoville.append(scoville.pop(0) + scoville.pop(0)*2)
        except IndexError:
            return -1
        cnt += 1

    return cnt

