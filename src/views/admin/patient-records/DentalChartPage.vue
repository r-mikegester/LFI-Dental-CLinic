<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import BaseLayout from "../../../components/admin/BaseLayout.vue";
import DentalChart from "../../../components/admin/DentalChart.vue";
import DeciduousChart from "../../../components/admin/DeciduousChart.vue";

const route = useRoute();
const patientUid = route.params.uid;

const strokeColor = ref("#EF4444");
const setStrokeColor = (htmlColorCode) => {
  strokeColor.value = htmlColorCode;
};
</script>

<template>
  <BaseLayout>
    <div class="lg:px-6">
      <!-- Page title -->
      <h1 class="text-2xl font-semibold mb-3">
        <RouterLink :to="{ name: 'Admin Patient Records Page' }">
          Patient Records
        </RouterLink>
        >
        <RouterLink
          :to="{ name: 'Admin Dental Chart Page', params: { uid: patientUid } }"
        >
          Dental Chart
        </RouterLink>
      </h1>
      <!-- Top form  -->
      <div class="mb-8">
        <div class="grid grid-cols-[12rem_1fr] gap-2 mb-3">
          <div class="text-right">Patient's complaint:</div>
          <div class="border-b border-sky-600"></div>
        </div>
        <div class="mb-3">
          Clinical Examination (face, lips, cheeks, palate, tongue, missing
          teeth, oropharynx, gingivae, malocclusion)
        </div>
        <div class="grid grid-cols-[12rem_1fr] gap-2 mb-3">
          <div class="text-right">Diagnosis:</div>
          <div class="border-b border-sky-600"></div>
        </div>
        <div class="grid grid-cols-[12rem_1fr] gap-2 mb-3">
          <div class="text-right">Treatment Plan:</div>
          <div class="border-b border-sky-600"></div>
        </div>
      </div>
      <!-- Chart -->
      <div>
        <!-- Legends -->
        <div
          class="max-w-fit mx-auto border border-sky-600 rounded-lg px-8 py-3 mb-8"
        >
          <div class="mb-2">Legends:</div>
          <div
            class="grid xs:grid-cols-2 xs:grid-rows-3 xs:grid-flow-col lg:grid-cols-3 lg:grid-rows-2 pl-8 gap-x-8 gap-y-2"
          >
            <div @click="setStrokeColor('#3B82F6')">
              <span class="text-blue-500">⬤</span>
              Restoration
            </div>
            <div @click="setStrokeColor('#22C55E')">
              <span class="text-green-500">⬤</span>
              Root canal
            </div>
            <div @click="setStrokeColor('#EF4444')">
              <span class="text-red-500">⬤</span>
              Extraction
            </div>
            <div @click="setStrokeColor('#9CA3AF')">
              <span class="text-gray-400">⬤</span>
              Missing
            </div>
            <div @click="setStrokeColor('#FDE047')">
              <span class="text-yellow-300">⬤</span>
              Jacket
            </div>
            <div @click="setStrokeColor('#FB923C')">
              <span class="text-orange-400">⬤</span>
              Pontic
            </div>
          </div>
        </div>

        <!-- Dental chart -->
        <div class="mb-12">
          <DentalChart :strokeColor="strokeColor" :patientUid="patientUid" />
        </div>

        <!-- Deciduous chart -->
        <div>
          <DeciduousChart :strokeColor="strokeColor" :patientUid="patientUid" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
