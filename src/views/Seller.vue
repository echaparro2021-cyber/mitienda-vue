<template>
<h3>Sellers</h3>
    <div class="container" >
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre de la tienda</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="seller in sellers" :key="seller.id">
            <tr>
              <td>{{seller.id}}</td>
              <td>{{seller.name}}</td>   
            </tr>
          </template>
        </tbody>
      </table>
</div>
</template>

<script>

import { ref, onMounted } from 'vue'; 
import { getSellers } from '../services/seller';
import Swal from 'sweetalert2'

export default {

      setup() {

      let sellers = ref([]);

      const setSellers = async () => {

        Swal.fire({
          allowOutsideClick: false,
          text: 'Cargando sellers'
        });

        Swal.showLoading();

        console.log('Iniciando backend Sellers')
        const resp = await getSellers();
        console.log('resp');

        if (!resp.ok) {
          console.log('Error, ha fallado la solicitud get sellers');
        } else {
          sellers.value = await resp.json();
          console.log(sellers);
          
        }

        Swal.close();
      }

      onMounted(() => {

        setSellers();
      });

      return {
        sellers,
      }
    }
}

</script>