function isPalindrome(x: number): boolean { //242
    let temp = x;
    let newNumber = 0;
    while (temp > 0) {
        newNumber *= 10;
        newNumber += temp % 10;
        temp /= 10;
        temp = temp | 0;
    }
    if (newNumber === x) {
        return true;
    }
    return false;
};

console.log(isPalindrome(123));