let output = document.querySelector('.item-0');
let button = document.querySelectorAll('.number');
let string = '';
// console.log(button);
let arrBtn = Array.from(button);

arrBtn.forEach((button) =>{
    button.addEventListener('click', (element)=>{
        // console.log(element.target.innerHTML);
        if(element.target.innerHTML == 'AC'){
            string = '';
            output.value = string;
        }
        else if(element.target.innerHTML == 'C'){
            string = string.substring(0, string.length-1);
            output.value = string
        }else if(element.target.innerHTML == '=' ){
            string = eval(string)
            output.value = string;
        }
        else{
            string += element.target.innerHTML
            output.value = string
        }
    })
})