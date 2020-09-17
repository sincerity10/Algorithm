def solution(prices):
    result = []
    for idx in range(0, len(prices)):
        cnt = 0
        for idx2 in range(idx+1, len(prices)):
            if prices[idx] <= prices[idx2]:
                cnt += 1
            else:
                cnt += 1
                break;
        result.append(cnt)

    return result
