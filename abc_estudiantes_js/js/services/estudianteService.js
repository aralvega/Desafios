export const studentService = (()=>{
    let students = ["Ana", "Luis", "Carlos"];

    const getAll = () => students;
    const add = (name) => students.push(name);
    const remove = (name) => {
        students = students.filter(s => s !== name);
    };
    const search = (term) => students.filter(s => 
            s.toLowerCase().includes(term.toLowerCase()));

    return { getAll, add, remove, search };
})();

