
import {select, selectAll} from "d3-selection";

// C'est ici que vous allez écrire les premières lignes avec js!




//ex1
let svg = select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 300);

// Ajoutez trois cercles au SVG
svg.append("g")
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 40)
  .append("text");


svg.append("g").append("circle")
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 40);

svg.append("g").append("circle")
  .attr("cx", 250)
  .attr("cy", 250)
  .attr("r", 40);




//ex2
let cercle1 = select("body > svg > g:nth-child(1) > circle")

let cercle2 = select("body > svg > g:nth-child(2) > circle")
let cercle3 = select("body > svg > g:nth-child(3) > circle")


cercle1.attr("cx", function() {
    let cx = +cercle1.attr("cx"); // convertir en nombre
    cx += 50; // ajouter 50
    return cx; // retourner la nouvelle valeur
  });



  cercle2.attr("cx", function() {
    let cx = +cercle2.attr("cx"); // convertir en nombre
    cx += 50; // ajouter 50
    return cx; // retourner la nouvelle valeur
  });


cercle2.attr("fill","red")


let cercles = [cercle1,cercle2,cercle3]




select('g')
    .append('text')
    .text('Salut')
    .attr('y','100')
    .attr('x','90')
    

    select('g:nth-child(2)')
    .append('text')
    .text('je suis')
    .attr('y','200')
    .attr('x','170')




    select('g:nth-child(3)')
    .append('text')
    .text('un rond')
    .attr('y','300')
    .attr('x','270')

    cercle3.on("click",function(){
      cercle1.attr("cx","150")
      cercle2.attr("cx","150")
      cercle3.attr("cx","150")


    })


// Définir les données
const data = [20, 5, 25, 8, 15];

// Définir les dimensions du graphique
const width = 350;
const height = 100;

// Sélectionner l'élément SVG
let dist=0;
const svg2 = select("body")
  .append('svg') 
  .style('transform','rotate(180deg)')
  .attr("width", width)
  .selectAll("rect")
  .data(data)
  .join(enter => enter
    
    .append("rect")
    .attr('width',15)
    .attr('height',150)
    .attr('x',()=>{
      dist+=20;
      return dist;
    })
    .attr('height',(d)=>{
      
      return d*3;
    })

  );




