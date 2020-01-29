<template>
    <div>
      <h1>Posts</h1>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <h3>{{ post.title }}</h3>
          {{ post.body }}
        </li>
      </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Posts',
  computed: {
    ...mapGetters('posts', [ 'posts' ])
  },
  mounted: function () {
    this.fetch()
  },
  methods: {
    ...mapActions('posts', [ 'fetch' ])
  }
}
</script>

<style>

</style>
