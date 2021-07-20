<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input type="email" class="form-control" v-model="email" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input type="text" class="form-control" v-model="name" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input type="password" class="form-control" v-model="password1" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input type="password" class="form-control" v-model="password2" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"><input type="checkbox" v-model="agreed" /> Я согласен с условиями <span></span></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link to="/login" class="link">/Войдите</router-link>
<!--      <a class="link">Войдите</a>-->
    </div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      name: '',
      password1: '',
      password2: '',
      agreed: false,
    };
  },
  methods: {
    submit() {
      this.email = this.email.trim();
      this.name = this.name.trim();
      this.password1 = this.password1.trim();
      this.password2 = this.password2.trim();
      if (!this.email) {
        alert('Требуется ввести Email');
        return;
      }
      if (!this.name) {
        alert('Требуется ввести полное имя');
        return;
      }
      if (!this.password1 || !this.password2) {
        alert('Требуется ввести пароль');
        return;
      }
      if (this.password1 !== this.password2) {
        alert('Пароли не совпадают');
        return;
      }
      if (!this.agreed) {
        alert('Требуется согласиться с условиями');
        return;
      }
      let res = register(this.email, this.name, this.password1);
      res.then(data => {
        if (data.error) {
          alert(data.message);
        } else {
          alert(data.id);
          this.$router.push('login').catch(()=>{});
        }
      });
    },
  },
};
</script>

<style></style>
