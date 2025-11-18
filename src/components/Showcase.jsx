import { Code2, CircuitBoard, Bot, Rocket, Languages, Shield } from 'lucide-react'

const items = [
  {
    icon: Bot,
    title: 'Autonomous agents',
    desc: 'Goal-driven multi-tool agents with memory and guardrails.'
  },
  {
    icon: Code2,
    title: 'LLM products',
    desc: 'From chat apps to copilots, built on OpenAI, Anthropic, or open models.'
  },
  {
    icon: CircuitBoard,
    title: 'RAG at scale',
    desc: 'Low-latency retrieval over multilingual corpora with evals.'
  },
  {
    icon: Languages,
    title: 'Nepali + English',
    desc: 'Bi/tri-lingual UX, Nepali script and Romanized support.'
  },
  {
    icon: Shield,
    title: 'Safety + evals',
    desc: 'Red-teaming, telemetry, offline/online eval pipelines.'
  },
  {
    icon: Rocket,
    title: 'From idea to launch',
    desc: 'Rapid prototypes to production with MLOps baked in.'
  }
]

export default function Showcase() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          What we craft
        </h2>
        <p className="mt-3 text-slate-300/90">
          Specialized AI systems engineered for Himalayan reliability.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-[0_0_40px_-20px_#8b5cf6] transition-all hover:shadow-[0_0_50px_-12px_#a78bfa]">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 text-white">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300/90">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
