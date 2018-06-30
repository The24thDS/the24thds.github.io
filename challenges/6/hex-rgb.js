const colorInput = document.getElementById("colorInput");
const colorOutput = document.getElementById("colorOutput");
const body = document.querySelector("body");
const headers = document.querySelectorAll("h1");
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
generateOutput = (color, type) => {
    let output = '';
    if (type === "hex") {
        if(color.length === 3)
        {
            color.forEach(element => {
                    component = 16 * hex.indexOf(element) + hex.indexOf(element);
                    output += `${component},`;
            });
        }
        if (color.length === 6) {
            color.forEach((element, index) => {
                if (index % 2 === 0)
                    component = 16 * hex.indexOf(element);
                else {
                    component += hex.indexOf(element);
                    output += `${component},`;
                }
            });
        }
        output = output.split(',');
        output.pop();
        body.style.backgroundColor = `rgb(${output})`;
    }
    if (type === "rgb") {
        output = '#';
        color = color.split(',');
        if (color.length === 3 && color[2] != "") {
            color.forEach((element, index) => {
                color[index] = Number(element);
                output += `${hex[Math.floor(element/16)]}${hex[element%16]}`
            });
            body.style.backgroundColor = `${output}`;
        }
    }
    colorOutput.value = output;

}
checkType = () => {
    let value = colorInput.value;
    if (value.includes(',')) {
        headers[0].innerHTML = "RGB";
        headers[1].innerHTML = "HEX";
        return generateOutput(value, "rgb");
    }
    else if (value.length != 0) {
        value = Array.from(value);
        headers[0].innerHTML = "HEX";
        headers[1].innerHTML = "RGB";
        if (value[0] === '#')
            value.shift();
        return generateOutput(value, "hex");
    }
    else {
        headers[0].innerHTML = "HEX || RGB";
        headers[1].innerHTML = "RGB || HEX";
        colorOutput.value = '';
    }
}
colorInput.addEventListener("keyup", checkType);