/*
  1. constructor에서 this.color라고 사용하기 전에
  클래스 밑으로 해당 프로퍼티를 멤버변수처럼
  선언해 놓고 사용해야 합니다.

  2. 대신, 생성자 파라미터 앞에 접근제어자를 붙이면
  멤버변수처럼 선언하지 않아도 됩니다.
*/
class Car2 {
  // color: string;

  constructor(public color: string = 'Red'){
    // private: 접근제어자
    // public 위의 color: string,아래의 this.color = color를 작성하기 싫어서 사용
    // this.color = color;
  }

  print(){
    console.log(this.color);
  }
}

// private : 해당 변수는 Car2 클래스 안에서만 접근할 수 없다.(그렇게 써 주세요!)

let car2 = new Car2();
console.log(car2.color);
