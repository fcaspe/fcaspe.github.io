---
permalink: /BesselsTrick/
title: "Bessel's Trick"
layout: splash

excerpt: "<b>FM Tone Transfer Plugin</b><br><i>For live use</i>
"
header:
  overlay_image: ../assets/BT/screenshot.png
  overlay_filter: rgba(0, 0, 0, 0.5)
  actions:
    - label: "Download Now"
      url: "/BesselsTrick/#get-the-plugin"
    - label: "See it on GitHub"
      url: "https://github.com/fcaspe/BesselsTrick"
    - label: "Demo Video"
      url: "https://youtu.be/-Po4Y1WtoBs"
---
<style>
.center {
  margin-left: auto;
  margin-right: auto;
  font-size: 140%;
}

</style>
<center>
<font size="+2">Transform the sound of your instrument using <b>Neural Nets</b> and <b>FM synthesis</b>.
<br>As you play. <b>In Real Time.</b></font>
</center>

## How does it work? 

**Bessel's Trick** uses **Audio-to-Audio** transformation of musical instrument sounds.  
Under the hood, the plugin extracts features (*RMS*, *Pitch*) from a musical instrument input, and feeds them to a **neural net** that controls an **FM synth**.

<p align="center" width="100%">
<img src="../assets/BT/pipeline.png" alt="Screenshot" width="60%">
</p>

We run the nets at **~700 times a second**, providing **minimum latency**.


## Get the Plugin

 - First, choose the package according to your OS.
<table class="center">
<tr>
    <th>
    <a href="/BesselsTrick">macOS <font size="+1">ARM</font></a>
    </th>
    <th>
    <a href="/BesselsTrick">macOS <font size="+1">intel</font></a>
    </th>
    <th>
    <a href="/BesselsTrick">Debian</a>
    </th>
</tr>

</table>

- Next, <a href="/BesselsTrick"><b>Download the Pretrained Models</b></a>

## Instructions

The plugin can be loaded into any DAW (Digital Audio Workstation) that supports VST3 or AU plugin formats.  
Each each **neural net** (called *model*)  works like a synth patch. Each **model** implements a new sound you can control with your instrument.


 - <a href="/BesselsTrick#get-the-plugin">Download the plugin</a> into a directory where your <a href="https://higherhz.com/adding-a-new-vst-synth-plugin-to-reaper/">DAW can see it</a>.
 - Download and uncompress the <a href="/BesselsTrick">pretrained models</a>.
 - Open the plugin at your DAW, and press the **(+)** button.
 - Select the folder where you uncompressed the **pretrained models**.
 - **Done!** The models can now be selected from the GUI's list.


## About

This project was developed as part of my PhD at the <a href="https://c4dm.eecs.qmul.ac.uk/">Centre For Digital Music</a> and the <a href="http://instrumentslab.org/index.html">Augmented Instruments Lab</a>.

<p align="center" width="100%">
<img src="../assets/BT/screenshot.png" alt="Screenshot" width=600>
</p>

