<template>
  <div>
    <header class="header">
    <h1>
      <a href="/"><img src="img/logo.svg" alt="Meetups" /></a>
    </h1>
    <nav>
      <a href="login.html">Вход</a>
      <a href="register.html">Регистрация</a>
      <a href="meetup-form.html">Создать митап</a>
    </nav>
    </header>

    <main class="main">
      <div class="page page_404">
        <div class="container">
          <h1 class="text-center">
            Страница не найдена
            <span>404</span>
          </h1>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        © 2021. learn.javascript.ru <a href="https://learn.javascript.ru/courses/vue">Vue.js Course</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style scoped>
.page.page_404 {
  padding: 100px 0;
}

.page.page_404 h1 {
  font-family: Nunito, sans-serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 1.2;
  text-align: center;
  color: var(--body-color);
}

.page.page_404 h1 > span {
  display: block;
  font-size: 144px;
}

@media all and (max-width: 767px) {
  .page.page_404 h1 {
    font-size: 36px;
  }

  .page.page_404 h1 > span {
    font-size: 108px;
  }
}
</style>
