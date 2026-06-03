import { LuUserSearch } from "react-icons/lu";
import { alunos } from "../data/alunos";

export default function ListaPendencia() {

    const resultado = alunos.map((aluno, index) => {

        if (aluno.pendencia === true) {

            return <tr key={index.matricula}>
                <td>{aluno.matricula}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.media}</td>
            </tr>
        }
        return null
    })

    return (
        <>
            <LuUserSearch/>
            <h2>Lista de Alunos Pendentes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Média</th>
                    </tr>
                </thead>
                <tbody>
                    {resultado}
                </tbody>
            </table>
        </>
    )
}