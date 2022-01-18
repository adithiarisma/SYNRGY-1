let a = 50;
let b = 20;
let c = 22;
let x = 35;
let y = 40;

// 1
if (a == 50) {
  while (a) {
    console.log(a);
    a--;
  }
} else {
  console.log(false);
}

// 2
if (a + b != 32) {
  while (b) {
    console.log(b);
    b--;
  }
} else {
  console.log(false);
}

//3
a=6
if (c + a == 28) {
  while (c) {
    console.log(c);
    c--;
  }
} else {
  console.log(false);
}

//4
if (x == 35) {
  while (x) {
    console.log(x);
    x--;
  }
} else {
  console.log(false);
}

//5
if (x + y != 35) {
  while (y) {
    console.log(y);
    y--;
  }
} else {
  console.log(false);
}

//6
if (c + y + a != 25) {
  while (a) {
    console.log(a);
    a--;
  }
} else {
  console.log(false);
}

//looping array
var myStringArray = [10, 2, 3, 5, 2, 6];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
  console.log(myStringArray[i]);
}
