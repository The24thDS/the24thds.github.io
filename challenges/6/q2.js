const array = [1, 2, 3];
const number = 4;
question2 = (arr) => {
    arr.some( (element, index) => {
        let slicedArr = arr.slice(index+1);
        let filtered = slicedArr.filter(pair => element + pair === number);
        if (filtered.length === 1) {
            filtered.unshift(element);
            return true;
        }
    });
}