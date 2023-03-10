export class Cliente {                 //esse codigo chamado de 'class' e um jeito de conter 'propriedades / atributos'.

    get cpf() {
        return this._cpf;
    }

    constructor (nome, cpf, senha) {       //esses parametros sao passados junto com a chamada da classe dessa forma 'Cliente("isaque", 111222333444)'
        this.nome = nome;           //declara propriedade 'nome' recebe paremetro 'nome'. 
        this._cpf = cpf;            //declara propriedade privada '_cpf' recebe paremetro 'cpf';
        this._senha = senha;
    }   //essa classe e usada para chamar um construtor e passar os parametros declarados na classe 'Cliente()' 

    autenticar() {
        return true;
    }

}

