function getSquare(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      str += "*";
    }
      str += "\n";
  }
  return str;
}
console.log(getSquare(10));

function getEmptySquare(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    str += "*"
    for (var j = 0; j < size-2; j++) {
      if (i===size-1||i===0){
        str += "*"
      }else{
        str += " ";
      }
    }
      str+="*";
      str+="\n";
  }
  return str;
}
console.log(getEmptySquare(10));

function getTriangle(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (j <= i){
        str += "*";
      }else {
        str += " ";
      }
    }
      str += "\n";
  }
  return str;
}
console.log(getTriangle(10));

function getInvTriangle(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    for (var j = size; j > 0; --j) {
      if (j > i){
        str += "*";
      }else {
        str += " ";
      }
    }
      str += "\n";
  }
  return str;
}
console.log(getInvTriangle(10));



function getRightTriangle(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    for (var j = size; j >= 0; --j) {
      if (j > i){
        str += " ";
      }else {
        str += "*";
      }
    }
      str += "\n";
  }
  return str;
}
console.log(getRightTriangle(10));

function getInvRightTriangle(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (j < i){
        str += " ";
      }else {
        str += "*";
      }
    }
      str += "\n";
  }
  return str;
}
console.log(getInvRightTriangle(10));

//EMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTYEMPTY//
function getEmptyTriangle(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (j === i || j===0 || i===size-1){
        str += "*";
      }else {
        str += " ";
      }
    }
      str += "\n";
  }
  return str;
}
console.log(getEmptyTriangle(10));

function getEmptyInvTriangle(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    for (var j = size; j > 0; --j) {
      if (i===0 || j===size || j===i+1){
        str += "*";
      }else {
        str += " "
      }
    }
      str += "\n";
  }
  return str;
}
console.log(getEmptyInvTriangle(10));

function getEmptyRightTriangle(size) {
  let str = "";

  for (var i = 0; i <= size-1; i++) {
    for (var j = size; j > 0; --j) {
      if (i===j-1 || j===1 || i===size-1){
        str += "*";
      }else {
        str += " ";
      }
    }
      str += "\n";
  }
  return str;
}
console.log(getEmptyRightTriangle(10));


function getEmptyInvRightTriangle(size) {
  let str = "";

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i===0 || j==size-1 || i==j) {
        str += "*";
      }else {
        str += " ";
      }
    }
        str+= "\n"
  }

  return str;
}
console.log(getEmptyInvRightTriangle(10));

//////////////////////////////////////////////////////////////////////////

function getCross(size) {
    let str = ""

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i===j || i === size - j - 1) {
        str += "*";
      }else {
        str += " ";
      }
    }
        str+= "\n"
  }
  return str;
}

console.log(getCross(10));

function getCross(size) {
    let str = ""

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i===j || i === size - j - 1) {
        str += "*";
      }else {
        str += " ";
      }
    }
        str+= "\n"
  }
  return str;
}

console.log(getCross(10));

function getEmptyCross(size) {
    let str = ""

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (i===j || i === size - j - 1 || i === 0 || i === size -1 ) {
        str += "*";
      }else {
        str += " ";
      }
    }
        str+= "\n"
  }
  return str;
}

console.log(getEmptyCross(10));


function getCloseCross(size) {
    let str = ""

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if ((j > i) && (j >= size - i) || (j <= i) && (j < size - i) ) {
        str += " ";
      }else {
        str += "*";
      }
    }
        str+= "\n"
  }
  return str;
}

console.log(getCloseCross(10));
