<script>
import dashify from 'dashify'
import { availableComponents } from '../plugins/components'

export default {
  data () {
    return {
      story: {},
      error: null,
      availableComponents
    }
  },
  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryBridge()

      // use the input event for instance update of content
      storyblokInstance.on('input', 'published', 'change', (event) => {
        if (event.action === 'input') {
          if (event.story.id === this.story.id) {
            this.story.content = event.story.content
          }
        } else {
          window.location.reload()
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
  },
  methods: {
    dashify
  }
};
</script>

<template>
  <section>
    <div v-if="story.content">
      <template v-for="component in story.content.body">
        <component :is="`blok-${dashify(component.component)}`"
          v-if="availableComponents.includes(`blok-${dashify(component.component)}`)"
          :key="component._uid"
          :blok="component"
        ></component>
      </template>
    </div>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

