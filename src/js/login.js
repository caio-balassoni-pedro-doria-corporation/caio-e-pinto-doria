function logar() {
    Swal.fire({
        title: 'Login',
        html:
            '<input id="swal-input-user" class="swal2-input" placeholder="Usuário">' +
            '<input id="swal-input-pass" type="password" class="swal2-input" placeholder="Senha">',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Logar',
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const user = document.getElementById('swal-input-user').value;
            const pass = document.getElementById('swal-input-pass').value;

            if (!user || !pass) {
                Swal.showValidationMessage(`Por favor insira um usuário e senha`);
                return false;
            }
            return { user: user, pass: pass };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { user, pass } = result.value;

            if (user === "admin" && pass === "admin") {
                window.location.href = "src/pages/lista.html"
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            document.getElementById('statusMessage').innerText = 'Login cancelled.';
        }
    });
}