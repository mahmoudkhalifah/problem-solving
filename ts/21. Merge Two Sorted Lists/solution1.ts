
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2)
        return null;
    if (!list1)
        return list2;
    if (!list2)
        return list1;

    let mergedList: ListNode;

    if (list1.val < list2.val) {
        mergedList = list1;
        list1 = list1.next;
    } else {
        mergedList = list2;
        list2 = list2.next;
    }

    let restOfList = mergedList;

    while (list1 || list2) {
        if (!list1) {
            restOfList.next = list2;
            break;
        }
        if (!list2) {
            restOfList.next = list1;
            break;
        }
        if (list1.val < list2.val) {
            restOfList.next = list1;
            restOfList = restOfList.next;
            list1 = list1.next;
        } else {
            restOfList.next = list2;
            restOfList = restOfList.next;
            list2 = list2.next;
        }
    }
    return mergedList;
};