import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAcount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
//peopleAccount.deposit(20)
//peopleAccount.withdraw(140)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const newAccountSpecial:SpecialAccount = new SpecialAccount('Isaac', 2442)

peopleAccount.deposit(5)
peopleAccount.withdraw(29)
companyAccount.getLoan(200)
newAccountSpecial.depositSpecial(10)



//companyAccount.getBalance()
//peopleAccount.getBalance()
//companyAccount.getLoan(20000)