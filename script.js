// Quick Question #1
// {1,2,3,4}

// Quick Question #2
// "ref"

// Quick Questions #3
// {
//     [1,2,3]: true,
//     [1,2,3]: false
// }

// hasDuplicate
const hasDuplicate = (arr) => (arr.length === new Set(arr).size ? false : true);

// vowelCount
const vowelCount = (str) => {
    const vowels = 'aeiou';
    const vowelCount = new Map();
    const string = str.toLowerCase();
    for(let char of string) {
        if(vowels.includes(char)) {
            if(vowelCount.has(char)) {
                vowelCount.set(char, vowelCount.get(char) + 1);
            } else {
                vowelCount.set(char, 1);
            }
        }
    }; return vowelCount;
}