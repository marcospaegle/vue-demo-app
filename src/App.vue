<template>
  <div id="app" class="app">
    <Header />
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './views/Page/Shared/Header'
import Footer from './views/Page/Shared/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i&display=swap');

.app {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: normal;
  font-style: normal;
}
</style>
