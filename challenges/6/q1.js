const testArray = [1, 2, 4, 591, 392, "2", 391, 2, 5, 10, 2, "2", 1, 1, 1, 20, 20, "1", "1"];
compare = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}
question1 = qArray => {
    let arr = testArray.map(number => number);
    arr.sort(compare);
    for (let strings = i = 0; i < arr.length - strings;)
        if (typeof arr[i] === "string") {
            arr.push(arr.splice(i, 1)[0]);
            strings++;
        }
        else i++;
    for (i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (el === arr[i + 1]) {
            arr[i] = [el];
            for (let j = i + 1; arr[j] === el; arr.splice(j, 1))
                arr[i].push(arr[j]);
        }
    }
    return arr;
}