export const inicializarTabla = (containerId,data)=>{
    const tbody = document.querySelector('#videogames-table tbody');

    tbody.innerHTML = '';
    data.forEach(juego => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${juego.id}</td>
            <td>${juego.nombre}</td>
            <td>${juego.fechaLanzamiento}</td>
            <td>${juego.genero}</td>
        `;
        tbody.appendChild(row);
    });
};