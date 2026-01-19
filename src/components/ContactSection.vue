<template>
  <section id="contact" class="py-16 position-relative overflow-hidden">
    <!-- Background Glow -->
    <div
      class="position-absolute"
      style="
        bottom: 0;
        right: 0;
        width: 500px;
        height: 500px;
        background: rgba(54, 37, 244, 0.1);
        border-radius: 50%;
        filter: blur(100px);
        pointer-events: none;
      "
    ></div>

    <v-container>
      <v-card class="glass" style="border-radius: 24px; overflow: hidden">
        <v-row no-gutters>
          <!-- Left Side - Info Panel -->
          <v-col cols="12" md="5" class="bg-primary pa-8 pa-md-12 position-relative">
            <div
              class="position-absolute"
              style="
                inset: 0;
                background: linear-gradient(135deg, transparent, rgba(0, 0, 0, 0.3));
              "
            ></div>

            <div class="position-relative" style="z-index: 2">
              <h2 class="text-h4 font-weight-bold mb-4">
                Let's build something together.
              </h2>
              <p class="text-blue-lighten-1 mb-8">
                I'm currently looking for internship opportunities and freelance
                projects. Reach out!
              </p>

              <!-- Contact Info -->
              <div class="d-flex flex-column ga-6 mb-12">
                <a
                  href="mailto:erenaras16@gmail.com"
                  class="d-flex align-center ga-4 text-white text-decoration-none contact-link"
                >
                  <v-avatar color="white-alpha-20" size="40">
                    <v-icon color="white">mdi-email</v-icon>
                  </v-avatar>
                  <span class="font-weight-medium">erenaras16@gmail.com</span>
                </a>

                <div class="d-flex align-center ga-4">
                  <v-avatar color="white-alpha-20" size="40">
                    <v-icon color="white">mdi-map-marker</v-icon>
                  </v-avatar>
                  <span class="font-weight-medium">İzmir, Turkey</span>
                </div>
              </div>

              <!-- Social Links -->
              <div>
                <p class="text-body-2 text-blue-lighten-2 mb-4">
                  Connect on Socials
                </p>
                <div class="d-flex ga-3">
                  <v-btn
                    href="https://github.com/ERENARAS"
                    target="_blank"
                    icon
                    variant="outlined"
                    color="white"
                    size="40"
                  >
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                  <v-btn
                    href="https://www.linkedin.com/in/eren-aras/"
                    target="_blank"
                    icon
                    variant="outlined"
                    color="white"
                    size="40"
                  >
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn
                    href="https://twitter.com"
                    target="_blank"
                    icon
                    variant="outlined"
                    color="white"
                    size="40"
                  >
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Right Side - Chat Form -->
          <v-col cols="12" md="7" class="pa-6 pa-md-8" style="background: #0f0f12">
            <div class="d-flex align-center justify-space-between pb-4 mb-4" style="border-bottom: 1px solid rgba(255, 255, 255, 0.1)">
              <div class="d-flex align-center ga-3">
                <v-avatar color="primary" size="40">
                  <span class="text-white font-weight-bold">EA</span>
                  <div
                    class="position-absolute"
                    style="
                      bottom: 0;
                      right: 0;
                      width: 12px;
                      height: 12px;
                      background: #22c55e;
                      border-radius: 50%;
                      border: 2px solid #0f0f12;
                    "
                  ></div>
                </v-avatar>
                <div>
                  <h4 class="text-white font-weight-bold text-body-1">
                    Eren Aras
                  </h4>
                  <p class="text-caption text-text-dim">
                    Typically replies in a few hours
                  </p>
                </div>
              </div>
              <v-icon color="text-dim">mdi-dots-horizontal</v-icon>
            </div>

            <!-- Chat History Mock -->
            <div class="chat-area pa-2 mb-4" style="min-height: 200px; max-height: 300px">
              <div class="d-flex align-start ga-2 mb-4">
                <v-avatar color="primary" size="32">EA</v-avatar>
                <v-card
                  color="surface"
                  class="pa-3 text-body-2"
                  style="
                    border-radius: 16px 16px 16px 0;
                    max-width: 80%;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                  "
                >
                  Hi there! 👋 Thanks for visiting. How can I help you today?
                </v-card>
              </div>
            </div>

            <!-- Contact Form -->
            <v-form ref="formRef" v-model="valid" @submit.prevent="sendEmail">
              <v-text-field
                v-model="form.name"
                label="Your Name"
                variant="outlined"
                color="primary"
                :rules="[rules.required]"
                class="mb-3"
              />

              <v-text-field
                v-model="form.email"
                label="Your Email"
                variant="outlined"
                color="primary"
                type="email"
                :rules="[rules.required, rules.email]"
                class="mb-3"
              />

              <v-textarea
                v-model="form.message"
                label="Your Message"
                variant="outlined"
                color="primary"
                rows="3"
                :rules="[rules.required]"
                class="mb-3"
              />

              <div class="d-flex justify-end align-center">
                <v-btn
                  type="submit"
                  color="primary"
                  :loading="loading"
                  :disabled="!valid"
                  append-icon="mdi-send"
                >
                  Send Message
                </v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-card>

      <!-- Success Snackbar -->
      <v-snackbar v-model="snackbar.show" :color="snackbar.color" top>
        {{ snackbar.message }}
        <template #actions>
          <v-btn variant="text" @click="snackbar.show = false">Close</v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const formRef = ref(null)
const valid = ref(false)
const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const snackbar = reactive({
  show: false,
  message: '',
  color: 'success',
})

const rules = {
  required: (value) => !!value || 'Required field',
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Invalid email address'
  },
}

const sendEmail = async () => {
  if (!valid.value) return

  loading.value = true

  try {
    // EmailJS configuration - Get these from your EmailJS account
    // Create a .env file with your keys (see .env.example)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        name: form.name,
        from_email: form.email,
        message: `${form.message}\n\n---\nSent by: ${form.name}\nEmail: ${form.email}`,
        to_name: 'Eren Aras',
        reply_to: form.email,
      },
      publicKey
    )

    snackbar.message = 'Message sent successfully! I\'ll get back to you soon.'
    snackbar.color = 'success'
    snackbar.show = true

    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
    formRef.value?.reset()
  } catch (error) {
    console.error('EmailJS error:', error)
    snackbar.message = 'Failed to send message. Please try again or email directly.'
    snackbar.color = 'error'
    snackbar.show = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-link {
  transition: all 0.3s ease;
}

.contact-link:hover {
  transform: translateX(4px);
}

.white-alpha-20 {
  background: rgba(255, 255, 255, 0.2) !important;
}

.ga-3 {
  gap: 12px;
}

.ga-4 {
  gap: 16px;
}

.ga-6 {
  gap: 24px;
}
</style>
