// import React from 'react';

// import $ from "jquery";
// import { usePopper } from 'react-popper';
// import SlotMachine from 'jquery-slotmachine/lib/slot-machine.js';

// class Main extends React.Component {
//   constructor(props) {
//     super(props);

//     var salviniName = "";
//     var bgDelay = 175;
//     var time = 0;
//   }

//   btn = document.querySelector('#randomizeButton');
//   results = {
//     machine: document.querySelector('#machine2Result')
//   };
//   el = document.querySelector('#machine');
//   machine = new SlotMachine(el, { active: 0 });

//   btn.addEventListener('click', () => {
//     showMachine();
//     machine.shuffle(5, onComplete);
//     setTimeout(() => machine.shuffle(5, onComplete), 700);
//     closeAlert();
//   });

//   function onComplete(active) {
//     salviniName = imageToName(machine.visibleTile);
//     document.getElementById("machine2Result").innerHTML = "<div class='text-dark h4'>HAI SBLOCCATO: <p id='salviniName' class='text-danger'>" + salviniName + "</p></div>";

//     if (machine.visibleTile == 10) {
//       redBg();
//       time = setInterval("stroboBg()", bgDelay);
//     } else {
//       restoreBg();
//       clearInterval(time);
//     }
//     showBtnScreenshot();
//   }

//   function showMachine() {
//     if ($("#ken").is(":visible")) {
//       $("#machine").css({
//         "position": "relative",
//         "opacity": "1"
//       });
//       $("#ken").css("display", "none");
//     }
//   }
//   /**************        NOTA_GIO: FINO A QUI HO MODIFICATO IL CODICE            ***************/

//   function closeAlert() {
//     if (document.getElementById("myAlert").style.display != "none") {
//       document.getElementById("myAlert").style.display = "none";
//     }
//   }

//   function imageToName(i) {
//     var name = "";
//     switch (i) {
//       case 0:
//         name = "Spock-vini";
//         break;
//       case 1:
//         name = "S.W.A.Tvini";
//         break;
//       case 2:
//         name = "Salvini carramba";
//         break;
//       case 3:
//         name = "Salvini ufficiale";
//         break;
//       case 4:
//         name = "Salvini pulotto";
//         break;
//       case 5:
//         name = "Nostromo Salvini";
//         break;
//       case 6:
//         name = "Salvini the templar";
//         break;
//       case 7:
//         name = "Salvini barracellare";
//         break;
//       case 8:
//         name = "Salvini guardia svizzera";
//         break;
//       case 9:
//         name = "Salvini cheerleader";
//         break;
//       case 10:
//         name = "SALVINI FINANZIERE!!!";
//         break;
//       case 11:
//         name = "AstroSalvini";
//         break;
//       case 12:
//         name = "Salvini texas ranger";
//         break;
//       case 13:
//         name = "Sal-vigile";
//         break;
//       case 14:
//         name = "Obi Wan Salvobi";
//         break;
//       case 15:
//         name = "Salvininja";
//         break;
//       case 16:
//         name = "Mr. Salvastic";
//         break;
//       case 17:
//         name = "Salvini pompiere";
//         break;
//       case 18:
//         name = "Fra' Salvini";
//         break;
//       case 19:
//         name = "Salvini MigrantBuster";
//         break;
//       case 20:
//         name = "RoboSalvini";
//         break;
//       case 21:
//         name = "Salvini Garibaldino";
//         break;
//       case 22:
//         name = "Salvinion";
//         break;
//       case 23:
//         name = "Power Salving";
//         break;
//       case 24:
//         name = "Salvini centurione";
//         break;
//       case 25:
//         name = "Sailor-Ministro";
//         break;
//       case 26:
//         name = "Super Salvyan";
//         break;
//       case 27:
//         name = "Salvini globe trotter";
//         break;
//       case 28:
//         name = "Salvinella";
//         break;
//       case 29:
//         name = "Salvini baywatch";
//         break;
//       case 30:
//         name = "Kobra Kai Salvini";
//         break;
//       case 31:
//         name = "Scottish Salvini";
//         break;
//       case 32:
//         name = "Royal Salvini";
//         break;
//       case 33:
//         name = "Salvini Mr.Bean";
//         break;
//       case 34:
//         name = "Scoutvini";
//         break;
//       case 35:
//         name = "Salvini amazone";
//         break;
//       case 36:
//         name = "Salvini He-Man";
//         break;
//       case 37:
//         name = "Buzz Salvaightyear";
//         break;
//       case 38:
//         name = "Salvini Austin Powers";
//         break;
//       case 39:
//         name = "SSalvini";
//         break;
//       case 40:
//         name = "Salvini Balotelli";
//         break;
//       case 41:
//         name = "Salvini Ladro";
//         break;
//       case 42:
//         name = "Shaolvini";
//         break;
//       case 43:
//         name = "Iron Salvini";
//         break;
//       case 44:
//         name = "Salvini CRI";
//         break;
//       case 45:
//         name = "Soviet Salvini";
//         break;
//       case 46:
//         name = "Cardinal Salvini";
//         break;
//       case 47:
//         name = "Moschettier Salvini";
//         break;
//       case 48:
//         name = "Salvy Potter";
//         break;
//       case 49:
//         name = "Salvini Adrian";
//         break;
//       case 50:
//         name = "Salvini torero";
//         break;
//       case 51:
//         name = "Sambini";
//         break;
//       case 52:
//         name = "Salvini teletubbie";
//         break;
//       case 53:
//         name = "Sheldini";
//         break;
//       case 54:
//         name = "Salvaddin";
//         break;
//       case 55:
//         name = "Sulk";
//         break;
//       case 56:
//         name = "Salvini Uzumaki";
//         break;
//       case 57:
//         name = "Wolverini";
//         break;
//       case 58:
//         name = "Salvitama";
//         break;
//       case 59:
//         name = "Sandalf";
//         break;
//       case 60:
//         name = "Salvigolas";
//         break;
//       case 61:
//         name = "Cetriolo Salvini";
//         break;
//       case 62:
//         name = "Salvini aggiustatutto";
//         break;
//       case 63:
//         name = "Rick Salvchez";
//         break;
//       case 64:
//         name = "Salvini Auditore";
//         break;
//       case 65:
//         name = "Papa Salvesco";
//         break;
//       case 66:
//         name = "Regina Elisalvetta";
//         break;
//       case 67:
//         name = "Salvini cappello di paglia";
//         break;
//       case 68:
//         name = "Buddhini";
//         break;
//       case 69:
//         name = "Salvini Bonaparte";
//         break;
//       case 70:
//         name = "Salzinga";
//         break;
//       case 71:
//         name = "Salvini Morpheus";
//         break;
//       case 72:
//         name = "Gargalvini";
//         break;
//       case 73:
//         name = "Salvini Attila";
//         break;
//       case 74:
//         name = "Spider-salv";
//         break;
//       case 75:
//         name = "Super Salvini";
//         break;
//       case 76:
//         name = "Salvini Zenigata";
//         break;
//       case 77:
//         name = "Banda Salvotti";
//         break;
//       case 78:
//         name = "Salvini Team Rocket";
//         break;
//       case 79:
//         name = "Salvini Kill-Bill";
//         break;
//       case 80:
//         name = "Salvini style!";
//         break;
//       case 81:
//         name = "Salvini Maui";
//         break;
//       case 82:
//         name = "Salvv Branningan";
//         break;
//       case 83:
//         name = "Salvini il barbaro";
//         break;
//       case 84:
//         name = "Salvini Dio della guerra";
//         break;
//       case 85:
//         name = "Salvini ebbasta";
//         break;
//       case 86:
//         name = "BIG SALVO";
//         break;
//       case 87:
//         name = "Savlini Borat";
//         break;
//       case 88:
//         name = "Salvin Presley";
//         break;
//       case 89:
//         name = "Salvini Hutton";
//         break;
//       case 90:
//         name = "Ronald Mc'Salvin";
//         break;
//       default:
//         name = "&nbsp;";
//     }
//     return name;
//   }

