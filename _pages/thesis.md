---
permalink: /thesis/
title: "Audiovisual Repository"
author_profile: false
layout: splash

excerpt: "<b><br>Audiovisual repository</b><br><i>for the Thesis</i>."
header:
  overlay_image: ../assets/braveplugin/logo.png
  overlay_filter: rgba(0, 0, 0, 255)
  actions:
    - label: "Projects"
      url: ""
    - label: "Publications"
      url: ""

---

&nbsp;

# Chapter 5: Tone Transfer with FM Synthesis

## 5.1: Differentiable FM Synthesis

### DDX7 Audio Examples

Add here the DDX7 audio examples from the paper. WIP: refer to this section in the Thesis

### Parameter Intervention

Add audio examples for DDX7 parameter intervention


### DDX7 Tone Transfer

Add here the video 


## 5.2 Direct Envelope Learning

[Link to Audio Plugin](/BesselsTrick)

### Envelope Learning Audio Examples?
Show that the reconstructed audio samples sound the same?? (not refereced by thesis)

### Envelope Learning Demo

Add demo video of envelope learning demo


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
