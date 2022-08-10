---
permalink: /ddx7/
title: "DDX7"
author_profile: false
layout: splash
---

&nbsp;

<div>
<center>
<font size="+3"><b>DDX7: Differentiable FM Synthesis of Musical Instrument Sounds</b></font><br>
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
<i>Figure 1: </i> The DDX7 architecture employs a TCN decoder conditioned on a sequence of pitch and loudness frames to drive the envelopes 
of a few-oscillator differentiable FM synthesizer that features a fixed FM configuration with fixed frequency ratios, 
effectively mapping continuous controls of pitched musical instruments to a well-known synthesis architecture.
</font>

## Continuous Control of an FM Synthesizer

We show resynthesis results on unseen data for the best scored <b>DDX7</b> models according to the Frechet Audio Distance<a href="#r1">[1]</a>.
We compare the results with the <b>Harmonic plus Noise (HpN)</b> baseline model (a Pytorch implementation of the DDSP Decoder<a href="#r2">[2]</a>), 
and the original recordings extracted from the URMP<a href="#r3">[3]</a> dataset.

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
    <source src="../../assets/ddx7/ref_violin.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/ref_violin.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/hpn_violin.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/hpn_violin.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/violin_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/violin_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>6 Oscillators. I<sub>max</sub> = 2
    </td>
  </tr>


  <tr>
    <td><b>Flute</b><br>&nbsp;</td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/ref_flute.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/ref_flute.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/hpn_flute.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/hpn_flute.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/flute_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/flute_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>6 Oscillators. I<sub>max</sub> = 2
    </td>
  </tr>

  <tr>
    <td><b>Trumpet</b><br>&nbsp;</td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/ref_trumpet.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/ref_trumpet.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/hpn_trumpet.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/hpn_trumpet.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>&nbsp;
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/trumpet_ddx7_2osc.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/trumpet_ddx7_2osc.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    <br>2 Oscillators. I<sub>max</sub> = 2&pi;
    </td>
  </tr>

</table>

<font size="4">
<i>Table 1:</i> We show that for our resynthesis tasks, even with few oscillators, Differentiable FM can achieve
a performance comparable to a more complex spectral modeling synthesis architecture.
</font>

## Intervenable Synthesis Process

FM is a well-known synthesis architecture that features a compact set of sound design parameters.
Once <b>DDX7</b> is trained, such parameters can be modified on-the-fly to alter the model's output.
Here we present a set of simple and temporally static transformations as a proof of concept.
We leave for future work a thorough exploration of these affordances.
<table>
  <tr>
    <th><center>Model</center></th>
    <th><center>Intervention</center></th>
    <th><center>DDX7 Resynthesis</center></th>
    <th><center>Intervened Result</center></th>
  </tr>
  <tr>
    <td>
    <b>Violin</b><br>
    6 oscillators. I<sub>max</sub> = 2<br>
    </td>
    <td>
    <center>Tripled all modulator <br> ratios of value 1.</center>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/violin_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/violin_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/mod_6osc_imax2_op2_and_op4_fr3.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/mod_6osc_imax2_op2_and_op4_fr3.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>

  <tr>
    <td>
    <b>Flute</b><br>
    6 oscillators. I<sub>max</sub> = 2<br>
    </td>
    <td>
    <center>Doubled modulators' <br>envelope amplitudes.</center>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/flute_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/flute_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/mod_6osc_flute_double_mod_env.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/mod_6osc_flute_double_mod_env.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>

  <tr>
    <td>
    <b>Trumpet</b><br>
    2 oscillators. I<sub>max</sub> = 2&pi;<br>
    </td>
    <td>
    <center>Modulator ratio <br>changed to &radic;2.</center>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/trumpet_ddx7_2osc.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/trumpet_ddx7_2osc.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/mod_2osc_frop2_1.41_trmpt.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/mod_2osc_frop2_1.41_trmpt.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>

</table>
<font size="4">
<i>Table 2:</i> By performing simple FM transformations, users can generate new timbre without re-training the model.
</font>

## Hyperparameters

In **DDX7**, the maximum modulation index that the oscillators can take (I<sub>max</sub>), and the FM configuration 
that is selected in the differentiable synthesizer, are important hyperparameters that have an impact on the convergence 
of the model. We present resynthesis audio excerpts generated during the two evaluations we conducted to assess their agency on the final results.

<i>Maximum Modulation Index Test</i>

We observe that I<sub>max</sub> is an important hyperparameter for DDX7. A wrong selection may hinder model convergence, 
with results sounding unnatural, and the optimization process failing at the estimation of the room response.
We leave further analysis of the impact of I<sub>max</sub> and the Learnable Reverb on the training process for future work.

