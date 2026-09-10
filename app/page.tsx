'use client'

import { useEffect, useRef, useState } from 'react'

const mapsUrl = 'https://maps.app.goo.gl/PjHV3LEzM36tLeWo8?g_st=aw'
const musicUrl = 'https://ganpatiinvi-dplum.vercel.app/assets/bgMusic.mp3'
const assets = {
  logo: 'https://ganpatiinvi-dplum.vercel.app/assets/logo-B7uG79am.webp',
  hero: 'https://ganpatiinvi-dplum.vercel.app/assets/hero-visual-BBS8_Fih.webp',
  family: [
    '/photos/Kaka.jpeg',       // शरद भट्ट
    '/photos/ManasviMom.jpeg', // सविता भट्ट
    '/photos/Dada.jpeg',       // चिन्मय भट्ट
    '/photos/Manasvi.jpeg',    // मानस्वी भट्ट
  ],
  // ➕ Remaining photos mapped to gallery slots
  gallery: [
    '/photos/Kaivalya.jpeg', // फोटो १
    '/photos/Mrunmayi.jpeg', // फोटो २
    '/photos/Sanika.jpeg',   // फोटो ३
    '/photos/Sankalp.jpeg',  // फोटो ४
    '/photos/parth.jpeg',    // फोटो ५ (रुंद)
    '/photos/Manasvi.jpeg',                    // फोटो ६ (रुंद) — add more if needed
  ] as (string | null)[],
}

