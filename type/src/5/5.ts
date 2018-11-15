interface IGreeter { // interface : 어떤 로직이 있으면 좋겠다라는 의미로 사용
  greet(): string; // 추상메소드
}

class Greeter implements IGreeter {
  names: Array<String> = ['A', 'B'];
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet(): string {
    return 'Hello, ' + this.greeting;
  }

  print(names: Array<any>): void{
 }

 var greeter = new Greeter('Everybody');
 console.log(greeter);

 var result = greeter.greet();

 console.log(result);
