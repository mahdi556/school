<template>
  <div>
    <div class="container">
      <form>
        <!-- {{ csrf_field() }} -->
        <label for="">نام کاربری</label>
        <input type="text" v-model="name" />

        <label for="">ایمیل</label>
        <input type="text" v-model="email" />
        <label for="">پسورد</label>
        <input type="text" v-model="password" />
        <label for="">تکرار پسورد</label>
        <input type="text" v-model="c_password" />

        <button @click.prevent="Register">عضویت</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      c_password:'',
    };
  },
  methods: {
    Register() {
      axios({
        method: "post",
        url: "http://192.168.1.102:8000/api/register",
        data: {
          name: this.name,
          email: this.email,
          password: this.password,
          c_password: this.c_password,
        },
      })
        .then(
          (response) => {
            let token=response.data.token;
            localStorage.setItem('token',token);
        }
        )
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => (this.productList = response.data.data.brands));
  },
};
</script>
