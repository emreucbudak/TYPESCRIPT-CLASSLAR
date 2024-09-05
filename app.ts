class Person {
    id;
    firstName;
    LastName;
    constructor(id:number,firstName:string,LastName:string) {
        // TIP BELIRTMEYI UNUTMA
        this.id = id;
        this.firstName = firstName;
        this.LastName = LastName;
    }
    getFullName() {
        console.log(this.firstName + this.LastName)
    }
}
let kisibilgim = new Person(14,'Emre', 'Üçbudak')
kisibilgim.getFullName();