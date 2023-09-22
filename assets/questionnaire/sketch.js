let NUMBER_OF_SOUNDS = 5 //How many sounds are we going to test
let NUMBER_OF_QUESTIONS = 5; //How many questions per sound
let SOUND_NUMBER = 0; //Current sound number
let IS_FINISHED = 0; //Flag that marks when we are done with the test

results_array = new Array(NUMBER_OF_SOUNDS);
slider_array = new Array(NUMBER_OF_SOUNDS);
let SLIDER_SPACING = 100;
let SLIDER_OFFSET = 20;

let c_button;
let r_button;


const q_entries = ["1. Ease of Play","2. Responsiveness","3. Predictability","4. Nuance","5. Closeness"];
const q_entries_long = ["1. Ease of Play",
"2. Responsiveness",
"3. Predictability",
"4. Nuance",
"5. Closeness to the Guitar."];


function save_csv()
{
  let csvContent = "";
  //Write column names
  csvContent += String('Entry') + ",";
  for(var j = 0; j < NUMBER_OF_SOUNDS-1; j++)
      {
      csvContent += String('Sound ' + (j+1)) + ",";
      }
  // (last entry goes without a comma)
  csvContent += String('Sound '+ (NUMBER_OF_SOUNDS-1+1)) + "\n";

  //csvContent += \n';
  //Write values (last entry goes without a comma)
  for(var i = 0; i < NUMBER_OF_SOUNDS;i++)
      {
      let csvRow = q_entries[i] + ',';
      for(var j = 0; j < NUMBER_OF_QUESTIONS-1; j++)
          {
          csvRow += (results_array[j])[i] + ",";
          }
      csvContent += csvRow + (results_array[NUMBER_OF_QUESTIONS-1])[i] + "\n";
      }
  //console.log(csvContent);

  // Create file and download it.
  const blob = new Blob([csvContent], { type: 'text/csv' });

  // Creating an object for downloading url
  const url = window.URL.createObjectURL(blob);

  // Creating an anchor(a) tag of HTML
  const a = document.createElement('a');

  // Passing the blob downloading url
  a.setAttribute('href', url);

  // Setting the anchor tag attribute for downloading
  // and passing the download file name
  a.setAttribute('download', 'download.csv');

  // Performing a download with click
  a.click();
}


function showResults(posX,posY)
{
  for (var i=0; i<NUMBER_OF_SOUNDS; i++) 
  {
    text('Sound ' + (i+1),posX,posY+70*i)
    for (var j=0; j<NUMBER_OF_QUESTIONS; j++)
      text(String((results_array[i])[j]),posX+150+50*j,posY+70*i)
}
}
function resetSliders()
{
  for (var i=0; i<5; i++) 
    slider_array[i].remove();
  for (var i=0; i<5; i++) 
    slider_array[i] = createSliderSet(-100,100,0,1,50+SLIDER_OFFSET*2,180+SLIDER_SPACING*i);
}

function continueForm()
{
  //Store results
  results_array[SOUND_NUMBER] = new Array(NUMBER_OF_QUESTIONS);
  for (var i=0; i<NUMBER_OF_QUESTIONS; i++) 
    results_array[SOUND_NUMBER][i] = slider_array[i].value();
  
  SOUND_NUMBER = SOUND_NUMBER + 1;
  resetSliders();
  if(SOUND_NUMBER === NUMBER_OF_SOUNDS)
    {
      IS_FINISHED = 1;
      c_button.remove();
      r_button.remove();
      for (var i=0; i<NUMBER_OF_QUESTIONS; i++) 
        slider_array[i].remove();
      r_button = createButton('Download Results');
      r_button.position(50, 120);
      r_button.mousePressed(save_csv);
    }
}

function setupEntry(posX,posY,message)
{
  textSize(20);
  posX = posX+SLIDER_OFFSET;
  text(message ,posX,posY);
  textSize(15);
  posX = posX+SLIDER_OFFSET;
  text('Mode 1' ,posX,posY+20); text('|' ,posX+32,posY+35);
  text('Indifferent' ,posX+150,posY+20); text('|' ,posX+180,posY+35);
  text('Mode 2' ,posX+300,posY+20); text('|' ,posX+329,posY+35);

}
function setupText(posX,posY,soundnumber)
{
  textSize(40);
  text('Guitar Synth Assessment',posX,posY);
  textSize(25);
  text('Sound no. ' + soundnumber ,posX,posY+40);
  textSize(18);
  text('Please, rate which mode do you prefer across these categories:' ,posX,posY+70);
  for(var i=0;i<NUMBER_OF_QUESTIONS;i++)
  {
    setupEntry(posX,posY+100+SLIDER_SPACING*i,q_entries_long[i]);
  }
}

function createSliderSet(minval,maxval,setval,step,posX,posY){
  slider = createSlider(minval, maxval, setval);
  slider.position(posX, posY);
  slider.style('width', '300px');
  return slider
}

function setup() {
  createCanvas(1000, 1000);
  for (var i=0; i<5; i++) 
    slider_array[i] = createSliderSet(-100,100,0,1,50+SLIDER_OFFSET*2,180+SLIDER_SPACING*i);
  r_button = createButton('Reset Form');
  r_button.position(50, 620);
  r_button.mousePressed(resetSliders);
  c_button = createButton('Next !');
  c_button.position(400, 620);
  c_button.mousePressed(continueForm);
}

function draw() {
  background(200,200,200);
  if(IS_FINISHED == 0)
  {
  setupText(20,50,SOUND_NUMBER+1);
  let val = slider.value();
  }
  else
  {
    textSize(50);
    text('Questionnaire Done!',50,100);
    textSize(20);
    showResults(100,200);
  }
}
