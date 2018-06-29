const colorInput = document.getElementById("colorInput");
const colorOutput = document.getElementById("colorOutput");
generateOutput = (color, type) => {

}
checkType = () => {
    let value = colorInput.value.slice(""), type;
    if(value.includes(','))
        type="rgb";
    else
    {
        type="hex";
        if(value[0]==='#')
            value.shift;
    }
    console.log(type)
}
colorInput.addEventListener("keyup", checkType);