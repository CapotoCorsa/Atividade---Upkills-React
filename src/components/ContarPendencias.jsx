export default function ContarPendencias({ alunos }) {
    const totalPendencia = alunos.reduce((total, aluno) => {
        return aluno.pendencia ? total + 1 : total;
    }, 0);

    return (
        <div className="total-pendencia">
            <h2>Total de Pendências</h2>
            <p>{totalPendencia}</p>
        </div>
    );
}