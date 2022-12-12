
export function userCheck(nombreUsuario) {
    console.log("Llega a la función")
    var users = JSON.parse(localStorage.getItem("usuarios"));
    var existe = false;
    if (users) {
        var key = 0;
        console.log("condicional")
        while (!existe && key < users.length) {
            if (users[key].nombreUsuario === nombreUsuario) {
                existe = true;
            }
            key++
        }
    }
    console.log("return")
    return existe
}
