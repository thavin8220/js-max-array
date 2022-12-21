let len=[300,30,20,150,60];
let max=len[0];
function myValue(len){
for(i=0;i<len.length;i++){
    if(len[i]>max){
     max=len[i];   
    }  
}
document.write("maximum value=" +max)
}
myValue(len);
