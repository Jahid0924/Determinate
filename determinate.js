let btn = document.querySelector(".output");
var resultBox = document.querySelector(".result");
let select = document.querySelector("#userSelect");

select.addEventListener("change", () => {
  var selectVal = select.value;
  console.log(selectVal);
  let Determinate3x3 = document.querySelector(".determinateBox_3x3");
  let Determinate4x4 = document.querySelector(".determinateBox_4x4");
  let msg = document.querySelector(".letter");
  if (selectVal == 4) {
    Determinate4x4.classList.remove("hide");
    Determinate3x3.classList.add("hide");
    msg.classList.add("hide");
    gsap.from(".determinateBox_4x4",
{
  opacity:0,
  duration:1,
  z :19,
  delay:0.4,
})
    btn.addEventListener("click", () => {
      let boxes = document.querySelectorAll(".determinateBox_4x4 input");
      

      var elem = [
        parseFloat(boxes[0].value),
        parseFloat(boxes[1].value),
        parseFloat(boxes[2].value),
        parseFloat(boxes[3].value),
        parseFloat(boxes[4].value),
        parseFloat(boxes[5].value),
        parseFloat(boxes[6].value),
        parseFloat(boxes[7].value),
        parseFloat(boxes[8].value),
        parseFloat(boxes[9].value),
        parseFloat(boxes[10].value),
        parseFloat(boxes[11].value),
        parseFloat(boxes[12].value),
        parseFloat(boxes[13].value),
        parseFloat(boxes[14].value),
        parseFloat(boxes[15].value),
      ];

      function CrossBy3x() {
        function cross2x2(val1, val2, val3, val4, mul) {
          let product1 = val1 * val4;
          let product2 = val3 * val2;
          var cross2by2 = product1 - product2;
          var cross2by2Result = mul * cross2by2;
          return cross2by2Result;
        }

        //Column1
        let Column1Cross1 = cross2x2(
          elem[10],
          elem[11],
          elem[14],
          elem[15],
          elem[5]
        );
        let Column1Cross2 = cross2x2(
          elem[9],
          elem[11],
          elem[13],
          elem[15],
          elem[6]
        );
        let Column1Cross3 = cross2x2(
          elem[9],
          elem[10],
          elem[13],
          elem[14],
          elem[7]
        );
        let crossResult1 = Column1Cross1 - Column1Cross2 + Column1Cross3;
        console.log(crossResult1);

        //Column2
        let Column2Cross1 = cross2x2(
          elem[10],
          elem[11],
          elem[14],
          elem[15],
          elem[4]
        );
        let Column2Cross2 = cross2x2(
          elem[8],
          elem[11],
          elem[12],
          elem[15],
          elem[6]
        );
        let Column2Cross3 = cross2x2(
          elem[8],
          elem[10],
          elem[12],
          elem[14],
          elem[7]
        );
        let crossResult2 = Column2Cross1 - Column2Cross2 + Column2Cross3;
        console.log(crossResult2);

        //Column3
        let Column3Cross1 = cross2x2(
          elem[9],
          elem[11],
          elem[13],
          elem[15],
          elem[4]
        );
        let Column3Cross2 = cross2x2(
          elem[8],
          elem[11],
          elem[12],
          elem[15],
          elem[5]
        );
        let Column3Cross3 = cross2x2(
          elem[8],
          elem[9],
          elem[12],
          elem[13],
          elem[7]
        );
        let crossResult3 = Column3Cross1 - Column3Cross2 + Column3Cross3;
        console.log(crossResult3);

        //Column3
        let Column4Cross1 = cross2x2(
          elem[9],
          elem[10],
          elem[13],
          elem[14],
          elem[4]
        );
        let Column4Cross2 = cross2x2(
          elem[8],
          elem[10],
          elem[12],
          elem[14],
          elem[5]
        );
        let Column4Cross3 = cross2x2(
          elem[8],
          elem[9],
          elem[12],
          elem[13],
          elem[6]
        );
        let crossResult4 = Column4Cross1 - Column4Cross2 + Column4Cross3;
        console.log(crossResult4);

        let Result1 = elem[0] * crossResult1;
        let Result2 = elem[1] * crossResult2;
        let Result3 = elem[2] * crossResult3;
        let Result4 = elem[3] * crossResult4;

        var finalResult = Result1 - Result2 + Result3 - Result4;
        console.log(finalResult);
        resultBox.innerHTML = `Value of Determinate is  '${finalResult}'`;
      }
      CrossBy3x();
    });
  } else if (selectVal == 3) {
    Determinate3x3.classList.remove("hide");
    Determinate4x4.classList.add("hide");
    msg.classList.add("hide");
    gsap.from(".determinateBox_3x3",
    {
      opacity:0,
      duration:1,
      z :19,
      delay:0.4,
    })
    btn.addEventListener("click", () => {
      let box = document.querySelectorAll(".determinateBox_3x3 input");

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

      function Cross3x3() {
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
        resultBox.innerHTML = `Value of Determinate is  '${final3x3Result}'`;
      }
      Cross3x3();
    });
  } else {
    console.log("error");
  }
});

gsap.from("h1",{
  opacity:0,
  duration:0.7,
  y:20,
  delay:0.4
})

gsap.from(".options",
{
  opacity:0,
  duration:0.9,
  y :25,
  delay:0.7,
})
gsap.from(".container",
{
  opacity:0,
  duration:1,
  y :25,
  delay:0.9,
})




