open_brace = ["[","{","("]
close_brace = ["]","}",")"]

def check(myStr):
    brace_stack = []
    for idx in myStr:
        if idx in open_brace:
            brace_stack.append(idx)
        elif idx in close_brace:
            pos = close_brace.index(idx)
            if ((len(stack) > 0) and
                (open_brace[pos] == stack[len(stack)-1])):
                stack.pop()
            else:
                return "Unbalanced"

    if len(brace_stack) == 0:
        return "Balanced"
    else:
        return "Unbalanced"

