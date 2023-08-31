---
permalink: /fmtransfer/
title: "FM Tone Transfer with Learned Envelopes"
author_profile: false
layout: splash
---

&nbsp;

<div>
<center>
<font size="+3"><b>FM Tone Transfer with Learned Envelopes</b></font><br>
<font size="+2"><b>Franco Caspe - Andrew McPherson - Mark Sandler</b></font><br>
<font size="4">Queen Mary University of London - Centre for Digital Music</font><br>
<font size="+1"><b><a href="/assets/pdf/learned_envelopes.pdf" target="_blank">Paper</a> - <a href="https://github.com/fcaspe/fmtransfer" target="_blank">Code</a> - 
<a href="https://www.dropbox.com/s/pkzpy4t0vkkjik5/FM%20Tone%20Transfer.mp4?dl=0" target="_blank">Demo Video</a>
</b>
</font><br>
</center>
</div>
<div>
<center><h2>Abstract</h2></center>
<p align="justify">
<font size="4">
Tone Transfer is a novel deep-learning technique for interfacing a sound source with a synthesizer, transforming the timbre of audio excerpts while keeping their musical form content. Due to its good audio quality results and continuous controllability, it has been recently applied in several audio processing tools. Nevertheless, it still presents several shortcomings related to poor sound diversity, and limited transient and dynamic rendering, which we believe hinder its possibilities of articulation and phrasing in a real-time performance context.

In this work, we present a discussion on current Tone Transfer architectures for the task of controlling synthetic audio with musical instruments and discuss their challenges in allowing expressive performances.
Next, we introduce Envelope Learning, a novel method for 
designing Tone Transfer architectures that map musical events using a training objective at the synthesis parameter level. Our technique can render note beginnings and endings accurately and for a variety of sounds; these are essential steps for improving musical articulation, phrasing, and sound diversity with Tone Transfer.
Finally, we implement a VST plugin for real-time live use and discuss possibilities for improvement.
</font>
</p>
</div>