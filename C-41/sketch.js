const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
let world;
let engine;
let boy;
let character;

var maxDrops = 100;
var drops = [];
function preload(){
    boy = loadImage("boy_umbrella.jpg")
}

function setup(){
    engine = Matter.Engine.create();
    world = engine.world;
    createCanvas(600,400);
    
   character = new umbrella(width/2,height/2,200,200);
   

   
}
function draw(){
    background(0,0,0);
    Matter.Engine.update(engine);
    character.get();
    for(var i=0 ; i<maxDrops; i++){
        drops.push(new droplet(random(0,400), random(0,400) , 20));
        
    }
}