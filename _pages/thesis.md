---
permalink: /thesis/
title: "Audiovisual Repository"
author_profile: false
layout: splash

excerpt: "<b><br>Audiovisual repository</b><br><i>for the Thesis</i>."
---

&nbsp;

# Chapter 5: Tone Transfer with FM Synthesis

## 5.1: Differentiable FM Synthesis

### DDX7 Audio Examples

Add here the DDX7 audio examples from the paper. WIP: refer to this section in the Thesis

### Parameter Intervention

Add audio examples for DDX7 parameter intervention


### DDX7 Tone Transfer

Playing a model trained on violin audio!

<iframe 
  src="https://drive.google.com/file/d/1fpukk2Zu1SMlr0CLHk2CA9mmbNo0rjYV/preview" 
  width="640" 
  height="360" 
  allow="autoplay">
</iframe>

## 5.2 Direct Envelope Learning

[Link to Audio Plugin](/BesselsTrick)

### Envelope Learning Audio Examples?
Show that the reconstructed audio samples sound the same?? (not refereced by thesis)


### Envelope Learning Demo
<iframe 
  src="https://drive.google.com/file/d/1uazCV46NHEftv0E4DsvEo-fD6QqZRx8U/preview" 
  width="640" 
  height="360" 
  allow="autoplay">
</iframe>

# Chapter 6: Representation Learning for Low-Latency Interaction
Papers and info: 

[Link to Paper's Website](/brave)  
[Link to Audio Plugin](/BravePlugin)

### Timbre Transfer with BRAVE
We present the reconstruction results of percussive and tonal sounds of RAVE and BRAVE models trained on the **Filosax** and **Drumset** datasets.

**Models Trained on the Drumset Dataset**  
We encode and decode original excerpts of Drumset, Beatbox and Candombe datasets, using RAVE and BRAVE models trained on Drumset, and present the results on the following table.

<table>
    <thead>
        <tr>
            <th>Instrument</th>
            <th>Original</th>
            <th>RAVE (Trained on Drumset)</th>
            <th>BRAVE (Trained on Drumset)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Drumset</td>
            <td><audio controls><source src="../../assets/brave/audios/3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Beatbox</td>
            <td><audio controls><source src="../../assets/brave/audios/P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Candombe</td>
            <td><audio controls><source src="../../assets/brave/audios/csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
        </tr>
    </tbody>
</table>

**Models Trained on the Filosax Dataset**  
We encode and decode original excerpts of the Filosax, Svoice and Viola datasets, using RAVE and BRAVE models trained on Filosax, and present the results on the following table.

<table>
    <thead>
        <tr>
            <th>Instrument</th>
            <th>Original</th>
            <th>RAVE (Trained on Filosax)</th>
            <th>BRAVE (Trained on Filosax)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Filosax</td>
            <td><audio controls><source src="../../assets/brave/audios/Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Svoice</td>
            <td><audio controls><source src="../../assets/brave/audios/pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
        </tr>
        <tr>
            <td>Viola</td>
            <td><audio controls><source src="../../assets/brave/audios/AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
        </tr>
    </tbody>
</table>

# Chapter 7: Interaction Design with Neural Audio
Papers and info:

### Rendered Transformations for different BRAVE Configurations

<button class="stop-btn" onclick="stopSound()">Click on a Spectrum to play its sound. Click again to stop it.</button>

<link rel="stylesheet" href="{{ '/assets/css/soundboard.css' | relative_url }}">


{% assign row_names = "Original (Input), FM Tone Transfer (BRASS), BRAVE Original, BRAVE Two-Phase, BRAVE One-Phase, BRAVE 2d Filosax (G Aug.), BRAVE Grafted (VCTK)" | split: ", " %}

<div class="soundboard-container">
    <table class="soundboard-table">
        <thead>
            <tr>
                <th>Sound Example</th>
                <th>Acoustic Guitar, Arpeggio</th>
                <th>Electric Guitar, Muted Strings (Ambiguous Pitch)</th>
            </tr>
        </thead>
        <tbody>
            {% for i in (0..6) %}
            {% if i == 5 %}{% continue %}{% endif %}
            <tr>
                <td class="row-label">
                    <strong>{{ row_names[i] }}</strong>
                </td>
                <td>
                    <img src="{{ '/assets/thesis/images/ds/all_arpeggio/ds_arpeggio_' | append: i | append: '.png' | relative_url }}" 
                         class="sound-img" 
                         onclick="playSound('{{ '/assets/thesis/sounds/ds/all_arpeggio/ds_arpeggio_' | append: i | append: '.wav' | relative_url }}')">
                </td>
                <td>
                    <img src="{{ '/assets/thesis/images/ds/all_ambpitch/ds_ambpitch_' | append: i | append: '.png' | relative_url }}" 
                         class="sound-img" 
                         onclick="playSound('{{ '/assets/thesis/sounds/ds/all_ambpitch/ds_ambpitch_' | append: i | append: '.wav' | relative_url }}')">
                </td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>

<script src="{{ '/assets/js/soundboard.js' | relative_url }}"></script>