export default function Page() {
  const [opened, setOpened] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Simple synchronous handler — async functions lose user-gesture
  // trust on mobile/network IPs which can silently block the tap.
  const openInvitation = () => {
    setOpened(true)
  }

  // Play audio reactively when invitation opens (still inside user-gesture window)
  useEffect(() => {
    if (!opened || !audioRef.current) return
    audioRef.current.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [opened])

  const toggleMusic = async () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    }
  }

  return (
    <main className="invite-page">
      <audio ref={audioRef} src={musicUrl} loop preload="none" />

      {/* ── Opening Landing Screen ── */}
      {!opened && (
        <section className="curtain-screen" aria-label="निमंत्रण उघडा">
          {/* panels kept in DOM for CSS compatibility */}
          <div className="curtain-panel curtain-left" />
          <div className="curtain-panel curtain-right" />

          <div className="seal-wrap">
            {/* Logo with glowing halo */}
            <div className="seal-halo">
              <div className="seal">
                <img src={assets.logo} alt="श्री गणेश" />
              </div>
            </div>

            <p className="curtain-eyebrow">श्री गणेशाय नमः</p>

            <h1>
              गणपती बाप्पा
              <span>मोरया</span>
            </h1>

            <div className="curtain-divider" />

            <p className="curtain-subtitle">भट्ट परिवार</p>

            <button className="open-button" onClick={openInvitation}>
              निमंत्रण उघडा <span>→</span>
            </button>
          </div>
        </section>
      )}

      <div className={`invitation-content ${opened ? 'is-open' : ''}`}>

        {/* ── Topbar ── */}
        <header className="topbar">
          <a className="brand" href="#home">
            <img src={assets.logo} alt="गणेश" /><span>भट्ट परिवार</span>
          </a>
          <nav>
            <a href="#invitation">निमंत्रण</a>
            <a href="#family">परिवार</a>
            <a href="#gallery">फोटो</a>
            <a href="#location">पत्ता</a>
          </nav>
          <button
            className="music-button"
            onClick={toggleMusic}
            aria-label={playing ? 'संगीत थांबवा' : 'संगीत सुरू करा'}
          >
            <span className={playing ? 'sound-bars active' : 'sound-bars'}>
              <i /><i /><i />
            </span>
            {playing ? 'संगीत सुरू' : 'संगीत'}
          </button>
        </header>

        {/* ── Hero ── */}
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">गणपती बाप्पा मोरया</p>
            <h2>आमच्या घरी<br /><em>गणरायाचे</em><br />आगमन</h2>
            <p className="hero-lede">
              भक्ती, आनंद आणि मंगलमय वातावरणात आपल्या लाडक्या बाप्पाचे स्वागत
              करण्यासाठी आपण सहकुटुंब जरूर यावे.
            </p>
            <a href="#invitation" className="gold-link">निमंत्रण वाचा <span>↓</span></a>
          </div>
          <div className="hero-art">
            <div className="art-ring" />
            <img src={assets.hero} alt="गणपती बाप्पाची सुंदर प्रतिमा" />
          </div>
          <div className="hero-side-note">श्री<br />गणेशाय<br />नमः</div>
        </section>

        {/* ── Invitation ── */}
        <section id="invitation" className="invitation-section">
          <div className="invite-card">
            <div className="invite-card-inner">
              <div className="card-ornament-tl">ॐ</div>
              <div className="card-ornament-br">✦</div>

              <p className="eyebrow-center">✦ &nbsp; आपले हार्दिक स्वागत &nbsp; ✦</p>

              <h2>भट्ट परिवाराकडून<br /><em>मनःपूर्वक निमंत्रण</em></h2>

              <div className="invite-divider"><span>✦</span></div>

              <div className="shloka-block">
                <p className="shloka-line">वक्रतुंड महाकाय, सूर्यकोटी समप्रभः</p>
                <p className="shloka-line">निर्विघ्नं कुरु मे देव, शुभ कार्येषु सर्वदा</p>
              </div>

              <div className="invite-divider"><span>🌺</span></div>

              <p className="invite-body">
                आमच्या घरी श्री गणेशाची स्थापना होत असून या मंगल प्रसंगी
                आपण उपस्थित राहून बाप्पाचे आशीर्वाद घ्यावेत, ही नम्र विनंती.
              </p>

              <div className="invite-signature">
                <p>आपले स्नेहांकित</p>
                <strong>भट्ट परिवार</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ── Family ── */}
        <section id="family" className="section family-section">
          <div className="section-heading centered">
            <p className="eyebrow">आमचे कुटुंब</p>
            <h2>बाप्पाच्या स्वागतासाठी<br /><em>संपूर्ण परिवार सज्ज</em></h2>
          </div>
          <div className="family-grid">
            {['शरद भट्ट', 'सविता भट्ट', 'चिन्मय भट्ट', 'मानस्वी भट्ट'].map((name, index) => (
              <div className="family-member" key={name}>
                <div className="portrait">
                  <img src={assets.family[index]} alt={name} />
                </div>
                <p>{name}</p>
                <span>भट्ट परिवार</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Photo Gallery ── */}
        <section id="gallery" className="gallery-section">
          <div className="gallery-inner">
            <div className="gallery-heading">
              <p className="eyebrow">आगमनाचे सोहळे</p>
              <h2>गणपती बाप्पाच्या सेवेत सदैव<br /><em>तत्पर असलेले आमचे कार्यकर्ते!</em></h2>
              <div className="gallery-divider">✦ &nbsp; ✦ &nbsp; ✦</div>
            </div>
            <div className="gallery-grid">
              {assets.gallery.map((src, i) => (
                <div className="photo-slot" key={i}>
                  {src ? (
                    <>
                      <img src={src} alt={`बाप्पा सोहळा ${i + 1}`} />
                      <div className="photo-overlay" />
                    </>
                  ) : (
                    <div className="photo-empty">
                      <span className="ph-icon">📷</span>
                      <span>फोटो {i + 1}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timing ── */}
        <section className="timing-section">
          <div>
            <p className="eyebrow">आरतीचे वेळापत्रक</p>
            <h2>या मंगलमय<br /><em>क्षणी सहभागी व्हा</em></h2>
          </div>
          <div className="times">
            <div className="time-row">
              <span>सकाळची आरती</span>
              <strong>८:०० <small>वाजता</small></strong>
            </div>
            <div className="time-row">
              <span>संध्याकाळची आरती</span>
              <strong>७:३० <small>वाजता</small></strong>
            </div>
          </div>
        </section>

        {/* ── Location ── */}
        <section id="location" className="section location-section">
          <div className="location-copy">
            <p className="eyebrow">आपली वाट पाहत आहोत</p>
            <h2>आपण जरूर<br /><em>यावे</em></h2>
            <p className="address">A विंग, ९०५</p>
            <p className="address-sub">भट्ट परिवाराचे निवासस्थान</p>
            <a className="map-button" href={mapsUrl} target="_blank" rel="noreferrer">
              नकाशावर ठिकाण पहा <span>↗</span>
            </a>
          </div>
          <div className="map-visual">
            <div className="map-grid" />
            <div className="map-pin">⌖<span>A विंग, ९०५</span></div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer>
          <img src={assets.logo} alt="श्री गणेश" />
          <p>गणपती बाप्पा मोरया</p>
          <span>भट्ट परिवाराकडून प्रेमपूर्वक</span>
        </footer>

      </div>
    </main>
  )
}
