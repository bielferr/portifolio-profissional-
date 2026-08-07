import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gabriel Ferreira | Desenvolvedor Web Freelancer',
  description: 'Desenvolvedor Web Freelancer especializado em sites modernos, rápidos e responsivos para empresas e profissionais.',
  keywords: ['Gabriel Ferreira', 'desenvolvedor web freelancer', 'sites modernos', 'landing page', 'Next.js'],
  openGraph: {
    title: 'Gabriel Ferreira | Desenvolvedor Web Freelancer',
    description: 'Desenvolvedor Web Freelancer especializado em sites modernos, rápidos e responsivos para empresas e profissionais.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
