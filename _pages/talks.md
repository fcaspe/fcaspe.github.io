---
permalink: /talks/
title: "Talks and Presentations"
layout: splash
---

<style>
/* ---------------------------------- */
/* GENERAL STYLING           */
/* ---------------------------------- */
/* Container for all project/video cards */
#projects-container {
    /* Sets up a responsive two-column grid */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto 50px;
    padding: 0 20px;
}

/* Makes the entire card area clickable */
.project-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.project-card {
    display: flex;
    flex-direction: column; 
    height: 100%; 
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); 
    background-color: #ffffff;
    overflow: hidden; 
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
    border: 1px solid transparent;
}

/* Hover effect: Soft highlight and gentle lift */
.project-card-link:hover .project-card {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Soft highlight */
    transform: translateY(-5px); /* Gentle lift */
    cursor: pointer;
    border-color: #007bff; 
}

/* ---------------------------------- */
/* IMAGE STYLING          */
/* ---------------------------------- */

/* Image section container */
.project-card-image {
    width: 100%;
    height: 220px; /* Fixed height for equal sizing */
    overflow: hidden;
    background-color: #f8f8f8; /* Background color for empty space when using 'contain' */
}

/* The image itself (uses object-fit: contain as requested) */
.project-card-image img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Shows the full image, 'zoomed out' */
    object-position: center center;
    display: block;
    transition: transform 0.5s ease;
}

/* Optional: Zoom image slightly on hover */
.project-card-link:hover .project-card-image img {
    transform: scale(1.03);
}

/* ---------------------------------- */
/* CONTENT STYLING          */
/* ---------------------------------- */

/* Content section (Title, Description, Links) */
.project-card-content {
    padding: 20px;
    flex-grow: 1; 
}

.project-card-content h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.6em; 
    color: #333;
}

.project-card-content p {
    font-size: 1em;
    color: #666;
    margin-bottom: 15px;
}

.card-links {
    font-size: 0.9em;
    color: #007bff; 
    font-weight: bold;
}

/* For mobile devices, switch to a single column */
@media (max-width: 850px) {
    #projects-container {
        grid-template-columns: 1fr;
    }
}
</style>

## Talks and Presentations

<div id="projects-container">

    <a href="https://www.youtube.com/watch?v=LaGFZBucAVM" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="../../assets/images/workshop/rt_neural_audio/poster.png" alt="Real-time Neural Audio: Design and Inference video image">
            </div>
            <div class="project-card-content">
                <h3>Real-time Neural Audio: Design and Inference Workshop</h3>
                <p>A tutorial on neural networks for audio processing, covering design, latency, streaming architectures, and the RT Neural framework.</p>
                <div class="card-links">
                    <span>Video Link</span>
                </div>
            </div>
        </div>
    </a>

    <a href="https://www.youtube.com/watch?v=mFuvUfFJ1uo" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="../assets/images/adc23.jpeg" alt="Deep Learning for DSP Engineers video image">
            </div>
            <div class="project-card-content">
                <h3>Deep Learning for DSP Engineers: Challenges & Tricks for Audio AI</h3>
                <p>A presentation at ADC23 focused on making deep learning more approachable for DSP Engineers, with an emphasis on real-time music audio applications.</p>
                <div class="card-links">
                    <span>Video Link</span>
                </div>
            </div>
        </div>
    </a>

    <a href="https://www.youtube.com/watch?v=-Po4Y1WtoBs" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="../../assets/images/bttalk.jpg" alt="Bessel's Trick: A Neural FM Synthesis Plugin video image">
            </div>
            <div class="project-card-content">
                <h3>Bessel's Trick: A Neural FM Synthesis Plugin</h3>
                <p>A demonstration of Bessel's Trick, an audio plugin that uses very small neural networks and FM synthesis for real-time tone transformation.</p>
                <div class="card-links">
                    <span>Video Link</span>
                </div>
            </div>
        </div>
    </a>

    <a href="https://www.youtube.com/watch?v=Xb7Q3tk79JI" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="../../assets/images/nime22talk.png" alt="Embedded AI Workshop video image">
            </div>
            <div class="project-card-content">
                <h3>Embedded AI Workshop @ NIME 2022</h3>
                <p>This session includes the "REAL-TIME FM Tone Transfer with BELA" presentation, detailing the implementation of low-latency FM tone transfer on the Bela embedded platform.</p>
                <div class="card-links">
                    <span>Video Link</span>
                </div>
            </div>
        </div>
    </a>
    
    <a href="https://www.youtube.com/watch?v=hxlgO3EWVYI" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="../../assets/images/ddx7talk.png" alt="DDX7 @ MILA Reading Group image">
            </div>
            <div class="project-card-content">
                <h3>DDX7 @ MILA Reading Group</h3>
                <p>A presentation at the MILA Reading Group discussing my paper DDX7.</p>
                <div class="card-links">
                    <span>Video Link</span>
                </div>
            </div>
        </div>
    </a>

</div>