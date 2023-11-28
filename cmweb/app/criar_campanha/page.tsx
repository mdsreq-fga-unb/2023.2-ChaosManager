import Button from "@/app/Components/Button";

export default function CriarCampanha({ params }: { params: { id: bigint } }) {
  return (
    <div>
      <h1>Criar Sala de campanha</h1>
      <form action="">
        <label htmlFor="">Nome</label>
        <input type="text" />
        <label htmlFor="">História</label>
        <div className="container mx-auto px-4 text-black">
          <div className="bg-slate-50" contentEditable="true"></div>
        </div>

        <Button classe="bg-green-600" valor="Criar" />
      </form>
    </div>
  );
}
