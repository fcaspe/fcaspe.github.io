---
permalink: /thesis/
title: "Audiovisual Repository"
author_profile: false
layout: splash

excerpt: "<b><br>Audiovisual repository</b><br><i>for the Thesis</i>."
---

&nbsp;

<div>
<center>
<font size="+3"><b>Critical Design of Neural Audio Synthesizers for Live Musical Performance</b></font><br>
<font size="+2"><b>Franco Santiago Caspe</b></font><br>
<font size="+2"><b>Supervisors: Mark Sandler - Andrew McPherson</b></font><br>
<font size="+2">Queen Mary University of London - Centre for Digital Music</font><br>
<font size="+3"> Additional Material: Audio Examples and Videos</font><br>
</center>
</div>
<br>

This website contains audio examples and videos, as well to relevant links to additional material referenced in the thesis.

# Chapter 5: Tone Transfer with FM Synthesis

## Audio Examples

You can access to the audio examples at the corresponding website:

[DDX7 paper website](/ddx7)

[Envelope Learning paper website](/fmtt)


## FM Tone Transfer Plugin

Using the Envelope Learning model. Link to download the plugin and demo video.

[FM tone transfer Plugin](/BesselsTrick)

<b>Demo Video</b>
<iframe 
  src="https://drive.google.com/file/d/1uazCV46NHEftv0E4DsvEo-fD6QqZRx8U/preview" 
  width="640" 
  height="360" 
  allow="autoplay">
</iframe>

&nbsp;
# Chapter 6: Representation Learning for Low-Latency Interaction

## BRAVE Audio Examples
The full collection of audio examples for the chapter is available at the [paper website](/brave).

## Timbre Transfer with BRAVE
We also present an excerpt of the audio examples, highlighting the reconstruction results of percussive and tonal sounds of RAVE and BRAVE models trained on the **Filosax** and **Drumset** datasets.

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


## BRAVE Audio Plugin and Demo Videos

This link includes both a plugin to run BRAVE models and a set of demo videos showing the capabilities of low-latency representation learning.

[Minifusion Audio Plugin](https://minifusion.live)


# Chapter 7: Interaction Design with Neural Audio

Here we present several audio recordings of different BRAVE training configurations, discussed in the thesis. Each yields different representations.

## Rendered Transformations for different BRAVE Configurations

<button class="stop-btn" onclick="stopSound()">Click on a Spectrum to play its sound. Click again to stop it.</button>

<link rel="stylesheet" href="{{ '/assets/css/soundboard.css' | relative_url }}">


{% assign row_names = "Original (Input), FM Tone Transfer (BRASS), BRAVE Original, BRAVE Two-Phase, BRAVE One-Phase, BRAVE 2d Filosax (G Aug.), BRAVE Grafted (VCTK)" | split: ", " %}

<div class="soundboard-container">
    <table class="soundboard-table">
        <thead>
            <tr>
                <th>Sound Example</th>
                <th>Acoustic Guitar: Chord and Arpeggio</th>
                <th>Electric Guitar: Muted Strings</th>
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
                    <img src="{{ '/assets/thesis/images/ds/all_chord_arpeggio/ds_chord_arpeggio_' | append: i | append: '.png' | relative_url }}" 
                         class="sound-img" 
                         onclick="playSound('{{ '/assets/thesis/sounds/ds/all_chord_arpeggio/ds_chord_arpeggio_' | append: i | append: '.wav' | relative_url }}')">
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

### Guitar Playing with VCTK Model

Example of guitar playing with a model trained on continuous speech. Its encoder can then be used as a fixed representation to train other models in a "Grafted" approach.

<div style="max-width: 700px;">
  <iframe 
    style="width: 100%; aspect-ratio: 16/9;"
    src="https://www.youtube.com/embed/LekgVDA8ptw" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin">
  </iframe>
</div>

## Tonal and Percussive Rendering for Different Representations

The following table presents audio examples of transformations of different violin articulation excerpts models trained on the same data, but which learn different representations. 

It seems that one-phase models, and models grafted with one-phase encoders, learn representations with a good capacity of tonal rendering, where a tonal input seems to "bleed" through the model (highlighted in blue). Models trained on a two-phase approach, or grafted with a two-phase encoder, seem to render atonal outputs even in presence of tonal inputs (in orange), a phenomenom through which the model seems to "hallucinate" atonal sounds in response to a tonal input.

<style>
/* Define your colors */
.highlight-tonal { background-color: #e3f2fd; } /* Very light blue */
.highlight-perc { background-color: #fff3e0; } /* Very light orange */
/* Keep the text readable */
table tr td { padding: 8px; }   
</style>


<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th>Bowing behind the bridge</th>
      <th>Ordinario</th>
      <th>Jeté/Ricochet</th>
    </tr>
  </thead>
  <tbody>
    <!-- Original Category -->
    <tr>
      <td></td>
      <td><strong>Input</strong></td>
      <td><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/original/violin_articulation1.wav"></audio></td>
      <td><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/original/violin_articulation2.wav"></audio></td>
      <td><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/original/violin_articulation3.wav"></audio></td>
    </tr>
    <!-- Animals Dataset -->
    <tr>
      <td rowspan="3"><strong>Animals</strong></td>
      <td class="highlight-perc">Two-Phase</td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_constrained/violin_articulation1.wav"></audio></td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_constrained/violin_articulation2.wav"></audio></td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_constrained/violin_articulation3.wav"></audio></td>
    </tr>
    <tr>
      <td class="highlight-tonal">One-Phase</td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_std/violin_articulation1.wav"></audio></td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_std/violin_articulation2.wav"></audio></td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_std/violin_articulation3.wav"></audio></td>
    </tr>
    <tr>
      <td class="highlight-tonal">Grafted (one-phase)</td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_tonal/violin_articulation1.wav"></audio></td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_tonal/violin_articulation2.wav"></audio></td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/animals_tonal/violin_articulation3.wav"></audio></td>
    </tr>
    <!-- Dice Dataset -->
    <tr>
      <td rowspan="3"><strong>Dice</strong></td>
      <td class="highlight-perc">Two-Phase</td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_constrained/violin_articulation1.wav"></audio></td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_constrained/violin_articulation2.wav"></audio></td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_constrained/violin_articulation3.wav"></audio></td>
    </tr>
    <tr>
      <td class="highlight-perc">Grafted (two-phase)</td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_percussive/violin_articulation1.wav"></audio></td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_percussive/violin_articulation2.wav"></audio></td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_percussive/violin_articulation3.wav"></audio></td>
    </tr>
    <tr>
      <td class="highlight-tonal">One-Phase</td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_std/violin_articulation1.wav"></audio></td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_std/violin_articulation2.wav"></audio></td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/dice_std/violin_articulation3.wav"></audio></td>
    </tr>
    <!-- Music Dataset -->
    <tr>
      <td rowspan="2"><strong>Music</strong></td>
      <td class="highlight-perc">Two-Phase</td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/music_constrained/violin_articulation1.wav"></audio></td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/music_constrained/violin_articulation2.wav"></audio></td>
      <td class="highlight-perc"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/music_constrained/violin_articulation3.wav"></audio></td>
    </tr>
    <tr>
      <td class="highlight-tonal">One-Phase</td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/music_std/violin_articulation1.wav"></audio></td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/music_std/violin_articulation2.wav"></audio></td>
      <td class="highlight-tonal"><audio controls src="/assets/thesis/sounds/ds/rep_as_materials/music_std/violin_articulation3.wav"></audio></td>
    </tr>
  </tbody>
</table>