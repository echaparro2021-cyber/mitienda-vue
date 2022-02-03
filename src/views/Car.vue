<template>
    <div class="container">
    <div class="card">
  <h5 class="card-header">
    Productos
    </h5>
    <div class="card-body">
    <input type="email" v-model="email" 
    placeholder="Escriba su correo:"
    class="form-control"/>
    <table class="table">
  <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Inventario</th>
            <th scope="col">Cantidad</th>
            </tr>
  </thead>
  <tbody>
        <template v-for="product in products" :key="product.id" >
            <tr>
                <td><img width="100" height="50" :src="product.image" alt="imagen"></td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.inventory }}</td>
                <td>
                <input 
                v-model="product.quantity"
                @change="onChange($event, product)"
                class="form-control"
                type="number"/>
                </td>
                <td>
                    
                    <button
                    @click="removeProduct(product)"
                    class="btn btn-danger btn-sm">Borrar</button>
                </td>
            </tr>        
        </template>
  </tbody>
</table>
    <button 
    @click="buy"
    class="btn btn-success">Comprar</button>
    </div>
</div>
    </div>
</template>

<script>
    
    import { ref, onMounted } from 'vue';
    import { getProducts, deleteProduct, clearProducts } from '../services/car';
    import { createOrder } from '../services/order';
import Swal from 'sweetalert2';


    export default {
        setup() {

            const products = ref([]);
            const quantity = ref(0);
            const email = ref('');


            onMounted(() => {
                products.value = getProducts();
            });

            const removeProduct = (product) => {
                deleteProduct(product);
                products.value = getProducts();

            }

            const buy = async ()  => {
                console.log(products.value);

                if(email.value === '') {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'El correo es necesario para continuar',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                } else {

                    for(const product of products.value) {
                        if(!product.quantity || product.quantity <= 0) {
                            Swal.fire(
                                'Informacion',
                                `Por favor escriba la cantidad de ${product.name}`,
                                'info'
                            );
                            return;
                        }
                    }
                    
                    const order  = {
                    email: email.value,
                    products: products.value,
                
                }

                    Swal.fire({
                    allowOutsideClick: false,
                    text: 'Cargando la orden...'
                    });

                    Swal.showLoading();
                
                const resp = await createOrder(order);

                if(!resp.ok) {
                    console.log('Error al guardar orden');
                } else{
                    console.log('Orden enviada');
                    clearProducts();
                    products.value = [];
                    email.value = '';
                }
                Swal.close();

                }

            }

            const onChange = (event, product) =>{
                // Podemos detectar el cambio en el cuadro input 
                // Podemos guardar datos del producto en el LocalStorage
                console.log(event.target.value, product);
            }

            return {
                products,
                removeProduct,
                buy,
                onChange,
                email,
            }
        
        }
    }

</script>