function createPara (){
    const para = document.createElement("p");
    para.textContent = "you clicked a button";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for(const button of buttons){
    button.addEventListener("click", createPara);
}