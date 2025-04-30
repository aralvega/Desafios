import { studentService } from '../services/estudianteService.js';

const container = document.getElementById("studentApp");

const render = () => {
  container.innerHTML = `
    <input id="search" placeholder="Buscar alumno..." />
    <input id="newStudent" placeholder="Nuevo alumno" />
    <button id="addBtn">Agregar</button>
    <ul>
      ${studentService.getAll().map(name => `<li>${name} <button class="del" data-name="${name}">X</button></li>`).join("")}
    </ul>
  `;

  document.getElementById("addBtn").onclick = () => {
    const name = document.getElementById("newStudent").value;
    if (name) studentService.add(name);
    render();
  };

  document.querySelectorAll(".del").forEach(btn => {
    btn.onclick = () => {
      studentService.remove(btn.dataset.name);
      render();
    };
  });

  document.getElementById("search").oninput = (e) => {
    const filtered = studentService.search(e.target.value);
    const list = container.querySelector("ul");
    list.innerHTML = filtered.map(name => `<li>${name}</li>`).join("");
  };
};

render();