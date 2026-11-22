---
permalink: /music/
title: "Music"
layout: splash
---

<style>
/* Scoped styles for the music page */
.music-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}

.music-page h2 {
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.4rem;
}

.music-intro {
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 800px;
}

.music-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 20px 24px;
  margin: 1.5rem 0;
}

.music-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.music-card p {
  line-height: 1.6;
  margin-bottom: 0.9em;
}

.music-meta {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}

/* Uniform card layout: media column (left) next to text (right) */
.split {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 28px;
  align-items: start;
}

/* Every video / photo in a card has the same width and 16:9 shape */
.media-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.media-col img,
.media-col .media-frame {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  border: 0;
  border-radius: 8px;
  object-fit: cover;
  background: #000;
}

.media-col a {
  display: block;
}

/* Album covers etc.: show the whole image instead of cropping */
.media-col img.contain {
  object-fit: contain;
  background: #111;
}

.card-text p {
  text-align: left;
}

.card-text blockquote {
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0.8rem 0 0;
}

@media (max-width: 800px) {
  .split {
    grid-template-columns: 1fr;
  }
  .music-card {
    padding: 16px;
  }
}
</style>

<div class="music-page fitvidsignore">

<h2>Collaborations</h2>

<p class="music-intro">
Lately, I had the pleasure of collaborating with talented artists and practitioners in artistic installations, the development of music interfaces and live performances and compositions.
</p>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <iframe class="media-frame" src="https://www.youtube.com/embed/mawEpKLz_yc" title="There is an image by Paul Klee, or, Recursivity and Simultaneity by Ziyi Tao" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="card-text">
      <h3>“There is an image by Paul Klee,” or, Recursivity and Simultaneity</h3>
      <div class="music-meta">Composition by Ziyi Tao · String quartet, Minifusion and live electronics · 2026</div>
      <p>
        The String Quartet live audio is transformed by Minifusion and live electronics. Played at Juilliard (Future Stages Festival, March 2026), and at Evangelische Stadtkirche, Offenbach am Main (July 2026).
      </p>
    </div>
  </div>
</div>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <img src="/assets/images/aimla_live.jpg" alt="Playing guitar and Minifusion live at AES AIMLA 2025" loading="lazy">
    </div>
    <div class="card-text">
      <h3>Live at AES AIMLA 2025</h3>
      <div class="music-meta">With Anthony Charretier · Guitar, Minifusion · 2025</div>
      <p>
        Playing guitar and Minifusion live with Anthony Charretier at AES AIMLA 2025.
      </p>
    </div>
  </div>
</div>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <iframe class="media-frame" src="https://drive.google.com/file/d/1brRtsk8D0CLjKIwmuWiiQCg3YcUMMYJb/preview" title="Nicola Privato with the Stacco instrument" allow="autoplay" loading="lazy"></iframe>
    </div>
    <div class="card-text">
      <h3>Stacco and Minifusion</h3>
      <div class="music-meta">With Nicola Privato · 2025</div>
      <p>
        Artist Nicola Privato with his Stacco Instrument that conditions Minifusion's latent space.
      </p>
    </div>
  </div>
</div>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <a href="https://drive.google.com/file/d/10bhdxu8KEbWc6AKpZGq_cEj2XIwzOxY5/view?usp=sharing"><img src="/assets/images/mcollapse.jpg" alt="Mode Collapse live at Iklectic, London" loading="lazy"></a>
    </div>
    <div class="card-text">
      <h3>Mode Collapse</h3>
      <div class="music-meta">With Xiaowan Yi · Live at Iklectic (London) · 2023 · <a href="https://drive.google.com/file/d/10bhdxu8KEbWc6AKpZGq_cEj2XIwzOxY5/view?usp=sharing">Watch</a></div>
      <p>
        In Mode Collapse we explored with Xiaowan Yi the use of Deep Learning algorithms for sound generation in live electronic music performances, combining different styles within a techno narrative.
      </p>
      <blockquote>
        Pain and pleasure are the different sides of the same coin. Arm-wrestling sensations that crush our mind towards the primal. As said by Marvin Minsky “Too much suffering diminishes us by restricting the complexities that constitute our very selves. It must be the same for pleasure as well.”
        Artificial brains seem to suffer from similar problems. They can lock into repeating themselves in order to sustain the presence of a reward signal. If we build machines in our likeness, how can we learn to think differently?
      </blockquote>
    </div>
  </div>
