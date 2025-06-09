---
permalink: /BravePlugin/
title: "BRAVE Plugin"
layout: splash

excerpt: "<b><br>Low-latency Timbre Transfer </b><br><i>for instrumental interaction</i>."
header:
  overlay_image: ../assets/braveplugin/logo.png
  overlay_filter: rgba(0, 0, 0, 0.2)
  actions:
    - label: "Get the Plugin"
      url: "/BravePlugin/#get-the-plugin--pretrained-models"
    - label: "Training Code"
      url: "https://github.com/fcaspe/BRAVE"
---

<script async src="https://www.googletagmanager.com/gtag/js?id=G-QW4Q5E6HGY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QW4Q5E6HGY');
</script>

<style>
.center {
  margin-left: auto;
  margin-right: auto;
  font-size: 140%;
}
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Always 2 columns on large screens */
    gap: 20px;
    max-width: 90%;
    margin: auto;
}
.video {
    text-align: center;
}
iframe {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9; /* Maintain proper video ratio */
}

/* Stack into 1 column on smaller screens */
@media (max-width: 800px) {
    .container {
        grid-template-columns: 1fr;
    }
}
.download-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}
.download-button {
    display: inline-block;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    background-color: #0073e6;
    border-radius: 5px;
    text-align: center;
}
.download-button:hover {
    background-color: #005bb5;
}
</style>

<center><font size="+3"><b>Play an AI model as a musical instrument!<br></b></font></center>
<center><font size="+2">Just using an audio input<br></font></center>

<br>
<div class="container">
    <div class="video">
        <b>Play it Live!</b><br>
        <iframe src="https://www.youtube.com/embed/mfhidA6t3F8" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="video">
        <b>Percussive augmentation</b><br>
        <iframe src="https://www.youtube.com/embed/CyBBOowaKqU" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="video">
        <b>Beatboxing</b><br>
        <iframe src="https://www.youtube.com/embed/J74Q5cVDZx4" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="video">
        <b>Instrument retargeting</b><br>
        <iframe src="https://www.youtube.com/embed/X9vOlyE8eRg" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

<br>
<font size="+1">The BRAVE Plugin implements the <a href="/brave">BRAVE AI model</a> for real-time use, with really low latency (~10 ms).</font>


## Get the Plugin & Pretrained Models
<div class="download-container">
    <a href="https://github.com/fcaspe/BraveDemoPluginReleases/releases/download/v1.0.0/BraveDemoPlugin.zip" 
       style="display: inline-block; padding: 15px 20px; font-size: 16px; font-weight: bold; text-decoration: none; color: white; background-color: #0073e6; border-radius: 5px; text-align: center;"
       onmouseover="this.style.backgroundColor='#005bb5'" 
       onmouseout="this.style.backgroundColor='#0073e6'"
       onclick="gtag('event', 'download', {
         'event_category': 'Plugin Downloads', 
         'event_label': 'MacOS ARM64',
         'event_action': 'BravePlugin v1.0.0'
       });">
       Download Plugin (macOS Apple Silicon)</a>

    <a href="https://github.com/fcaspe/BraveDemoPluginReleases/releases/download/v1.0.0/pretrained.zip" 
       style="display: inline-block; padding: 15px 20px; font-size: 16px; font-weight: bold; text-decoration: none; color: white; background-color: #0073e6; border-radius: 5px; text-align: center;"
       onmouseover="this.style.backgroundColor='#005bb5'" 
       onmouseout="this.style.backgroundColor='#0073e6'"
       onclick="gtag('event', 'download', {
         'event_category': 'Model Downloads', 
         'event_label': 'Pretrained Models',
         'event_action': 'BRAVE Pretrained'
       });">
       Download Pretrained Models
    </a>
</div>

<br>Plugin notarized by Apple - Latest update: `6/3/25 - Version 1.0`

Note: This plugin is currently in beta testing, and there may be bugs or unexpected behavior. Your feedback is appreciated to help improve future versions. If you encounter any issues, please contact me.

## Instructions

Use your preferred DAW (Digital Audio Workstation), that supports VST3 or AU plugin formats.  
Each **pretrained model** implements a new sound you can control with your instrument.

 - Download the plugin to a directory where your <a href="https://higherhz.com/adding-a-new-vst-synth-plugin-to-reaper/">DAW can see it</a>.
 - Download and uncompress the pretrained models.
 - Open the plugin at your DAW, and select the folder where you stored the models.
 - **Done!** The models can now be selected from the GUI's list.

## Pretrained models

The provided models are trained from openly available datasets.


| Model         | Dataset Description |
|--------------|-----------------------------|
| **birdsong.h5** | [British Birdsong Dataset](https://www.kaggle.com/datasets/rtatman/british-birdsong-dataset), gathered from the [Xeno Canto collection](http://www.xeno-canto.org/). |
| **candombe.h5** | [Uruguayan candombe drumming](https://zenodo.org/records/6533068) dataset.|
| **drumset.h5**  | [The Expanded Groove MIDI Dataset](https://magenta.tensorflow.org/datasets/e-gmd). 2h 50m of a drummer performing on an electronic drum. kit. |
| **filosax.h5**  | Trained using recordings of *Participant 1* from the [Filosax Dataset](https://dave-foster.github.io/filosax/). |

Check [BRAVE's Repo](https://github.com/fcaspe/BRAVE) for instructions on how to train your own models. [Contact Me](https://docs.google.com/forms/d/1nB1DjQSS-S3RNT1TiE_z2SoBZPDdIY2svXx1yg-z2fY) if you would like to submit new models to the pretrained pack.

## Contact

If you want to know more, stay up to date on this project, report a bug, or have any feedback, please contact me.

<div style="display: flex; justify-content: center; margin-top: 20px;">
    <a href="https://docs.google.com/forms/d/1nB1DjQSS-S3RNT1TiE_z2SoBZPDdIY2svXx1yg-z2fY" 
       style="display: inline-block; padding: 15px 20px; font-size: 16px; font-weight: bold; text-decoration: none; color: white; background-color: #0073e6; border-radius: 5px; text-align: center;"
       onmouseover="this.style.backgroundColor='#005bb5'" 
       onmouseout="this.style.backgroundColor='#0073e6'">
       Contact Form
    </a>
</div>

## About

This project was developed as part of my PhD at the <a href="https://c4dm.eecs.qmul.ac.uk/">Centre For Digital Music</a> and the <a href="http://instrumentslab.org/index.html">Augmented Instruments Lab</a>.
