//created an object with list of attributes 
const Iam = {
  Name: "Bella",
  Skills : "CSS, HTML, Javascript and Git/Github.",
  //removed the link because I wanted it clickable
  //link : //"https://bellawareness.github.io/bellasPortfolio/",
  
  //a function to call list and input info needed for homework 
  //considering translating in spanish 
  myPortfoilo : function() {
    return "Hello, my name is " + this.Name + " I have learned " + this.Skills + " You may see my work at the link below" ; 
  }
};
//print to console t
//console.log(Iam.myPortfoilo());

//add the function to the div decided wanted a typing effect
//document.getElementById("thediv").innerHTML = Iam.myPortfoilo();

//code to take log answers to html in a typewriter effect

var i = 0;
var txt = Iam.myPortfoilo();
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thediv").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}