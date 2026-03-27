document.addEventListener("DOMContentLoaded", () => {

  // 🔥 ALL YOUR SERVICES DATA HERE
  const data = {
    "sole-proprietorship": {
      title: "Sole Proprietorship Registration",
      subtitle: "Start your business with full control and minimal compliance.",
      about: "If you’re someone who wants complete control over your business decisions without navigating complex processes, sole proprietorship registration in India is the perfect starting point. You can operate under your own name or choose a unique business name to build a strong brand identity. With simple documentation like Aadhaar, PAN, and basic business proof, you can get your business up and running quickly",
      advantages: [
        "Simple and quick registration",
        "Low cost",
        "Full control",
        "Minimal compliance"
      ],
      drawbacks: [
        "Unlimited liability",
        "Limited funding",
        "Limited life"
      ],
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Bank Statement",
        "Address Proof"
      ],
      process: [
        "Shop Act Registration",
        "MSME Registration",
        "GST Registration"
      ]
    },

    "llp": {
      title: "LLP Registration",
      subtitle: "Flexible business with limited liability.",
      about: "Best for partnerships with protection of personal assets.",
      advantages: [
        "Limited liability",
        "Separate legal entity",
        "Less compliance"
      ],
      drawbacks: [
        "Higher cost",
        "More compliance than proprietorship"
      ],
      documents: [
        "PAN Card",
        "Address Proof",
        "Partners ID"
      ],
      process: [
        "DSC & DIN",
        "Name approval",
        "Incorporation"
      ]
    }
  };

  // GET URL PARAM
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  // SAFETY CHECK
  if(!data[page]){
    console.warn("Invalid or missing page parameter");
    return;
  }

  const d = data[page];

  // ✅ FIXED ID HERE
  const titleEl = document.getElementById("title");
  const subtitleEl = document.getElementById("subtitle");
  const aboutEl = document.getElementById("aboutText"); // 🔥 FIXED

  if(titleEl) titleEl.innerText = d.title;
  if(subtitleEl) subtitleEl.innerText = d.subtitle;
  if(aboutEl) aboutEl.innerText = d.about;

  document.title = d.title;

  // HELPER FUNCTION
  function fillList(id, items){
    const el = document.getElementById(id);
    if(!el) return;
    el.innerHTML = "";
    items.forEach(i => {
      el.innerHTML += `<li>${i}</li>`;
    });
  }

  fillList("advantages", d.advantages);
  fillList("drawbacks", d.drawbacks);
  fillList("documents", d.documents);
  fillList("process", d.process);

  const select = document.getElementById("serviceSelect");
  if(select){
    select.innerHTML = `<option>${d.title}</option>`;
  }

});