</div>

<h2>Bands in Argentina</h2>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <iframe class="media-frame" src="https://www.youtube.com/embed/x-Zkgu6Rqc4" title="Lo Barato Sale Caro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      <a href="https://lobaratosalecaro.bandcamp.com/releases"><img src="/assets/images/lbsc.jpg" alt="Lo Barato Sale Caro EP 2017 cover" class="contain" loading="lazy"></a>
    </div>
    <div class="card-text">
      <h3>Lo Barato Sale Caro</h3>
      <div class="music-meta">Vocals, guitar, synthesizer · <a href="https://lobaratosalecaro.bandcamp.com/releases">EP 2017 on Bandcamp</a></div>
      <p>
        Back in Argentina, Lo Barato Sale Caro was my primary music project. A flexible funk power-trio of friends that generally incorporated guest musicians in the gigs, I had the best of times playing with them. While being the main vocalist and composer, I played the guitar or the synthesizer depending on the song.
      </p>
      <p>
        The flexibility of the band allowed me to explore different genres within it, such as blues, funk, Classic R&amp;B and West Coast. In 2017 we issued our first and only EP comprising five original songs.
      </p>
    </div>
  </div>
</div>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <iframe class="media-frame" src="https://www.youtube.com/embed/vmLkvHtOVXM" title="Eclécticos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      <iframe class="media-frame" src="https://www.youtube.com/embed/qzH1wcTUehE" title="Eclécticos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="card-text">
      <h3>Eclécticos</h3>
      <div class="music-meta">Keyboards, synthesizer, Rhodes piano</div>
      <p>
        Eclécticos was a pop band with original songs and many popular covers. I played as a regular drop-in keyboardist when time allowed me. The composer, guitarist and friend Pablo Benedetti invited me to record synthesizer and Rhodes piano in two of their songs.
      </p>
    </div>
  </div>
</div>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <iframe class="media-frame" src="https://www.youtube.com/embed/V1zqI1AoGNk" title="Novansamba Duo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      <iframe class="media-frame" src="https://www.youtube.com/embed/AqfVADBYZIQ" title="Novansamba Duo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="card-text">
      <h3>Novansamba Duo</h3>
      <div class="music-meta">Guitar, piano</div>
      <p>
        With Novansamba I explored the enchanting sound of Bossa-Nova. An excellent middle step for learning jazz harmony while keeping things not so complicated. While playing in this duo I learned many interesting harmonic and rhythmic techniques in guitar playing. I also jumped to the piano from time to time.
      </p>
    </div>
  </div>
</div>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <iframe class="media-frame" src="https://www.youtube.com/embed/FpYQ8I3-nLk" title="Raices de limon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      <img src="/assets/images/music/raices_2.jpg" alt="Raices de limon live" loading="lazy">
    </div>
    <div class="card-text">
      <h3>Raices de limon</h3>
      <div class="music-meta">Lead electric guitar</div>
      <p>
        In this beautiful family of reggae and ska I explored my <code>rockiest</code> side playing lead electric guitar.
      </p>
    </div>
  </div>
</div>

<div class="music-card">
  <div class="split">
    <div class="media-col">
      <iframe class="media-frame" src="https://www.youtube.com/embed/xnsj6AjDX1g" title="Wayron" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="card-text">
      <h3>Wayron</h3>
      <div class="music-meta">Synthesizer</div>
      <p>
        One of the first groups I took part with, I played synthesizer while doing 80's covers.
      </p>
    </div>
  </div>
</div>

</div>
