var num=50;
document.write("<h3>Prime numbers between 1 and "+ num +":</h3>")
for(let i=2;i<=num;i++){
    flag=true;
for(let j=2;j<=i-1;j++){
    if(i%j==0){
        flag=false;
        break;
    }
}
if(flag){
    document.write(i+"<br>")
}
}