<table>
  <tr>
    <th><center>Model</center></th>
    <th><center>Flute</center></th>
    <th><center>Violin</center></th>
    <th><center>Trumpet</center></th>
  </tr>
  <tr>
    <td><b>Original</b></td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/refs/flute_ref.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/refs/flute_ref.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/refs/violin_ref.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/refs/violin_ref.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/refs/trumpet_ref.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/refs/trumpet_ref.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>

  <tr>
    <td><b>HpN Baseline</b></td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/hpn_baseline/flute_hpn.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/hpn_baseline/flute_hpn.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/hpn_baseline/violin_hpn.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/hpn_baseline/violin_hpn.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/hpn_baseline/trumpet_hpn.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/hpn_baseline/trumpet_hpn.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>

  </tr>

  <tr>
    <td><b>DDX7</b><br>I<sub>max</sub>=2</td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/flute_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/flute_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/violin_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/violin_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/trumpet_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/trumpet_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>
  <tr>
    <td><b>DDX7</b><br>I<sub>max</sub>=2&pi;</td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/flute_ddx7_imax_2pi.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/flute_ddx7_imax_2pi.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/violin_ddx7_imax_2pi.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/violin_ddx7_imax_2pi.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/trumpet_ddx7_imax_2pi.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/trumpet_ddx7_imax_2pi.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>
  <tr>
    <td><b>DDX7</b><br>I<sub>max</sub>=4&pi;</td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/flute_ddx7_imax_4pi.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/flute_ddx7_imax_4pi.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/violin_ddx7_imax_4pi.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/violin_ddx7_imax_4pi.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls>
    <source src="../../assets/ddx7/testset/ddx7/trumpet_ddx7_imax_4pi.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/trumpet_ddx7_imax_4pi.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>
</table>
<font size="4">
<i>Table 3:</i> Excerpts from the test set for different values of I<sub>max</sub> tested.
</font>

<style>
#player {
 width: 200px;
}​
</style>
&nbsp;

<i>Oscillator Ablation Test</i>

For **Violin** and **Flute**, we observe that the models benefit from the extra degrees of freedom present with more oscillators.
Surprisingly, for **Trumpet**, we achieve the best results with a simple 2 oscillator FM configuration, even outperforming the baseline,
which suggests that good results can be obtained even with very simple configurations.

<table>
  <tr>
    <th><center>Instrument</center></th>
    <th><center>6 oscillators </center></th>
    <th><center>4 oscillators "Y"</center></th>
    <th><center>4 oscillators 4x1</center></th>
    <th><center>4 oscillators 2x2</center></th>
    <th><center>2 oscillators </center></th>
  </tr>
  <tr>
    <td><b>Flute</b><br>I<sub>max</sub>=2</td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ddx7/flute_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/flute_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ablation/flute_ddx7_4osc_4y.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ablation/flute_ddx7_4osc_4y.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    &nbsp;
    </td>
    <td>
    &nbsp;
    </td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ablation/flute_ddx7_2osc.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ablation/flute_ddx7_2osc.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>

  <tr>
    <td><b>Violin</b><br>I<sub>max</sub>=2</td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ddx7/violin_ddx7_imax_2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/violin_ddx7_imax_2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    &nbsp;
    </td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ablation/violin_ddx7_4osc_1x4.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ablation/violin_ddx7_4osc_1x4.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ablation/violin_ddx7_4osc_2x2.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ablation/violin_ddx7_4osc_2x2.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ablation/violin_ddx7_2osc.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ablation/violin_ddx7_2osc.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>

  <tr>
    <td><b>Trumpet</b><br>I<sub>max</sub>=2&pi;</td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ddx7/trumpet_ddx7_imax_2pi.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ddx7/trumpet_ddx7_imax_2pi.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ablation/trumpet_ddx7_4osc_4y.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ablation/trumpet_ddx7_4osc_4y.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
    <td>
    &nbsp;
    </td>
    <td>
    &nbsp;
    </td>
    <td>
    <audio controls id="player">
    <source src="../../assets/ddx7/testset/ablation/trumpet_ddx7_2osc.wav" type="audio/mpeg">
    <source src="../../assets/ddx7/testset/ablation/trumpet_ddx7_2osc.wav" type="audio/ogg">
    Your browser does not support the audio element.
    </audio>
    </td>
  </tr>
</table>
<font size="4">
<i>Table 4:</i> Excerpts from the test set evaluated on the ablated models.
</font>

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
<i>Table 5:</i> Mean and <i>std</i> (in italics) of the Real-time Factor for <b>DDX7</b> and the <b>HpN Baseline</b>.
Minimum feasible latencies are shown in bold for both models.
</font>


### References

<a name="r1"></a>
1. K. Kilgour, M. Zuluaga, D. Roblek, and M. Sharifi,
“Fréchet Audio Distance: A Reference-Free Metric for
Evaluating Music Enhancement Algorithms,” in *Interspeech 2019*. ISCA, Sep. 2019, pp. 2350–2354.
<a name="r2"></a>
2. B. Li, X. Liu, K. Dinesh, Z. Duan, and G. Sharma,
“Creating a Multitrack Classical Music Performance
Dataset for Multimodal Music Analysis: Challenges,
Insights, and Applications,” *IEEE Transactions on Multimedia*,
vol. 21, no. 2, pp. 522–535, Feb. 2019.
<a name="r3"></a>
3. J. Engel, L. H. Hantrakul, C. Gu, and A. Roberts,
“DDSP: Differentiable Digital Signal Processing,” in
*8th International Conference on Learning Representations*, Addis Ababa, Ethiopia, 2020.