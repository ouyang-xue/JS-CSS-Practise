interface A {
    name: string;
    add: ()=>void;
}
type B = {
    age: number;
    add: ()=>void;
}

class C implements A {
    name: 'xx';
    add(){
        console.log('ccccc');
    }
}

class D implements B {
    age: 20;
    add(){
        console.log('ddddd');
    }
}
/////////////////////////////////////////////////
interface Shape{
    color: string;
}
interface PenStroke{
    penWidth:number;
}
interface Square extends Shape, PenStroke {
    sideLength:number;
}
