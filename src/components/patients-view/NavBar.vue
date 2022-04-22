<template>
  <nav class="fixed navbar navbar-expand-lg row">
    <router-link tag="li" class="col" :to="{ name: 'Home' }">Home</router-link>
        <router-link tag="li" class="col" :to="{ name: 'Appointments Page' }">Appointments</router-link>
    <router-link tag="li" class="col" :to="{ name: 'About Page' }">About Us</router-link>
    <router-link tag="li" class="col" :to="{ name: 'Contact Page' }">Contact Us</router-link>
  </nav>

  <div>
    
  </div>
  
</template>

<style>
nav li:hover,
nav li:active .col {
  background-color: indianred;
  cursor: pointer;
}
</style>
  