/* Ser autenticavel significa ter o metodo autenticar */
/* 'Duck type' (teste do pato), quer dizer (nao importa o tipo do objeto, se ele resolve meu problema, eu vou usar) */

export class SistemaAutenticacao{
    static login(autenticavel, senha){

        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}