<template>
  <div>
    <div class="container">
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">city</th>
            <th scope="col">postal_code</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in items" :key="index">
            <th scope="row">{{ index + 1 }}</th>

            <td>
              <router-link :to="`/single/teachers/ ${index}`">{{
                i.name
              }}</router-link>
            </td>
            <td>{{ i.email }}</td>
            <td>{{ i.address }}</td>
            <td>{{ i.city_id }}</td>
            <td>{{ i.postal_code }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    let token = localStorage.getItem("token");

    Axios.get("http://localhost:8000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) =>
      (this.items = response.data)
    );
  },
};
</script>
