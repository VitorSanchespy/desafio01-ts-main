import { DioAccount } from "./DioAccount"
export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor:number) => {
    if(this.validateStatus()){
      this.deposit(valor)
      console.log('Empréstimo realizado com Sucesso')
      this.getBalance()
    }else{
      console.error('Erro ao solicitar Emprestimo');
    }

}
}
