import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center gap-10">
      <Link
        href="/criar_campanha"
        className="bg-lime-300 p-16 rounded-lg text-xl font-semibold text-zinc-800 ease-in-out duration-300 hover:p-20"
      >
        Criar sala de campanha
      </Link>
      <Link
        href="/acessar_campanha"
        className="bg-blue-500 p-16 rounded-lg text-xl  font-semibold text-zinc-800 ease-in-out duration-300 hover:p-20"
      >
        Acessar sala de campanha
      </Link>
      <Link
        href="/dev_tests"
        className="bg-pink-500 p-16 rounded-lg text-xl  font-semibold text-zinc-800 ease-in-out duration-300 hover:p-20"
      >
        Dev Tests
      </Link>
    </main>
  );
}
