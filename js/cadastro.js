function entrar() {
    
    let usuario = document.getElementById('email').value;
    let chave = document.getElementById('senha').value;

    let emaildefinido = 'loginadm@gmail.com';
    let senhadefinida = '12345';

    if (usuario === '' || chave === '') {
        window.alert('Por favor preencha todos os campos necessários');
    } 

    else if (usuario === emaildefinido && chave === senhadefinida) {
        window.alert('Seja Bem-vindo ao Cine Movie!');
        window.location.href = 'index.html';
    } 

    else {
        window.alert('Email ou Senha incorretos, por favor verifique e reescreva corretamente');
    }
}
