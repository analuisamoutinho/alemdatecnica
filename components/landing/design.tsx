'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { BrandMark, Button } from '@/components/adt/core';
import { system } from './system';

export function Brand() { return <a className="hz-brand" href="/" aria-label="Além da Técnica, início"><BrandMark/><span>além da técnica<span className="hz-brand-period">.</span></span></a>; }
export function Action({ children, href='#inscricao', secondary=false, ...props }: { children:ReactNode; href?:string; secondary?:boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <Button asChild kind={secondary?'secondary':'primary'} className={`hz-action ${secondary?'is-secondary':''}`}><a href={href} {...props}><span>{children}</span><ArrowUpRight size={18}/></a></Button>;
}
export function Eyebrow({children,number}:{children:ReactNode;number?:string}) {return <div className="hz-eyebrow">{number&&<span className="hz-index">{number}</span>}{children}</div>;}
export function Reveal({children,className=''}:{children:ReactNode;className?:string}) {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{const el=ref.current;if(!el)return;const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');if(reduce.matches)return;
    const rect=el.getBoundingClientRect(); if(rect.top<window.innerHeight)return;
    el.dataset.reveal='waiting'; const obs=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){el.dataset.reveal='visible';obs.disconnect();}},{threshold:.08});obs.observe(el);return()=>obs.disconnect();},[]);
  return <div ref={ref} className={`hz-reveal ${className}`}>{children}</div>;
}
export const heroPhrases=['ser reconhecido.','chegar mais longe.','virar oportunidade.'];
export function RotatingPhrase({compact=false}:{compact?:boolean}) {
  const [active,setActive]=useState(0),[paused,setPaused]=useState(false),[reduce,setReduce]=useState(true);
  const ref=useRef<HTMLDivElement>(null); const [visible,setVisible]=useState(true);
  useEffect(()=>{const m=window.matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduce(m.matches);sync();m.addEventListener('change',sync);return()=>m.removeEventListener('change',sync);},[]);
  useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(e=>setVisible(e[0].isIntersecting));obs.observe(el);return()=>obs.disconnect();},[]);
  useEffect(()=>{if(paused||reduce||!visible)return;const timer=setInterval(()=>{if(!document.hidden)setActive(v=>(v+1)%heroPhrases.length)},system.motion.interval);return()=>clearInterval(timer)},[paused,reduce,visible]);
  return <div className={`hz-rotation ${compact?'compact':''}`} ref={ref}>
    <span className="sr-only">{heroPhrases[0]}</span>
    <span className="hz-phrase-stage" aria-hidden="true">{heroPhrases.map((p,i)=><span key={p} className={`hz-phrase ${i===active?'active':i===(active+2)%3?'previous':''}`}>{p}</span>)}</span>
    <div className="hz-rotation-controls"><div className="hz-phrase-dots" role="group" aria-label="Escolher frase">{heroPhrases.map((p,i)=><button type="button" aria-label={`Mostrar: ${p}`} aria-pressed={active===i} key={p} onClick={()=>{setActive(i);setPaused(true)}}><span/></button>)}</div>{!reduce&&<button className="hz-motion-toggle" type="button" onClick={()=>setPaused(v=>!v)} aria-label={paused?'Retomar animação':'Pausar animação'}>{paused?<Play size={12}/>:<Pause size={12}/>}</button>}</div>
  </div>;
}
