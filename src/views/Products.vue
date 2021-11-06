<template>
  <div>
    <div class="container">
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">brand_id</th>
            <th scope="col">category_id</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">delivery_amount</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in productList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ i.id }}</td>
            <td>{{ i.name }}</td>
            <td>{{ i.brand_id }}</td>
            <td>{{ i.category_id }}</td>
            <td>{{ i.price }}</td>
            <td>{{ i.quantity }}</td>
            <td>{{ i.delivery_amount }}</td>
            <td>{{ i.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <form>
      <label>Name</label>
      <input type="tex" v-model="name" />
      <label>brand_id</label>
      <input type="tex" v-model="brand_id" />
      <label>category_id</label>
      <input type="tex" v-model="category_id" />
      <label>primary_image</label>
      <input type="tex" v-model="primary_image" />
      <label>price</label>
      <input type="tex" v-model="price" />
      <label>quantity</label>
      <input type="tex" v-model="quantity" />
      <label>description</label>
      <input type="tex" v-model="description" />
      <label>delivery_amount</label>
      <input type="tex" v-model="delivery_amount" />
      <hr />

      <hr />
      <button @click.prevent="submitForm">submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      brand_id: "",
      category_id: "",
      primary_image: "",
      price: "",
      quantity: "",
      delivery_amount: "",
      description: "",
      productList: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:8000/api/products")
        .then((response) => (this.productList = response.data.data.brands));
    },
    submitForm() {
      axios({
        method: "post",
        url: "http://localhost:8000/api/products",
        data: {
          name: this.name,
          brand_id: this.brand_id,
          category_id: this.category_id,
          price: this.price,
          quantity: this.quantity,
          delivery_amount: this.delivery_amount,
          description: this.description,
          primary_image: this.primary_image,
        },
      })
        .then( (response) => {
         this.getData();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    
  },
  mounted() {
    let token=localStorage.getItem('token');
    axios
      .get(("http://192.168.1.102:8000/api/products")
      ,{
        headers:{ 
          'Access-Control-Allow-Origin':'*',
          'Authorization':`Bearer ${token}`
        }
      }
      )
      .then((response) =>
      // console.log(response)
      (this.productList = response.data.data.brands));
  },
};
</script>
