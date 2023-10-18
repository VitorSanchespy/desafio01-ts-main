export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 100
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
  getName = (): string => {
    return this.name
  }
  deposit = (valor:number) =>{
    if(this.validateStatus()){
      this.balance += valor
      console.log('Deposito realizado com Sucesso')
      this.getBalance()
      return this.balance
      }
    }


  withdraw = (valor:number) => {
    if(this.validateStatus() && valor <= this.balance){
      this.balance -= valor
      console.log('Saque realizado com Sucesso')
      this.getBalance()
      return this.balance
    }else{
      console.error('Erro ao Sacar');
    }
  }

  getBalance = ():void => {
    console.log(`Saldo: ${this.balance}`)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
