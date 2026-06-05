


// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit._proto_= animal;

class Animal{
    constructor(name){
        this.name = name;
        console.log("object is created.....")
        
    }

    jumps(){
        console.log("jumping")
    }
    
    eats(){
        console.log("eating")
    }


};

class lion extends Animal{
    
    constructor(name){
        super(name);
        console.log("object is created and lion created it")
    }
}



let a = new Animal("kittu");
console.log(a)
a.jumps();
a.eats();

let l = new lion("Shera")
console.log(l)


