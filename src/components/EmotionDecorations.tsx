// Emotion-specific decorative SVG elements for each parallax layer
// Each emotion gets thematic visuals instead of generic shapes

interface DecorProps {
  color: string;
  light: string;
  layer: 0 | 1 | 2;
}

// ── JOY: Sun, rays, sparkles ─────────────────────────────────────────────────
export function JoyDecorations({ color, light, layer }: DecorProps) {
  if (layer === 0) return (
    <>
      {/* Big sun circle */}
      <div style={{ position:'absolute', right:'-8%', top:'5%', width:420, height:420, borderRadius:'50%', background:light, opacity:0.55 }} />
      {/* Second soft circle */}
      <div style={{ position:'absolute', left:'5%', bottom:'10%', width:260, height:260, borderRadius:'50%', background:light, opacity:0.35 }} />
    </>
  );
  if (layer === 1) return (
    <>
      {/* Sun rays — thin rectangles radiating */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
        <div key={i} style={{
          position:'absolute', left:'72%', top:'28%',
          width: 3, height: i % 2 === 0 ? 80 : 55,
          background: color, opacity: 0.25,
          transformOrigin: 'top center',
          transform: `translateX(-50%) rotate(${deg}deg) translateY(90px)`,
          borderRadius: 4,
        }} />
      ))}
      {/* Sun core */}
      <div style={{ position:'absolute', left:'72%', top:'28%', width:70, height:70, borderRadius:'50%', background:color, opacity:0.35, transform:'translate(-50%,-50%)' }} />
      {/* Floating circle mid-left */}
      <div style={{ position:'absolute', left:'18%', top:'55%', width:100, height:100, borderRadius:'50%', border:`3px solid ${color}`, opacity:0.3 }} />
    </>
  );
  // layer 2 — sparkle dots
  return (
    <>
      {[[15,20],[82,35],[45,70],[68,15],[30,80],[55,45],[88,65],[10,50]].map(([x,y],i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width: i%3===0?14:i%3===1?8:10, height: i%3===0?14:i%3===1?8:10,
          borderRadius:'50%', background:color,
          opacity: 0.3 + (i%3)*0.1,
          transform:'translate(-50%,-50%)',
        }} />
      ))}
      {/* Star shapes using rotated squares */}
      {[[25,40],[70,60],[50,25]].map(([x,y],i) => (
        <div key={`s${i}`} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width:16, height:16, background:color, opacity:0.25,
          transform:'translate(-50%,-50%) rotate(45deg)',
        }} />
      ))}
    </>
  );
}

