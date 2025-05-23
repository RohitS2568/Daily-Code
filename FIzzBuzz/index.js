for (let i = 1; i <= 15; i++) {
  let output = '';

  if (i % 15 === 0) {
    output = 'FizzBuzz';
  } else if (i % 3 === 0) {
    output = 'Fizz';
  } else if (i % 5 === 0) {
    output = 'Buzz';
  }

  console.log(output || i);
}
