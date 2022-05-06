<script setup>
import BaseLayout from "../../components/patient/BaseLayout.vue";
</script>
<template>
  <BaseLayout>
    <div>
      <div id="hero" class="bg-fixed relative">
        <h5
          class="absolute z-30 justify-center text-5xl font-bold text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          My Account
        </h5>
        <img
          src="../../assets/img/bgs/ContactUs.jpg"
          class="w-full bg-fixed object-fit-cover object-center filter brightness-50"
          style="
            height: 50vh;
            background-position: center;
            background-size: 100% 100%;
          "
        />
      </div>
    </div>
    <div class="py-5 px-24">
      <div class="relative overflow-x-auto py-10 sm:rounded-lg">
        <div class="p-4">
          <h5
            class="z-30 justify-start text-5xl font-bold text-left text-sky-700"
          >
            My History
          </h5>
        </div>
        <table class="w-full text-sm text-left text-gray-500">
          <thead
            class="text-xs text-sky-700 uppercase"
            style="background-color: rgba(20, 184, 166, 0.4)"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Service</th>
              <th scope="col" class="px-6 py-3">Procedure</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Balance</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="p-4">
                <div class="flex items-center"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b border-teal-500 hover:bg-gray-50">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-sky-700 whitespace-nowrap"
              >
                April 28, 2022
              </th>
              <td class="px-6 py-4 text-sky-700">Orthodontic Braces</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-teal-500 hover:underline hover:text-teal-700"
                  >&nbsp;</a
                >
              </td>
              <td class="px-6 py-4 text-sky-700">&nbsp;</td>
              <td class="px-6 py-4 text-sky-700">&nbsp;</td>
              <td class="px-6 py-4 text-sky-700">&nbsp;</td>
              <td class="px-6 py-4 text-sky-700">
                <a
                  href="#"
                  class="font-medium text-teal-500 hover:underline hover:text-sky-700"
                  >cancel</a
                >
              </td>
            </tr>
            <tr class="bg-white border-b border-teal-500 hover:bg-gray-50">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-sky-700 whitespace-nowrap"
              >
                February 9, 2022
              </th>
              <td class="px-6 py-4 text-sky-700">Orthodontic Braces</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-teal-500 hover:underline hover:text-sky-700"
                  >Request Access</a
                >
              </td>
              <td class="px-6 py-4 text-sky-700">1000</td>
              <td class="px-6 py-4 text-sky-700">1000</td>
              <td class="px-6 py-4 text-sky-700">Unpaid</td>
              <td class="px-6 py-4 text-sky-700">
                <a
                  href="#"
                  class="font-medium text-teal-500 hover:underline hover:text-sky-700"
                  >cancel</a
                >
              </td>
            </tr>
            <tr class="bg-white border-b border-teal-500 hover:bg-gray-50">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-sky-700 whitespace-nowrap"
              >
                January 8, 2022
              </th>
              <td class="px-6 py-4 text-sky-700">Orthodontic Braces</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-teal-500 hover:underline hover:text-sky-700"
                  >View Procedure</a
                >
              </td>
              <td class="px-6 py-4 text-sky-700">1000</td>
              <td class="px-6 py-4 text-sky-700">0</td>
              <td class="px-6 py-4 text-sky-700">Paid</td>
              <td class="px-6 py-4 text-sky-700">
                <a
                  href="#"
                  class="font-medium text-teal-500 hover:underline hover:text-sky-700"
                  >cancel</a
                >
              </td>
            </tr>
            <tr class="bg-white border-b border-teal-500 hover:bg-gray-50">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-sky-700 whitespace-nowrap"
              >
                December 6, 2021
              </th>
              <td class="px-6 py-4 text-sky-700">Tooth Whitening</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-teal-500 hover:underline hover:text-sky-700"
                  >View Procedure</a
                >
              </td>
              <td class="px-6 py-4 text-sky-700">500</td>
              <td class="px-6 py-4 text-sky-700">0</td>
              <td class="px-6 py-4 text-sky-700">Paid</td>
              <td class="px-6 py-4 text-sky-700">
                <a
                  href="#"
                  class="font-medium text-teal-500 hover:underline hover:text-sky-700"
                  >cancel</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </BaseLayout>
</template>
