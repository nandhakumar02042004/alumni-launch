import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './ParticleCanvas';
import { ConfettiCanvas } from './ConfettiCanvas';
import { ChevronRight, Rocket, ShieldCheck, Users, GraduationCap, Globe, Briefcase, Handshake, Calendar, TrendingUp, Heart } from 'lucide-react';
import logoImg from '../../assets/Logo.png';
import heroImg from '../../assets/image.png';
import bangaloreImg from '../../assets/BANGALORE1.jpg';
import cbeImg from '../../assets/CBE3.jpg';
import campusImg from '../../assets/IMG_000112.jpg';

const BG_IMAGES = [bangaloreImg, cbeImg, campusImg];

export function CurtainLaunchScreen() {
  const [countdown, setCountdown] = useState(30);
  const [curtainState, setCurtainState] = useState('hidden');
  const [showSparkShower, setShowSparkShower] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [bgIndex, setBgIndex] = useState(0);

  // Background slideshow — cycle every 4 seconds
  useEffect(() => {
    const slide = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 4000);
    return () => clearInterval(slide);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(timer); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // When user clicks Launch: shoot spark shower, then part red velvet curtains to reveal live website directly!
  const handleLaunchNowClick = () => {
    setShowSparkShower(true);

    setTimeout(() => {
      setCurtainState('closing');
      setTimeout(() => {
        setCurtainState('opening');
        setTimeout(() => {
          setCurtainState('done');
          window.location.href = 'https://alumni.kongu.edu/';
        }, 2200);
      }, 900);
    }, 350);
  };

  const leftBadges = [
    { icon: <GraduationCap size={26} />, color: '#0099FF', bg: 'rgba(0,153,255,0.18)', shadow: 'rgba(0,153,255,0.5)', label: 'Cherish\nMemories' },
    { icon: <Users size={26} />, color: '#8BC53F', bg: 'rgba(139,197,63,0.18)', shadow: 'rgba(139,197,63,0.5)', label: 'Reconnect\nwith Friends' },
    { icon: <Globe size={26} />, color: '#A855F7', bg: 'rgba(168,85,247,0.18)', shadow: 'rgba(168,85,247,0.5)', label: 'Global\nNetwork' },
  ];

  const rightBadges = [
    { icon: <Briefcase size={26} />, color: '#8BC53F', bg: 'rgba(139,197,63,0.18)', shadow: 'rgba(139,197,63,0.5)', label: 'Explore\nOpportunities' },
    { icon: <Handshake size={26} />, color: '#0099FF', bg: 'rgba(0,153,255,0.18)', shadow: 'rgba(0,153,255,0.5)', label: 'Collaborate\n& Grow' },
    { icon: <Calendar size={26} />, color: '#A855F7', bg: 'rgba(168,85,247,0.18)', shadow: 'rgba(168,85,247,0.5)', label: 'Events\n& Reunions' },
  ];

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: '#040914',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
      padding: isMobile ? '0.5rem' : '0.8rem 1rem 0.4rem',
      overflow: 'hidden',
    }}>
      {/* ── LIVE WEBSITE REVEALED DIRECTLY BEHIND OPENING CURTAINS ── */}
      {curtainState !== 'hidden' && (
        <iframe
          src="https://alumni.kongu.edu/"
          title="KECAA Live Alumni Portal"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            border: 'none',
            zIndex: 100,
            background: '#FFFFFF',
          }}
        />
      )}

      {/* Dots grid */}
      {!isMobile && curtainState === 'hidden' && <div className="bg-dots-grid" />}

      {/* Bottom wave curves */}
      {curtainState === 'hidden' && (
        <div className="bg-wave-curves">
          <div className="bg-wave-line-green" />
          <div className="bg-wave-line-blue" />
        </div>
      )}

      <div className="spotlight-beam" style={{ zIndex: 15 }} />

      {/* Corner Spark / Star Shower Canvas */}
      <ConfettiCanvas trigger={showSparkShower} />

      {/* ── RED VELVET THEATRE CURTAINS (Z-INDEX 200 ABOVE WEBSITE) ── */}
      {curtainState !== 'hidden' && (
        <>
          <div className="curtain-valance" style={{ zIndex: 210 }}>
            <div className="curtain-valance-fringe" />
          </div>
          <div className="curtain-panel curtain-left" style={{
            zIndex: 205,
            transform: curtainState === 'closing' ? 'translateX(0%)' : 'translateX(-102%)',
            transition: curtainState === 'closing' ? 'transform 0.85s cubic-bezier(0.77,0,0.175,1)' : 'transform 1.9s cubic-bezier(0.77,0,0.175,1)',
          }} />
          <div className="curtain-panel curtain-right" style={{
            zIndex: 205,
            transform: curtainState === 'closing' ? 'translateX(0%)' : 'translateX(102%)',
            transition: curtainState === 'closing' ? 'transform 0.85s cubic-bezier(0.77,0,0.175,1)' : 'transform 1.9s cubic-bezier(0.77,0,0.175,1)',
          }} />
          {curtainState === 'opening' && (
            <div style={{
              position: 'absolute', inset: 0, zIndex: 220, pointerEvents: 'none',
              background: 'radial-gradient(circle at center, rgba(244,197,66,0.9) 0%, rgba(139,197,63,0.55) 40%, transparent 80%)',
              animation: 'pulseSpotlight 1.8s ease-out forwards',
            }} />
          )}
        </>
      )}

      {/* ═══════════ MAIN GLASS CARD FULL-SCREEN EXPANDED LAYOUT ═══════════ */}
      <div style={{
        position: 'relative', zIndex: 110, overflow: 'hidden',
        width: isMobile ? '98%' : '98.5%',
        maxWidth: '98.5%',
        height: isMobile ? 'auto' : 'calc(100vh - 36px)',
        minHeight: isMobile ? 'auto' : 'calc(100vh - 36px)',
        padding: isMobile ? '2.2rem 1rem 1.8rem' : '2.5rem 3.5rem 2rem',
        margin: '0 auto',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        textAlign: 'center', borderRadius: '16px',
        background: 'rgba(8,16,34,0.94)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
        border: '3.5px solid transparent',
        backgroundImage: 'linear-gradient(rgba(8,16,34,0.95),rgba(8,16,34,0.95)), linear-gradient(135deg,#8BC53F 0%,#00F2FE 45%,#0099FF 75%,#8BC53F 100%)',
        backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
        boxShadow: '0 0 65px rgba(0,242,254,0.48), 0 0 30px rgba(139,197,63,0.38), 0 30px 75px rgba(0,0,0,0.92)',
        opacity: curtainState === 'opening' || curtainState === 'closing' || curtainState === 'done' ? 0 : 1,
        transform: curtainState === 'opening' || curtainState === 'closing' || curtainState === 'done' ? 'scale(0.85)' : 'scale(1)',
        transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Subtle Floating Spheres & Particles INSIDE GLASS CARD */}
        <ParticleCanvas count={isMobile ? 18 : 28} active={curtainState !== 'done'} />



        {/* ── MAIN CONTENT AREA WITH 6 FEATURE BADGES INSIDE CARD ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '0' : '2.5rem',
          flex: 1,
          position: 'relative', zIndex: 5,
        }}>
          {/* Left Column: 3 Badges INSIDE Card */}
          {!isMobile && (
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '3.5rem',
              alignItems: 'center', minWidth: '160px', paddingLeft: '1rem',
            }}>
              {leftBadges.map((item, i) => (
                <div key={i} className={`float-badge-${i}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{
                    padding: '1.05rem', borderRadius: '50%', background: item.bg,
                    border: `2px solid ${item.color}`, color: item.color,
                    boxShadow: `0 0 28px ${item.shadow}`, backdropFilter: 'blur(8px)',
                    transition: 'transform 0.2s ease',
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#E2E8F0', textShadow: '0 2px 4px rgba(0,0,0,0.8)', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: '1.3' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Center Column: Main Title, Info & Countdown */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Cursive Welcome Back */}
            <div style={{
              fontFamily: "'Dancing Script','Brush Script MT',cursive,Georgia,serif",
              color: '#8BC53F', fontSize: isMobile ? '1.4rem' : '2.4rem',
              fontWeight: '700', fontStyle: 'italic', marginBottom: '1.1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
            }}>
              <span style={{ width: '45px', height: '1.5px', background: 'linear-gradient(90deg,transparent,#8BC53F)' }} />
              Welcome Back
              <span style={{ width: '45px', height: '1.5px', background: 'linear-gradient(-90deg,transparent,#8BC53F)' }} />
            </div>

            {/* EXPANDED LOGO CONTAINER WITH INCREASED WIDTH & HEIGHT */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: isMobile ? '1.4rem' : '4.5rem',
              marginBottom: '1.8rem',
            }}>
              {heroImg && (
                <div style={{
                  padding: isMobile ? '0.8rem 1.6rem' : '1.5rem 4.2rem',
                  minWidth: isMobile ? '160px' : '340px',
                  height: isMobile ? '75px' : '160px',
                  background: '#FFFFFF', borderRadius: '26px',
                  border: '4px solid #00F2FE', boxShadow: '0 0 50px rgba(0,242,254,0.85)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.2s ease',
                }}>
                  <img src={heroImg} alt="KEC Emblem" style={{ height: isMobile ? '65px' : '145px', width: 'auto', objectFit: 'contain', maxWidth: '100%' }} />
                </div>
              )}
              <div style={{
                padding: isMobile ? '0.8rem 1.6rem' : '1.5rem 4.2rem',
                minWidth: isMobile ? '160px' : '340px',
                height: isMobile ? '75px' : '160px',
                background: '#FFFFFF', borderRadius: '26px',
                border: '4px solid #F4C542', boxShadow: '0 0 50px rgba(244,197,66,0.85)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.2s ease',
              }}>
                <img src={logoImg} alt="KECAA Logo" style={{ height: isMobile ? '65px' : '145px', width: 'auto', objectFit: 'contain', maxWidth: '100%' }} />
              </div>
            </div>

            {/* Feature pills (reduced font size) */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexWrap: 'wrap', gap: isMobile ? '0.4rem' : '1.3rem',
              color: '#E2E8F0', fontSize: isMobile ? '0.74rem' : '0.88rem',
              fontWeight: '600', marginBottom: '0.65rem',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Users size={15} color="#8BC53F" /> Stay Connected.</span>
              <span style={{ color: '#334155' }}>|</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><TrendingUp size={15} color="#8BC53F" /> Grow Together.</span>
              <span style={{ color: '#334155' }}>|</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Heart size={15} color="#8BC53F" /> Make an Impact.</span>
            </div>

            {/* Tagline (reduced font size) */}
            <div style={{
              fontSize: isMobile ? '0.74rem' : '0.86rem', color: '#94A3B8',
              maxWidth: '560px', margin: '0 auto', lineHeight: 1.5,
              marginBottom: isMobile ? '1rem' : '1.5rem', fontWeight: '500',
            }}>
              Connecting 35,000+ KEC alumni inspiring, supporting, and shaping a better tomorrow across the globe.
            </div>

            {/* Fixed-Height Action Slot */}
            <div style={{
              minHeight: isMobile ? '120px' : '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: isMobile ? '0.5rem' : '1rem',
            }}>
              {countdown > 0 ? (
                <>
                  <div style={{
                    color: '#8BC53F', fontSize: isMobile ? '0.78rem' : '0.96rem', fontWeight: '800',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    marginBottom: '0.7rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
                  }}>
                    <span style={{ width: '40px', height: '1.5px', background: 'linear-gradient(90deg,transparent,#8BC53F)' }} />
                    Launching Your Alumni Portal In
                    <span style={{ width: '40px', height: '1.5px', background: 'linear-gradient(-90deg,transparent,#8BC53F)' }} />
                  </div>

                  {/* SINGLE LIVE COUNTDOWN BOX */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0',
                  }}>
                    <div style={{
                      background: 'rgba(10,22,47,0.92)',
                      border: '2px solid rgba(139,197,63,0.65)',
                      borderRadius: '20px',
                      padding: isMobile ? '0.7rem 1.8rem' : '0.9rem 3.2rem',
                      boxShadow: '0 0 30px rgba(139,197,63,0.35), inset 0 0 20px rgba(139,197,63,0.15)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      minWidth: isMobile ? '105px' : '150px',
                    }}>
                      <div style={{
                        fontSize: isMobile ? '2.4rem' : '3.4rem', fontWeight: '900',
                        color: '#8BC53F', lineHeight: 1, letterSpacing: '0.04em',
                        fontVariantNumeric: 'tabular-nums',
                        filter: 'drop-shadow(0 0 15px rgba(139,197,63,0.7))',
                      }}>
                        {String(countdown).padStart(2, '0')}
                      </div>
                      <div style={{
                        fontSize: '0.68rem', fontWeight: '800', color: '#8BC53F',
                        textTransform: 'uppercase', letterSpacing: '0.22em', marginTop: '0.45rem',
                      }}>
                        SECONDS
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Launch button */
                <button
                  onClick={handleLaunchNowClick}
                  style={{
                    width: '100%', maxWidth: isMobile ? '320px' : '460px',
                    padding: isMobile ? '0.85rem 1.3rem' : '1.05rem 2rem',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg,#8BC53F 0%,#0099FF 50%,#0066FF 100%)',
                    color: '#FFFFFF', fontWeight: '900',
                    fontSize: isMobile ? '1rem' : '1.25rem',
                    letterSpacing: '0.04em', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    boxShadow: '0 0 40px rgba(0,153,255,0.65), 0 0 25px rgba(139,197,63,0.45)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Rocket size={18} color="#FFFFFF" />
                  </div>
                  <span>LAUNCH</span>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ChevronRight size={20} color="#FFFFFF" />
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: 3 Badges INSIDE Card */}
          {!isMobile && (
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '3.5rem',
              alignItems: 'center', minWidth: '160px', paddingRight: '1rem',
            }}>
              {rightBadges.map((item, i) => (
                <div key={i} className={`float-badge-${i}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{
                    padding: '1.05rem', borderRadius: '50%', background: item.bg,
                    border: `2px solid ${item.color}`, color: item.color,
                    boxShadow: `0 0 28px ${item.shadow}`, backdropFilter: 'blur(8px)',
                    transition: 'transform 0.2s ease',
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#E2E8F0', textShadow: '0 2px 4px rgba(0,0,0,0.8)', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: '1.3' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust footer inside card */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: isMobile ? '0.8rem' : '1.8rem',
          fontSize: '0.85rem', color: '#FFFFFF', marginTop: '1rem', fontWeight: '600',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ShieldCheck size={16} color="#8BC53F" /> Secure</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Users size={16} color="#8BC53F" /> Trusted</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Globe size={16} color="#8BC53F" /> Connected</span>
        </div>
      </div>


    </div>
  );
}
