<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppLayoutDefault from './layouts/AuthenticationLayout.vue';

export default {
  name: 'App',
  setup() {
    const layout = shallowRef(AppLayoutDefault);
    const route = useRoute();
    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component =
            meta.layout && (await import(`./layouts/${meta.layout}.vue`));
          layout.value = component?.default || AppLayoutDefault;
        } catch (e) {
          layout.value = AppLayoutDefault;
        }
      },
      { immediate: true },
    );
    return { layout };
  },
};
</script>
