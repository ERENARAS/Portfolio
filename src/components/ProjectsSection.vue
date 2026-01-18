<template>
  <section id="projects" class="py-16" style="background: rgba(0, 0, 0, 0.2)">
    <v-container>
      <div class="mb-12">
        <h2 class="text-h3 text-md-h2 font-weight-bold mb-4">
          Featured Projects
        </h2>
        <p class="text-h6 text-text-dim">
          A selection of my recent work in web and software engineering.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="projects-grid">
        <!-- Medicine Fullstack - Large Card -->
        <v-card
          class="bento-card project-card-large"
          color="surface"
          href="https://github.com/ERENARAS/Medicine-FullStack"
          target="_blank"
        >
          <div class="project-overlay"></div>
          <v-img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800"
            cover
            class="project-image"
          />
          <v-card-text class="project-content">
            <div class="d-flex flex-wrap gap-2 mb-3">
              <v-chip size="small" color="info" variant="flat">Vue.js</v-chip>
              <v-chip size="small" color="success" variant="flat">Spring</v-chip>
              <v-chip size="small" color="warning" variant="flat">PostgreSQL</v-chip>
              <v-chip size="small" color="error" variant="flat">PyTorch</v-chip>
            </div>
            <h3 class="text-h4 mb-3">Medicine Fullstack Platform</h3>
            <p class="text-body-1 text-grey-lighten-1 mb-4">
              A comprehensive pharmacy management system featuring real-time inventory tracking,  
              AI-powered sales predictions using LSTM neural networks, and automated reporting.  
              Built with modern full-stack technologies for scalability.
            </p>
            <div class="d-flex align-center gap-2">
              <span class="font-weight-bold">View Project</span>
              <v-icon size="20">mdi-arrow-top-right</v-icon>
            </div>
          </v-card-text>
        </v-card>

        <!-- PyTorch Stock Prediction - Tall Card -->
        <v-card
          class="bento-card project-card-tall"
          color="surface"
          href="https://github.com/ERENARAS/Stock-Price-Prediction-with-PyTorch-Microsoft-Intern-"
          target="_blank"
        >
          <v-img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600"
            cover
            height="250"
            class="project-image"
          />
          <v-card-text class="d-flex flex-column" style="height: calc(100% - 250px)">
            <div class="d-flex flex-wrap gap-2 mb-3">
              <v-chip size="small" color="deep-purple" variant="flat">Python</v-chip>
              <v-chip size="small" color="orange" variant="flat">PyTorch</v-chip>
              <v-chip size="small" color="blue" variant="flat">LSTM</v-chip>
            </div>
            <h3 class="text-h5 mb-3">Stock Price Prediction</h3>
            <p class="text-body-2 text-text-dim mb-4">
              Microsoft internship project using PyTorch LSTM neural networks for time series  
              forecasting. Implemented real-time data fetching from Yahoo Finance and trained  
              models to predict stock market trends with high accuracy.
            </p>
            <div class="d-flex align-center gap-2 mb-4">
              <span class="font-weight-bold">View Project</span>
              <v-icon size="20">mdi-arrow-top-right</v-icon>
            </div>
            <v-chip class="mt-auto" color="primary" size="small" label>
              <v-icon size="16" class="mr-1">mdi-briefcase</v-icon>
              Microsoft Internship
            </v-chip>
          </v-card-text>
        </v-card>

        <!-- IoT Smart Traffic - Medium Card -->
        <v-card
          class="bento-card"
          color="surface"
          href="https://github.com/ERENARAS/IoT-Enabled-Smart-Traffic-Digital-Twin"
          target="_blank"
        >
          <v-card-text>
            <div class="d-flex justify-end mb-4">
              <v-icon size="60" color="primary" style="opacity: 0.1">
                mdi-traffic-light
              </v-icon>
            </div>
            <div class="d-flex flex-wrap gap-2 mb-3">
              <v-chip size="small" color="cyan" variant="flat">SUMO</v-chip>
              <v-chip size="small" color="blue-grey" variant="flat">OpenCV</v-chip>
              <v-chip size="small" color="amber" variant="flat">Python</v-chip>
              <v-chip size="small" color="red" variant="flat">Raspberry Pi</v-chip>
            </div>
            <h3 class="text-h5 mb-3">IoT Smart Traffic Digital Twin</h3>
            <p class="text-body-2 text-text-dim mb-4">
              Hardware internship project: Real-time traffic management system integrating SUMO  
              simulation with Raspberry Pi. Features Computer Vision-based detection, emergency  
              vehicle priority, and Vue.js dashboard.
            </p>
            <div class="d-flex align-center gap-2">
              <span class="font-weight-bold">View Project</span>
              <v-icon size="20">mdi-arrow-top-right</v-icon>
            </div>
          </v-card-text>
        </v-card>

        <!-- More Projects CTA -->
        <v-card
          class="bento-card glass d-flex flex-column align-center justify-center text-center"
          style="background: linear-gradient(135deg, rgba(26, 26, 32, 0.9), rgba(54, 37, 244, 0.2))"
          href="https://github.com/ERENARAS"
          target="_blank"
        >
          <v-icon size="48" color="white" class="mb-4">mdi-folder-open</v-icon>
          <h3 class="text-h6 font-weight-bold mb-2">More Projects</h3>
          <p class="text-body-2 text-text-dim mb-4">
            Explore my full repository history
          </p>
          <div class="d-flex align-center gap-2 text-primary">
            <span class="font-weight-bold">Visit GitHub Profile</span>
            <v-icon size="20">mdi-arrow-right</v-icon>
          </div>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

@media (min-width: 960px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(300px, auto);
  }

  .project-card-large {
    grid-column: span 2;
  }

  .project-card-tall {
    grid-row: span 2;
  }
}

.project-card-large,
.project-card-tall {
  position: relative;
  overflow: hidden;
}

.project-image {
  transition: transform 0.7s ease;
}

.bento-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0f0f12 0%, transparent 50%);
  z-index: 1;
}

.project-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.gap-2 {
  gap: 8px;
}
</style>
