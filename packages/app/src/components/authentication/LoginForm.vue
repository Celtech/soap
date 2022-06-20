<template>
  <form class="space-y-6" action="#" method="POST">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <div class="mt-1">
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required=""
          class="block py-2 px-3 w-full placeholder:text-gray-400 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 shadow-sm appearance-none sm:text-sm" />
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div class="mt-1">
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required=""
          class="block py-2 px-3 w-full placeholder:text-gray-400 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 shadow-sm appearance-none sm:text-sm" />
      </div>
    </div>

    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <input
          id="remember_me"
          name="remember_me"
          type="checkbox"
          class="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
        <label for="remember_me" class="block ml-2 text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </a>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex justify-center py-2 px-4 w-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm">
        Sign in
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
};
</script>
