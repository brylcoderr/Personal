export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neo-bg texture-grid">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <div className="w-20 h-20 neo-border bg-neo-secondary neo-shadow-sm animate-spin-slow flex items-center justify-center">
            <span className="text-3xl font-black text-black">★</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-neo-accent neo-border animate-pulse" />
          <span className="text-sm font-black uppercase tracking-widest text-black">
            Loading...
          </span>
          <div className="w-3 h-3 bg-neo-secondary neo-border animate-pulse" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </div>
  )
}
