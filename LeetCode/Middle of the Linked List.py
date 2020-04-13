# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        """print(head.next.val)"""
        cnt=0
        node=head
        while node:
            cnt=cnt+1
            node=node.next
            
        for i in range(0,cnt/2):
            head = head.next
        return head