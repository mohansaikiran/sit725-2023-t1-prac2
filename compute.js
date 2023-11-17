
firstNum = 0;
secNum = 0;

function computeFunc(compType) {
    firstNum = document.getElementById("firstNum").value;
    secNum = document.getElementById("secNum").value;
    if(firstNum == '' || secNum == '') {
        alert("Please enter the numbers to compute");
        return;
    }
    
    window.location = `/compute?number1=${firstNum}&number2=${secNum}&type=${compType}`;
};