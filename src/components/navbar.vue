<template>
    <div class="flex h-screen bg-gray-200">
        <aside class="w-1/5 bg-white">
            <img src="../assets/heylink.png" alt="" class="py-2 px-4">
            <nav class="py-10">
                <ul>
                    <li>
                        <router-link to="/" class="flex nav-link text-[#424242] font-medium py-2 px-4">
                            <Icon icon="fluent-mdl2:b-i-dashboard" class="mr-2 self-center" />
                            Dashboard
                        </router-link>
                    </li>
                    <li><router-link to="/overview" class="flex nav-link text-[#424242] font-medium py-2 px-4">
                            <Icon icon="grommet-icons:overview" class="self-center mr-2" />
                            Overview
                        </router-link></li>
                </ul>
            </nav>
        </aside>

        <main class="flex-1 p-4 container">
            <router-view></router-view>
        </main>
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue';
export default {
    name: 'Navbar',
}
</script>

<style scoped>
a.router-link-active {
    background-color: #E3F2FD;
}
.container {
  --bg: radial-gradient(#000 5%, #0000 6%);
  --size: 3rem;
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  background-color: lightblue;
  background-image: radial-gradient(#000 5%, #0000 6%),
    radial-gradient(#000 5%, #0000 6%);
  background-position: 0 0, calc(var(--size) / 2) calc(var(--size) / 2);
  background-size: var(--size) var(--size);
}

</style>
  
  