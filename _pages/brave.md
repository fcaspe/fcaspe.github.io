---
permalink: /brave/
title: "Designing Neural Synthesizers for Low-Latency Interaction"
author_profile: false
layout: splash
---

&nbsp;

<div>
<center>
<font size="+3"><b>Designing Neural Synthesizers for Low-Latency Interaction</b></font><br>
<font size="+1"><b>Franco Caspe - Jordie Shier - Mark Sandler - Charalampos Saitis - Andrew McPherson*</b></font><br>
<font size="4">Centre for Digital Music - Queen Mary University of London</font><br>
<font size="4">*Dyson School of Design Engineering - Imperial College</font><br>
<font size="+1"><b><a href="https://aes2.org/publications/elibrary-page/?id=22820" target="_blank">Paper</a> -
<a href="https://github.com/fcaspe/BRAVE" target="_blank">Code</a> - 
<a href="/BravePlugin" target="_blank">Original BRAVE Plugin</a></b> -
<a href="https://minifusion.live" target="_blank">Minifusion Live (New Plugin!)</a></b>
</font><br>

</center>
</div>
<div>
<center><h2>Abstract</h2></center>
<p align="justify">
<font size="4">
Neural Audio Synthesis (NAS) models offer interactive musical control over high-quality, expressive audio generators.
While these models can operate in real-time, they often suffer from high latency, making them unsuitable for intimate musical interaction. The impact of architectural choices in deep learning models on audio latency remains largely unexplored in the NAS literature.
In this work, we investigate the sources of latency and jitter typically found in interactive NAS models. We then apply this analysis to the task of timbre transfer using RAVE, a convolutional variational autoencoder for audio waveforms introduced by Caillon et al. in 2021. Finally, we present an iterative design approach for optimizing latency.
This culminates with a model we call <b>BRAVE</b> (Bravely Realtime Audio Variational autoEncoder), which is low-latency and exhibits better pitch and loudness replication while showing timbre modification capabilities similar to <a href="https://github.com/acids-ircam/RAVE/">RAVE</a>. We implement it in a specialized inference framework for low-latency, real-time inference and present a proof-of-concept audio plugin compatible with audio signals from musical instruments.
We expect the challenges and guidelines described in this document to support NAS researchers in designing models for low-latency inference from the ground up, enriching the landscape of possibilities for musicians.
</font>
</p>
</div>

<div>
<center>
<h2>Introducing BRAVE: A re-design of RAVE for low-latency interaction</h2>
</center>
</div>
<center>
<img src="../../assets/brave/img/architecture.png" style="width:80%;">
</center>
<font size="4">
BRAVE achieves adequate latency (< 10 ms) and jitter ( 3 ms) by addressing several sources of latency in the model, namely
buffering, representation, and cumulative delays (see the paper). 
This is achieved by removing RAVE’s noise generator and using a smaller encoder compression ratio, PQMF attenuation, and causal training.
The number of parameters is also reduced to improve its Real Time Factor. 
Numbers below the blocks denote the compression ratio of intermediate results.
</font>


<center>
<h2>Model Summary</h2>
</center>

| **Model**                   | **Hidden Sizes**       | **S: Strides**     | **D: Dilations**         | **PQMF Att. (dB)** | **Cr: C. Ratios** | **Rf: Rec. Field (ms)** | **# Parameters (M)** |
|-----------------------------|------------------------|--------------------|--------------------------|--------------------|-------------------|-------------------------|-----------------------|
| RAVE v1 *(non causal)*      | [64, 128, 256, 512]   | [4, 4, 4, 2]       | [1, 3, 5]                | 100                | 2048              | 1047                   | 17.6                 |
| `c2048_r10`                 | [64, 128, 256, 512]   | [4, 4, 4, 2]       | [1, 3, 5]                | 100                | 2048              | 1047                   | 17.5                 |
| `c1024_r10`                 | [64, 128, 256, 512]   | [4, 4, 2, 2]       | [3, 9, 27]               | 100                | 1024              | 1070                   | 16.9                 |
| `c512_r10`                  | [64, 128, 256, 512]   | [4, 2, 2, 2]       | [3, 9, 18, 36]           | 100                | 512               | 960                    | 18.4                 |
| `c256_r10`                  | [64, 128, 256, 512]   | [2, 2, 2, 2]       | [3, 9, 27, 36]           | 100                | 256               | 973                    | 16.2                 |
| `c128_r10`                  | [64, 128, 256, 512]   | [2, 2, 2, 1]       | [3, 9, 27, 45, 63]       | 100                | 128               | 955                    | 17.3                 |
| `c128_r10_p70`              | [64, 128, 256, 512]   | [2, 2, 2, 1]       | [3, 9, 27, 45, 63]       | 70                 | 128               | 947                    | 17.3                 |
| `c128_r10_p40`              | [64, 128, 256, 512]   | [2, 2, 2, 1]       | [3, 9, 27, 45, 63]       | 40                 | 128               | 941                    | 17.3                 |
| `c128_r05_p40`              | [64, 128, 256, 512]   | [2, 2, 2, 1]       | [3, 9, 27, 36]           | 40                 | 128               | 517                    | 15.2                 |
| BRAVE                       | [32, 64, 128, 256]    | [2, 2, 2, 1]       | [3, 9, 27, 36]           | 40                 | 128               | 517                    | 4.9                  |

