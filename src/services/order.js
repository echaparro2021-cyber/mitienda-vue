const createOrder = () =>{

    const url = '';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'applcation/json',
            //Aca la autorizacion de la sesion
        },
        body: JSON.stringify(order),

    });
} 

export {

    createOrder,
}