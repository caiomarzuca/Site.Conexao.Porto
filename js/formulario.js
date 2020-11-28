/* Confirguração de resposta após submissão (submit) do form*/
$('#form-contato').submit(function () {
    var nome = $('#nome');
    var alertaErro = $('.alert');
    var campoErro = $('#campo-erro');

    alertaErro.addClass('d-none'); // Remove o alerta de erro sempre que clicar em submit 
    $('.is-invalid').removeClass('is-invalid');


    if (nome.val() == '') {
        alertaErro.removeClass('d-none');
        campoErro.html('nome'); // Nome do campo que não foi preenchido 
        nome.focus();
        nome.addClass('is-invalid');
        return false
    }


    return false;
});