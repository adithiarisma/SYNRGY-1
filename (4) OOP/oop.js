//1
var myStringArray = [2, 5, 10, "ini dia", "data", 100, 38];
function getArray(myStringArray) {
  var arrayLength = myStringArray.length;
  i = 50;
  if (arrayLength < i) {
    for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray[i]);
    }
  } else {
    console.log(false);
  }
}
getArray(myStringArray);

//2
var myStringArray2 = [3, 100, 283, "saya", "adalah", "kapiten", 75];
function getArray2(myStringArray2) {
  var arrayLength = myStringArray2.length;
  b = 26;
  if (arrayLength + b != 32) {
    for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray2[i]);
    }
  } else {
    console.log(false);
  }
}
getArray2(myStringArray2);

//3
var myStringArray3 = [29, 12, 30, "ini", "saya", 85];
function getArray3(myStringArray3) {
  var arrayLength = myStringArray3.length;
  a = 22;
  if (arrayLength + a == 28) {
    for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray3[i]);
    }
  } else {
    console.log(false);
  }
}
getArray3(myStringArray2);

//4
var myStringArray4 = [20, 12, 43, 54, 24];
function getArray4(myStringArray4) {
  var arrayLength = myStringArray4.length;
  if (arrayLength + 1 != 35) {
    for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray4[i]);
    }
  } else {
    console.log(false);
  }
}
getArray4(myStringArray4);

//5

var myStringArray5 = [20, "empat", "limat", 8, 29, 30];
function getArray5(myStringArray5) {
  var arrayLength = myStringArray5.length;
  x = 2;
  if (arrayLength + x != 35) {
    for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray5[i]);
    }
  } else {
    console.log(false);
  }
}
getArray5(myStringArray5);

//6

var myStringArray6 = ["data", "empat", 8, 3, 100, 8, 100, 3];
function getArray6(myStringArray6) {
  var arrayLength = myStringArray6.length;
  c = 10;
  if (arrayLength + c != 25) {
    for (var i = 0; i < arrayLength; i++) {
      console.log(myStringArray6[i]);
    }
  } else {
    console.log(false);
  }
}
getArray6(myStringArray6);
