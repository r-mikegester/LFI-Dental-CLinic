<script setup>
import { RouterView } from "vue-router";
import NavBar from "../components/patients-view/NavBar.vue";
import FooterSection from "../components/patients-view/FooterSection.vue";
</script>
<template>
  <header>
    <NavBar />
  </header>

  <div>
    <div>
      <h5
        class="relative z-30 top-52 right-20 float-right justify-center text-3xl font-bold text-center text-white"
      >
        GET AN APPOINTMENT NOW!
      </h5>
      <img
        src="../assets/img/bgs/bg2.jpg"
        class="w-full bg-fixed object-fit-cover object-center filter brightness-50"
        style="height: 80vh; background-position: center background-size: 100% 100%;"
      />
    </div>
  </div>

  <section
    class="bg-teal-500 flex flex-col text-center py-16 px-4 lg:px-16 md:px-8 xl:px-24 xxl:px-40"
  >
    <h5 class="mb-10 text-5xl font-bold text-center text-white">
      FREQUENTLY ASKED QUESTIONS
    </h5>

    <div class="mt-1 sm:flex md:flex items-start justify-between sm:-mx-2">
      <div
        class="w-full min-h-60 h-60 bg-white rounded-lg shadow-lg py-8 px-4 sm:w-1/3 sm:mx-2 lg:mx-6"
      >
        <h4 class="text-md uppercase text-gray-800 font-bold">
          Do I need to arrive early for my first appointment?
        </h4>
        <p class="text-base text-gray-600 mt-2">
          “ -Yes, atleast 15 minutes early to fill out essential paperwork and
          give the staff time to get you all set up ”
        </p>
      </div>

      <div
        class="min-h-60 h-60 w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6 card"
      >
        <h4 class="text-md uppercase text-gray-800 font-bold">
          What are early signs of dental trouble?
        </h4>
        <p class="text-base text-gray-600 mt-2">
          “ -The possible early signs of dental trouble are: Toothache;
          Sensitive Teeth; Bleeding or Sore Gums; Bad Breath; Cavities; Jaw
          Pain; Mouth Sores; Dry Mouth; Broken, Cracked, Chipped, Lost. ”
        </p>
      </div>

      <div
        class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6"
      >
        <h4 class="text-md uppercase text-gray-800 font-bold">
          What is the best way to whiten my teeth?
        </h4>
        <p class="text-base text-gray-600 mt-2">
          “ -The best way to keep your teeth white are: carefully brushing your
          teeth twice a day; Limiting foods that stain your teeth; Avoid
          Smoking; Regular checkups and cleanings from your dentist. ”
        </p>
      </div>
    </div>

    <button class="load-more">Load More</button>

    <div class="hidden">
      <div class="mt-10 sm:flex items-start justify-between sm:-mx-2">
        <div
          class="w-full min-h-60 h-60 bg-white rounded-lg shadow-lg py-8 px-4 sm:w-1/3 sm:mx-2 lg:mx-6"
        >
          <h4 class="text-md uppercase text-gray-800 font-bold">
            Do I need to arrive early for my first appointment?
          </h4>
          <p class="text-base text-gray-600 mt-2">
            “ -Yes, atleast 15 minutes early to fill out essential paperwork and
            give the staff time to get you all set up ”
          </p>
        </div>

        <div
          class="min-h-60 h-60 w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6"
        >
          <h4 class="text-md uppercase text-gray-800 font-bold">
            What are early signs of dental trouble?
          </h4>
          <p class="text-base text-gray-600 mt-2">
            “ -The possible early signs of dental trouble are: Toothache;
            Sensitive Teeth; Bleeding or Sore Gums; Bad Breath; Cavities; Jaw
            Pain; Mouth Sores; Dry Mouth; Broken, Cracked, Chipped, Lost. ”
          </p>
        </div>

        <div
          class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6"
        >
          <h4 class="text-md uppercase text-gray-800 font-bold">
            What is the best way to whiten my teeth?
          </h4>
          <p class="text-base text-gray-600 mt-2">
            “ -The best way to keep your teeth white are: carefully brushing
            your teeth twice a day; Limiting foods that stain your teeth; Avoid
            Smoking; Regular checkups and cleanings from your dentist. ”
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Frequently Asked Questions -->
  <section>
    <div class="z-20 w-full bg-teal-500">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 faqs">
        <h5 class="mb-10 text-5xl font-bold text-center text-white">
          FREQUENTLY ASKED QUESTIONS
        </h5>

        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
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

        <blockquote class="p-8 bg-gray-100 rounded shadow-lg mt-2">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">What are early signs of dental trouble?</p>
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

        <blockquote class="p-8 bg-gray-100 rounded shadow-lg mt-2">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">What are early signs of dental trouble?</p>
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
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">
                What is the best way to whiten my teeth?
              </p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>
            -The best way to keep your teeth white are: carefully brushing your
            teeth twice a day; Limiting foods that stain your teeth; Avoid
            Smoking; Regular checkups and cleanings from your dentist.
            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">What if I need to reschedule?</p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>
            -If you wish to reschedule your appointment, then you first must
            cancel your first schedule 2 days’ prior the scheduled appointment
            and repeat the step you did when you scheduled your first
            appointment.
            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">How do you ensure patient’s safety?</p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>
            -We opt to secure our patient’s safety by ensuring that our
            procedure is safe; our dentist/stuff is well trained, experienced,
            licensed, fully vaccinated, wearing personal protection gear; and we
            practice proper disposal of hazardous waste materials.
            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">Why should I floss everyday?</p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>

            -The importance of flossing every day is to ensure that no plaque is
            building up in the places where your toothbrush can’t reach. Plaque
            contains bacteria that releases an acid that can eat away at the
            outer shell and cause cavities. These are the bacteria that feeds on
            leftover food in your mouth

            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">How this Dental Clinic different?</p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>

            -L.F.I Dental Clinic does not only gives dental treatment but also
            leading and helping others to know Christ more.

            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">Do you accept insurance plan?</p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>

            -No, we don’t accept dental insurance plan.

            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">When should I return for checkup?</p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>

            -You should have a regular dental visit at least every 6 months or
            as recommended by your dental professional. Regular dental check-up
            is important because they help keep your teeth and gums healthy.

            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">
                What age should children’s dental be checked?
              </p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>

            -The first dental visit is recommended by 12 months of age, or
            within 6 months of the first tooth coming in. The first visit often
            lasts 30 to 45 minutes. The visit may include a full exam of the
            teeth, jaws, bite, gums, and oral tissues to check growth and
            development.

            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">What payment options do you offer?</p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>

            -Cash -E-wallet (G-cash) -Online Banking (BDO bank transfer)

            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>

      <div class="swiper-slide">
        <blockquote class="p-8 bg-gray-100 rounded shadow-lg">
          <div class="flex items-center">
            <div class="ml-4 text-sm">
              <p class="font-medium">Can you do crowns in one visit?</p>
            </div>
          </div>
          <p class="relative mt-4 text-gray-500">
            <span class="text-xl">&ldquo;</span>

            -Two visits to the dentist to prepare for a dental crown.

            <span class="text-xl">&rdquo;</span>
          </p>
        </blockquote>
      </div>
    </div>

    <div class="mt-12 swiper-pagination"></div>
  </section>
  <!-- End of Frequently Asked Questions -->
  <section
    class="bg-gradient-to-r from-teal-500 to-sky-700 flex flex-col py-12 px-4 text-center lg:px-16 md:px-8 xl:px-24 xxl:px-40"
  >
    <div>
      <h2 class="text-xl font-bold text-white lg:text-3xl">
        Need A Doctor For Check-up? Call for an Emergency Service!
      </h2>
    </div>

    <div class="sm:flex items-center">
      <div class="w-full mt-8 sm:w-1/2 sm:pr-12">
        <img
          src="../assets/img/bgs/ContactUs.jpg"
          alt="finx"
          class="mx-auto rounded-lg"
        />
      </div>

      <div class="mt-8 sm:w-1/2 sm:text-left">
        <h4 class="text-xl font-bold text-white">Looking for Help?</h4>
        <p class="text-base text-white mt-2">
          Contact our Customer Support that is always ready to help you with any
          possible questions, problems or information.
        </p>

        <ul class="text-left mt-8">
          <li>
            <div class="flex items-start">
              <div class="w-6 h-6 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,0,1,20.486,20.486,11.922,11.922,0,0,1,12,24ZM12,1A11,11,0,1,0,23,12,11.014,11.014,0,0,0,12,1ZM9.646,16.506a.8.8,0,0,1-.514-.26L5.9,13.016l1.027-1.027,2.723,2.722,7.2-7.252L17.868,8.5l-7.714,7.754A.8.8,0,0,1,9.646,16.506Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white">09284632914</p>
              </div>
            </div>
          </li>
          <li class="mt-3">
            <div class="flex items-start">
              <div class="w-6 h-6 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,0,1,20.486,20.486,11.922,11.922,0,0,1,12,24ZM12,1A11,11,0,1,0,23,12,11.014,11.014,0,0,0,12,1ZM9.646,16.506a.8.8,0,0,1-.514-.26L5.9,13.016l1.027-1.027,2.723,2.722,7.2-7.252L17.868,8.5l-7.714,7.754A.8.8,0,0,1,9.646,16.506Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white">8579-9537</p>
              </div>
            </div>
          </li>
        </ul>

        <a
          href="#"
          class="bg-white px-6 py-4 text-blue-500 rounded block sm:inline-block mt-8 text-center font-bold"
          >Contact Us</a
        >
      </div>
    </div>
  </section>
  <RouterView />
  <FooterSection />
</template>
