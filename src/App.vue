<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar
      app
      flat
      class="glass"
      style="border-bottom: 1px solid rgba(255, 255, 255, 0.1)"
    >
      <v-container class="d-flex align-center justify-space-between px-6">
        <div class="d-flex align-center" style="gap: 12px">
          <v-avatar color="transparent" size="40" class="mr-2">
            <v-img src="/logo.svg" alt="Logo"></v-img>
          </v-avatar>
          <h2 class="text-h6 font-weight-bold">Eren Aras</h2>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="d-none d-md-flex align-center">
          <v-btn
            v-for="item in navItems"
            :key="item.to"
            :href="item.to"
            variant="text"
            class="mx-2"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <div class="d-flex align-center">
          <!-- Download CV Button -->
          <v-btn
            @click="downloadCV"
            color="primary"
            variant="flat"
            prepend-icon="mdi-download"
            class="ml-4 glow-effect"
            :size="$vuetify.display.smAndDown ? 'small' : 'default'"
          >
            Download CV
          </v-btn>

          <!-- Menu Icon -->
          <v-app-bar-nav-icon
            class="d-md-none ml-2"
            @click="drawer = !drawer"
          />
        </div>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :href="item.to"
          @click="drawer = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />

      <!-- Footer -->
      <v-footer class="bg-surface pa-8">
        <v-container>
          <v-row class="justify-space-between align-center">
            <v-col cols="12" md="auto">
              <p class="text-text-dim text-body-2">
                © 2026 Eren Aras. Built with
                <span class="text-primary font-weight-bold">Vue.js</span> &
                <span class="text-primary font-weight-bold">Vuetify</span>.
              </p>
            </v-col>
            <v-col cols="12" md="auto">
              <div class="d-flex" style="gap: 32px">
                <a
                  href="https://github.com/ERENARAS"
                  target="_blank"
                  class="text-text-dim text-decoration-none text-body-2"
                >
                  <v-icon size="20" class="mr-1">mdi-github</v-icon>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/eren-aras/"
                  target="_blank"
                  class="text-text-dim text-decoration-none text-body-2"
                >
                  <v-icon size="20" class="mr-1">mdi-linkedin</v-icon>
                  LinkedIn
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'

const drawer = ref(false)

const navItems = [
  { title: 'Home', to: '#home' },
  { title: 'Projects', to: '#projects' },
  { title: 'Experience', to: '#experience' },
  { title: 'Contact', to: '#contact' },
]

const downloadCV = async () => {
  try {
    // 1. Dosyayı arkaplanda çek
    const response = await fetch('/Eren_Aras_CV.pdf');
    
    // 2. Gelen veriyi "Blob" (dosya parçacığı) formatına çevir
    const blob = await response.blob();
    
    // 3. Tarayıcı hafızasında bu dosya için geçici bir URL oluştur
    const url = window.URL.createObjectURL(blob);
    
    // 4. Görünmez bir link elementi yarat
    const link = document.createElement('a');
    link.href = url;
    
    // 5. İSMİ BURADA ZORLA AYARLIYORUZ
    link.setAttribute('download', 'Eren_Aras_CV.pdf'); 
    
    // 6. Linki dökümana ekle, tıkla ve sonra temizle
    document.body.appendChild(link);
    link.click();
    
    // Temizlik
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
  } catch (error) {
    console.error('CV indirilirken hata oluştu:', error);
  }
};
</script>
