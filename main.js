let text_area = document.querySelector("#textBox");
let countcharacter = document.querySelector("#char")
let countword = document.querySelector("#word")

text_area.addEventListener("input",function(){
    let text = this.value;
    let char = text.length;
    countcharacter.innerHTML = char;

    text = text.trim();
    let word = text.split(" ");
    
    let cleanlist = word.filter(function(ele){
        return !ele == "";
    })
    let wordlengh = cleanlist.length;
    
    countword.innerHTML = wordlengh;

})