// ── SADNESS: Raindrops, clouds, teardrops ────────────────────────────────────
export function SadnessDecorations({ color, light, layer }: DecorProps) {
  if (layer === 0) return (
    <>
      {/* Cloud shapes — overlapping circles */}
      <div style={{ position:'absolute', left:'60%', top:'8%', width:320, height:120, borderRadius:60, background:light, opacity:0.6 }} />
      <div style={{ position:'absolute', left:'65%', top:'4%', width:200, height:100, borderRadius:50, background:light, opacity:0.5 }} />
      <div style={{ position:'absolute', left:'15%', top:'15%', width:200, height:80, borderRadius:40, background:light, opacity:0.4 }} />
    </>
  );
  if (layer === 1) return (
    <>
      {/* Raindrop lines */}
      {[20,30,40,50,60,70,80,25,45,65,75,35].map((x,i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${15 + (i%5)*15}%`,
          width:2, height: 18 + (i%3)*8,
          background:color, opacity:0.2 + (i%3)*0.05,
          borderRadius:2,
          transform:'rotate(10deg)',
        }} />
      ))}
      {/* Teardrop oval */}
      <div style={{ position:'absolute', left:'75%', top:'50%', width:60, height:80, borderRadius:'50% 50% 50% 50% / 40% 40% 60% 60%', background:color, opacity:0.2, transform:'translate(-50%,-50%)' }} />
      <div style={{ position:'absolute', left:'25%', top:'65%', width:40, height:55, borderRadius:'50% 50% 50% 50% / 40% 40% 60% 60%', background:color, opacity:0.15, transform:'translate(-50%,-50%)' }} />
    </>
  );
  return (
    <>
      {/* Falling drop dots */}
      {[[18,25],[35,45],[55,20],[72,55],[85,35],[42,70],[28,60],[65,80],[10,40],[78,15]].map(([x,y],i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width: 6+(i%3)*3, height: 10+(i%3)*4,
          borderRadius:'50% 50% 50% 50% / 40% 40% 60% 60%',
          background:color, opacity:0.2+(i%4)*0.05,
          transform:'translate(-50%,-50%)',
        }} />
      ))}
    </>
  );
}

// ── ANGER: Flames, jagged lines, sparks ──────────────────────────────────────
export function AngerDecorations({ color, light, layer }: DecorProps) {
  if (layer === 0) return (
    <>
      <div style={{ position:'absolute', right:'-5%', bottom:'-5%', width:500, height:500, borderRadius:'50%', background:light, opacity:0.45 }} />
      <div style={{ position:'absolute', left:'5%', top:'10%', width:200, height:200, borderRadius:'50%', background:light, opacity:0.3 }} />
    </>
  );
  if (layer === 1) return (
    <>
      {/* Flame shapes — tall ovals with pointed tops using border-radius */}
      {[[65,60],[72,50],[78,65],[60,55],[55,70]].map(([x,y],i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width: 24+(i%3)*12, height: 50+(i%3)*20,
          borderRadius:'50% 50% 30% 30% / 60% 60% 40% 40%',
          background:color, opacity:0.15+(i%3)*0.05,
          transform:`translate(-50%,-50%) rotate(${(i%3-1)*8}deg)`,
        }} />
      ))}
      {/* Jagged horizontal lines */}
      {[30,45,60].map((y,i) => (
        <div key={`l${i}`} style={{
          position:'absolute', left:'5%', top:`${y}%`,
          width:'35%', height:2, background:color, opacity:0.12,
          clipPath:'polygon(0 50%,5% 0,10% 100%,15% 0,20% 100%,25% 0,30% 100%,35% 0,40% 100%,45% 0,50% 100%,55% 0,60% 100%,65% 0,70% 100%,75% 0,80% 100%,85% 0,90% 100%,95% 0,100% 50%)',
        }} />
      ))}
    </>
  );
  return (
    <>
      {/* Spark dots — scattered */}
      {[[20,30],[40,15],[60,40],[80,20],[15,60],[35,75],[55,55],[75,70],[90,45],[25,85],[50,90],[70,10]].map(([x,y],i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width: 4+(i%4)*3, height: 4+(i%4)*3,
          borderRadius:'50%', background:color,
          opacity:0.25+(i%3)*0.1,
          transform:'translate(-50%,-50%)',
        }} />
      ))}
      {/* Small flame tips */}
      {[[30,50],[55,35],[80,60]].map(([x,y],i) => (
        <div key={`f${i}`} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width:12, height:20,
          borderRadius:'50% 50% 30% 30% / 60% 60% 40% 40%',
          background:color, opacity:0.3,
          transform:'translate(-50%,-50%)',
        }} />
      ))}
    </>
  );
}

// ── FEAR: Eyes, lightning bolts, jagged circles ───────────────────────────────
export function FearDecorations({ color, light, layer }: DecorProps) {
  if (layer === 0) return (
    <>
      <div style={{ position:'absolute', left:'50%', top:'50%', width:600, height:600, borderRadius:'50%', border:`2px solid ${light}`, opacity:0.5, transform:'translate(-50%,-50%)' }} />
      <div style={{ position:'absolute', left:'50%', top:'50%', width:400, height:400, borderRadius:'50%', border:`2px solid ${light}`, opacity:0.4, transform:'translate(-50%,-50%)' }} />
      <div style={{ position:'absolute', left:'50%', top:'50%', width:200, height:200, borderRadius:'50%', background:light, opacity:0.25, transform:'translate(-50%,-50%)' }} />
    </>
  );
  if (layer === 1) return (
    <>
      {/* Lightning bolt shapes — thin tall parallelograms */}
      {[[20,30],[75,20],[40,65],[85,55]].map(([x,y],i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width:8, height:60+(i%2)*20,
          background:color, opacity:0.2,
          transform:`translate(-50%,-50%) skewX(-20deg)`,
          borderRadius:2,
        }} />
      ))}
      {/* Eye shapes — wide ovals */}
      {[[30,45],[70,60]].map(([x,y],i) => (
        <div key={`e${i}`}>
          <div style={{ position:'absolute', left:`${x}%`, top:`${y}%`, width:80, height:40, borderRadius:'50%', border:`2px solid ${color}`, opacity:0.25, transform:'translate(-50%,-50%)' }} />
          <div style={{ position:'absolute', left:`${x}%`, top:`${y}%`, width:20, height:20, borderRadius:'50%', background:color, opacity:0.2, transform:'translate(-50%,-50%)' }} />
        </div>
      ))}
    </>
  );
  return (
    <>
      {/* Scattered small circles — like eyes in the dark */}
      {[[15,20],[35,40],[55,15],[75,35],[90,55],[20,65],[45,80],[65,60],[85,75],[10,45],[50,50],[30,25]].map(([x,y],i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width: 5+(i%3)*4, height: 5+(i%3)*4,
          borderRadius:'50%', background:color,
          opacity:0.15+(i%4)*0.06,
          transform:'translate(-50%,-50%)',
        }} />
      ))}
    </>
  );
}

// ── DISGUST: Leaves, organic blobs, swirls ───────────────────────────────────
export function DisgustDecorations({ color, light, layer }: DecorProps) {
  if (layer === 0) return (
    <>
      <div style={{ position:'absolute', right:'0%', top:'20%', width:380, height:380, borderRadius:'60% 40% 70% 30% / 50% 60% 40% 50%', background:light, opacity:0.5 }} />
      <div style={{ position:'absolute', left:'5%', bottom:'15%', width:240, height:240, borderRadius:'40% 60% 30% 70% / 60% 40% 70% 30%', background:light, opacity:0.35 }} />
    </>
  );
  if (layer === 1) return (
    <>
      {/* Leaf shapes — ovals rotated */}
      {[[65,35,'-30deg'],[72,55,'20deg'],[55,65,'-15deg'],[80,40,'45deg'],[60,75,'0deg']].map(([x,y,rot],i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width: 40+(i%3)*20, height: 70+(i%3)*30,
          borderRadius:'50% 50% 50% 50% / 30% 30% 70% 70%',
          background:color, opacity:0.15+(i%3)*0.05,
          transform:`translate(-50%,-50%) rotate(${rot})`,
        }} />
      ))}
      {/* Organic blob */}
      <div style={{ position:'absolute', left:'20%', top:'40%', width:120, height:100, borderRadius:'60% 40% 50% 50% / 50% 60% 40% 50%', border:`2px solid ${color}`, opacity:0.2 }} />
    </>
  );
  return (
    <>
      {/* Small leaf dots */}
      {[[20,25],[40,45],[60,20],[80,40],[15,65],[35,80],[55,55],[75,70],[90,30],[25,50],[50,85],[70,10]].map(([x,y],i) => (
        <div key={i} style={{
          position:'absolute', left:`${x}%`, top:`${y}%`,
          width: 8+(i%3)*4, height: 14+(i%3)*6,
          borderRadius:'50% 50% 50% 50% / 30% 30% 70% 70%',
          background:color, opacity:0.2+(i%3)*0.08,
          transform:`translate(-50%,-50%) rotate(${(i*37)%180}deg)`,
        }} />
      ))}
    </>
  );
}
