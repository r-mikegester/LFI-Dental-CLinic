<script setup>
import BaseLayout from "../../../components/admin//BaseLayout.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <BaseLayout>
    <div class="p-5">
      <div>
        <h1 class="text-2xl text-left font-bold pb-20">
          <RouterLink
            :to="{ name: 'Admin Patient Records Page', params: { uid: 123 } }"
            >Patient Records
          </RouterLink>
          >
          <RouterLink
            :to="{ name: 'Admin Dental Treatments Page', params: { uid: 123 } }"
            >Dental Treatment
          </RouterLink>
        </h1>
      </div>
      <div class="justify-center grid-cols-2 gap-2">
        <button
          class="border-teal-500 border 1px rounded-full py-1 px-2 text-sm mr-3 hover:bg-teal-500 hover:text-white"
        >
          Add Record
        </button>
        <button
          class="border-teal-500 border 1px rounded-full py-1 px-3 text-sm hover:bg-teal-500 hover:text-white"
        >
          Save
        </button>
      </div>
      <div
        class="bg-teal-500/40 p-4 mt-4 grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] font-semibold"
      >
        <div>DATE</div>
        <div>SERVICE</div>
        <div>PROCEDURE</div>
        <div>PRICE</div>
        <div>BALANCE</div>
        <div>STATUS</div>
      </div>
      <div
        class="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] mt-20 py-4 border-t-[1px] border-b-[1px] border-teal-500"
      >
        <div>February 9,2022</div>
        <div>Orthodontic Braces</div>
        <div class="hover:text-sky-500">
          <RouterLink
            :to="{ name: 'Admin Procedures Page', params: { uid: 123 } }"
            >View
          </RouterLink>
        </div>
        <div>1000</div>
        <div>1000</div>
        <div>Unpaid</div>
      </div>
      <div
        class="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] py-4 border-b-[1px] border-teal-500"
      >
        <div>January 8,2022</div>
        <div>Orthodontic Braces</div>
        <RouterLink
          :to="{ name: 'Admin Procedures Page', params: { uid: 123 } }"
          >View
        </RouterLink>
        <div>1000</div>
        <div>0</div>
        <div>Paid</div>
      </div>
      <div
        class="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] py-4 border-b-[1px] border-teal-500"
      >
        <div>December 6,2021</div>
        <div>Tooth Whitening</div>
        <RouterLink
          :to="{ name: 'Admin Procedures Page', params: { uid: 123 } }"
          >View
        </RouterLink>
        <div>500</div>
        <div>0</div>
        <div>Paid</div>
      </div>
    </div>
  </BaseLayout>
</template>
