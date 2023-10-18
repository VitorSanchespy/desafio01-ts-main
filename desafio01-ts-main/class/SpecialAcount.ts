import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {
    constructor(name:string , accountNumber:number){
        super(name, accountNumber)
    }   
    depositSpecial =(valor:number) =>{
            this.deposit(valor + 10)
            console.log('Deposito especial realizado com Sucesso')
            this.getBalance()
    }

}