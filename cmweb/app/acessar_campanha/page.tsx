import Button from "@/app/Components/Button"

export default function AcessarCampanha({ params }: { params: { id: bigint } }) {
    return (
        <div>
            <h1>Acessar Sala de campanha</h1>
            <form action="">
                <label htmlFor="">Nome</label>
                <input type="text" />
                <label htmlFor="">Senha</label>
                <input type="text" />
                <Button classe="bg-sky-600" valor="Acessar"/>
            </form>
        </div>
    )
}