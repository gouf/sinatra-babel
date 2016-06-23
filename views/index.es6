class MyClass {
  constructor() {
    console.log('Hello');
  }

  sayHello() {
    alert('Hello!');
  }
}

window.addEventListener('load', () => {
  let m = new MyClass();
  let btn = document.getElementById('btn');
  btn.addEventListener('click', () => { m.sayHello(); });
});
