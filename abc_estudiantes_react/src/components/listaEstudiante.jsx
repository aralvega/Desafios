import { useState } from "react";
import {initialStudents} from "../services/estudianteService";
import './listaEstudiante.css';

export const StudentList = ()=>{
    const [students, setStudents] = useState(initialStudents);
    const [searchTerm,setSearchTerm] = useState('');
    const [newStudent,setNewStudent] = useState('');

    const filteredStudents = students.filter(s=>
        s.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAdd =()=>{
        if(newStudent && !students.includes(newStudent)){
            //recuerda mencionar el operador spread ...
            //copia todos los elementos de students en un nuevo arreglo
            setStudents([...students,newStudent]);
            setNewStudent('')
        }
    }

    const handleRemove = (name)=>{
        setStudents(students.filter(s=>s !== name));
    }

    return(
        <div className="container">
            <h2>Lista de Alumnos</h2>

            <input type="text" placeholder="Buscar alumno"
                value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            />

            <ul>
                {filteredStudents.map((s, i) => (
                <li key={i}>
                    {s}
                    <button onClick={() => handleRemove(s)}>Eliminar</button>
                </li>
                ))}
            </ul>

            <input
                type="text"
                placeholder="Nuevo alumno"
                value={newStudent}
                onChange={e => setNewStudent(e.target.value)}
            />
            <button onClick={handleAdd}>Agregar</button>
        </div>
    )

}