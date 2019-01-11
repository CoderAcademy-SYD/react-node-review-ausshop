const stripe = require("./../config/stripe");

async function getCustomerIdByEmail(email) {
    let customer = await getCustomerByEmail(email);

    if (!customer) {
        customer = await stripe.customers.create({ email });
    }

    return customer.id;
}

async function getCustomerByEmail(email) {
    const customer = await stripe.customers.list({ email });
    return customer.data[0];
}

async function getCustomerById(id) {
    const customer = await stripe.customers.retrieve(id);
    return customer;
}


module.exports = {
    getCustomerByEmail,
    getCustomerIdByEmail,
    getCustomerById
}