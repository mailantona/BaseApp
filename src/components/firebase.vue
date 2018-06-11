<template>
  <div class="container">


    <div class="page-header">
      <h2>Пример использования Firebase</h2>
    </div>
    <div class="panel panel-default">
      <div class="panel panel-heading">
        <h3>Добавление</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline">
          <div class="form-group">
            <label for="customerURL">URL:</label>
            <input type="text" id="customerURL" class="form-control" v-model="newBook.URL">
            {{newBook.URL}}
          </div>
          <div class="form-group">
            <label for="customerauthor">author:</label>
            <input type="text" id="customerauthor" class="form-control" v-model="newBook.author">
            {{newBook.author}}
          </div>
          <div class="form-group">
            <label for="customertitle">title:</label>
            <input type="text" id="customertitle" class="form-control" v-model="newBook.title">
            {{newBook.title}}
          </div>
          <input type="submit" value="Add Customers" class="btn btn-primary">

        </form>
   
      </div>
    </div>



    <div class="panel panel-default">
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <th>URL</th>
            <th>Author</th>
            <th>Title</th>
          </thead>
          <tbody>
            <tr v-for="(customer, index) in customers" :key="index">
              <td>{{ customer.URL }}</td>
              <td>{{ customer.author }}</td>
              <td>{{ customers.title }}</td>
            </tr>
          </tbody>
        </table>
        <p>{{ customers }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from "firebase";
  let config = {
    apiKey: "AIzaSyCQfY3w768Lr93kInaJjvOwO-x00tNxdM8",
    authDomain: "sp-atelier.firebaseapp.com",
    databaseURL: "https://sp-atelier.firebaseio.com",
    projectId: "sp-atelier",
    storageBucket: "sp-atelier.appspot.com",
    messagingSenderId: "162832378320"
  };
  let app = Firebase.initializeApp(config);
  let db = app.database();
  let bookRef = db.ref("Customers");
  export default {
    firebase: {
      customers: bookRef
    },
    data() {
      return {
        newBook: {
          URL: '',
          author: '',
          title: '',
        }
      }
    }
  };
</script>

<style scoped>

</style>