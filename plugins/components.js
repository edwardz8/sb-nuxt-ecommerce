import Vue from 'vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Products from '~/components/Products.vue'
import ProductGrid from '~/components/ProductGrid.vue'
import Feature from '~/components/Feature.vue'
import FeaturedArticles from '~/components/FeaturedArticles.vue'
import CategoryProducts from '~/components/CategoryProducts.vue'
 
Vue.component('page', Page)
Vue.component('hero', Teaser)
Vue.component('product-slider', Products)
Vue.component('grid', ProductGrid)
Vue.component('feature', Feature)
Vue.component('featured-articles', FeaturedArticles)
Vue.component('category-products', CategoryProducts)

export const availableComponents = [
    'page',
    'feature',
    'product-slider',
    'grid',
    'category-products',
    'block-hero'
]