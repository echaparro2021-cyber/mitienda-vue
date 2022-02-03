<template>
    <div class="col">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="image">
            <div class="card-body">
            <h5 class="card-title">{{ product.name}}</h5>
            <p class="card-text">{{ product.description}}</p>
            <p class="card-text">{{ product.price}}</p>
            <button 
            @click="addProductToCar"
            class="btn btn-danger btn-sm" >Seleccionar</button>
          </div>
      </div>
    </div>
</template>

<script>

import { addProduct } from '../services/car';

    export default {
        props: {
            product: {
                type: Object
            }
        },
        setup(props) {

            const addProductToCar = () => {
                addProduct(props.product);
            }

            return {
                addProductToCar,
            }
        },
    }
</script>