"use strict"
let x = false;
var sum = 0;
var sum1=0, sum2=0;
var after_decimal = 1;
var opr = '';
var res = 0;
// var opr_inp = false;
var num9 = document.getElementById('9');
var num8 = document.getElementById('8');
var num7 = document.getElementById('7');
var num6 = document.getElementById('6');
var num5 = document.getElementById('5');
var num4 = document.getElementById('4');
var num3 = document.getElementById('3');
var num2 = document.getElementById('2');
var num1 = document.getElementById('1');
var num0 = document.getElementById('0');
var count1= document.getElementById('total');
num1.addEventListener('click', function(){
    // opr_inp = true;
    if(x===false && decimal_num === false){
        if(sum1 < 0){
            sum1 = sum1 * 10 - 1;
        } else {
            sum1 = sum1*10 + 1;
        }
    }
    else if(x===true && decimal_num === false)
    {
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 - 1;
        } else {
            sum1 = sum1 * 10 + 1;
        }
       
    } else {
        after_decimal *= 10;
        sum2 = 1;
        sum2 /= after_decimal;
    }

    sum1 += sum2;

    count1.innerText = sum1+ " ";
});
num2.addEventListener('click', function(){
    // opr_inp = true;
    //  sum2= this.getAttribute('2');
    if(x===false && decimal_num === false)
    { if (sum1 < 0)
        {
            sum1 = sum1 * 10 - 2;
        } else {
            sum1 = sum1 * 10 + 2;
        }
       
    } else if(x===true && decimal_num === false) {
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 -2;
        } else {
            sum1 = sum1 * 10 + 2;
        }
        
    } else {
        after_decimal *= 10;
        sum2 = 2;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText = sum1+ " ";
});
num3.addEventListener('click', function(){
    // opr_inp = true;/////////////////////
    if(x===false && decimal_num === false)
    { if (sum1 < 0)
        {
            sum1 = sum1 * 10 - 3;
        } else {
            sum1 = sum1 * 10 + 3;
        }
       
    } else if(x===true && decimal_num === false){
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 - 3;
        } else {
            sum1 = sum1 * 10 + 3;
        }
        
    } else {
        after_decimal *= 10;
        sum2 = 3;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText = sum1+ " ";
});
num4.addEventListener('click', function(){
    // opr_inp = true;
    if(x===false && decimal_num === false)
    { if (sum1 < 0)
        {
            sum1 = sum1 * 10 - 4;
        } else {
            sum1 = sum1 * 10 + 4;
        }
       
    } else if(x === true && decimal_num === false) {
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 - 4;
        } else {
            sum1 = sum1 * 10 + 4;
        }
        
    }  else {
        after_decimal *= 10;
        sum2 = 4;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText = sum1+ " ";
});
num5.addEventListener('click', function(){
    // opr_inp = true;
    if(x===false && decimal_num === false)
    { if (sum1 < 0)
        {
            sum1 = sum1 * 10 - 5;
        } else {
            sum1 = sum1 * 10 + 5;
        }
       
    } else  if(x === true && decimal_num === false){
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 - 5;
        } else {
            sum1 = sum1 * 10 + 5;
        }
        
    }  else {
        after_decimal *= 10;
        sum2 = 5;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText = sum1+ " ";
});
num6.addEventListener('click', function(){
    // opr_inp = true;
    if(x===false && decimal_num === false)
    { if (sum1 < 0)
        {
            sum1 = sum1 * 10 - 6;
        } else {
            sum1 = sum1 * 10 + 6;
        }
       
    } else if(x === true && decimal_num === false) {
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 - 6;
        } else {
            sum1 = sum1 * 10 + 6;
        }
        
    }  else {
        after_decimal *= 10;
        sum2 = 6;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText = sum1+ " ";
});
num7.addEventListener('click', function(){
    // opr_inp = true;
    if(x===false && decimal_num === false)
    { if (sum1 < 0)
        {
            sum1 = sum1 * 10 - 7;
        } else {
            sum1 = sum1 * 10 + 7;
        }
       
    } else if(x === true && decimal_num === false) {
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 - 7;
        } else {
            sum1 = sum1 * 10 + 7;
        }
        
    } else {
        after_decimal *= 10;
        sum2 = 7;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText = sum1+ " ";
});
num8.addEventListener('click', function(){
    // opr_inp = true;
    if(x===false && decimal_num === false)
    { if (sum1 < 0)
        {
            sum1 = sum1 * 10 - 8;
        } else {
            sum1 = sum1 * 10 + 8;
        }
       
    } else if(x === true && decimal_num === false){
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 - 8;
        } else {
            sum1 = sum1 * 10 + 8;
        }
        
    } else {
        after_decimal *= 10;
        sum2 = 8;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText = sum1+ " ";
});
num9.addEventListener('click', function(){
    // opr_inp=true;
    if(x===false && decimal_num === false)
    { if (sum1 < 0)
        {
            sum1 = sum1 * 10 - 9;
        } else {
            sum1 = sum1 * 10 + 9;
        }
       
    } else if(x === true && decimal_num === false) {
        if(sum1 < 0)
        {
            sum1 = sum1 * 10 - 9;
        } else {
            sum1 = sum1 * 10 + 9;
        }
        
    } else {
        after_decimal *= 10;
        sum2 = 9;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText = sum1+ " ";
});
num0.addEventListener('click', function(){
    // opr_inp = true;
    if(x===false && decimal_num === false)
    {
        sum1 = sum1 * 10;
    } else if(x === true && decimal_num === false)  {
        sum1 = sum1 * 10;
    } else {
        after_decimal *= 10;
        sum2 = 0;
        sum2 /= after_decimal;
    }

    sum1 += sum2;
    count1.innerText =sum1+ " ";
});

var operator = document.getElementById('plus');
operator.addEventListener('click', function(){
   
    x = true;
    decimal_num = false;
    after_decimal = 1;
    sum2 = 0;
    sum = sum1;
    opr = '+';
    sum1 = 0;
    count1.innerText=sum+""+ opr+"";
    
});
var operator = document.getElementById('minus');
operator.addEventListener('click', function(){
    // if(opr_inp === false)
    // {
    //     count1+this.innerText="please inter the number first"+ " ";
    //     return;
    // }
    sum = sum1;
    opr = '-';
    x = true;
    decimal_num = false;
    after_decimal = 1;
    sum2 = 0;
    sum1 = 0;
    count1.innerText=sum+""+ opr+"";
});
var operator = document.getElementById('multiply');
operator.addEventListener('click', function(){
    sum= sum1;
    decimal_num = false;
    after_decimal = 1;
    sum2 = 0;
    opr = '*';
    x = true;
    sum1 = 0;
    res = sum+"*";
    count1.innerText=res+" ";
});
var operator = document.getElementById('devide');
operator.addEventListener('click', function(){
    sum= sum1;
    x = true;
    decimal_num = false;
    after_decimal = 1;
    sum2 = 0;
    opr = '/';
    sum1 = 0;
    count1.innerText=sum+""+ opr+"";
});
var operator = document.getElementById('modulo');
operator.addEventListener('click', function(){
    sum = sum1;
    decimal_num = false;
    after_decimal = 1;
    sum2 =0;
    x = true;
    opr = '%';
    sum1 = 0;
    count1.innerText=sum+""+ opr+"";
});
var op_equal = document.getElementById('equal');
op_equal.addEventListener('click', function(){
    sum = eval(sum + " " + opr + " " + sum1);
    sum1 = sum;
    decimal_num = false;
    sum2 = 0;
    after_decimal = 1;
    opr = '';
    // sum = result;
    count1.innerText=sum+" ";
});
var op_AC = document.getElementById('AC');
op_AC.addEventListener('click', function(){
    x = false;
    decimal_num = false;
    after_decimal = 1;
    sum2 = 0;
    sum = 0;
    opr='';
    sum1 = 0;
    count1.innerText=sum+" ";
});
var operator = document.getElementById('plus_minus');
operator.addEventListener('click', function(){
    sum1 = sum1 * (-1);
    count1.innerText=sum1+" ";
});
 var decimal_num = false;
var decimal = document.getElementById('dot');
decimal.addEventListener('click', function(){
    decimal_num = true;
})

