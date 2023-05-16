<script>
    var btnComentarios = document.getElementById("btn-comentarios");
    var btnHistoria = document.getElementById("btn-historia");
    var btnCampana = document.getElementById("btn-campana");
    var contenido = document.querySelector("main2");

    btnComentarios.addEventListener("click", function() {
    contenido.innerHTML = "<h2>Comentarios</h2><p>Contenido de comentarios aquí</p>";
});

    btnHistoria.addEventListener("click", function() {
    contenido.innerHTML = "<h2>Historia</h2><p>Contenido de historia aquí</p>";
});

    btnCampana.addEventListener("click", function() {
    contenido.innerHTML = "<h2>Campaña</h2><p>Contenido de campaña aquí</p>";
});

    // Obtener todas las preguntas
    var questions = document.querySelectorAll(".question");

    // Iterar sobre cada pregunta
    questions.forEach(function(question) {
    // Agregar evento "click" a cada pregunta
    question.addEventListener("click", function() {
        // Obtener la respuesta correspondiente
        var answer = this.nextElementSibling;

        // Abrir o cerrar la respuesta
        answer.style.display = answer.style.display === "none" ? "block" : "none";

        // Cambiar la dirección de la flecha
        var arrow = this.querySelector(".arrow");
        arrow.classList.toggle("open");
    });
});

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}






</script>



