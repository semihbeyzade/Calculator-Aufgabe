
class Calculator{
   
    constructor(){
        //properties
       
       this._pi = Math.PI
        this._e = Math.E

       
      
    }

    //getter
    get pi(){
        return this._pi
    }

    get e(){
        return this._e
    }

   
    
    //methods
    
        
    ratio(x,y,width){
        const height = x/y
        return `ratio is width:${width} ==> ${width}:${height}`
    }
    percentage(x,y){
        return (x * 100) / y
    }
    add(x, y){
        return x + y
    }
    subtract(x, y){
        return x - y
    }
    multiply(x, y){
        return x * y
    }
    divide(x, y){
        return x / y
    }
    modulation(x, y){
        return x % y
    }
    elevate(x, y){
        return Math.pow(x,y)
    }
    sqrt(x){
        return Math.sqrt(x)
    }


}

const calculate = new Calculator()
console.log(calculate.pi);
console.log(calculate.e);
console.log(calculate.ratio(20,4,40));
console.log(calculate.percentage(20,30));
console.log(calculate.add(10,20));
console.log(calculate.subtract(45,15));
console.log(calculate.multiply(150,45));
console.log(calculate.divide(48,16));
console.log(calculate.modulation(20,5));
console.log(calculate.elevate(2,3));
console.log(calculate.sqrt(9));