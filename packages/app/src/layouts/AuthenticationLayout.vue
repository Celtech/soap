<template>
  <div
    class="flex flex-col justify-center py-12 min-h-screen bg-gray-50 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto w-auto h-12"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow" />
      <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mx-4 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthenticationLayout',
};
</script>
