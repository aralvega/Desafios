export const videojuegos = [
  { id: 1,  nombre: 'Super Mario Bros',                   fechaLanzamiento: '1985-09-13', genero: 'Plataformas' },
  { id: 2,  nombre: 'The Legend of Zelda',                fechaLanzamiento: '1986-02-21', genero: 'Aventura'   },
  { id: 3,  nombre: 'Mario Kart 64',                      fechaLanzamiento: '1996-02-01', genero: 'Carreras'   },
  { id: 4,  nombre: 'Zelda II: The Adventure of Link',   fechaLanzamiento: '1987-01-14', genero: 'Aventura'   },
  { id: 5,  nombre: 'Metroid',                            fechaLanzamiento: '1986-08-06', genero: 'Acción'     },
  { id: 6,  nombre: 'Castlevania',                        fechaLanzamiento: '1986-09-26', genero: 'Acción'     },
  { id: 7,  nombre: 'Super Mario World',                  fechaLanzamiento: '1990-11-21', genero: 'Plataformas' },
  { id: 8,  nombre: 'Donkey Kong Country',                fechaLanzamiento: '1990-11-21', genero: 'Plataformas' },
  { id: 9,  nombre: 'Tetris',                             fechaLanzamiento: '1989-06-14', genero: 'Puzzle'     },
  { id: 10, nombre: 'Mega Man 2',                         fechaLanzamiento: '1988-12-24', genero: 'Acción'     }
];

export const buscarPorId = (arr,id)=>
    arr.filter(juego =>juego.id===id);

export const buscarPorNombre = (arr,nombre)=>
    arr.filter(juego=>juego.nombre.toLowerCase().includes(nombre.toLowerCase()));

export const buscarPorFecha = (arr,fecha)=>
    arr.filter(juego => juego.fechaLanzamiento === fecha);