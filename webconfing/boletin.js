// Importar la biblioteca jsPDF
import jsPDF from "jspdf";

// Crear una instancia de jsPDF
var doc = new jsPDF();

// Obtener el JSON con las URL
var json = JSON.parse('{"url":"urls.json"}');

// Definir el encabezado y el pie de página
doc.setHeaderFooter({
  header: function(currentPage, pageCount) {
    // Agregar el logo
    var logo = new Image();
    logo.src = "logo.jpeg";
    doc.addImage(logo, "JPEG", 10, 10, 50, 50);

    // Agregar el nombre de la web
    doc.setFontSize(20);
    doc.text("Apuntes de Derecho Español", 70, 30);

    // Agregar una línea horizontal
    doc.setLineWidth(0.5);
    doc.line(10, 60, 200, 60);
  },
  footer: function(currentPage, pageCount) {
    // Agregar la expresión de derechos reservados
    doc.setFontSize(10);
    doc.text("© 2023 apuntesdederechoespanol.github.io. Todos los derechos reservados.", 10, 280);

    // Agregar el número de página
    doc.text(currentPage + " / " + pageCount, 180, 280);
  }
});

// Recorrer el array de URL
for (var i = 0; i < json.url.length; i++) {
  // Obtener la URL de la página
  var url = json.url[i];

  // Hacer una petición HTTP para obtener el contenido de la página
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();

  // Si la petición tiene éxito
  if (xhr.status == 200) {
    // Obtener el título y el resumen de la página
    var parser = new DOMParser();
    var html = parser.parseFromString(xhr.responseText, "text/html");
    var title = html.querySelector("h1").textContent;
    var summary = html.querySelector("p").textContent;

    // Añadir el título y el resumen al PDF
    doc.setFontSize(20);
    doc.text(title, 10, 70 + i * 50);
    doc.setFontSize(14);
    doc.text(summary, 10, 80 + i * 50);

    // Añadir una nueva página si no es la última
    if (i < json.url.length - 1) {
      doc.addPage();
    }
  }
}

// Mostrar el PDF en el navegador
doc.output("dataurlnewwindow");
