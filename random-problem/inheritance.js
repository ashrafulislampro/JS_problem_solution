class Ractangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }


    area(){
        if(this.width === this.height){
            return this.width * this.width; // square
        }else{
            return this.width * this.height; // rectangle
        }
    }
}

class Square extends Rectangle {
    constructor(width){
        super(width, width);
    }
}

console.log(Square(5, 6));