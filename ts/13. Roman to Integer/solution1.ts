function romanToInt(s: string): number {
    const romanToIntMap = Object.freeze({
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    });

    let sum = 0;

    const strArr = s.split('');

    for (let i = 0; i < strArr.length; i++) {
        if (i < strArr.length - 1 && romanToIntMap[strArr[i]] < romanToIntMap[strArr[i + 1]]) {
            sum += (romanToIntMap[strArr[i + 1]] - romanToIntMap[strArr[i]]);
            i++;
        } else {
            sum += romanToIntMap[strArr[i]];
        }
    }

    return sum;
};
