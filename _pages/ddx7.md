---
permalink: /ddx7/
title: "DDX7"
author_profile: false
layout: splash
---

# DDX7

This is a test audio file
<audio controls>
  <source src="../../assets/ddx7/synth_valid.wav" type="audio/ogg">
  <source src="../../assets/ddx7/synth_valid.wav" type="audio/mpeg">
Your browser does not support the audio element.
</audio>


## Real-time Factor test

Due to lack of space in the paper, we left out a comparison of the real-time factor between
**DDX7** (*400k parameters*) and our **HpN Baseline** (*4.5 M parameters*). 
We execute on Pytorch the inference of audio excerpts of different length 
(to accomodate for different latencies) for both our model and the baseline on a laptop CPU 
( Intel i7-6700HQ ). We render the audio excerpts a hundred times and extract the Real-time Factor 
according to the following formula, extracting the mean and standard deviation of the runs.

`rt_factor = time_to_compute / length_of_audio_generated `

An algorithm that can operate on real-time has to have a real time factor smaller than 1. 
The results shown in *Table 1* indicate that **DDX7** can run with as little as 32 ms of 
latency in real time on a laptop CPU, but the **HpN Baseline** needs at least 128 ms. 
These metrics can be improved further for both models if a different framework is used 
(for instance, TorchScript).

    
|                   |         Real Time Factor                     |
|-------------------|----------------------------------------------|
|**Latency** (*ms*) |**DDX7**              | **HpN Baseline**      |
|-------------------|----------------------|-----------------------|
|**256**            |0.079   (*0.005*)     |0.231   (*0.0124*)     |
|**128**            |0.158   (*0.011*)     |**0.466   (*0.0229*)** |
|**64**             |0.343   (*0.039*)     |1.04	(*0.192*)      |
|**32**             |**0.637   (*0.042*)** |1.88	(*0.111*)      |
|**16**             |1.31    (*0.169*)     |3.71	(*0.188*)      |
|**8**              |2.51    (*0.161*)     |7.39	(*0.32*)       |
|**4**              |5.01    (*0.215*)     |15.2	(*1.19*)       |

*Table 1:* Mean and *std* (in italics) of the Real-time Factor for **DDX7** and the **HpN Baseline**.  
Minimum latencies are shown in bold for both models.