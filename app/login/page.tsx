'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function LoginPage() {
  const [mode, setMode] = useState<'email' | 'mobile'>('email')

  return (
    <div className={`min-h-screen flex flex-col bg-dotted-grid ${inter.className}`}>
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-800/50 bg-yellow-100">
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
          jayintern
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="/">
            <Button size="sm" variant="secondary">Back</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8">
          <h1 className={`text-2xl md:text-3xl mb-6 text-center ${playfair.className}`}>Login</h1>

          <div className="grid grid-cols-2 gap-2 mb-6">
            <button
              className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                mode === 'email' ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-600'
              }`}
              onClick={() => setMode('email')}
            >
              Login via Email ID
            </button>
            <button
              className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                mode === 'mobile' ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-600'
              }`}
              onClick={() => setMode('mobile')}
            >
              Login via Mobile Number
            </button>
          </div>

          {mode === 'email' ? (
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/30"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/30"
                />
              </div>
              <Button className="w-full">Continue</Button>
            </form>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-neutral-300 mb-2">Mobile Number</label>
                <div className="flex gap-2">
                  <select className="px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none">
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+61</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-2">OTP</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/30"
                  />
                  <Button type="button" variant="secondary">Get OTP</Button>
                </div>
              </div>
              <Button className="w-full">Verify & Continue</Button>
            </form>
          )}

          <p className="text-center text-xs text-neutral-500 mt-6">
            By continuing, you agree to our{' '}
            <a href="#" className="text-neutral-300 underline">Terms</a>
            {' '}and{' '}
            <a href="#" className="text-neutral-300 underline">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  )
}


