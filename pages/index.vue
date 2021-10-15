<script>
export default {
  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryBridge()

      // use the input event for instance update of content
      storyblokInstance.on('input', (event) => {
        console.log(this.story.content)
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      })
    })
  },
  async fetch(context) {
    // loading reference data - articles in this case
    if (context.store.state.articles.loaded !== '1') {
      let articlesRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'articles/', version: 'draft' })
      context.store.commit('articles/setArticles', articlesRefRes.data.stories)
      context.store.commit('articles/setLoaded', '1')
    }
  },
  asyncData (context) {
    // inside real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home'

    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
    }).then((res) => {
      return res.data 
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content from api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
};
</script>

<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

