export class Customers {
    constructor() {
        this.customersStore = [];
    }

    addCustomer(person) {
        this.customersStore.push(person);
    }

    showCustomers() {
        console.log("List of Customers:");
        this.customersStore.forEach(customer => {
            console.log(customer.getFullName());
            console.log("Email:", customer.getEmail());
        });
    }
}