const g={threshold:.1,rootMargin:"50px"},y=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target instanceof HTMLElement&&(e.target.style.opacity="1",e.target.style.transform="translateY(0)")})},g);document.querySelectorAll(".group").forEach(t=>{t instanceof HTMLElement&&(t.style.opacity="0",t.style.transform="translateY(20px)",y.observe(t))});const f=document.querySelectorAll("[data-filter]"),v=document.querySelectorAll("[data-category]");function p(t){f.forEach(e=>{if(e instanceof HTMLElement){const o=e.dataset.filter===t;e.dataset.active=o.toString(),e.classList.toggle("bg-blue-600",o),e.classList.toggle("text-white",o)}}),v.forEach(e=>{e instanceof HTMLElement&&(t==="all"||e.dataset.category===t?(e.style.opacity="0",e.style.display="block",requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translateY(0)"})):(e.style.opacity="0",e.style.transform="translateY(20px)",setTimeout(()=>{e.style.display="none"},300)))})}f.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-filter");e&&p(e)})});p("all");function h(t){const e=document.getElementById("productModal"),o=document.getElementById("modalImage"),a=document.getElementById("modalTitle"),i=document.getElementById("modalDescription"),r=document.getElementById("modalFeatures"),c=document.getElementById("modalSpecs"),d=document.getElementById("modalUseCases"),m=document.getElementById("modalBenefits");if(e&&o&&a&&i&&r){if(o.src=t.image,o.alt=t.name,a.textContent=t.name,i.textContent=`${t.description} - Engineered for professional environments demanding reliable and high-performance video wall control solutions.`,r.innerHTML=t.features.map(n=>`
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span class="text-gray-700">${n}</span>
          </div>
        `).join(""),c){const n=t.category==="decoder"?[{label:"Video Input",value:"Multiple HD inputs"},{label:"Resolution",value:"Up to 4K (3840×2160)"},{label:"Decoding",value:"H.265/H.264"},{label:"Latency",value:"<100ms"}]:[{label:"Control Interface",value:"USB/Network"},{label:"Display",value:"LCD Information Screen"},{label:"Power Supply",value:"DC 12V"},{label:"Operating Temperature",value:"-10°C ~ +55°C"}];c.innerHTML=n.map(l=>`
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-500">${l.label}</span>
              <span class="text-base font-semibold text-gray-900">${l.value}</span>
            </div>
          `).join("")}if(d){const n=["Control Rooms","Security Centers","Command Centers","Digital Signage","Broadcast Studios","Corporate Facilities"];d.innerHTML=n.map(l=>`
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>${l}</span>
            </li>
          `).join("")}if(m){const n=["Enhanced operational efficiency with intuitive control interface","Reduced complexity through centralized management","Future-proof scalability for growing requirements","Reliable 24/7 operation capability"];m.innerHTML=n.map(l=>`
            <div class="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
              <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span class="text-gray-700">${l}</span>
            </div>
          `).join("")}e.classList.remove("hidden"),document.body.style.overflow="hidden"}}document.querySelectorAll("[data-product]").forEach(t=>{t.addEventListener("click",()=>{const e=JSON.parse(t.dataset.product||"{}");h(e)})});const s=document.getElementById("productModal"),u=document.querySelector(".close-modal");if(s&&u){const t=()=>{s.classList.add("hidden"),document.body.style.overflow="auto"};u.addEventListener("click",t),s.addEventListener("click",e=>{e.target===s&&t()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!s.classList.contains("hidden")&&t()})}
