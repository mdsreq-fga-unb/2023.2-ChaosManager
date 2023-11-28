import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row justify-center space-x-10">
      <Link href="/criar_campanha"><button className="bg-lime-300 p-64">Criar sala de campanha</button></Link>
      <Link href="/acessar_campanha"><button className="bg-blue-500 p-64">Acessar sala de campanha</button></Link>
      </div>
    </main>
  )
}
