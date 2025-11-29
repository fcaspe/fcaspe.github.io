---
permalink: /projects/
title: "Projects"
layout: splash
---
<style>
/* Container for all project cards */
#projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto 50px;
    padding: 0 20px;
}

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
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); /* Soft initial shadow */
    background-color: #ffffff;
    overflow: hidden; /* Ensures image corners are rounded */
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smooth transition */
}

/* Hover effect: Soft highlight and gentle lift */
.project-card-link:hover .project-card {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px); /* Gentle lift effect */
    cursor: pointer;
    border-color: #007bff;
}

/* Image section */
.project-card-image {
    width: 100%;
    /* Set a fixed height for equal sizing across all cards' images */
    height: 220px; 
    overflow: hidden;
}

.project-card-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    transition: transform 0.5s ease;
}

/* Zoom image slightly on hover */
.project-card-link:hover .project-card-image img {
    transform: scale(1.03);
}

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
# My Projects
<div id="projects-container">

    <a href="https://minifusion.live" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="https://minifusion.live/assets/img/ui.png" alt="Minifusion Plugin UI">
            </div>
            <div class="project-card-content">
                <h3>Minifusion: Live Instrument Transformation</h3>
                <p>Real-time Timbre Transfer for musical instruments.</p>
                <div class="card-links">
                    <span>Website</span>
                </div>
            </div>
        </div>
    </a>

    <a href="/BesselsTrick" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="../assets/BT/screenshot.png" alt="Bessel's Trick image">
            </div>
            <div class="project-card-content">
                <h3>Bessel's Trick</h3>
                <p>FM Tone Transfer plugin for real-time performances!</p>
                <div class="card-links">
                    <span>Website</span>
                </div>
            </div>
        </div>
    </a>

    <a href="https://www.synthux.academy/project/40k-on-the-floor" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="/assets/images/40k.jpeg" alt="40k On The Floor image">
            </div>
            <div class="project-card-content">
                <h3>40k On The Floor</h3>
                <p>Re-imagined barrel organ for electronic music live performances. <i>Presented at the Synthlux Hackaton 2023</i></p>
                <div class="card-links">
                    <span>Website</span>
                </div>
            </div>
        </div>
    </a>
    
    <a href="https://github.com/tonetechnician/neural-vcv-synths" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="/assets/images/ddsp_vcvrack.png" alt="DDSP in VCVRack image">
            </div>
            <div class="project-card-content">
                <h3>DDSP in VCVRack</h3>
                <p>Neural Synthesizer for virtual Eurorack. <i>Presented at NASH, the Neural Audio Synthesis Hackathon</i></p>
                <div class="card-links">
                    <span>GitHub</span>
                </div>
            </div>
        </div>
    </a>

    <a href="https://github.com/fcaspe/bfreeOrgan2" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="/assets/images/bfreeorgan2.png" alt="bFreeOrgan2 image">
            </div>
            <div class="project-card-content">
                <h3>bFreeOrgan2</h3>
                <p>Open Source Additive Synthesizer for Cortex M4.</p>
                <div class="card-links">
                    <span>GitHub</span>
                </div>
            </div>
        </div>
    </a>

    <a href="/assets/pubs/Efficient_DNN_Serving.pdf" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="/assets/images/efficient_dnn_serving.png" alt="Master's Thesis image">
            </div>
            <div class="project-card-content">
                <h3>Master's Thesis: Efficient DNN Serving</h3>
                <p>Inference efficiency with FPGAs (Erasmus Mundus MsC).</p>
                <div class="card-links">
                    <span>Msc Thesis PDF</span>
                </div>
            </div>
        </div>
    </a>

    <a href="/deep%20learning/fpga_BNN/" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="/assets/images/bnn_fpga.jpg" alt="Binary Neural Networks image">
            </div>
            <div class="project-card-content">
                <h3>Binary Neural Networks for FPGAs</h3>
                <p>Extremely Fast - Extremely quantized.</p>
                <div class="card-links">
                    <span>Post</span>
                </div>
            </div>
        </div>
    </a>

    <a href="https://github.com/fcaspe/dx7pytorch" class="project-card-link">
        <div class="project-card">
            <div class="project-card-image">
                <img src="/assets/images/dx7pytorch.png" alt="dx7pytorch image">
            </div>
            <div class="project-card-content">
                <h3>dx7pytorch</h3>
                <p>Musical instrument dataset synthesized on-the-fly.</p>
                <div class="card-links">
                    <span>GitHub</span>
                </div>
            </div>
        </div>
    </a>

</div>