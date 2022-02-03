<template>
<div class="container-fluid">
  <div class="row row-cols-1 row-cols-md-5 g-4">
    <template v-for="product in products" :key="product.id">
      <product-card :product="product" /> 
  </template>
</div>
</div>
</template>

<script>

import { getProducts } from '../services/product';
import { ref, onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import Swal from 'sweetalert2';

export default {
  name: 'Home',
  components: {
    ProductCard

  },
  setup() {

    let products = ref([]);

    const setProducts = async () => {

      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });

      Swal.showLoading();

      console.log('Iniciando la solicitud al backend')
      const resp = await getProducts();
      console.log(resp);
      
      if (!resp.ok) {
        console.log('Error, la solicitud ha fallado');
      } else{
        products.value = await resp.json();
        console.log(products);
      }

      Swal.close();
    
    }

    onMounted(() => {
    
    //Aqui se llama la funcion
    setProducts();
    });

  return {
    products,
  }
  }
}

</script>