<font size="4">
Models implemented in the paper. All models have a latent vector size of 128. All of them are causal and do not have a noise generator, with the exception of RAVE. The receptive field assumes a sample rate of 44.1 kHz.
</font>

<div>
<center>
<h2>Audio Examples</h2>
</center>
</div>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filosax Models with Audio Files</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0; /* Space between tables */
        }
        th, td {
            /*border: 1px solid black;*/
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        audio {
            width: 140px;
        }
    </style>
</head>

Here we present audio examples showing the synthesis capabilities of the different models we trained for the paper.
We train two families of models on both <b>Drumset</b> and <b>Filosax</b> datasets, and perform forward passess over different test sets, not seen during training.

<body>
    <h3>Models trained on <b>Filosax</b> dataset.</h3>

Reconstructions with varying compression ratio.

<table>
    <thead>
        <tr>
            <th>Instrument</th>
            <th>Original</th>
            <th>RAVE</th>
            <th>c2048_r10</th>
            <th>c1024_r10</th>
            <th>c512_r10</th>
            <th>c256_r10</th>
            <th>c128_r10</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Filosax</td>
            <td><audio controls><source src="../../assets/brave/audios/Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c2048_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c1024_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c512_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c256_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Svoice</td>
            <td><audio controls><source src="../../assets/brave/audios/pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c2048_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c1024_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c512_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c256_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Viola</td>
            <td><audio controls><source src="../../assets/brave/audios/AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c2048_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c1024_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c512_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c256_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
        </tr>
    </tbody>
</table>

Reconstructions with same compression ratio (128) and varying receptive field and PQMF attenuation.

<table>
    <thead>
        <tr>
            <th>Instrument</th>
            <th>Original</th>
            <th>RAVE</th>
            <th>c128_r10</th>
            <th>c128_r10_p70</th>
            <th>c128_r10_p40</th>
            <th>c128_r05_p40</th>
            <th>BRAVE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Filosax</td>
            <td><audio controls><source src="../../assets/brave/audios/Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Svoice</td>
            <td><audio controls><source src="../../assets/brave/audios/pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Viola</td>
            <td><audio controls><source src="../../assets/brave/audios/AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
        </tr>
    </tbody>
</table>
BRAVE is a lightweight version of <b>c128_r05_p40</b>, with only half of the hidden channels in both encoder and decoder.

</body>

<body>
    <h3>Models trained on <b>Drumset</b> dataset.</h3>

Reconstructions with varying compression ratio.

<table>
    <thead>
        <tr>
            <th>Instrument</th>
            <th>Original</th>
            <th>RAVE</th>
            <th>c2048_r10</th>
            <th>c1024_r10</th>
            <th>c512_r10</th>
            <th>c256_r10</th>
            <th>c128_r10</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Drumset</td>
            <td><audio controls><source src="../../assets/brave/audios/3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c2048_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c1024_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c512_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c256_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Beatbox</td>
            <td><audio controls><source src="../../assets/brave/audios/P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c2048_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c1024_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c512_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c256_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Candombe</td>
            <td><audio controls><source src="../../assets/brave/audios/csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c2048_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c1024_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c512_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c256_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
        </tr>
    </tbody>
</table>

Reconstructions with same compression ratio (128) and varying receptive field and PQMF attenuation.

<table>
    <thead>
        <tr>
            <th>Instrument</th>
            <th>Original</th>
            <th>RAVE</th>
            <th>c128_r10</th>
            <th>c128_r10_p70</th>
            <th>c128_r10_p40</th>
            <th>c128_r05_p40</th>
            <th>BRAVE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Drumset</td>
            <td><audio controls><source src="../../assets/brave/audios/3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Beatbox</td>
            <td><audio controls><source src="../../assets/brave/audios/P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Candombe</td>
            <td><audio controls><source src="../../assets/brave/audios/csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
        </tr>
    </tbody>
</table>


<div>
<center>
<h2>Adversarial Training</h2>
</center>
</div>

We illustrate how adversarial training affects melody rendering, probably due to a relatively small dataset size. 
However, the models with small compression ratio, including BRAVE, do not seem to suffer this problem.<br>

We show reconstructions of the test set of the <b>Filosax</b> dataset, done by models trained for 1M steps, denoted <i>(mss only)</i>,
and then the same models trained for an additional 500M steps with adversarial (total of 1.5M steps), denoted <i>(adversarial)</i>.

<table>
    <thead>
        <tr>
            <th>Instrument</th>
            <th>Original</th>
            <th>RAVE</th>
            <th>c2048_r10</th>
            <th>c1024_r10</th>
            <th>c512_r10</th>
            <th>c256_r10</th>
            <th>c128_r10</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Filosax (adversarial)</td>
            <td><audio controls><source src="../../assets/brave/audios/Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c2048_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c1024_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c512_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c256_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Filosax (mss only)</td>
            <td><audio controls><source src="../../assets/brave/audios/Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/noise_c2048_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c2048_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c1024_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c512_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c256_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c128_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
        </tr>
    </tbody>
</table>


<table>
    <thead>
        <tr>
            <th>Instrument</th>
            <th>c128_r10_p70</th>
            <th>c128_r10_p40</th>
            <th>c128_r05_p40</th>
            <th>BRAVE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Filosax (adversarial)</td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Filosax (mss only)</td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c128_r10_p70-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c128_r10_p40-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c128_r05_p40-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/mss/c128_r05_p40_light-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
        </tr>
    </tbody>
</table>


</body>
</html>