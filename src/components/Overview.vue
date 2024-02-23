<script>
import { ref } from 'vue'
import cities from '../assets/js/city'
import provinces from '../assets/js/province'
const selected1 = ref('')
const selected2 = ref('')


export default {
    data() {
        return {
            selectedCity: [],
            selectedProvince: {},
            provinces,
            cities
        }
    }, methods: {
        async renderFunction1(provinceId) {
            this.selectedCity = cities.filter(e => e.provinsi_id == provinceId)
        },
        async renderFunction2(provinceId) {
            console.log(provinceId, "<><><><><");
            this.selectedProvince = provinces.find(e => e.id == provinceId)
        },
        sortProvincesByIdAsc() {
            this.provinces.sort((a, b) => a.id - b.id);
        },
        sortProvincesByIdDesc() {
            this.provinces.sort((a, b) => b.id - a.id);
        },
        sortProvincesByNameAsc() {
            this.provinces.sort((a, b) => a.name.localeCompare(b.name));
        },
        sortProvincesByNameDesc() {
            this.provinces.sort((a, b) => b.name.localeCompare(a.name));
        }
    },
    mounted() {
        this.sortProvincesByNameAsc();
    }

}

</script>
<template>
    <div class="bg-white drop-shadow-md p-2 pb-10 rounded-md">
        <div class="flex gap-10">
            <div class="text-lg text-black font-semibold flex flex-col justify-center">Pilih Kota Berdasarkan Provinsi Yang Dipilih</div>
            <div class="flex flex-col justify-center">
                <h1 class="font-medium m-3 ">Province</h1>
                <div class="text-sm">klik select untuk memilih</div>
                <select v-model="selected1" @change="renderFunction1(selected1)" class="rounded-md h-10 px-3 font-medium">
                    <option disabled selected class="text-black" value="">Select Province
                    </option>
                    <option v-for="(province, index) in provinces" :key="index" :value="province.id"> {{ province.name }}
                    </option>
                </select>
            </div>
            <div class="flex flex-col justify-center">
                <h1 class="font-medium m-3">City</h1>
                <div class="text-sm">select provinsi terlebih dahulu</div>
                <select v-model="selected1" class="rounded-md h-10 px-3 font-medium">
                    <option disabled value="" selected>Select City</option>
                    <option v-for="(city, index) in selectedCity" :key="index" :value="city.id"> {{ city.name }}
                    </option>
                </select>
            </div>
        </div>
        <hr class="my-5">
        <div>
            <div class="text-lg text-black font-semibold">Memilih Provinsi Berdasarkan Kota Yang Dipilih</div>
            <div>
                <h1 class="font-medium text-lg m-3">Province : {{ selectedProvince.name }}</h1>
                <div class="text-sm">klik select untuk memilih</div>

                <select class="rounded-md h-10 px-3 font-medium text-black border-blue-950 border-2" v-model="selected2" @change="renderFunction2(selected2)">
                    <option disabled selected value="">Select City</option>
                    <option  v-for="(city, index) in cities" :key="index" :value="city.provinsi_id"> {{ city.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<style></style>