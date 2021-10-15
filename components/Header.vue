<template>
  <header class="max-w-5xl mx-auto py-8 flex">
    <nav>
      <ul>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/articles">
            Blog
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="flex-1">
      <a href="/" class="block w-28 mx-auto">
        <p class="logo">🛸 🌏  👨‍🚀  🗺️ </p>
      </a>
    </div>
    <nav>
      <ul>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/en/blog">
            English
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/de/blog">
            German
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.logo {
    
}
</style>