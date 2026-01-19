<template>
  <section id="experience" class="py-16">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 text-md-h2 font-weight-bold mb-4">
          Professional Journey
        </h2>
        <p class="text-h6 text-text-dim">
          My academic and professional milestones.
        </p>
      </div>

      <!-- Timeline -->
      <div class="timeline-container">
        <div class="timeline-line"></div>

        <!-- Experience Item 1 - IoT Hardware Internship -->
        <v-row class="timeline-item mb-12">
          <v-col cols="12" md="6" class="text-center text-md-right pr-md-12">
            <div class="timeline-marker timeline-marker-right"></div>
            <h4 class="text-primary font-weight-bold text-h6 mb-2">
              01/2026 - 02/2026
            </h4>
            <p class="text-text-dim">Izmir, Turkiye</p>
          </v-col>
          
          <v-col cols="12" md="6" class="pl-md-12">
            <div class="timeline-marker timeline-marker-left"></div>
            <v-card class="bento-card glass">
              <v-card-text>
                <h3 class="text-h5 font-weight-bold mb-2">
                  IoT Hardware Intern
                </h3>
                <p class="text-subtitle-1 mb-4 text-grey-lighten-1">
                  Semafor Teknoloji | Izmir, Turkiye
                </p>
                <ul class="text-body-2 text-text-dim timeline-list">
                  <li>Built IoT-enabled Smart Traffic Digital Twin with Raspberry Pi 4</li>
                  <li>Developed Computer Vision traffic detection system using OpenCV</li>
                  <li>Implemented emergency vehicle priority (V2I) communication</li>
                  <li>Created Vue.js + Vuetify dashboard for real-time monitoring</li>
                  <li>Integrated SUMO simulation with physical hardware (LCD & LEDs)</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Experience Item 2 - Microsoft ML Internship -->
        <v-row class="timeline-item mb-12">
          <v-col cols="12" md="6" class="text-center text-md-right pr-md-12 order-md-1">
            <div class="timeline-marker timeline-marker-right"></div>
            <h4 class="text-primary font-weight-bold text-h6 mb-2">
              07/2025 - 08/2025
            </h4>
            <p class="text-text-dim">Istanbul, Turkiye</p>
          </v-col>
          
          <v-col cols="12" md="6" class="pl-md-12 order-md-2">
            <div class="timeline-marker timeline-marker-left"></div>
            <v-card class="bento-card glass">
              <v-card-text>
                <h3 class="text-h5 font-weight-bold mb-2">
                  Machine Learning Volunteer Intern
                </h3>
                <p class="text-subtitle-1 mb-4 text-grey-lighten-1">
                  Microsoft | Istanbul, Turkiye
                </p>
                <ul class="text-body-2 text-text-dim timeline-list">
                  <li>Developed stock price prediction models using PyTorch with LSTM and GRU, first on closing prices, then extended with EMA, RSI, and volume indicators</li>
                  <li>Conducted multiple feature engineering experiments and documented the outcomes in a 12-page project report</li>
                  <li>Presented results to Microsoft mentor, Barbaros Günay</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Experience Item 3 - Part-Time Full-Stack Developer -->
        <v-row class="timeline-item mb-12">
          <v-col cols="12" md="6" class="text-center text-md-right pr-md-12">
            <div class="timeline-marker timeline-marker-right"></div>
            <h4 class="text-primary font-weight-bold text-h6 mb-2">
              07/2024 - 02/2025
            </h4>
            <p class="text-text-dim">Izmir, Turkiye</p>
          </v-col>
          
          <v-col cols="12" md="6" class="pl-md-12">
            <div class="timeline-marker timeline-marker-left"></div>
            <v-card class="bento-card glass">
              <v-card-text>
                <h3 class="text-h5 font-weight-bold mb-2">
                  Part-Time Full-Stack Developer (Promoted from Intern)
                </h3>
                <p class="text-subtitle-1 mb-4 text-grey-lighten-1">
                  Istar Arastirma ve Danismanlik | Izmir, Turkiye
                </p>
                <ul class="text-body-2 text-text-dim timeline-list">
                  <li>Developed the landing page, dashboard, and login screens of the REAP-Radar website using Vue.js, ensuring responsive and optimized performance</li>
                  <li>Collaborated with a 10-15 member team, assisting with backend integration and providing general development support</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Education - University -->
        <v-row class="timeline-item">
          <v-col cols="12" md="6" class="text-center text-md-right pr-md-12">
            <div class="timeline-marker timeline-marker-last"></div>
            <h4 class="text-white font-weight-bold text-h6 mb-2">
              Sept 2021 - Present
            </h4>
            <p class="text-text-dim">İzmir, Turkey</p>
          </v-col>
          
          <v-col cols="12" md="6" class="pl-md-12">
            <v-card class="bento-card glass">
              <v-card-text>
                <h3 class="text-h5 font-weight-bold mb-2">
                  Computer Engineering Student
                </h3>
                <p class="text-subtitle-1 mb-4 text-grey-lighten-1">
                  Dokuz Eylül University
                </p>
                <ul class="text-body-2 text-text-dim timeline-list">
                  <li>Specializing in Software Architecture and Algorithms</li>
                  <li>Active member of university coding club</li>
                  <li>Organizing and participating in hackathons</li>
                  <li>Building real-world projects with modern tech stacks</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #3625f4, rgba(54, 37, 244, 0.1));
  transform: translateX(-50%);
  z-index: 0;
}

@media (max-width: 960px) {
  .timeline-line {
    left: 20px;
  }
}

.timeline-item {
  position: relative;
  z-index: 1;
}

.timeline-marker {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3625f4;
  border: 4px solid #0f0f12;
  box-shadow: 0 0 0 4px rgba(54, 37, 244, 0.2);
  z-index: 10;
  transition: transform 0.3s ease;
}

.timeline-marker-right {
  right: -57px;
  top: 8px;
}

.timeline-marker-left {
  left: -57px;
  top: 8px;
}

.timeline-marker-last {
  right: -57px;
  top: 8px;
  background: rgba(26, 26, 32, 1);
  border: 4px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 960px) {
  .timeline-marker-right,
  .timeline-marker-left {
    left: 12px;
    right: auto;
  }
  
  .timeline-marker-last {
    left: 12px;
    right: auto;
  }
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.25);
}

.timeline-list {
  list-style: none;
  padding-left: 0;
}

.timeline-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
}

.timeline-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3625f4;
}
</style>
