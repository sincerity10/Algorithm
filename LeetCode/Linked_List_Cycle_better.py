# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        """"""
        if head is None or head.next is None:
            return False
        
        """while 조건문 첫 case에서 false 피하기 위해"""
        fast=head.next
        slow=head
        
        while slow is not fast:
            if fast is None or fast.next is None:
                return False
            fast=fast.next.next
            slow=slow.next
        return True