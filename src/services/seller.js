const getSellers = () => {

    const url = 'http://ecommerce-php.test/api/seller';

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',

        }
    });
}


export {
    getSellers,
}