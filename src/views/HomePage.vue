<script setup>
import BaseLayout from "../components/patient/BaseLayout.vue";
</script>
<template>
  <BaseLayout>
    <div>
      <div>
        <div
          class="relative bg-cover bg-no-repeat bg-center"
          style="min-height: 90vh"
        >
          <img
            src="../assets/img/bgs/bg2.jpg"
            class="w-full object-cover h-[90vh]"
            style="object-position: top left"
          />
          <div
            class="flex flex-col justify-center items-center md:items-end absolute inset-0 text-center text-white p-10 bg-black opacity-75"
          >
            <div
              class="justify-center absolute inset-x bottom-20 md:inset-y-0 md:right-10 md:top-56"
            >
              <h2 class="text-2xl md:text-4xl text-right font-bold">
                Get an <span class="text-teal-500">Appointment</span> Now!
              </h2>
              <p class="md:text-right">Don't let your Agony set it for you.</p>
              <router-link :to="{ name: 'Appointments Page' }"
                ><button
                  class="bg-transparent text-teal-500 font-bold hover:text-white py-2 px-4 my-4 border-2 border-teal-500 rounded inline-flex items-center md:float-right hover:bg-teal-500 hover:border-teal-500 transition-all ease-in duration-75"
                >
                  <span>Get Started!</span>
                  <svg
                    class="ml-2 w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== Services Section Start -->
    <div
      class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5 class="mt-5 mb-5 text-5xl font-bold text-center text-sky-700">
        OUR SERVICES
      </h5>
      <div class="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <router-link :to="{ name: 'General Dentistry Page' }">
          <div class="p-8">
            <div class="max-w-md text-center">
              <div
                class="flex items-center justify-center w-40 h-40 mx-auto mb-10 transition-colors duration-200 ease-in-out bg-teal-100 rounded-full hover:bg-teal-300 sm:w-40 sm:h-40 hover:scale-110"
              >
                <img src="../assets/img/services/general_dentistry.ico" />
              </div>
              <h1 class="mb-2 text-2xl font-semibold leading-5">
                GENERAL DENTISTRY
              </h1>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Cosmetic Surgery Page' }">
          <div class="p-8">
            <div class="max-w-md text-center">
              <div
                class="flex items-center justify-center w-40 h-40 mx-auto mb-10 transition-colors duration-200 ease-in-out bg-teal-100 rounded-full hover:bg-teal-300 sm:w-40 sm:h-40 hover:scale-110"
              >
                <img src="../assets/img/services/cosmetic_dentistry.ico" />
              </div>
              <h1 class="mb-2 text-2xl font-semibold leading-5">
                COSMETICS SURGERY
              </h1>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Oral Surgery Page' }">
          <div class="p-8">
            <div class="max-w-md text-center">
              <div
                class="flex items-center justify-center w-40 h-40 mx-auto mb-10 transition-colors duration-200 ease-in-out bg-teal-100 rounded-full hover:bg-teal-300 sm:w-40 sm:h-40 hover:scale-110"
              >
                <img src="../assets/img/services/oral_surgery.ico" />
              </div>
              <h1 class="mb-2 text-2xl font-semibold leading-5">
                ORAL SURGERY
              </h1>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Orthodontics Page' }">
          <div class="p-8">
            <div class="max-w-md text-center">
              <div
                class="flex items-center justify-center w-40 h-40 mx-auto mb-10 transition-colors duration-200 ease-in-out bg-teal-100 rounded-full hover:bg-teal-300 sm:w-40 sm:h-40 hover:scale-110"
              >
                <img src="../assets/img/services/orthodontics.ico" />
              </div>
              <h1 class="mb-2 text-2xl font-semibold leading-5">
                ORTHODONTICS
              </h1>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Pediatric Dentistry Page' }">
          <div class="p-8">
            <div class="max-w-md text-center">
              <div
                class="flex items-center justify-center w-40 h-40 mx-auto mb-10 transition-colors duration-200 ease-in-out bg-teal-100 rounded-full hover:bg-teal-300 sm:w-40 sm:h-40 hover:scale-110"
              >
                <img src="../assets/img/services/pediatric_dentistry.ico" />
              </div>
              <h1 class="mb-2 text-2xl font-semibold leading-5">
                PEDIATRIC DENTISTRY
              </h1>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'Prosthodontics Page' }">
          <div class="p-8">
            <div class="max-w-md text-center">
              <div
                class="flex items-center justify-center w-40 h-40 mx-auto mb-10 transition-colors duration-200 ease-in-out bg-teal-100 rounded-full hover:bg-teal-300 sm:w-40 sm:h-40 hover:scale-110"
              >
                <img src="../assets/img/services/prosthodontics.ico" />
              </div>
              <h1 class="mb-2 text-2xl font-semibold leading-5">
                PROSTHODONTICS
              </h1>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- ====== Services Section End -->

    <!--- Start of Frequently Asked Questions -->
    <section>
      <div class="z-20 w-full bg-gradient-to-br from-teal-500 to-sky-700">
        <div class="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8 faqs">
          <h5 class="mb-10 text-5xl font-bold text-center text-white">
            FREQUENTLY ASKED QUESTIONS
          </h5>

          <blockquote
            class="p-8 transition-colors duration-200 ease-in-out bg-white rounded shadow-lg hover:bg-gray-200"
          >
            <div class="flex items-center">
              <div class="ml-4 text-sm">
                <p class="font-medium">
                  Do I need to arrive early for my first appointment?
                </p>
              </div>
            </div>

            <p class="relative mt-4 text-gray-500">
              <span class="text-xl">&ldquo;</span>
              -Yes, at least15 minutes early to fill out essential paperwork and
              give the staff time to get you all set up
              <span class="text-xl">&rdquo;</span>
            </p>
          </blockquote>

          <blockquote
            class="p-8 mt-2 transition-colors duration-200 ease-in-out bg-white rounded shadow-lg hover:bg-gray-200"
          >
            <div class="flex items-center">
              <div class="ml-4 text-sm">
                <p class="font-medium">
                  What are early signs of dental trouble?
                </p>
              </div>
            </div>
            <p class="relative mt-4 text-gray-500">
              <span class="text-xl">&ldquo;</span>
              -The possible early signs of dental trouble are: Toothache;
              Sensitive Teeth; Bleeding or Sore Gums; Bad Breath; Cavities; Jaw
              Pain; Mouth Sores; Dry Mouth; Broken, Cracked, Chipped, Lost.
              <span class="text-xl">&rdquo;</span>
            </p>
          </blockquote>

          <blockquote
            class="p-8 mt-2 transition-colors duration-200 ease-in-out bg-white rounded shadow-lg hover:bg-gray-200"
          >
            <div class="flex items-center">
              <div class="ml-4 text-sm">
                <p class="font-medium">
                  What are early signs of dental trouble?
                </p>
              </div>
            </div>
            <p class="relative mt-4 text-gray-500">
              <span class="text-xl">&ldquo;</span>
              -The possible early signs of dental trouble are: Toothache;
              Sensitive Teeth; Bleeding or Sore Gums; Bad Breath; Cavities; Jaw
              Pain; Mouth Sores; Dry Mouth; Broken, Cracked, Chipped, Lost.
              <span class="text-xl">&rdquo;</span>
            </p>
          </blockquote>
          <div class="flex justify-center">
            <router-link
              :to="{ name: 'Frequently Asked Questions Page' }"
              class="w-56 px-4 py-4 mt-10 text-center transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 hover:text-white text-sky-700 rounded-md duration-300 ..."
            >
              <button>View More</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Frequently Asked Questions -->

    <!-- Start of Instructions -->
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div class="text-center">
          <p
            class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-sky-700 bg-teal-accent-400"
          >
            LFI DENTAL CLINIC
          </p>
        </div>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-center text-teal-500 sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span class="relative text-sky-700">HOW</span>
          </span>
          TO SET AN APPOINTMENT
        </h2>
        <p class="text-base text-center teal-5 md:text-lg">
          3 easy steps on how to set an appointment directly thru our page and
          take no hustle and have less stress.
        </p>
      </div>
      <div class="grid gap-8 row-gap-0 lg:grid-cols-3">
        <div class="relative text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-200 ease-in-out bg-gray-100 rounded-full hover:bg-teal-300 sm:w-20 sm:h-20 hover:scale-110 hover:rounded-full"
          >
            <router-link
              :to="{ name: 'Appointments Page' }"
              class="inline-flex items-center font-semibold transition-colors duration-200 ease-in-out text-deep-purple-accent-400 hover:text-teal-500 hover:scale-110"
              ><h1 class="text-6xl">1</h1>
            </router-link>
          </div>
          <h6 class="mb-2 text-2xl font-extrabold">Set an Appointment</h6>
          <p class="max-w-md mb-3 text-sm text-sky-700 sm:mx-auto">
            -Go to Set an Appointment page. View and select your preferred date,
            time, and dental service.
          </p>
          <router-link
            :to="{ name: 'Appointments Page' }"
            class="inline-flex items-center font-semibold transition-colors duration-200 ease-in-out text-deep-purple-accent-400 hover:text-teal-500 hover:scale-110"
            >View Calendar
          </router-link>
          <div
            class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute"
          >
            <svg
              class="w-8 text-teal-500 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                stroke-miterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              ></line>
              <polyline
                fill="none"
                stroke-miterlimit="10"
                points="15,5 22,12 15,19 "
              ></polyline>
            </svg>
          </div>
        </div>
        <div class="relative text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-200 ease-in-out bg-gray-100 rounded-full hover:bg-teal-300 sm:w-20 sm:h-20 hover:scale-110 hover:rounded-full"
          >
            <router-link
              :to="{ name: '' }"
              class="inline-flex items-center font-semibold transition-colors duration-200 ease-in-out text-deep-purple-accent-400 hover:text-teal-500 hover:scale-110"
              ><h1 class="text-6xl">2</h1>
            </router-link>
          </div>
          <h6 class="mb-2 text-2xl font-extrabold">Create your Account</h6>
          <p class="max-w-md mb-3 text-sm text-sky-700 sm:mx-auto">
            -After setting an appointment, create an account. If you already
            have an account, please log in.
          </p>
          <router-link
            :to="{ name: '' }"
            class="inline-flex items-center font-semibold transition-colors duration-200 ease-in-out text-deep-purple-accent-400 hover:text-teal-500 hover:scale-110"
            >Login / Sign up
          </router-link>
          <div
            class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute"
          >
            <svg
              class="w-8 text-teal-500 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                stroke-miterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              ></line>
              <polyline
                fill="none"
                stroke-miterlimit="10"
                points="15,5 22,12 15,19 "
              ></polyline>
            </svg>
          </div>
        </div>
        <div class="relative text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-200 ease-in-out bg-gray-100 rounded-full hover:bg-teal-300 sm:w-20 sm:h-20 hover:scale-110 hover:rounded-full"
          >
            <router-link
              :to="{ name: 'Patient Appointment History Page' }"
              class="inline-flex items-center font-semibold transition-colors duration-200 ease-in-out text-deep-purple-accent-400 hover:text-teal-500 hover:scale-110"
              ><h1 class="text-6xl">3</h1>
            </router-link>
          </div>
          <h6 class="mb-2 text-2xl font-extrabold">Done.</h6>
          <p class="max-w-md mb-3 text-sm text-sky-700 sm:mx-auto">
            -You have successfully set your appointment. You can now view your
            appointments in My History. For payment, you can pay after the
            dental service.
          </p>
          <router-link
            :to="{ name: 'Patient Appointment History Page' }"
            class="inline-flex items-center font-semibold transition-colors duration-200 ease-in-out text-deep-purple-accent-400 hover:text-teal-500 hover:scale-110"
            >View Your History
          </router-link>
        </div>
      </div>
    </div>
    <!--- End of Instructions -->
  </BaseLayout>
</template>