//   function screenshot() {
//     var activeEl = machine.visibleTile;
//     // Remove machine div
//     var divToRemove = document.getElementById("machine");
//     divToRemove.parentNode.removeChild(divToRemove);
//     // Write the active body
//     setBody();
//     document.getElementById("bodyToScreen").innerHTML = '<div><img src="img/Scontornate/' + activeEl + '.png" /></div>';
//     // Screenshot
//     html2canvas(document.getElementById("toScreenshot")).then(function (canvas) {
//       saveAs(canvas.toDataURL(), 'salvinification.png');
//       window.location.reload();
//     });
//   }

//   function saveAs(url, salvinification) {
//     var link = document.createElement('a');
//     if (typeof link.download === 'string') {
//       link.href = url;
//       link.download = salvinification;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//     else {
//       window.open(url);
//     }
//   }

//   function setBody() {
//     document.getElementById("bodyToScreen").style.top = "-160px";
//     document.getElementById("bodyToScreen").style.left = "120px";
//     document.getElementById("bodyToScreen").style.width = "75%";
//   }

//   function showAlert() {
//     document.getElementById("salviniAlert").innerHTML = '<div id="myAlert" class="mt-4 alert alert-danger"> <strong>ATTENZIONE!</strong> Per proseguire devi pagare 49 milioni di euro! <button onclick="closeAlert()" id="btnClose">&times;</button></div>';
//   }

//   function showBtnScreenshot() {
//     var btnScreenshot = document.getElementById("btnScreenshot");
//     if (btnScreenshot != null) {
//       btnScreenshot.style.display = "block";
//     }
//   }

//   function stroboBg() {
//     document.getElementById("randomize").classList.toggle("bg-danger");
//     document.getElementById("salviniAlert").classList.toggle("bg-danger");
//     console.log("tempoo");
//   }

//   function redBg() {
//     document.getElementById("randomize").classList.add("bg-danger");
//     document.getElementById("randomize").classList.remove("bg-secondary");

//     showAlert();
//     document.getElementById("salviniAlert").classList.add("bg-danger");
//     document.getElementById("salviniAlert").classList.remove("bg-secondary");
//   }

//   function restoreBg() {
//     document.getElementById("randomize").classList.add("bg-secondary");
//     document.getElementById("randomize").classList.remove("bg-danger");

//     document.getElementById("salviniAlert").classList.add("bg-secondary");
//     document.getElementById("salviniAlert").classList.remove("bg-danger");
//   }
  
// }

// export default Main;
