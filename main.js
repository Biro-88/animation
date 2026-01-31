const containerEl= document.querySelector(".containter");
const career=["Web Developer", "Web Designer","Graphic Designer","Front-end and Back-end Develper", "Data analylist","Enumerator","ICT coach",];

let careerIdex=0;
let charterIndex=0;
Update();  
function Update() {
   charterIndex++;
  containerEl.innerHTML=`<h1>Iam ${["E","I"].includes(career[careerIdex].slice(0,1))?"an":"a"} ${career[careerIdex].slice(0,charterIndex)}</h1>`;
 
  if (charterIndex===career[careerIdex].length) {
    careerIdex++;
    charterIndex=0;
  }
  if (careerIdex===career.length) {
    careerIdex=0;
  }
  setTimeout( Update, 200);
}


