

export const getQuestions = async url => {
    await fetch(url)
    .then(res => res.json())
    .then(datos => {
        cargaPreguntas(datos);
    })
}

const cargaPreguntas = (datos) => {
    var pregunta, resCorrecta, resIncorrecta = [];
    for (let i = 0; i < 10; i++) {
        pregunta = datos.results[i].question;
        resCorrecta = datos.results[i].correct_answer
        for (let j = 0; j < 3; j++) {
            resIncorrecta[j] = (datos.results[i].incorrect_answers[j])
        }
        localStorage.setItem(`Pregunta${i}`, pregunta);
        localStorage.setItem(`resCorrecta${i}`, resCorrecta);
        localStorage.setItem(`resIncorrecta${i}`, JSON.stringify(resIncorrecta));
    }
}