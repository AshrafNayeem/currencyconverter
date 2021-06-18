 function first() {
     var input5 = document.getElementById("input").value;
     var output5 = document.getElementById("output");
     output5.value;
     if (document.getElementById("convert1").value == "BDTK") {
         if (document.getElementById("convert2").value == "BDTK1") {
             output5.value = input5 * 1;
         }
         if (document.getElementById("convert2").value == "doller1") {
             output5.value = input5 / 84.79;
         }
         if (document.getElementById("convert2").value == "INR1") {
             output5.value = input5 / 1.14;
         }
         if (document.getElementById("convert2").value == "EURO1") {
             output5.value = input5 / 100.97;
         }
         if (document.getElementById("convert2").value == "DNR1") {
             output5.value = input5 / 281.39;
         }
     }
     if (document.getElementById("convert1").value == "doller") {
         if (document.getElementById("convert2").value == "BDTK1") {
             output5.value = input5 * 84.79;
         }
         if (document.getElementById("convert2").value == "doller1") {
             output5.value = input5 * 1;
         }
         if (document.getElementById("convert2").value == "INR1") {
             output5.value = input5 * 74.26;
         }
         if (document.getElementById("convert2").value == "EURO1") {
             output5.value = input5 / 1.19;
         }
         if (document.getElementById("convert2").value == "DNR1") {
             output5.value = input5 * .30;
         }
     }
     if (document.getElementById("convert1").value == "INR") {
         if (document.getElementById("convert2").value == "BDTK1") {
             output5.value = input5 * 1.14;
         }
         if (document.getElementById("convert2").value == "doller1") {
             output5.value = input5 / 74.26;
         }
         if (document.getElementById("convert2").value == "INR1") {
             output5.value = input5 * 1;
         }
         if (document.getElementById("convert2").value == "EURO1") {
             output5.value = input5 / 88.22;
         }
         if (document.getElementById("convert2").value == "DNR1") {
             output5.value = input5 * .0041;
         }
     }
     if (document.getElementById("convert1").value == "EURO") {
         if (document.getElementById("convert2").value == "BDTK1") {
             output5.value = input5 * 100.97;
         }
         if (document.getElementById("convert2").value == "doller1") {
             output5.value = input5 * 1.14;
         }
         if (document.getElementById("convert2").value == "INR1") {
             output5.value = input5 * 74.26;
         }
         if (document.getElementById("convert2").value == "EURO1") {
             output5.value = input5 * 1;
         }
         if (document.getElementById("convert2").value == "DNR1") {
             output5.value = input5 * .36;
         }
     }
     if (document.getElementById("convert1").value == "DNR") {
         if (document.getElementById("convert2").value == "BDTK1") {
             output5.value = input5 * 281.39;
         }
         if (document.getElementById("convert2").value == "doller1") {
             output5.value = input5 * 3.32;
         }
         if (document.getElementById("convert2").value == "INR1") {
             output5.value = input5 * 246.18;
         }
         if (document.getElementById("convert2").value == "EURO1") {
             output5.value = input5 * 2.79;
         }
         if (document.getElementById("convert2").value == "DNR1") {
             output5.value = input5 * 1;
         }
     }


 }