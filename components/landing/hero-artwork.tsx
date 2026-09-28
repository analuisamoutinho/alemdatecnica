'use client';
import {useEffect, useRef, useState, type CSSProperties} from 'react';
import {Pause, Play} from 'lucide-react';

const sculptures = [
  {kind:'book', position:'book-main', duration:'12s', delay:'-3s'},
  {kind:'bubble', position:'bubble-main', duration:'15s', delay:'-7s'},
  {kind:'ribbon', position:'ribbon-main', duration:'14s', delay:'-4s'},
  {kind:'book', position:'book-small', duration:'17s', delay:'-9s'},
  {kind:'bubble', position:'bubble-small', duration:'13s', delay:'-5s'},
  {kind:'ribbon', position:'ribbon-small', duration:'18s', delay:'-11s'},
];

/** Approved rendered artwork in independent animated layers; no WebGL dependency. */
export function HeroArtwork() {
  const host = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true;
    const sync = () => { setReduced(media.matches); setActive(visible && !document.hidden); };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
    if (host.current) observer.observe(host.current);
    media.addEventListener('change', sync); document.addEventListener('visibilitychange', sync); sync();
    return () => { observer.disconnect(); media.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); };
  }, []);
  return <>
    <div ref={host} className="hz-hero-art" aria-hidden="true" data-motion={active&&!paused&&!reduced?'running':'paused'}>
      <div className="hz-hero-dots"/>
      {sculptures.map(({kind, position, duration, delay}) => <div className={`hz-sculpture ${position}`} key={position} style={{'--art-duration':duration,'--art-delay':delay,'--art-image':`url('/landing/sculpture-${kind}.webp')`} as CSSProperties}>
        <div className="hz-sculpture-float"><div className="hz-sculpture-tilt">
          <img src={`/landing/sculpture-${kind}.webp`} alt="" width="1280" height="1280" draggable={false}/>
          <div className="hz-sculpture-sheen"><span/></div>
        </div></div>
      </div>)}
    </div>
    {!reduced&&<button className="hz-art-toggle" onClick={()=>setPaused(value=>!value)} aria-label={paused?'Retomar movimento do fundo':'Pausar movimento do fundo'} aria-pressed={paused}>{paused?<Play size={13}/>:<Pause size={13}/>}<span>{paused?'Retomar fundo':'Pausar fundo'}</span></button>}
  </>;
}
