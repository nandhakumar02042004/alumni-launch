import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './ParticleCanvas';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [bgIndex, setBgIndex] = useState(0);

  // Background slideshow — cycle every 4 seconds
  useEffect(() => {
    const slide = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 4000);
    return () => clearInterval(slide);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
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

  const handleLaunchNowClick = () => {
    setCurtainState('closing');
    setTimeout(() => {
      setCurtainState('opening');
      setTimeout(() => {
        setCurtainState('done');
        window.location.href = 'https://alumni.kongu.edu/';
      }, 1900);
    }, 900);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: '#040914',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflowY: 'auto', overflowX: 'hidden',
    }}>
      {/* Dots grid */}
      {!isMobile && <div className="bg-dots-grid" />}

      {/* Bottom wave curves */}
      <div className="bg-wave-curves">
        <div className="bg-wave-line-green" />
        <div className="bg-wave-line-blue" />
      </div>

      {/* ── Full-screen crossfading background slideshow ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none' }}>
        {BG_IMAGES.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: idx === bgIndex ? 0.32 : 0,
              transition: 'opacity 1.5s ease-in-out',
              filter: 'brightness(0.6) contrast(1.05)',
            }}
          />
        ))}
        {/* Gradient vignette overlay — darker at edges, lighter in center */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(4,9,20,0.35) 0%, rgba(4,9,20,0.75) 70%, rgba(4,9,20,0.92) 100%)',
        }} />
      </div>

      <div className="spotlight-beam" style={{ zIndex: 15 }} />
      <ParticleCanvas count={isMobile ? 40 : 85} active={curtainState !== 'done'} />

      {/* Theatre Curtains */}
      {curtainState !== 'hidden' && (
        <>
          <div className="curtain-valance"><div className="curtain-valance-fringe" /></div>
          <div className="curtain-panel curtain-left" style={{
            transform: curtainState === 'closing' ? 'translateX(0%)' : 'translateX(-102%)',
            transition: curtainState === 'closing' ? 'transform 0.85s cubic-bezier(0.77,0,0.175,1)' : 'transform 1.9s cubic-bezier(0.77,0,0.175,1)',
          }} />
          <div className="curtain-panel curtain-right" style={{
            transform: curtainState === 'closing' ? 'translateX(0%)' : 'translateX(102%)',
            transition: curtainState === 'closing' ? 'transform 0.85s cubic-bezier(0.77,0,0.175,1)' : 'transform 1.9s cubic-bezier(0.77,0,0.175,1)',
          }} />
          {curtainState === 'opening' && (
            <div style={{
              position: 'absolute', inset: 0, zIndex: 195, pointerEvents: 'none',
              background: 'radial-gradient(circle at center, rgba(244,197,66,0.9) 0%, rgba(139,197,63,0.55) 40%, transparent 80%)',
              animation: 'pulseSpotlight 1.8s ease-out forwards',
            }} />
          )}
        </>
      )}

      {/* Side orbit icons — desktop only */}
      {curtainState === 'hidden' && !isMobile && (
        <>
          {/* Left dashed arc */}
          <div style={{ position: 'absolute', left: '2%', top: '12%', bottom: '12%', width: '20vw', borderRight: '1.5px dashed rgba(0,242,254,0.22)', borderRadius: '50%', pointerEvents: 'none', zIndex: 104 }} />

          {/* Left badges */}
          <div style={{ position: 'absolute', left: '4%', top: '18%', zIndex: 105, display: 'flex', flexDirection: 'column', gap: '3.5rem', alignItems: 'center' }}>
            {[
              { icon: <GraduationCap size={22} />, color: '#0099FF', bg: 'rgba(0,153,255,0.18)', shadow: 'rgba(0,153,255,0.5)', label: 'Cherish\nMemories', ml: '0' },
              { icon: <Users size={22} />, color: '#8BC53F', bg: 'rgba(139,197,63,0.18)', shadow: 'rgba(139,197,63,0.5)', label: 'Reconnect\nwith Friends', ml: '-3rem' },
              { icon: <Globe size={22} />, color: '#A855F7', bg: 'rgba(168,85,247,0.18)', shadow: 'rgba(168,85,247,0.5)', label: 'Global\nNetwork', ml: '0' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginLeft: item.ml }}>
                <div style={{ padding: '0.7rem', borderRadius: '50%', background: item.bg, border: `1.5px solid ${item.color}`, color: item.color, boxShadow: `0 0 20px ${item.shadow}`, backdropFilter: 'blur(8px)' }}>
                  {item.icon}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#E2E8F0', textShadow: '0 2px 4px rgba(0,0,0,0.8)', textAlign: 'center', whiteSpace: 'pre-line' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Right dashed arc */}
          <div style={{ position: 'absolute', right: '2%', top: '12%', bottom: '12%', width: '20vw', borderLeft: '1.5px dashed rgba(0,242,254,0.22)', borderRadius: '50%', pointerEvents: 'none', zIndex: 104 }} />

          {/* Right badges */}
          <div style={{ position: 'absolute', right: '4%', top: '18%', zIndex: 105, display: 'flex', flexDirection: 'column', gap: '3.5rem', alignItems: 'center' }}>
            {[
              { icon: <Briefcase size={22} />, color: '#8BC53F', bg: 'rgba(139,197,63,0.18)', shadow: 'rgba(139,197,63,0.5)', label: 'Explore\nOpportunities', mr: '0' },
              { icon: <Handshake size={22} />, color: '#0099FF', bg: 'rgba(0,153,255,0.18)', shadow: 'rgba(0,153,255,0.5)', label: 'Collaborate\n& Grow', mr: '-3rem' },
              { icon: <Calendar size={22} />, color: '#A855F7', bg: 'rgba(168,85,247,0.18)', shadow: 'rgba(168,85,247,0.5)', label: 'Events\n& Reunions', mr: '0' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginRight: item.mr }}>
                <div style={{ padding: '0.7rem', borderRadius: '50%', background: item.bg, border: `1.5px solid ${item.color}`, color: item.color, boxShadow: `0 0 20px ${item.shadow}`, backdropFilter: 'blur(8px)' }}>
                  {item.icon}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#E2E8F0', textShadow: '0 2px 4px rgba(0,0,0,0.8)', textAlign: 'center', whiteSpace: 'pre-line' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ═══════════ MAIN GLASS CARD ═══════════ */}
      <div style={{
        position: 'relative', zIndex: 110,
        width: isMobile ? '92%' : '92%', maxWidth: '640px',
        padding: isMobile ? '1.6rem 1.1rem 1.2rem' : '2.2rem 2.25rem 1.6rem',
        margin: isMobile ? '3rem auto' : '0 auto',
        textAlign: 'center', borderRadius: '22px',
        background: 'rgba(8,16,34,0.94)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(rgba(8,16,34,0.95),rgba(8,16,34,0.95)), linear-gradient(135deg,#8BC53F 0%,#00F2FE 50%,#4FACFE 100%)',
        backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
        boxShadow: '0 0 45px rgba(0,242,254,0.3), 0 25px 65px rgba(0,0,0,0.9)',
        opacity: curtainState === 'opening' || curtainState === 'done' ? 0 : 1,
        transform: curtainState === 'opening' || curtainState === 'done' ? 'scale(0.85)' : 'scale(1)',
        transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
      }}>

        {/* Top center badge */}
        <div style={{
          position: 'absolute', top: '-22px', left: '50%', transform: 'translateX(-50%)',
          width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px',
          borderRadius: '50%', background: '#081022', border: '2px solid #8BC53F', color: '#8BC53F',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 22px rgba(139,197,63,0.6)', zIndex: 115,
        }}>
          <Users size={isMobile ? 18 : 22} />
        </div>

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: isMobile ? '0.75rem' : '1.25rem', marginTop: '0.25rem' }}>
          <div style={{ padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 1rem', background: '#FFFFFF', borderRadius: '10px', border: '1.5px solid #F4C542', boxShadow: '0 0 12px rgba(244,197,66,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logoImg} alt="KECAA Logo" style={{ height: isMobile ? '30px' : '42px', width: 'auto', objectFit: 'contain' }} />
          </div>
          {heroImg && (
            <div style={{ padding: isMobile ? '0.3rem 0.6rem' : '0.4rem 1rem', background: '#FFFFFF', borderRadius: '10px', border: '1.5px solid #00F2FE', boxShadow: '0 0 12px rgba(0,242,254,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={heroImg} alt="KEC Emblem" style={{ height: isMobile ? '30px' : '42px', width: 'auto', objectFit: 'contain' }} />
            </div>
          )}
        </div>

        {/* Cursive Welcome Back */}
        <div style={{
          fontFamily: "'Dancing Script','Brush Script MT',cursive,Georgia,serif",
          color: '#8BC53F', fontSize: isMobile ? '1.15rem' : '1.6rem',
          fontWeight: '600', fontStyle: 'italic', marginBottom: '0.2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
        }}>
          <span style={{ width: '28px', height: '1px', background: 'linear-gradient(90deg,transparent,#8BC53F)' }} />
          Welcome Back
          <span style={{ width: '28px', height: '1px', background: 'linear-gradient(-90deg,transparent,#8BC53F)' }} />
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: isMobile ? '1.1rem' : '1.8rem', fontWeight: '900',
          letterSpacing: isMobile ? '0.02em' : '0.04em', lineHeight: 1.15,
          color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '0.25rem',
        }}>
          KONGU ENGINEERING COLLEGE
        </h1>

        {/* Alumni Association */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          fontSize: isMobile ? '0.68rem' : '0.88rem', fontWeight: '700',
          letterSpacing: isMobile ? '0.1em' : '0.22em', color: '#76E4F7',
          textTransform: 'uppercase', marginBottom: isMobile ? '0.7rem' : '1.1rem',
        }}>
          <span style={{ width: '30px', height: '1px', background: '#76E4F7', opacity: 0.7 }} />
          ALUMNI ASSOCIATION
          <span style={{ width: '30px', height: '1px', background: '#76E4F7', opacity: 0.7 }} />
        </div>

        {/* Feature pills */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexWrap: 'wrap', gap: isMobile ? '0.4rem' : '1.1rem',
          color: '#E2E8F0', fontSize: isMobile ? '0.72rem' : '0.88rem',
          fontWeight: '600', marginBottom: '0.5rem',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Users size={13} color="#8BC53F" /> Stay Connected.</span>
          <span style={{ color: '#334155' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><TrendingUp size={13} color="#8BC53F" /> Grow Together.</span>
          <span style={{ color: '#334155' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Heart size={13} color="#8BC53F" /> Make an Impact.</span>
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: isMobile ? '0.74rem' : '0.82rem', color: '#FFFFFF',
          maxWidth: '420px', margin: '0 auto', lineHeight: 1.4,
          marginBottom: isMobile ? '0.8rem' : '1.2rem',
        }}>
          A global network of KEC alumni inspiring, supporting and shaping a better tomorrow.
        </div>

        {/* Countdown headline */}
        <div style={{
          color: '#8BC53F', fontSize: isMobile ? '0.68rem' : '0.82rem', fontWeight: '700',
          textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: '0.55rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
        }}>
          <span style={{ width: '28px', height: '1px', background: 'linear-gradient(90deg,transparent,#8BC53F)' }} />
          Launching Your Alumni Portal In
          <span style={{ width: '28px', height: '1px', background: 'linear-gradient(-90deg,transparent,#8BC53F)' }} />
        </div>

        {/* ── SINGLE LIVE COUNTDOWN BOX ── */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '0', marginBottom: isMobile ? '0.8rem' : '1.2rem',
        }}>
          <div style={{
            background: 'rgba(10,22,47,0.88)',
            border: '1.5px solid rgba(139,197,63,0.5)',
            borderRadius: '14px',
            padding: isMobile ? '0.55rem 1.5rem' : '0.7rem 2rem',
            boxShadow: '0 0 20px rgba(139,197,63,0.25), inset 0 0 12px rgba(139,197,63,0.08)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            minWidth: isMobile ? '90px' : '110px',
          }}>
            <div style={{
              fontSize: isMobile ? '1.9rem' : '2.4rem', fontWeight: '900',
              color: '#8BC53F', lineHeight: 1, letterSpacing: '0.04em',
              fontVariantNumeric: 'tabular-nums',
              filter: 'drop-shadow(0 0 10px rgba(139,197,63,0.55))',
            }}>
              {String(countdown).padStart(2, '0')}
            </div>
            <div style={{
              fontSize: '0.58rem', fontWeight: '800', color: '#8BC53F',
              textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: '0.3rem',
            }}>
              SECONDS
            </div>
          </div>
        </div>

        {/* Launch button or spacer */}
        {countdown > 0 ? (
          <div style={{ marginBottom: '0.75rem' }} />
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <button
              onClick={handleLaunchNowClick}
              style={{
                width: '100%', maxWidth: isMobile ? '300px' : '440px',
                padding: isMobile ? '0.65rem 1rem' : '0.75rem 1.25rem',
                borderRadius: '9999px',
                background: 'linear-gradient(90deg,#8BC53F 0%,#0099FF 50%,#0066FF 100%)',
                color: '#FFFFFF', fontWeight: '900',
                fontSize: isMobile ? '0.85rem' : '1.05rem',
                letterSpacing: '0.04em', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                boxShadow: '0 0 35px rgba(0,153,255,0.6), 0 0 20px rgba(139,197,63,0.4)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Rocket size={15} color="#FFFFFF" />
              </div>
              <span>LAUNCH</span>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronRight size={17} color="#FFFFFF" />
              </div>
            </button>
          </div>
        )}

        {/* Trust footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: isMobile ? '0.65rem' : '1.25rem',
          fontSize: '0.72rem', color: '#FFFFFF', marginBottom: '0.2rem',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><ShieldCheck size={13} color="#8BC53F" /> Secure</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Users size={13} color="#8BC53F" /> Trusted</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Globe size={13} color="#8BC53F" /> Connected</span>
        </div>
      </div>

      {/* Bottom footer */}
      <div style={{
        position: 'fixed', bottom: isMobile ? '0.5rem' : '1.25rem',
        left: 0, right: 0, zIndex: 110, textAlign: 'center',
        fontSize: isMobile ? '0.55rem' : '0.85rem', fontWeight: '700',
        letterSpacing: isMobile ? '0.18em' : '0.35em',
        color: '#475569', textTransform: 'uppercase', pointerEvents: 'none',
      }}>
        CONNECT &nbsp;•&nbsp; COLLABORATE &nbsp;•&nbsp; CONTRIBUTE
      </div>
    </div>
  );
}
