<template>
  <section id="home" class="hero-section">
    <div class="hero-bg-blur hero-bg-blur-1"></div>
    <div class="hero-bg-blur hero-bg-blur-2"></div>

    <v-container class="py-16">
      <v-row class="align-center" style="min-height: 85vh">
        <!-- Left Content -->
        <v-col cols="12" lg="6">
          <v-chip
            class="mb-6 glass"
            color="surface"
            label
            size="small"
          >
            <v-icon size="12" color="success" class="mr-2 pulse">
              mdi-circle
            </v-icon>
            <span class="text-white text-uppercase font-weight-medium" style="letter-spacing: 1px">
              Available for Internship
            </span>
          </v-chip>

          <h1 class="text-h2 text-md-h1 font-weight-black mb-6">
            Building the<br />
            <span class="gradient-text">Future</span>
          </h1>

          <p class="text-h6 text-text-dim mb-8" style="max-width: 600px">
            Computer Engineering Student at
            <span class="text-white font-weight-bold">
              Dokuz Eylül University
            </span>.
            An AI/ML Engineer passionate about building intelligent systems,
            deep learning models, and scalable AI solutions.
          </p>

          <!-- CTA Buttons -->
          <div class="d-flex flex-wrap gap-4 mb-12">
            <v-btn
              href="#projects"
              color="primary"
              size="large"
              class="glow-effect"
              append-icon="mdi-arrow-right"
            >
              Explore Projects
            </v-btn>

            <v-btn
              href="https://github.com/ERENARAS"
              target="_blank"
              variant="outlined"
              size="large"
              prepend-icon="mdi-github"
            >
              View GitHub
            </v-btn>

            <v-btn
              href="https://www.linkedin.com/in/eren-aras/"
              target="_blank"
              icon
              size="large"
              variant="outlined"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>

          <!-- Stats -->
          <v-row class="pt-8" style="border-top: 1px solid rgba(255, 255, 255, 0.05)">
            <v-col cols="auto">
              <p class="text-h4 font-weight-bold">7+</p>
              <p class="text-body-2 text-text-dim">Repositories</p>
            </v-col>
            <v-divider vertical class="mx-4" />
            <v-col cols="auto">
              <p class="text-h4 font-weight-bold">3+</p>
              <p class="text-body-2 text-text-dim">Years Coding</p>
            </v-col>
            <v-divider vertical class="mx-4" />
            <v-col cols="auto">
              <p class="text-h4 font-weight-bold">100%</p>
              <p class="text-body-2 text-text-dim">Passion</p>
            </v-col>
          </v-row>
        </v-col>

        <!-- Right Content - Code Card -->
        <v-col cols="12" lg="6" class="d-flex justify-center justify-lg-end">
          <v-card
            class="code-card glass bento-card"
            width="100%"
            max-width="500"
            style="aspect-ratio: 1"
          >
            <!-- Card Header -->
            <v-card-title class="d-flex justify-space-between align-center pb-4" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05)">
              <div class="d-flex" style="gap: 10px">
                <div class="window-dot bg-error"></div>
                <div class="window-dot bg-warning"></div>
                <div class="window-dot bg-success"></div>
              </div>
              <span class="text-caption text-text-dim font-mono">portfolio.js</span>
            </v-card-title>

            <!-- Mock Code -->
            <v-card-text class="font-mono text-body-2 code-content">
              <p><span class="text-purple">const</span> developer = {</p>
              <p class="pl-4">name: <span class="text-success">"Eren Aras"</span>,</p>
              <p class="pl-4">role: <span class="text-success">"AI/ML Engineer"</span>,</p>
              <p class="pl-4">skills: [</p>
              <p class="pl-8"><span class="text-success">"Deep Learning"</span>,</p>
              <p class="pl-8"><span class="text-success">"Python"</span>,</p>
              <p class="pl-8"><span class="text-success">"Spring"</span>,</p>
              <p class="pl-8"><span class="text-success">"Vue.js"</span>,</p>
              <p class="pl-8"><span class="text-success">"PyTorch"</span></p>
              <p class="pl-4">],</p>
              <p class="pl-4">hardWorker: <span class="text-info">true</span>,</p>
              <p class="pl-4">hireable: <span class="text-info">true</span></p>
              <p>};</p>
              <p class="pt-4"><span class="text-purple">function</span> <span class="text-info">buildFuture</span>() {</p>
              <p class="pl-4"><span class="text-purple">return</span> developer.createAwesomeThings();</p>
              <p>}</p>
            </v-card-text>

            <!-- Floating Badge -->
            <v-chip
              class="position-absolute float"
              style="bottom: 24px; right: 24px"
              color="primary"
              size="small"
            >
              🚀 Open to Work
            </v-chip>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-bg-blur {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

.hero-bg-blur-1 {
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: rgba(54, 37, 244, 0.2);
}

.hero-bg-blur-2 {
  bottom: -200px;
  left: -200px;
  width: 400px;
  height: 400px;
  background: rgba(139, 92, 246, 0.1);
}

.window-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-content {
  opacity: 0.8;
}

.code-card:hover .code-content {
  opacity: 1;
}

.font-mono {
  font-family: 'Courier New', monospace;
}

.gap-4 {
  gap: 16px;
}
</style>
