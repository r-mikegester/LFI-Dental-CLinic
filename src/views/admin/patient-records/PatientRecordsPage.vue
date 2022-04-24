<script setup>
import BaseLayout from "../../../components/admin//BaseLayout.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <BaseLayout>
    <div>
      <h1 class="text-3xl font-bold text-left p-2 pb-20">Patient Records</h1>
    </div>
    <div>
      <label class="relative block float-right">
        <span class="absolute inset-y-0 right-2 flex items-center pl-2">
          <img src="../../../assets/img/search-icon.png" />
        </span>
        <input
          class="placeholder:normal placeholder:text-slate-400 block bg-white w-80 border-2 border-sky-400/60 border-3px py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search Name"
          type="text"
          name="search"
        />
      </label>
    </div>
    <div class="mt-12 bg-teal-500/40">
      <div class="p-4 grid grid-cols-[1fr_2fr_2fr_2fr_2fr_1fr] font-semibold">
        <div>Patient ID</div>
        <div>Name</div>
        <div>Medical Chart</div>
        <div>Dental Chart</div>
        <div>Dental Treatment</div>
      </div>
    </div>
    <div class="text-left">
      <div
        class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[1fr_2fr_2fr_2fr_2fr_1fr]"
      >
        <div>0019</div>
        <div>Jane Doe</div>
        <div class="hover:text-sky-500"><button>View</button></div>
        <div class="hover:text-sky-500"><button>View</button></div>
        <div class="hover:text-sky-500">
          <RouterLink
            :to="{ name: 'Admin Dental Treatments Page', params: { uid: 123 } }"
            >View
          </RouterLink>
        </div>
        <div>
          <button class="mr-5 float-right">
            <img src="../../../assets/img/trash-icon.png" />
          </button>
        </div>
      </div>
      <div
        class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[1fr_2fr_2fr_2fr_2fr_1fr]"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        class="border-b-[1px] border-teal-500 p-4 grid grid-cols-[1fr_2fr_2fr_2fr_2fr_1fr]"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </BaseLayout>
</template>
