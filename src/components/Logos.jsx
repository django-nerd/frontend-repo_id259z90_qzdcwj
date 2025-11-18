const brands = ['Ncell', 'Daraz', 'Nabil Bank', 'Sastodeal', 'IME Pay', 'Fusemachines']

export default function Logos() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-6">
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
          {brands.map((b) => (
            <div key={b} className="text-sm font-medium tracking-wide text-slate-300/90">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
