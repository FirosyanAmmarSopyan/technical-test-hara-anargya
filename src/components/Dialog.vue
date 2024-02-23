<template>
    <Transition name="fade">
        <div
            class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div class="bg-white p-6 rounded-md">
                <div class="flex gap-5 items-center">
                    <div>
                        <img :src="selectedUser.profile_picture" class="rounded-full size-40" alt="">
                    </div>
                    <div>
                        <div class="text-black font-medium text-4xl ">
                            {{ selectedUser.first_name.concat(" " + selectedUser.last_name) }}
                        </div>
                        <div class="text-black font-medium text-2xl ">
                            {{ selectedUser.email }}
                        </div>
                        <div class="text-black font-medium text-2xl ">
                            {{ selectedUser.phone }}
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <ul class="list-disc font-medium">
                        <li v-for="(value, key) in selectedUser" :key="key">
                            {{ key }} :
                            <span v-if="key === 'date_of_birth'">{{ this.$MyGlobal.formatDate(value) }}</span>
                            <span v-else>{{ value }}</span>
                        </li>
                    </ul>
                </div>
                <button @click="closeDetailDialog" class="bg-gray-300 px-4 py-2 rounded-md mt-4">Close</button>
            </div>
        </div>
    </Transition>
</template>

<script>
    export default {
       props : ['showDetailDialog' , 'selectedUser' , 'closeDetailDialog' ],
    }
</script>