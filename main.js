let name = 'SAMSUNG STORE'
class Product { //추상화 작업
    name = '';
    price = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price + '만원'; 
    }
    setPrice(price) {
        if (price < 0) {
            throw Error('마이너스 값 안됨!')
        }
        this.price = price;
    }
}//캡슐화
class TV extends Product{ //상속 
    size = '';

    constructor(name, price, size) { //생성자
        super(name, price)
       
        this.size = size;
    }


}

class AC  extends Product{
    type = '';
}

class LapTop  extends Product{
    weight = '';
}

let tv1 = new TV('soyoungTV', 200, '72Inch');
let tv2 = new TV('jgTV', 300, '80Inch');
tv1.setPrice(1000)

console.log(tv1, tv2.getPrice());