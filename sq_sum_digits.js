let num=1234;
let sum=0;

while(num!=0){
    a=num%10;
    sum = sum + a**2;
    num = parseInt(num/10);
}

console.log(sum);