function calculate(prosses)
{
    with(document.frm)
    switch(prosses)
    {
            
        case 1:
         Reasult.value = Math.abs(getvalue.value);
            break;
        case 2:
            
         Reasult.value = Math.round(getvalue.value); 
            break;
        case 3:
            Reasult.value = Math.sin(convDegreee(getvalue.value));
            break;
            case 4 :
            Reasult.value = Math.cos(convDegreee(getvalue.value));
            break;
            case 5:
            Reasult.value = Math.tan(convDegreee(getvalue.value));
            break;
            case 6:
            Reasult.value = Math.log(getvalue.value);
            break;
            case 7:
            Reasult.value = Math.floor(getvalue.value);
            break;
        
            case 8:
            Reasult.value = Math.ceil(getvalue.value);
            break;
             case 9:
            Reasult.value = Math.random(getvalue.value);
            break;
        
             case 10:
            Reasult.value = Math.sqrt(getvalue.value);
            break;
            
             case 11:
            Reasult.value = Math.E;
            break;
            
            case 12:
            Reasult.value = Math.PI;
            break;
            case 13 :
            Reasult.value = (sum1(getvalue.value));
            break;
           case 14 :
            Reasult.value = (sum(getvalue.value));
            break;
            case 15 :
            Reasult.value = (sum2(getvalue.value));
            break;
          case 16 :
            Reasult.value = (sum3(getvalue.value));
            break;
        
        
        
    }
    
    
}
function convDegreee(x){
    
    return x*22/7/180;
   
    
}

function sum(x,y){
    
    var x= parseFloat(prompt("First Number"));
    var y= parseFloat(prompt("second Number"));
    var result =parseFloat(x-y);
   return (result);
    
}
function sum1(x,y){
    
    var x= parseFloat(prompt("First Number"));
    var y= parseFloat(prompt("second Number"));
    var result =parseFloat(x+y);
   return (result);
    
}
function sum2(x,y){
    
    var x= parseFloat(prompt("First Number"));
    var y= parseFloat(prompt("second Number"));
    var result =parseFloat(x*y);
   return (result);
    
}
function sum3(x,y){
    
    var x= parseFloat(prompt("First Number"));
    var y= parseFloat(prompt("second Number"));
    var result =parseFloat(x/y);
   return (result);
    
}