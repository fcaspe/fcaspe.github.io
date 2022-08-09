---
permalink: /ddx7/
title: "DDX7"
author_profile: false
layout: splash
---

&nbsp;

<div>
<center>
<h1>DDX7: Differentiable FM Synthesis of Musical Instrument Sounds</h1>
<font size="+2"><b>Franco Caspe - Andrew McPherson - Mark Sandler</b></font><br>
<font size="4">Queen Mary University of London - Centre for Digital Music</font><br>
<font size="+1"><b>Paper - Code</b></font><br>

</center>
</div>
<div>
<center><h2>Abstract</h2></center>
<p align="justify">
<font size="4">
FM Synthesis is a well-known algorithm used to generate complex timbre from a compact set of design primitives.
Typically featuring a MIDI interface, it is usually impractical to control it from an audio source.
On the other hand, Differentiable Digital Signal Processing (DDSP) has enabled nuanced audio rendering 
by Deep Neural Networks (DNNs) that learn to control differentiable synthesis layers from arbitrary sound inputs. 
The training process involves a corpus of audio for supervision, and spectral reconstruction loss functions.
Such functions, while being great to match spectral amplitudes, present a lack of pitch direction which can 
hinder the joint optimization of the parameters of FM synthesizers.

In this paper, we take steps towards enabling continuous control of a well-established FM synthesis architecture from 
an audio input. Firstly, we discuss a set of design constraints that ease spectral optimization of a differentiable 
FM synthesizer via a standard reconstruction loss. Next, we present <b><i>Differentiable DX7</i> (DDX7)</b>, 
a lightweight architecture for neural FM resynthesis of musical instrument sounds in terms of a compact set of parameters. 
We train the model on instrument samples extracted from the URMP dataset, and quantitatively demonstrate its comparable 
audio quality against selected benchmarks.
</font>
</p>
</div>

## Architecture
<center>
<img src="../../assets/ddx7/architecture.png">
</center>
<font size="4">
The DDX7 architecture employs a TCN decoder conditioned on a sequence of pitch and loudness frames to drive the envelopes
of a few-oscillator differentiable FM synthesizer, effectively mapping continuous controls of pitched musical instruments 
to a well-known synthesis architecture.
</font>
## FM Synthesis and Continuous Control

We show resynthesis results on unseen data for the best scored **DDX7** models according to the Frechet Audio Distance.

<table>
  <tr>
    <th><center>Instrument</center></th>
    <th><center>Original</center></th>
    <th><center>HpN Baseline</center></th>
    <th><center>DDX7</center></th>
  </tr>
  <tr>
    <td><b>Violin</b><br>&nbsp;</td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/ref_violin.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/hpn_violin.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/violin_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>6 Oscillators. I<sub>max</sub> = 2
    </td>
  </tr>

  <tr>
    <td><b>Trumpet</b><br>&nbsp;</td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/ref_trumpet.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/hpn_trumpet.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/trumpet_ddx7_2osc.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>2 Oscillators. I<sub>max</sub> = 2&pi;
    </td>
  </tr>

  <tr>
    <td><b>Flute</b><br>&nbsp;</td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/ref_flute.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/hpn_flute.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/flute_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>6 Oscillators. I<sub>max</sub> = 2
    </td>
  </tr>
</table>

<font size="4">
<i>Table 1:</i> We show that for our resynthesis tasks, even with few oscillators, Differentiable FM can achieve
a performance comparable to a more complex spectral modeling synthesis architecture.
</font>
## Convergence and room response estimation



## Real-time Factor test

Due to lack of space in the paper, we left out a comparison of the real-time factor between
our **DDX7** model (*400k parameters*) and the **HpN Baseline** (*4.5 M parameters*). 
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

<font size="4">
<i>Table 2:</i> Mean and <i>std</i> (in italics) of the Real-time Factor for <b>DDX7</b> and the <b>HpN Baseline</b>.
Minimum feasible latencies are shown in bold for both models.
</font>