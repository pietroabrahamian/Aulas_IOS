const buscarCep = async () => {
    const cep = document.querySelector('#cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const valoresEndereco = await fetch(url);
    const valor = await valoresEndereco.json()
    atualizarPag(valor)
}

let atualizarPag = (valor) => {
    document.querySelector("#endereco").value = valor.logradouro
    document.querySelector("#bairro").value = valor.bairro
}
document.querySelector("#cep").addEventListener('focusout', buscarCep)
document.querySelector("body").addEventListener('focuson', )
