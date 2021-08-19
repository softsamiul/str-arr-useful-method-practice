function getSum() {
    let result = 0;
    for (const n of arguments) {
        result = result + n;
    }
    return result;
}
console.log(getSum(12, 24, 25, 30, 45, 68, 24));

function getFullName() {
    let fullName = '';
    for (const name of arguments) {
        fullName = fullName + name + ' ';
    }
    return fullName;
}

console.log(getFullName('samiul', 'islam', 'bin', 'mujib'));