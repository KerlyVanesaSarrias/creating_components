
export const FirstComponent = () => {

    const name = "Inés María Oliveros";

    const github_profile = "https://github.com/inesmariao";

    const student = {
        name: "Kerly ",
        last_name: "Sarrias",
        mobile: "3143046748",
        linkedin_profile: "https://www.linkedin.com/in/kerly-vanessa-7ab012284/"
    };

    console.log(student);

    return (
        <>
            <h1>MyFirstComponent</h1>
            <div className="container mt-4">
                <h1>Temas de React</h1>
                <ul>
                    <li>Componentes</li>
                    <li>Eventos</li>
                    <li>Estados Hooks</li>
                    <li>Props</li>
                </ul>
            </div>
            <div className="container py-2">
                <h1>Datos del Docente</h1>
                <p>Nombre: <strong>{name}</strong></p>
                <p>GitHub: {github_profile} </p>
            </div>
            <div className="container py-2">
                <h1>Datos del Estudiante</h1>
                <p>Nombre: <strong>{student.name}</strong></p>
                <p>Apellido: {student.last_name} </p>
                <p>Celular: {student.mobile} </p>
                <p>LinkedIn: <a href={student.linkedin_profile}>{student.linkedin_profile}</a> </p>
            </div>
            <div className="container mt-2 pt-2">
                <h1>Objeto Completo</h1>
                <pre>{JSON.stringify(student)} </pre>
            </div>
        </>
    )
}