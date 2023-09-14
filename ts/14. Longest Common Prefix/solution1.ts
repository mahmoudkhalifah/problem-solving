function longestCommonPrefix(strs: string[]): string {
    //get min length
    let minLength = 200;
    strs.forEach((str) => {
        if (str.length < minLength) {
            minLength = str.length;
        }
    })

    let prefix = "";

    for (let i = 0, done = false, prevChar; i < minLength && !done; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (j && prevChar !== strs[j][i]) {
                done = true;
            } else {
                prevChar = strs[j][i];
            }
        }
        if (!done) {
            prefix += prevChar;
        } else break;
    }
    return prefix;
};