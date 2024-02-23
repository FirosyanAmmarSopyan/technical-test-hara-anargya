<script>
import axios from "axios";
import dayjs from "dayjs";
import Dialog from '../components/Dialog.vue'
export default {
    methods: {
        async renderUser() {
            try {
                const { data } = await axios({
                    url: this.$MyGlobal.baseUrl,
                    method: "get"
                })
                // console.log(data.users, "<><><><");
                this.users = data.users

            } catch (error) {
                console.log(error);
            }
        },
        openDetailDialog(user) {
            this.selectedUser = user;
            this.showDetailDialog = true;
        },
        closeDetailDialog() {
            this.showDetailDialog = false;
        }
    },
    data() {
        return {
            users: [],
            showDetailDialog: false,
            selectedUser: null
        }
    },
    mounted() {
        this.renderUser();
    },
    components: {
        Dialog
    }
}
</script>

<template>
    <div class="bg-white drop-shadow-md p-2 rounded-md">
        <h1 class="text-black font-bold py-5">User List</h1>

        <table class="w-full">
            <thead class="py-3 border-b-2 border-dashed border-indigo-500 " style="padding: 10px;">
                <tr>
                    <th class="text-black py-3">ID</th>
                    <th class="text-black py-3">User</th>
                    <th class="text-black py-3">Date Of Birth</th>
                    <th class="text-black py-3">Email</th>
                    <th class="text-black py-3">Job</th>
                    <th class="text-black py-3">Country</th>
                    <th class="text-black py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td class="text-black py-1">{{ user.id }}</td>
                    <td class="text-black py-1 flex gap-2" >
                        <div class="size-5  flex self-center">
                            <img :src="user.profile_picture" class="rounded-full" alt="User Image">
                        </div>
                        {{ user.first_name.concat(" " + user.last_name) }}
                    </td>
                    <td class="text-[#686868]">{{ this.$MyGlobal.formatDate(user.date_of_birth) }}</td>
                    <td class="text-black py-1 truncate" :title="user.email">{{ user.email }}</td>
                    <td class="text-[#686868]" :title="user.email">{{ user.job }}</td>
                    <td class="text-black py-1 ">{{ user.country }}</td>

                    <td class="text-black py-1 ">
                        <div class="">
                            <!-- <button class="bg-slate-50 drop-shadow-md mx-2 p-1 rounded-md hover:bg-slate-100">
                                Select
                            </button> -->
                            <button @click="openDetailDialog(user)"
                                class="bg-slate-50 drop-shadow-md mx-2 p-1 rounded-md hover:bg-slate-200">
                                View Detail
                            </button>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
    <Transition name="fade">
        <Dialog v-if="showDetailDialog" :showDetailDialog="showDetailDialog" :selectedUser="selectedUser"
            :closeDetailDialog="closeDetailDialog" />
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.truncate {
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    cursor: pointer; /* Menampilkan cursor pointer saat dihover */
}
</style>