---
permalink: /BravePlugin/
title: "BRAVE Plugin"
author_profile: false
layout: no_layout
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BRAVE Plugin</title>
    <link rel="icon" href="../assets/braveplugin/brave_logo_transparent.png" type="image/png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QW4Q5E6HGY"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QW4Q5E6HGY');
    </script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet">

    <style>
        /* Base Styles & Global Resets */
        :root {
            --primary-blue: #007bff; /* Main accent color */
            --primary-blue-dark: #0056b3; /* Darker for hover */
            --section-blue-bg: #f0f8ff; /* Very light, professional blue for main sections */
            --section-blue-alt-bg: #e0f2ff; /* Slightly darker light blue for alternate sections */
            --dark-text: #222;
            --medium-text: #555;
            --light-text: #888;

            /* Adjusted for less spacing and more cohesion */
            --section-padding-large: 35px 20px;
            --section-padding-medium: 25px 20px;
            /* Section padding values will be adjusted in media queries for smaller screens */

            --max-content-width: 1100px;
        }

        body {
            font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.7;
            color: var(--medium-text);
            margin: 0;
            padding: 0;
            background-color: var(--section-blue-bg);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* --- Section Layouts --- */
        .section {
            padding: var(--section-padding-large);
            max-width: var(--max-content-width);
            margin: 0 auto;
            text-align: center;
            background-color: var(--section-blue-bg);
        }

        .section.alt-background {
            background-color: var(--section-blue-alt-bg);
        }

        /* Adjust text alignment for specific sections if needed */
        .section p, .section li {
            text-align: left;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
        .section p.centered-text {
            text-align: center;
        }

        /* Feature Text Block for consistent utility sections (Instructions, Contact, About etc.) */
        .feature-text-block {
            background-color: white; /* White background for the text block */
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05); /* Very subtle shadow */
            max-width: 700px; /* Constrain its width */
            margin: 20px auto; /* Center it below h2/h3 */
            text-align: center; /* Center content within this block */
        }
        /* Override general section p styling for text within feature-text-block */
        .feature-text-block p {
            text-align: left;
            max-width: none; /* Let the block's width control it */
            margin-left: 0; /* Remove auto margins from general .section p */
            margin-right: 0;
        }
        .feature-text-block p.centered-text {
            text-align: center;
        }
        /* List items within feature-text-block */
        .feature-text-block ol {
            padding-left: 25px; /* Adjust padding for ordered lists */
            margin-left: auto;
            margin-right: auto;
            max-width: 600px; /* Constrain width of list within block */
        }


        /* New: Top Survey Banner */
        .top-survey-banner {
            background-color: #dbeffc; /* A slightly more pronounced light blue */
            padding: 15px 20px; /* Reduced padding for compactness */
            text-align: center;
            font-size: 1.1em;
            color: var(--dark-text); /* Ensure text is readable */
            border-bottom: 1px solid rgba(0,0,0,0.05); /* Subtle separation */
        }

        .top-survey-banner p {
            margin: 0; /* Remove default paragraph margin */
            display: inline-block; /* To contain text and button */
            vertical-align: middle;
            max-width: 800px; /* Limit width */
        }

        .top-survey-banner a.button {
            margin-left: 15px; /* Space between text and button */
            padding: 8px 18px; /* Smaller button for the banner */
            font-size: 0.9em;
            box-shadow: none; /* No shadow for a flatter look */
            background-color: var(--primary-blue);
            color: white; /* Ensure white text on blue button */
        }

        .top-survey-banner a.button:hover {
            background-color: var(--primary-blue-dark);
            transform: none; /* No lift effect for a flatter button */
            box-shadow: none;
        }

        .top-survey-banner i {
            margin-right: 8px;
            vertical-align: middle;
        }


        /* --- Typography --- */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            color: var(--dark-text);
            margin-top: 0;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        h1 {
            font-size: 3.5em;
            margin-bottom: 0.5em;
        }

        h2 {
            font-size: 2.5em;
            /* Re-applied refined h2 styling */
            margin-bottom: 15px; /* Reduced from 0.5em */
            padding-bottom: 3px; /* Reduced from 5px */
            border-bottom: 1px solid rgba(0, 123, 255, 0.08); /* Thinner and lighter */
            text-align: center;
            display: inline-block; /* Makes border span text width */
            margin-left: auto; /* Centers the inline-block */
            margin-right: auto;
        }

        h3 {
            font-size: 1.8em;
            margin-top: 15px;
            margin-bottom: 10px;
            text-align: center;
        }

        p {
            font-size: 1.1em;
            margin-bottom: 1em;
        }

        strong {
            font-weight: 600;
            color: var(--dark-text);
        }

        a {
            color: var(--primary-blue);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        a:hover {
            color: var(--primary-blue-dark);
            text-decoration: underline;
        }

        /* --- Hero Section Specifics --- */
        .hero-section {
            background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('../assets/braveplugin/texture.jpeg') no-repeat center center / cover;
            padding: 60px 20px;
            color: white;
            text-align: center;
            background-color: #333;
        }

        .hero-section .brave-logo {
            width: 85%; /* Make it occupy 85% of its parent's width */
            max-width: 850px; /* Allow it to grow larger on very wide screens */
            height: auto;
            margin-bottom: 15px; /* Reduced space below logo */
            filter: drop-shadow(2px 2px 8px rgba(0,0,0,0.4));
        }

        .hero-section h1 {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .hero-section p {
            font-size: 1.3em; /* Reduced text size */
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 20px; /* Reduced space below text */
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-buttons {
            display: flex;
            justify-content: center;
            gap: 15px; /* Reduced gap between buttons */
            flex-wrap: wrap;
        }

        /* --- Buttons --- */
        .button {
            display: inline-block;
            padding: 15px 25px; /* Reduced button size */
            font-size: 1em; /* Reduced button text size */
            font-weight: 600;
            text-decoration: none;
            color: white; /* Initial color is white */
            background-color: var(--primary-blue);
            border-radius: 8px;
            transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.25);
            text-align: center;
        }

        .button:hover {
            background-color: var(--primary-blue-dark);
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba(0, 123, 255, 0.35);
            text-decoration: none;
            color: white; /* Explicitly set text color to white on hover */
        }
        /* Icon styling within buttons and headings */
        .button i,
        h2 i,
        h3 i {
            vertical-align: middle;
            margin-right: 8px; /* Space between icon and text */
        }
        /* Specific sizing for icons to fit text */
        h2 i {
            font-size: 1em; /* Match h2 font size */
        }
        h3 i {
            font-size: 0.9em; /* Slightly smaller than h3 text */
        }

        /* --- Video Grid --- */
        .video-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 30px;
            margin-top: 40px;
            margin-bottom: 40px;
        }

        .video-item {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        .video-item iframe {
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
            position: relative;
            border: none;
        }

        .video-item .iframe-wrapper {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
        }

        .video-item .iframe-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }


        .video-item p {
            font-weight: 600;
            color: var(--dark-text);
            margin: 15px 10px;
            font-size: 1.05em;
            text-align: center;
        }

        /* --- Download Section --- */
        .download-section {
            background-color: var(--primary-blue);
            color: white;
            padding: 25px 20px;
            border-radius: 12px;
            margin-top: 40px;
            margin-bottom: 40px;
            box-shadow: 0 5px 20px rgba(0, 123, 255, 0.1);
        }
        .download-section h2, .download-section p, .download-section strong {
            color: white;
        }
        .download-section a {
            color: white;
            text-decoration: underline;
        }
        .download-section a.button {
            color: white;
            text-decoration: none;
            background-color: #004d80;
        }
        .download-section a.button:hover {
             background-color: #003355;
             transform: translateY(-2px);
             box-shadow: 0 6px 16px rgba(0, 123, 255, 0.35);
        }

        /* --- Instructions List --- */
        ol {
            list-style: decimal;
            text-align: left;
            padding-left: 25px;
            margin-top: 10px;
            margin-bottom: 30px;
        }
        ol li {
            margin-bottom: 8px;
            font-size: 1.1em;
            line-height: 1.45;
        }

        /* --- Table Styling --- */
        /* New wrapper for responsive table */
        .table-responsive {
            overflow-x: auto; /* Enable horizontal scrolling */
            -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */
            margin: 15px auto; /* Centering for the wrapper */
            max-width: 100%; /* Ensure the wrapper fits */
        }
        .model-table {
            width: 100%; /* Table takes full width of its scrollable container */
            min-width: 500px; /* Ensure table doesn't get too squashed before scrolling kicks in */
            border-collapse: collapse;
            font-size: 1em;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            border-radius: 8px;
            overflow: hidden; /* Hide any internal overflow if not handled by cells */
        }
        .model-table th, .model-table td {
            border: 1px solid #eee;
            padding: 15px;
            text-align: left;
            white-space: normal; /* Allow text to wrap within cells */
        }
        .model-table th {
            background-color: #f5f5f5;
            font-weight: 600;
            color: var(--dark-text);
            text-transform: uppercase;
            font-size: 0.95em;
        }
        .model-table tr:nth-child(even) {
            background-color: #fdfdfd;
        }
        .model-table a {
            font-weight: 400;
        }

        /* --- Contact Section --- */
        .contact-section {
            text-align: center;
            padding-top: 15px;
        }
        .contact-section .button {
            margin-top: 20px;
        }

        /* --- Footer Styles --- */
        .site-footer {
            background-color: #e0f2ff; /* Using alt-background color for consistency */
            color: var(--medium-text);
            padding: 20px;
            text-align: center;
            font-size: 0.9em;
            border-top: 1px solid rgba(0, 0, 0, 0.05); /* Subtle separation */
        }
        .site-footer p {
            margin: 0;
            text-align: center; /* Override default left-align for p in sections */
            max-width: none; /* Override max-width for p in sections */
        }

        /* --- Value Proposition Grid & Items --- */
        .value-proposition-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* 4 columns on large, adapts */
            gap: 30px; /* Space between cards */
            margin-top: 40px; /* Space from h2 */
            max-width: var(--max-content-width); /* Ensure it stays within content width */
            margin-left: auto;
            margin-right: auto;
            align-items: stretch; /* Ensure all items have same height */
        }

        .value-item {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            padding: 30px;
            text-align: center;
            display: flex; /* For vertical alignment of icon, h3, p */
            flex-direction: column;
            align-items: center;
            justify-content: flex-start; /* Aligns content to top */
        }

        .value-item i {
            font-size: 3em; /* Larger icons */
            color: var(--primary-blue);
            margin-bottom: 15px; /* Space below icon */
            line-height: 1; /* Prevent extra space due to line-height */
        }

        .value-item h3 {
            font-size: 1.4em; /* Adjust heading size */
            margin-bottom: 10px; /* Space below h3 */
            margin-top: 0; /* Override default margin-top from general h3 */
            text-align: center;
        }

        .value-item p {
            font-size: 1em; /* Smaller text for descriptions */
            line-height: 1.6;
            margin-bottom: 0; /* Remove last paragraph margin */
            text-align: center; /* Ensure text is centered within the block */
            max-width: none; /* Let the value-item control the width */
        }


        /* --- Responsive Adjustments --- */
        @media (max-width: 900px) {
            .hero-section p { font-size: 1.2em; }
            h2 { font-size: 2em; }
            h3 { font-size: 1.6em; }
            .section { padding: var(--section-padding-medium); } /* Uses defined medium padding */
            .button { padding: 15px 25px; font-size: 1em; }
            
            .hero-section .brave-logo {
                width: 85%; /* Keep percentage */
                max-width: 550px; /* Adjusted max-width for this breakpoint */
            }
            .feature-text-block {
                padding: 25px;
            }
            .top-survey-banner p {
                display: block; /* Stack text and button */
                margin-bottom: 10px; /* Space between text and button when stacked */
            }
            .top-survey-banner a.button {
                margin-left: 0;
                margin-top: 10px; /* Space when stacked */
            }
            .value-proposition-grid {
                grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets/larger phones */
                gap: 20px;
                margin-top: 30px;
            }
            .value-item {
                padding: 25px 15px; /* Adjust padding for tighter 2-column layout */
            }
            .value-item i {
                font-size: 2.2em; /* Slightly smaller icons for 2-column */
            }
            .value-item h3 {
                font-size: 1.2em; /* Smaller heading for 2-column */
            }
            .value-item p {
                font-size: 0.9em; /* Smaller text for 2-column */
            }
        }

        @media (max-width: 768px) {
            .hero-section { padding: 50px 20px; }
            .hero-section .brave-logo {
                width: 90%; /* Increase percentage slightly for smaller tablets/large phones */
                max-width: 450px; /* Adjusted max-width */
            }
            .hero-section p { font-size: 1.1em; max-width: 90%; }
            .hero-buttons {
                flex-direction: column;
                align-items: center;
                gap: 15px; /* Keep gap for hero buttons if working well */
            }
            h2 { font-size: 1.8em; }
            h3 { font-size: 1.5em; }
            .section { padding: 30px 18px; } /* More generous padding for mid-size mobile */
             .video-grid {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
            }
            /* Adjust download section buttons for more robust vertical spacing */
            .download-section .button-group {
                flex-direction: column;
                /* Removed gap: 15px; */ /* Rely on margins for consistent vertical space */
            }
            .download-section .button-group .button {
                margin-bottom: 15px; /* Add margin below each button */
            }
            .download-section .button-group .button:last-child {
                margin-bottom: 0; /* Remove margin from the last button to prevent extra space */
            }
            .model-table th, .model-table td { padding: 12px; font-size: 0.9em; } /* Adjust table cell padding */
            ol { padding-left: 20px; }
            ol li { font-size: 1em; }
            .feature-text-block {
                padding: 25px;
                margin: 15px auto;
            }
            .top-survey-banner {
                font-size: 1em;
                padding: 12px 15px;
            }
            /* Value proposition grid remains 2 columns from 900px down to 481px */
            /* No change to .value-proposition-grid here, it uses the 900px rule. */
            /* Ensure value-item padding/font sizes from 900px rule apply correctly or refine further if needed */
        }

        @media (max-width: 480px) {
            .hero-section { padding: 40px 15px; }
            .hero-section .brave-logo {
                width: 95%; /* Make it almost full width on very small screens */
                max-width: 350px; /* Adjusted max-width */
            }
            .hero-section p { font-size: 1em; }
            h2 { font-size: 1.5em; }
            h3 { font-size: 1.3em; }
            .button { font-size: 0.9em; padding: 12px 20px;}
            .section { padding: 20px 15px; } /* Adjusted padding for very small screens */
            .feature-text-block {
                padding: 15px;
            }
            .model-table th, .model-table td {
                padding: 10px;
                font-size: 0.85em;
            }
            /* Value proposition grid stacks to 1 column on very small phones */
            .value-proposition-grid {
                grid-template-columns: 1fr;
                gap: 20px; /* Maintain good spacing when stacked */
                margin-top: 25px;
            }
            .value-item {
                padding: 20px; /* Restore more generous padding when stacked */
            }
            .value-item i {
                font-size: 2.5em; /* Restore slightly larger icons when stacked */
            }
            .value-item h3 {
                font-size: 1.3em; /* Restore slightly larger heading when stacked */
            }
            .value-item p {
                font-size: 0.95em; /* Restore slightly larger text when stacked */
            }
        }

    </style>
</head>
<body>

    <header class="hero-section">
        <img src="../assets/braveplugin/brave_logo_transparent.png" alt="BRAVE Plugin Logo" class="brave-logo">
        <h1>BRAVE Plugin</h1>
        <p><b>Reimagining Live Instrumental Performance.</b></p>
        <div class="hero-buttons">
            <a href="/BravePlugin/#get-the-plugin--pretrained-models" class="button"><i class="ri-download-fill"></i> Get the Plugin</a>
            <a href="https://github.com/fcaspe/BRAVE" class="button" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i> Training Code</a>
        </div>
    </header>

    <div class="top-survey-banner">
        <p><strong><i class="ri-feedback-fill"></i> Working with sound or interaction? </strong> Let's make better tools for performers. <a href="https://research.typeform.com/to/guEbryYJ" class="button" target="_blank" rel="noopener noreferrer"
               onclick="gtag('event', 'click', {
                 'event_category': 'Survey CTA Top Banner',
                 'event_label': 'Take Survey Button Top'
               });">
               <i class="ri-survey-line"></i> Share your Insights
            </a></p>
    </div>
    <div class="section">
        <h2>Rediscover your Voice and Instrument</h2>
        <div class="value-proposition-grid">

            <div class="value-item">
                <i class="ri-speed-fill"></i>
                <h3>Instant Live Transformation</h3>
                <p>Experience super-low latency timbre transfer for seamless, on-the-fly timbre transfer as you play.</p>
            </div>

            <div class="value-item">
                <i class="ri-sparkling-fill"></i>
                <h3>Natural and Intuitive</h3>
                <p>Interact effortlessly with advanced AI models, making complex sound manipulation feel malleable and accomodating.</p>
            </div>

            <div class="value-item">
                <i class="ri-search-line"></i>
                <h3>Capture what's Important</h3>
                <p>We capture subtle nuances and articulations, translating them into dynamic and expressive sonic output.</p>
            </div>

            <div class="value-item">
                <i class="ri-mic-2-line"></i>
                <h3>No matter what you play</h3>
                <p>Try enhancing your instrument's capabilities with new sonic dimensions while keeping your unique playing style.</p>
            </div>

        </div>
    </div>

    <div class="section alt-background">
        <h2><i class="ri-play-circle-fill"></i> See BRAVE in Action</h2>
        <div class="video-grid">
            <div class="video-item">
                <p>Play live, in time</p>
                <div class="iframe-wrapper">
                    <iframe src="https://www.youtube.com/embed/mfhidA6t3F8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="BRAVE Plugin Live Performance Demonstration"></iframe>
                </div>
            </div>
            <div class="video-item">
                <p>Percussive augmentation</p>
                <div class="iframe-wrapper">
                    <iframe src="https://www.youtube.com/embed/CyBBOowaKqU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="BRAVE Plugin Percussive Augmentation Demo"></iframe>
                </div>
            </div>
            <div class="video-item">
                <p>Beatboxing</p>
                <div class="iframe-wrapper">
                    <iframe src="https://www.youtube.com/embed/J74Q5cVDZx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="BRAVE Plugin Beatboxing Performance"></iframe>
                </div>
            </div>
            <div class="video-item">
                <p>Instrument retargeting</p>
                <div class="iframe-wrapper">
                    <iframe src="https://www.youtube.com/embed/X9vOlyE8eRg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="BRAVE Plugin Instrument Retargeting Example"></iframe>
                </div>
            </div>
        </div>
    </div>

    <div class="section download-section" id="get-the-plugin--pretrained-models">
        <h2>Get the Plugin & Pretrained Models</h2>
        <p class="centered-text">Download the latest version for <b>macOS Apple Silicon</b> and the essential pretrained models to get started.</p>
        <div class="button-group">
            <a href="https://github.com/fcaspe/BraveDemoPluginReleases/releases/download/v1.0.0/BraveDemoPlugin.zip"
               class="button"
               onclick="gtag('event', 'download', {
                 'event_category': 'Plugin Downloads',
                 'event_label': 'MacOS ARM64',
                 'event_action': 'BravePlugin v1.0.0'
               });">
               <i class="ri-download-fill"></i> Download Plugin
            </a>

            <a href="https://github.com/fcaspe/BraveDemoPluginReleases/releases/download/v1.0.0/pretrained.zip"
               class="button"
               onclick="gtag('event', 'download', {
                 'event_category': 'Model Downloads',
                 'event_label': 'Pretrained Models',
                 'event_action': 'BRAVE Pretrained'
               });">
               <i class="ri-folder-zip-fill"></i> Download Pretrained Models
            </a>
        </div>
        <p class="centered-text" style="margin-top: 25px; font-size: 0.95em; color: white;">Plugin notarized by Apple - Latest update: `6/3/25 - Version 1.0`</p>
        <p class="centered-text" style="font-size: 0.9em; color: white;">Note: This plugin is currently in beta testing, and there may be bugs or unexpected behavior. Your feedback is appreciated to help improve future versions. If you encounter any issues, please contact us.</p>
    </div>

    <div class="section">
        <div class="feature-text-block">
            <h3><i class="ri-book-read-fill"></i> Instructions</h3>
            <p>Use your preferred DAW (Digital Audio Workstation), that supports VST3 or AU plugin formats. Each <strong>pretrained model</strong> implements a new sound you can control with your instrument.</p>
            <ol>
                <li>Download the plugin to a directory where your <a href="https://higherhz.com/adding-a-new-vst-synth-plugin-to-reaper/" target="_blank" rel="noopener noreferrer">DAW can see it</a>.</li>
                <li>Download and uncompress the pretrained models.</li>
                <li>Open the plugin at your DAW, and select the folder where you stored the models.</li>
                <li><strong>Done!</strong> The models can now be selected from the GUI's list.</li>
            </ol>
        </div>
    </div>

    <div class="section alt-background">
        <div class="feature-text-block">
            <h3><i class="ri-folder-open-fill"></i> Pretrained models</h3>
            <p>The provided models are trained from openly available datasets.</p>
            <div class="table-responsive"> <table class="model-table">
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Dataset Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>birdsong.h5</strong></td>
                            <td><a href="https://www.kaggle.com/datasets/rtatman/british-birdsong-dataset" target="_blank" rel="noopener noreferrer">British Birdsong Dataset</a>, gathered from the <a href="http://www.xeno-canto.org/" target="_blank" rel="noopener noreferrer">Xeno Canto collection</a>.</td>
                        </tr>
                        <tr>
                            <td><strong>candombe.h5</strong></td>
                            <td><a href="https://zenodo.org/records/6533068" target="_blank" rel="noopener noreferrer">Uruguayan candombe drumming</a> dataset.</td>
                        </tr>
                        <tr>
                            <td><strong>drumset.h5</strong></td>
                            <td><a href="https://magenta.tensorflow.org/datasets/e-gmd" target="_blank" rel="noopener noreferrer">The Expanded Groove MIDI Dataset</a>. 2h 50m of a drummer performing on an electronic drum kit.</td>
                        </tr>
                        <tr>
                            <td><strong>filosax.h5</strong></td>
                            <td>Trained using recordings of <em>Participant 1</em> from the <a href="https://dave-foster.github.io/filosax/" target="_blank" rel="noopener noreferrer">Filosax Dataset</a>.</td>
                        </tr>
                    </tbody>
                </table>
            </div> <p>Check <a href="https://github.com/fcaspe/BRAVE" target="_blank" rel="noopener noreferrer">BRAVE's Repo</a> for instructions on how to train your own models. <a href="https://docs.google.com/forms/d/1nB1DjQSS-S3RNT1TiE_z2SoBZPDdIY2svXx1yg-z2fY" target="_blank" rel="noopener noreferrer">Contact Me</a> if you would like to submit new models to the pretrained pack.</p>
        </div>
    </div>

    <div class="section contact-section">
        <div class="feature-text-block">
            <h3><i class="ri-question-answer-fill"></i> Contact</h3>
            <p>If you want to know more, stay up to date on this project, report a bug, or have any feedback, please contact us.</p>
            <a href="https://docs.google.com/forms/d/1nB1DjQSS-S3RNT1TiE_z2SoBZPDdIY2svXx1yg-z2fY" class="button" target="_blank" rel="noopener noreferrer">
               <i class="ri-mail-fill"></i> Contact Form
            </a>
        </div>
    </div>

    <footer class="site-footer">
        <p>© 2025 <a href="https://fcaspe.github.io">Franco Caspe</a>. All rights reserved.</p>
    </footer>

</body>
</html>