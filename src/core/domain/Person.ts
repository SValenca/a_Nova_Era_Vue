export class Person {
  name: string = ""
  email: string = ""
  document?: string
  telephone: string = ""
  gender?: string
  photo?: string
  typePerson: string = "fisic"
  typeAccess: string = "client"
  password: string = ""
  //address: Address = ""
  //company: Company =""
  isActive: boolean = true
}
constructor () {
  this.name = ""
  this.email  = ""
  this.password = ""
  this.telephone = ""
  this.typePerson = "fisic"
  this.typeAccess= "client"
  this.isActive= true 
}
//export default new Person
