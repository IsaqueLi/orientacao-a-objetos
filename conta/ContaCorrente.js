import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{                    //serve para declarar uma classe que esta prota para uso.
    static numeroDeContas = 0;        //'static'indica que uma propriedade e statica e para cada nova conta declarada seu numero e somado a 1.
    //serve guardar o numero de 'ContaCorrente' criadas. 

    constructor (cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;    //esse comando serve para acessar 'numeroDeContas' de forma statica 
    }

    //Esta sobreescrevendo o comportamento de sacar
    sacar(valor){

        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

   /*  sacar (valor) {                         //serve para executar a funcao de saque e usar o valor passado pelo parametro 'valor'. 
        if(this._saldo >= valor) {           //essa e a condicao de saque do valor.
            this._saldo -= valor;             //se a condicao for verdadeira, saque o valor
            return valor                       //esse comando serve para retornar o valor sacado.
        }else {                                 //senao, execute o 'console.log'   
            console.log("Saldo insuficiente");   //serve para exibir uma mensagem'
        }
    }

    depositar (valor) {                                 //essa classe foi criada para que o cliente possa depositar
        if(valor > 100) {                                 //essa é a condicao para depositar
            this._saldo += valor;                       //esse saldo recebe valor depositado.
        }else {                                         //senao
            console.log("Erro: Operação invalida");     //executa mensagem de erro.
        }
    }

    transferir (valor, conta) {                     //semelhante a uma classe com parametros que trazem valor e conta que seram usadas na operacao.
        const valorSacado = this.sacar(valor);      //cria uma variavel e executa o metodo de saque e valor de saque dessa conta.
        conta.depositar(valorSacado);               //deposita o valor sacado em outra conta.
    } 
}    */

