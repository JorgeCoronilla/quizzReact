
export function addUserNew(user, email) {
    var currentUser = {
        "nombreUsuario": user,
        "email": email,
        "partidas": [0],
        "fechasPartidas": ["Partida 0"]
    }
    console.log("Funcion usuarionuevo " + email)
    var users = JSON.parse(localStorage.getItem("usuarios"));
    if (!users) {
        localStorage.setItem("usuarios", JSON.stringify([currentUser]));
    } else {
        users.push(currentUser);
        localStorage.setItem("usuarios", JSON.stringify(users));
    }
}

export function addUserInfo(user, email, score) {
    var date = new Date();
    //date = date.toLocaleDateString();

    var currentUser = {
        "nombreUsuario": user,
        "email": email,
        "partidas": [score],
        "fechasPartidas": [date.toLocaleDateString()]
    }

    var users = JSON.parse(localStorage.getItem("usuarios"));
    if (!users) { 
        localStorage.setItem("usuarios", currentUser )
    } else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].nombreUsuario === user) {
                users[i].fechasPartidas.push(date.toLocaleDateString());
                users[i].partidas.push(score);
            }
        }
        localStorage.setItem("usuarios", JSON.stringify(users) )
    }
}