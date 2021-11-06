<template>
  <div>
    <div class="container">
      <form>
        <!-- {{ csrf_field() }} -->
     
        <label for="">ایمیل</label>
        <input type="text" v-model="email" />
        <label for="">پسورد</label>
        <input type="text" v-model="password" />
       
        <button @click.prevent="Login">ورود</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      axios({
        method: "post",
        url: "http://192.168.1.102:8000/api/login",
        data: {
          email: this.email,
          password: this.password,
        },
      },{
        headers:{ 
          // 'Access-Control-Allow-Origin':'*',
          // 'Authorization':`Bearer ${token}`
        }
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
 
};
</script>
