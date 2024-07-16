let btn = document.querySelector(".output");
let togglebtn = document.querySelector(".toggleswitch");
let sun = document.querySelector(".sunbtn");
let moon = document.querySelector(".moonbtn");
let body = document.querySelector("body");

let mode = "light";
togglebtn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    body.classList.add("darkb");
    body.classList.remove("lightb");
    sun.classList.add("hide");
    moon.classList.remove("hide");
    h1.style.color = "White";
    document.querySelector(".options").style.color = "white";
  } else {
    mode = "light";
    body.classList.add("lightb");
    body.classList.remove("darkb");
    sun.classList.remove("hide");
    moon.classList.add("hide");
    h1.style.color = "black";
    document.querySelector(".options").style.color = "black";
  }
  console.log(mode);
});

btn.addEventListener("click", () => {
  let box = document.querySelectorAll(".matrix_3x3 input");
  let resultBox = document.querySelectorAll(".resultmatrix_3x3 span");
    console.log(resultBox);
    let result = document.querySelector(".resultbox");
    result.classList.remove("hide");
  var elem = [
    parseFloat(box[0].value),
    parseFloat(box[1].value),
    parseFloat(box[2].value),
    parseFloat(box[3].value),
    parseFloat(box[4].value),
    parseFloat(box[5].value),
    parseFloat(box[6].value),
    parseFloat(box[7].value),
    parseFloat(box[8].value),
  ];


  function Inverse_3x3() {
    // Calculate the co-factors
     let undefinebox = document.querySelector(".undefined");
    // row1
    let cof1 = elem[4] * elem[8] - elem[7] * elem[5];
    let cof2 = -1*(elem[3] * elem[8] - elem[6] * elem[5]);
    let cof3 = elem[3] * elem[7] - elem[6] * elem[4];
    //row2
    let cof4 = -1*(elem[1] * elem[8] - elem[7] * elem[2]);
    let cof5 = elem[0] * elem[8] - elem[6] * elem[2];
    let cof6 = -1*(elem[0] * elem[7] - elem[1] * elem[6]);
    //row3
    let cof7 = elem[5] * elem[1] - elem[4] * elem[2];
    let cof8 = -1*(elem[5] * elem[0] - elem[3] * elem[2]);
    let cof9 = elem[4] * elem[0] - elem[3] * elem[1];
    let cofactors = [cof1, cof2, cof3, cof4, cof5, cof6, cof7, cof8, cof9];
    console.log(cofactors);
    
    //cAlculate the determinant value

    function cross2x2(val1, val2, val3, val4, mul) {
      let product1 = val1 * val4;
      let product2 = val3 * val2;
      var cross2by2 = product1 - product2;
      var cross2by2Result = mul * cross2by2;
      return cross2by2Result;
    }

    //Column1
    let Column1 = cross2x2(elem[4], elem[5], elem[7], elem[8], elem[0]);
    let Column2 = cross2x2(elem[3], elem[5], elem[6], elem[8], elem[1]);
    let Column3 = cross2x2(elem[3], elem[4], elem[6], elem[7], elem[2]);

    let final3x3Result = Column1 - Column2 + Column3;
    if(final3x3Result == 0){
      console.log("undefined");
      undefinebox.innerHTML = "The value of Inverse Matrix is undefined"
      undefinebox.classList.remove("hide");
      result.classList.add("hide");
    }
    //   resultBox.innerHTML = `Value of Determinant is  '${final3x3Result}'`;
    console.log(`Value of Determinant is  '${final3x3Result}'`);

    //calculate Inverse

    
let finalproduct = cofactors.map((values) => {
    if(values % final3x3Result == 0){
        return values/final3x3Result;
    }
    else{
        return `${values}/${final3x3Result}`;
    }
});
console.log(finalproduct);

resultBox[0].innerHTML = finalproduct[0];
resultBox[1].innerHTML = finalproduct[3];
resultBox[2].innerHTML = finalproduct[6];
resultBox[3].innerHTML = finalproduct[1];
resultBox[4].innerHTML = finalproduct[4];
resultBox[5].innerHTML = finalproduct[7];
resultBox[6].innerHTML = finalproduct[2];
resultBox[7].innerHTML = finalproduct[5];
resultBox[8].innerHTML = finalproduct[8];



// display cofactors

let displaycof = document.querySelectorAll(".cofbox span");
//row1
displaycof[0].innerHTML = `A11 = '${cof1}'`;
displaycof[1].innerHTML = `A12 = '${cof2}'`;
displaycof[2].innerHTML = `A13 = '${cof3}'`;
//row2
displaycof[3].innerHTML = `A21 = '${cof4}'`;
displaycof[4].innerHTML = `A22 = '${cof5}'`;
displaycof[5].innerHTML = `A23 = '${cof6}'`;
//row3
displaycof[6].innerHTML = `A31 = '${cof7}'`;
displaycof[7].innerHTML = `A32 = '${cof8}'`;
displaycof[8].innerHTML = `A33 = '${cof9}'`;

  }
  Inverse_3x3();
});


var h1 = document.querySelector("h1");
function breakText() {

  var h1txt = h1.textContent;
  var splittext = h1txt.split("");
  var halfvalue = splittext.length / 2;
  var clutter = "";

  splittext.forEach(function (element, index) {
    if (index < halfvalue) {
      clutter += `<span class="left">${element}</span>`;
    } else {
      clutter += `<span class="right">${element}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
breakText();

gsap.from("h1 .left", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});
gsap.from("h1 .right", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});