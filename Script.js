const cvHTML = document.getElementById("hojas-de-vida");
const searchInput = document.getElementById("searchInput");

const allStudents = [
  { id: 1, nombre: "Camilo Geovanis Alvarez Gutierrez", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 2, nombre: "Yineth Avila Villalobos", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/311603/user/icon/moove/f1?rev=571286" },
  { id: 3, nombre: "Arlinson Adalberto de Jesus Barrios Aguilar", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 4, nombre: "Wilman Alfonso Cabana Camargo", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 5, nombre: "Marlon Yesid Calvo Ospino", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 6, nombre: "Kevin Andres Castillo Herrera", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/312406/user/icon/moove/f1?rev=563346" },
  { id: 7, nombre: "Armando Jose Hernandez Gamez", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/305268/user/icon/moove/f1?rev=578575" },
  { id: 8, nombre: "Alejandro Luis Hincapie Pulido", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 9, nombre: "Victor Jose Jaimes", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 10, nombre: "Oscar David Jimenez Torres", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 11, nombre: "Mateo Damian Lopez Ospino", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 12, nombre: "Rolando Jose Martinez Dejonhg", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/310328/user/icon/moove/f1?rev=536188" },
  { id: 13, nombre: "Valentina Martinez Henao", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/309781/user/icon/moove/f1?rev=566530" },
  { id: 14, nombre: "Brayan de Jesus Muñoz Acuña", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/310383/user/icon/moove/f1?rev=571070" },
  { id: 15, nombre: "Santiago Andres Naranjo Diaz", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 16, nombre: "Victor Mauricio Navarro Botello", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 17, nombre: "Valentina Sarait Nieves Hernandez", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 18, nombre: "Ruben de Jesus Ochoa Vasco", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/311335/user/icon/moove/f1?rev=684798" },
  { id: 19, nombre: "Adriana Carolina Olivares Vasquez", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/309963/user/icon/moove/f1?rev=650459" },
  { id: 20, nombre: "Frey Alfonso Ortiz Araujo", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 21, nombre: "Jader Javier Ortiz Quiñones", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 22, nombre: "Alvaro David Ospino Sanchez", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/310301/user/icon/moove/f1?rev=611921" },
  { id: 23, nombre: "Julian Felipe Payares Zambrano", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/311336/user/icon/moove/f1?rev=674621" },
  { id: 24, nombre: "Ivan David Perez Villafaña", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/311334/user/icon/moove/f1?rev=958756" },
  { id: 25, nombre: "Juan David Rivera Santana", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/312129/user/icon/moove/f1?rev=611974" },
  { id: 26, nombre: "Bryan Andre Robles Mojica", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 27, nombre: "Johan Alberto Robles Solano", programa: "", ocupacion: "Profesor", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/1427/user/icon/moove/f1?rev=21098" },
  { id: 28, nombre: "Sebastian Andres Ruiz Pertuz", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/311399/user/icon/moove/f1?rev=674492" },
  { id: 29, nombre: "Karyme Judith Sanchez Fernandez", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "" },
  { id: 30, nombre: "Julian Andres Tobias Agudelo", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/309896/user/icon/moove/f1?rev=664189" },
  { id: 31, nombre: "Jader Isaac Torregroza Castro", programa: "", ocupacion: "Estudiante", linkedin: "", x: "", facebook: "", foto: "https://campusvirtual.unimagdalena.edu.co/pluginfile.php/310793/user/icon/moove/f1?rev=592239 " }
];



function renderStudents(array) {
  const hvHTML = array.map((hoja) => {
    return `      
        <div class="info-estudiante" id="hoja-${hoja.id}">
          ${
          hoja.foto 
            ? `<img src="${hoja.foto}" alt="Foto de ${hoja.nombre}" class="foto-perfil">` 
            : `<i class="fa-solid fa-circle-user" id="foto-de-perfil"></i>`
        }
          <div class="botones">
            <div class="info">
              <p id="centrado">
                <strong id="nombre">${hoja.nombre}</strong>
              </p>
              <p id="texto-ocupacion">${hoja.ocupacion}</p>
              <a id="ver-mas" href="Resources/Tarea/Index.html">Ver más</a>
            </div>
            <div class="redes">
              <a href="${hoja.linkedin}" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="${hoja.x}" target="_blank">
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="${hoja.facebook}" target="_blank">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </div>
          </div>
        </div>`;
  }).join("");
  cvHTML.innerHTML = hvHTML;
}

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtrados = allStudents.filter((hoja) =>
      hoja.nombre.toLowerCase().includes(query)
    );
    renderStudents(filtrados);
  });

renderStudents(allStudents);
