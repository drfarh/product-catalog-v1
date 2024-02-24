export class Customers {
    constructor() {
        this.customersStore = [];
    }

    addCustomer(person) {
        this.customersStore.push(person);
    }

    showCustomers() {
        let custList = "<br><br>List of Customers:<br>"
            this.customersStore.forEach(customer => {
            custList += `Name: ${customer.getFullName()}, Email: ${customer.getEmail()}<br>`;
            // console.log(customer.getFullName());
            // console.log("Email:", customer.getEmail());
        });
        return custList;
    }
}