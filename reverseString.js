function reverseString(str) {
    let charArray = str.split('');
    let reverseArray = charArray.reverse();
    let reverseString = reverseArray.join(' ');

    return reverseString;
}

console.log(reverseString('hello'));