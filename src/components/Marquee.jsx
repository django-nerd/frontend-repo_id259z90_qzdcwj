import { useEffect, useRef } from 'react'

const items = [
  'LLM Apps',
  'AI Agents',
  'RAG Systems',
  'Multilingual NLP',
  'Voice + Speech',
  'Computer Vision',
  'MLOps',
  'Eval & Safety',
  'Automations',
  'Finetuning',
]

export default function Marquee() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const clone = el.innerHTML
    el.innerHTML = clone + clone
  }, [])

  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
      <div ref={ref} className="group whitespace-nowrap will-change-transform animate-[marquee_25s_linear_infinite] [--gap:3rem]">
        {items.map((text, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span>
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
