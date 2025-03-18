# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).














---
import Layout from '../../layouts/Layout.astro';
// SEO-optimized title and description targeting display technology keywords
const title = "Airport Digital Signage Solutions | LED Display Walls & LCD Screens | Digital Billboards"
const description = "Transform airport communication with high-brightness LED displays, LCD video walls, and digital billboard solutions. Professional DOOH technology for check-in areas, terminals, and gate information displays."

// Structured data for better search visibility
const sd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Airport Digital Signage Solutions",
  "description": "Professional LED displays, LCD screens, and digital billboard solutions designed specifically for airport environments",
  "brand": {
    "@type": "Brand",
    "name": "Lovosis Display",
    "logo": "https://www.lovosisdisplay.com/logo.png"
  },
  "category": "Digital Display Technology",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "image": "https://img.freepik.com/free-photo/modern-airport-terminal-with-digital-displays_53876-123995.jpg",
  "applicationCategory": "Airport Information Systems",
  "audience": {
    "@type": "Audience",
    "audienceType": "Airport Operators"
  },
  "isRelatedTo": [
    {
      "@type": "Product",
      "name": "LED Video Wall Display Systems",
      "description": "High-brightness LED display solutions for airport terminals and concourses"
    },
    {
      "@type": "Product",
      "name": "LCD Information Screens",
      "description": "Ultra-narrow bezel LCD display panels for flight information and wayfinding"
    },
    {
      "@type": "Product",
      "name": "Digital Billboard Systems",
      "description": "Large format digital advertising displays for airports"
    }
  ]
}


const features = [
  {
    title: "LCD Display Walls",
    description: "Ultra-thin bezels for seamless information delivery",
    image: "https://img.freepik.com/free-photo/digital-information-board-airport_53876-129456.jpg",
    specs: [
      { icon: "resolution", text: "4K Resolution" },
      { icon: "brightness", text: "1000+ nits Brightness" },
      { icon: "bezel", text: "0.88mm Ultra Narrow Bezel" }
    ],
    gradient: "from-blue-600 to-cyan-400"
  },
  {
    title: "LED Video Walls",
    description: "Fine pixel pitch for stunning visual impact",
    image: "https://img.freepik.com/free-photo/led-wall-display-airport-terminal_53876-125789.jpg",
    specs: [
      { icon: "pixel", text: "1.2mm Pixel Pitch" },
      { icon: "brightness", text: "6000 nits Brightness" },
      { icon: "contrast", text: "10000:1 Contrast Ratio" }
    ],
    gradient: "from-purple-600 to-pink-400"
  }
];

const locations = [
  {
    title: "Check-in Areas",
    description: "Flight information and wayfinding displays for seamless passenger flow",
    image: "https://img.freepik.com/free-photo/check-counter-with-digital-displays_53876-127834.jpg",
    stats: { displays: "50+", coverage: "100%" }
  },
  {
    title: "Terminal Concourse",
    description: "Large format LED walls for advertising and passenger engagement",
    image: "https://img.freepik.com/free-photo/airport-terminal-concourse-led-display_53876-124567.jpg",
    stats: { displays: "100+", engagement: "85%" }
  },
  {
    title: "Gate Areas",
    description: "Real-time flight information and targeted advertising displays",
    image: "https://img.freepik.com/free-photo/gate-information-display-airport_53876-126789.jpg",
    stats: { displays: "200+", accuracy: "99.9%" }
  }
];
---

<Layout title={title} description={description} sd={sd}>
  <main class="overflow-hidden bg-white">
    <!-- Hero Section -->
    <section class="relative h-[70vh] bg-white">
      <div class="h-full flex flex-col">
        {/* Header Image */}
        <div class="relative h-full">
          <img 
            src="https://img.freepik.com/free-photo/modern-airport-terminal-with-digital-displays_53876-123995.jpg" 
            alt="Airport Terminal with Digital Displays"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
          
          {/* Content Overlay */}
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center px-4">
              <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up">
                Revolutionize Airport
                <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Visual Communication
                </span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 animate-fade-up animation-delay-200">
                Transform passenger experience with next-generation digital display solutions
              </p>
              <div class="flex flex-wrap justify-center gap-6 animate-fade-up animation-delay-400">
                <a href="#solutions" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all">
                  Explore Solutions
                </a>
                <a href="#contact" class="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all">
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Display Solutions -->
    <section id="solutions" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Display Solutions
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p class="text-xl text-gray-600">
            State-of-the-art display technology designed for airport environments
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          {features.map(feature => (
            <div class="group relative bg-gray-800 rounded-2xl p-1 overflow-hidden">
              <div class={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div class="relative p-8">
                <div class="aspect-video rounded-xl overflow-hidden mb-8">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p class="text-gray-400 mb-8">{feature.description}</p>
                <div class="grid grid-cols-3 gap-4">
                  {feature.specs.map(spec => (
                    <div class="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg">
                      <span class="text-gray-300">{spec.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <!-- Implementation Showcase -->
    <section class="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Strategic Implementations
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p class="text-xl text-gray-400">
            Optimized display placement for maximum impact and efficiency
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {locations.map(location => (
            <div class="group bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm">
              <div class="relative aspect-video">
                <img 
                  src={location.image} 
                  alt={location.title}
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div class="p-8">
                <h3 class="text-xl font-bold text-white mb-4">{location.title}</h3>
                <p class="text-gray-400 mb-6">{location.description}</p>
                <div class="grid grid-cols-2 gap-4">
                  {Object.entries(location.stats).map(([key, value]) => (
                    <div class="text-center p-4 bg-gray-700/30 rounded-lg">
                      <div class="text-2xl font-bold text-white mb-1">{value}</div>
                      <div class="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      <div class="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
      
      <div class="relative container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to Transform Your Airport?
        </h2>
        <p class="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Download our comprehensive product catalog or schedule a consultation with our experts
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a 
            href="/catalogs/airport-dooh-solutions.pdf" 
            class="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center"
            download
          >
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download Catalog
          </a>
          <a 
            href="#contact" 
            class="px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm hover:bg-white/20 transition-all flex items-center"
          >
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  </main>
</Layout>

<style>
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-up {
    animation: fadeUp 1s ease-out forwards;
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  .animation-delay-400 {
    animation-delay: 400ms;
  }

  /* Add smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Optimize animations for reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-up {
      animation: none;
      opacity: 1;
    }
  }
</style>