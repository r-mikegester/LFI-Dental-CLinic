<template>
  <!-- Footer -->
  <footer
    id="footer"
    class="h-full p-4 bg-white mt-50 pb-100 sm:p-6"
    style="background-color: rgba(20, 184, 166, 0.4)"
  >
    <div class="md:flex md:justify-center md:items-center">
      <div class="">
        <a href="#">
          <div>
            <img
              src="../../assets/img/lfi-logo-transparent.png"
              class="px-1 mx-auto w-24 h-24"
            />
          </div>
          <div
            class="px-5 text-2xl font-bold text-center mb-10 md:mb-0 text-sky-700"
          >
            LFI Dental Clinic
          </div>
        </a>
      </div>

      <div
        class="grid grid-cols-1 gap-8 sm:ml-20 sm:mr-20 sm:gap-20 sm:grid-cols-3 sm:justify-items-center"
      >
        <div class="text-center">
          <h2
            class="mb-4 text-lg font-bold uppercase text-sky-700 lg:text-left"
          >
            Services
          </h2>
          <ul class="text-center md:text-left text-gray-600 dark:text-gray-400">
            <li class="font-semibold text-sky-700">Oral Prophylaxis</li>
            <li class="font-semibold text-sky-700">Tooth Restoration</li>
            <li class="font-semibold text-sky-700">Whitening</li>
            <li class="font-semibold text-sky-700">Flouride Treatment</li>
            <li class="font-semibold text-sky-700">Orthodontic Braces</li>
            <li class="font-semibold text-sky-700">Tooth Extraction</li>
            <li class="font-semibold text-sky-700">Complete Denture</li>
            <li class="font-semibold text-sky-700">Partial Denture</li>
            <li class="font-semibold text-sky-700">Jacket Crown</li>
            <li class="font-semibold text-sky-700">Fixed Bridge</li>
          </ul>
        </div>

        <div class="justify-center text-center">
          <h2
            class="mb-4 text-lg font-bold uppercase text-sky-700 lg:text-left"
          >
            Quick Links
          </h2>
          <ul class="text-center md:text-left text-gray-600">
            <li>
              <a href="/" class="font-semibold hover:underline text-sky-700"
                >Home</a
              >
            </li>

            <li>
              <a
                href="/DentalServices"
                class="font-semibold hover:underline text-sky-700"
                >Dental Services</a
              >
            </li>
            <li>
              <a
                href="/Appointments"
                class="font-semibold hover:underline text-sky-700"
                >Appointments</a
              >
            </li>
            <li>
              <a
                href="/About"
                class="font-semibold hover:underline text-sky-700"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="/Contact"
                class="font-semibold hover:underline text-sky-700"
                >Contact Us</a
              >
            </li>
            <li>
              <a
                href="/accountsettings"
                class="font-semibold hover:underline text-sky-700"
                >My Account</a
              >
            </li>
          </ul>
        </div>
        <div class="text-center">
          <h2
            class="mb-4 text-lg font-bold uppercase text-sky-700 lg:text-left"
          >
            Extras
          </h2>
          <ul class="text-center md:text-left text-gray-600 dark:text-gray-400">
            <li>
              <RouterLink
                :to="{ name: 'Frequently Asked Questions Page' }"
                class="font-semibold hover:underline text-sky-700"
              >
                FAQs
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-4 border-sky-700 sm:mx-auto dark:border-sky-700 lg:mt-10" />

    <div class="p-2 flex items-center justify-center">
      <span
        class="text-sm font-semibold text-gray-500 text-center dark:text-gray-400"
        >© 2022.
        <RouterLink
          :to="{ name: 'Home' }"
          class="font-semibold hover:underline text-sky-700"
        >
          LFI Dental Clinic</RouterLink
        >.
        <div>All Rights Reserved.</div>
      </span>
    </div>
  </footer>
  <!-- End of Footer -->
</template>
