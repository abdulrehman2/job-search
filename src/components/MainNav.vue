<template>
  <header>
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a v-bind:href="url" class="flex h-full items-center text-xl">{{ company }}</a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="item in menuitems" v-bind:key="item">
              <a href="" class="flex h-full items-center py-2.5"> {{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'X Careers',
      url: 'https://careers.google.com',
      menuitems: ['Teams', 'Locations', 'How we Hire', 'Students', 'Jobs'],
    }
  },
}
</script>
