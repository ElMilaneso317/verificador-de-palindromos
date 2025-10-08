document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btnVerificar");

  boton.addEventListener("click", function () {
    const texto = document.getElementById("texto").value.trim();

    if (texto === "") {
      Swal.fire({
        icon: "warning",
        title: "Oye viejo...",
        text: "Escribe algo antes de comprobar no seas sonso",
        confirmButtonColor: "#6c5ce7",
      });
      return;
    }

    const limpio = texto.toLowerCase().replace(/\s/g, "");
    const invertido = limpio.split("").reverse().join("");

    if (limpio === invertido) {
      Swal.fire({
        icon: "success",
        title: "¡Sí jala, es un palíndromo!",
        text: `"${texto}" se lee igual al revés.`,
        confirmButtonColor: "#0984e3",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "No es un palíndromo (todo pndejo)",
        text: "Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda..",
        confirmButtonColor: "#d63031",
      });
    }
  });
});
