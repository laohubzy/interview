async function func() {
    console.log('async function is running!');
    const num1 = await 200;
    console.log(`num1 is ${num1}`);
    const num2 = await num1+ 100;
    console.log(`num2 is ${num2}`);
    const num3 = await num2 + 100;
    console.log(`num3 is ${num3}`);
  }
  
  func();