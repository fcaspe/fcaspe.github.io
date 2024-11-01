---
permalink: /brave/
title: "Audio Examples"
author_profile: false
layout: splash
---
<div>
<center>
Audio Examples
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

All reconstructions generated from data not seen during training.

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
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_filosax_Sax_45.wav" type="audio/wav"></audio></td>
            </tr>
            <tr>
                <td>Svoice</td>
                <td><audio controls><source src="../../assets/brave/audios/pos_7.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_svoice_pos_7.wav" type="audio/wav"></audio></td>
            </tr>
            <tr>
                <td>Viola</td>
                <td><audio controls><source src="../../assets/brave/audios/AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-filosax_viola_AuSep_3_va_24_Pirates.wav" type="audio/wav"></audio></td>
            </tr>
        </tbody>
    </table>
    BRAVE is a lightweight version of <b>c128_r05_p40</b>, with only half of its hidden channels.
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
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_drumset_3_soul-groove3_86_beat_4-4_1.wav" type="audio/wav"></audio></td>
            </tr>
            <tr>
                <td>Beatbox</td>
                <td><audio controls><source src="../../assets/brave/audios/P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_beatbox_P10_HHclosed_Personal.wav" type="audio/wav"></audio></td>
            </tr>
            <tr>
                <td>Candombe</td>
                <td><audio controls><source src="../../assets/brave/audios/csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/noise_c2048_r10-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p70-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r10_p40-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
                <td><audio controls><source src="../../assets/brave/audios/c128_r05_p40_light-drumset_candombe_csic.1995_ansina1_05.flac.wav" type="audio/wav"></audio></td>
            </tr>
        </tbody>
    </table>
</body>
</html>