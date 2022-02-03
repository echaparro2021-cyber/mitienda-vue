const getProducts = () => {

    const url = 'http://ecommerce-php.test/api/product';

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',

        }
    });
}


export {
    getProducts,
}
