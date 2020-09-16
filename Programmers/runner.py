# Test Case
participant = ['mislav', 'stanko', 'mislav', 'ana']
completion  = ['stanko', 'ana', 'mislav']

def solution(participant, completion):
    runner = {}

    # Counting by Participant's name
    for p in participant:
        if runner.get(p, None) == None:
            runner[p] = 1
        else:
            runner[p] += 1

    # Check Finisher(reduce Participant Counting)
    for c in completion:
        runner[c] -= 1

    return list(runner.keys())[list(runner.values()).index(1)]

solution(participant, completion)
