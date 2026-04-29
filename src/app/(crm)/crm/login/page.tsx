'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function CRMLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Email ou senha incorretos.')
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(57,255,20,0.1),rgba(255,255,255,0))]">
      <div className="w-full max-w-md relative z-10 px-4">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4 animate-bounce">🪂</div>
          <h1 className="text-4xl font-black uppercase tracking-[0.1em] text-white">
            FlyUp <span className="text-neon text-shadow-neon">CRM</span>
          </h1>
          <p className="text-[11px] font-bold text-zinc-400 mt-2 uppercase tracking-[0.3em]">
            Sistema de Gestão de Leads
          </p>
        </div>

        {/* Form */}
        <div className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_-12px_rgba(57,255,20,0.15)] relative overflow-hidden">
          {/* Subtle neon accent line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent" />

          <h2 className="text-[13px] font-black text-white uppercase tracking-[0.15em] mb-8 text-center">
            Acesso Restrito
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seu@email.com"
                className="w-full bg-[#09090b]/50 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-neon/50 focus:bg-[#09090b] focus:ring-1 focus:ring-neon/50 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-[#09090b]/50 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-neon/50 focus:bg-[#09090b] focus:ring-1 focus:ring-neon/50 transition-all duration-300"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-xs font-medium text-red-400 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-neon text-black font-black uppercase tracking-[0.15em] text-xs py-4 rounded-xl hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] disabled:opacity-50 disabled:hover:bg-neon disabled:hover:shadow-none transition-all duration-300 mt-2"
            >
              {loading ? 'Autenticando...' : 'Entrar no Sistema'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
