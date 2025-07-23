'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '@/lib/firebase'

const disciplinas = [
  { nome: 'Matemática', cor: 'bg-blue-500' },
  { nome: 'Português', cor: 'bg-red-500' },
  { nome: 'História', cor: 'bg-yellow-500' },
  { nome: 'Geografia', cor: 'bg-green-500' },
  { nome: 'Biologia', cor: 'bg-emerald-600' },
  { nome: 'Física', cor: 'bg-indigo-500' },
  { nome: 'Química', cor: 'bg-pink-500' },
]

export default function Painel() {
  const router = useRouter()
  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/login')
    })
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Selecione uma disciplina</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {disciplinas.map((d, i) => (
          <div
            key={i}
            className={`${d.cor} text-white rounded-xl p-6 cursor-pointer shadow-md hover:scale-105 transition`}
          >
            {d.nome}
          </div>
        ))}
      </div>
    </main>
  )
}
