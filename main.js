/* ============================================================
   Erkan Osmanoğlu — Portfolio · interactions + i18n + theme
   ============================================================ */

const FORM_ENDPOINT = ""; // Formspree endpoint'in (boşsa mailto yedeği devreye girer)
const CONTACT_EMAIL = "erkanosmanoglu1626@gmail.com";

/* ---------- translations ---------- */
const T = {
  tr: {
    "nav.about": "Hakkımda", "nav.skills": "Yetenekler", "nav.experience": "Deneyim",
    "nav.education": "Eğitim", "nav.contact": "İletişim",
    "hero.eyebrow": "// full-stack developer · türkiye",
    "hero.lead": "Fikirden üretime; <strong>frontend</strong>, <strong>backend</strong> ve <strong>veritabanı</strong> katmanlarını uçtan uca tasarlayan, hızlı ve ölçeklenebilir ürünler geliştiren deneyimli bir yazılımcıyım.",
    "hero.cta": "İletişime Geç",
    "hero.status": "Yeni projeler ve iş birliklerine açığım",
    "stat.years": "Yıl deneyim", "stat.projects": "Tamamlanan proje", "stat.layers": "Katman: FE · BE · DB",
    "scroll": "kaydır",
    "about.title": "Hakkımda",
    "about.lead": "Merhaba 👋 Ben <strong>Erkan Osmanoğlu</strong>. Kullanıcıyı merkeze alan, performanslı ve sürdürülebilir yazılımlar geliştiren bir full-stack developer'ım.",
    "about.p1": "Bir ürünü yalnızca arayüzüyle değil; arkasındaki iş mantığı, API tasarımı ve veri modeliyle birlikte düşünmeyi severim. Temiz kod, ölçeklenebilir mimari ve iyi bir kullanıcı deneyimi benim için pazarlık konusu değildir. Karmaşık problemleri sade çözümlere dönüştürmekten keyif alırım.",
    "about.note": "<em>Not: Bu metni ve aşağıdaki bilgileri kendi hikâyenle güncelleyebilirsin.</em>",
    "fact.location": "Konum", "fact.location.v": "Türkiye · Remote",
    "fact.focus": "Odak", "fact.focus.v": "Web uygulamaları & API'ler",
    "fact.langs": "Diller", "fact.langs.v": "Türkçe · İngilizce",
    "fact.status": "Durum", "fact.status.v": "Müsait",
    "skills.title": "Yetenekler",
    "skills.fe.p": "Erişilebilir, akıcı ve responsive arayüzler.",
    "skills.be.p": "Güvenli, test edilebilir ve ölçeklenebilir servisler.",
    "skills.db.title": "Veritabanı & DevOps",
    "skills.db.p": "Sağlam veri modelleri ve sorunsuz teslimat.",
    "experience.title": "Deneyim",
    "exp.present": "2023 — Günümüz", "exp.company": "Şirket Adı",
    "exp1.desc": "Ürün ekibiyle birlikte uçtan uca özellikler geliştirdim; mimari kararlar aldım, performansı ve kod kalitesini iyileştirdim.",
    "exp2.desc": "Web uygulamalarının frontend ve backend katmanlarını geliştirdim, API entegrasyonları ve veri modellemesi yaptım.",
    "exp3.desc": "Yazılım geliştirme yaşam döngüsünde deneyim kazandım; çeşitli projelerde frontend ve backend görevleri üstlendim.",
    "education.title": "Eğitim",
    "edu1.degree": "Bilgisayar Mühendisliği", "edu1.school": "Üniversite Adı · Lisans",
    "edu1.desc": "Algoritmalar, veri yapıları, veritabanı sistemleri ve yazılım mühendisliği üzerine sağlam bir temel.",
    "edu2.year": "Sürekli", "edu2.title": "Sertifikalar & Kurslar", "edu2.school": "Online Platformlar",
    "edu2.desc": "Modern web teknolojileri, bulut ve sistem tasarımı alanlarında sürekli öğrenme.",
    "contact.title": "İletişim",
    "contact.h": "Bir projen mi var?<br />Konuşalım.",
    "contact.sub": "Formu doldur, sana en kısa sürede dönüş yapayım. Ya da doğrudan ulaş:",
    "ci.email": "E-posta", "ci.location": "Konum", "ci.location.v": "Türkiye · Remote çalışmaya açık",
    "form.name": "Ad Soyad", "form.name.ph": "Adınız Soyadınız",
    "form.email": "E-posta", "form.email.ph": "ornek@mail.com",
    "form.message": "Mesaj", "form.message.ph": "Projeden ya da fikirden bahset...",
    "form.submit": "Mesajı Gönder",
    "footer.rights": "Tüm hakları saklıdır.", "footer.top": "Başa dön ↑",
    "roles": ["Full-Stack Developer", "Frontend Engineer", "Backend Engineer", "Veritabanı Tasarımcısı", "Problem Çözücü"],
    "err.name": "Lütfen adınızı girin.",
    "err.email.req": "Lütfen e-posta girin.",
    "err.email.invalid": "Geçerli bir e-posta girin.",
    "err.message": "Lütfen bir mesaj yazın.",
    "status.sending": "Gönderiliyor…",
    "status.mailto": "E-posta uygulaman açılıyor… (Formspree bağlanınca otomatik gönderilecek.)",
    "status.success": "Teşekkürler! Mesajın bana ulaştı, en kısa sürede döneceğim.",
    "status.error": "Bir sorun oluştu. Lütfen doğrudan e-posta gönderin.",
    "mail.subject": (n) => `Web sitesi iletişim — ${n}`,
    "mail.body": (n, e, m) => `Ad Soyad: ${n}\nE-posta: ${e}\n\n${m}`,
  },
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience",
    "nav.education": "Education", "nav.contact": "Contact",
    "hero.eyebrow": "// full-stack developer · turkey",
    "hero.lead": "An experienced developer who designs <strong>frontend</strong>, <strong>backend</strong> and <strong>database</strong> layers end to end — building fast, scalable products from idea to production.",
    "hero.cta": "Get in Touch",
    "hero.status": "Open to new projects and collaborations",
    "stat.years": "Years of experience", "stat.projects": "Completed projects", "stat.layers": "Layers: FE · BE · DB",
    "scroll": "scroll",
    "about.title": "About",
    "about.lead": "Hi 👋 I'm <strong>Erkan Osmanoğlu</strong>, a full-stack developer building performant, sustainable software with users at the center.",
    "about.p1": "I like to think of a product not just through its interface, but together with the business logic, API design and data model behind it. Clean code, scalable architecture and great UX are non-negotiable for me. I enjoy turning complex problems into simple solutions.",
    "about.note": "<em>Note: Replace this text and the details below with your own story.</em>",
    "fact.location": "Location", "fact.location.v": "Turkey · Remote",
    "fact.focus": "Focus", "fact.focus.v": "Web apps & APIs",
    "fact.langs": "Languages", "fact.langs.v": "Turkish · English",
    "fact.status": "Status", "fact.status.v": "Available",
    "skills.title": "Skills",
    "skills.fe.p": "Accessible, fluid and responsive interfaces.",
    "skills.be.p": "Secure, testable and scalable services.",
    "skills.db.title": "Database & DevOps",
    "skills.db.p": "Solid data models and smooth delivery.",
    "experience.title": "Experience",
    "exp.present": "2023 — Present", "exp.company": "Company Name",
    "exp1.desc": "Built end-to-end features with the product team; made architectural decisions and improved performance and code quality.",
    "exp2.desc": "Developed the frontend and backend layers of web applications, built API integrations and data models.",
    "exp3.desc": "Gained experience across the software development lifecycle; took on frontend and backend tasks in various projects.",
    "education.title": "Education",
    "edu1.degree": "Computer Engineering", "edu1.school": "University Name · BSc",
    "edu1.desc": "A solid foundation in algorithms, data structures, database systems and software engineering.",
    "edu2.year": "Ongoing", "edu2.title": "Certificates & Courses", "edu2.school": "Online Platforms",
    "edu2.desc": "Continuous learning in modern web technologies, cloud and system design.",
    "contact.title": "Contact",
    "contact.h": "Got a project?<br />Let's talk.",
    "contact.sub": "Fill in the form and I'll get back to you soon. Or reach out directly:",
    "ci.email": "Email", "ci.location": "Location", "ci.location.v": "Turkey · Open to remote work",
    "form.name": "Full Name", "form.name.ph": "Your full name",
    "form.email": "Email", "form.email.ph": "example@mail.com",
    "form.message": "Message", "form.message.ph": "Tell me about your project or idea...",
    "form.submit": "Send Message",
    "footer.rights": "All rights reserved.", "footer.top": "Back to top ↑",
    "roles": ["Full-Stack Developer", "Frontend Engineer", "Backend Engineer", "Database Designer", "Problem Solver"],
    "err.name": "Please enter your name.",
    "err.email.req": "Please enter your email.",
    "err.email.invalid": "Please enter a valid email.",
    "err.message": "Please write a message.",
    "status.sending": "Sending…",
    "status.mailto": "Opening your email app… (Will send automatically once Formspree is connected.)",
    "status.success": "Thank you! Your message reached me, I'll get back to you soon.",
    "status.error": "Something went wrong. Please email me directly.",
    "mail.subject": (n) => `Website contact — ${n}`,
    "mail.body": (n, e, m) => `Full Name: ${n}\nEmail: ${e}\n\n${m}`,
  },
};

let lang = document.documentElement.getAttribute("lang") || "tr";
if (!T[lang]) lang = "tr";
const tr = (key) => (T[lang] && T[lang][key] != null ? T[lang][key] : key);

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- i18n apply ---------- */
  function applyLang(next) {
    lang = T[next] ? next : "tr";
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem("lang", lang); } catch (e) {}

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = T[lang][el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = T[lang][el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const v = T[lang][el.getAttribute("data-i18n-ph")];
      if (v != null) el.setAttribute("placeholder", v);
    });

    document.querySelectorAll(".lang-switch button").forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === lang)
    );

    resetTyping();
  }

  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );

  /* ---------- theme ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const setTheme = (mode) => {
    document.documentElement.setAttribute("data-theme", mode);
    try { localStorage.setItem("theme", mode); } catch (e) {}
  };
  themeToggle.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(cur === "light" ? "dark" : "light");
  });

  /* ---------- nav scroll + progress ---------- */
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scrollProgress");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 24);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const closeMenu = () => { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  /* ---------- typed roles ---------- */
  const typed = document.getElementById("typed");
  let typeTimer = null;
  function resetTyping() {
    if (!typed) return;
    clearTimeout(typeTimer);
    let r = 0, c = 0, deleting = false;
    const roles = () => T[lang].roles;
    const tick = () => {
      const word = roles()[r] || "";
      typed.textContent = word.slice(0, c);
      if (!deleting && c < word.length) { c++; typeTimer = setTimeout(tick, 70); }
      else if (!deleting && c === word.length) { deleting = true; typeTimer = setTimeout(tick, 1600); }
      else if (deleting && c > 0) { c--; typeTimer = setTimeout(tick, 35); }
      else { deleting = false; r = (r + 1) % roles().length; typeTimer = setTimeout(tick, 280); }
    };
    typeTimer = setTimeout(tick, 400);
  }

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => { if (!el.closest(".hero")) io.observe(el); });
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- count up stats ---------- */
  const stats = document.querySelectorAll(".stat-num[data-count]");
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target, target = parseInt(el.dataset.count, 10);
        let n = 0; const step = Math.max(1, Math.round(target / 28));
        const run = () => { n = Math.min(target, n + step); el.textContent = n; if (n < target) requestAnimationFrame(run); };
        run(); co.unobserve(el);
      });
    }, { threshold: 0.6 });
    stats.forEach((s) => co.observe(s));
  }

  /* ---------- active nav link ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  if ("IntersectionObserver" in window) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
      });
    }, { threshold: 0.5 });
    sections.forEach((s) => so.observe(s));
  }

  /* ---------- contact form ---------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  const setError = (name, msg) => {
    const field = document.getElementById(name).closest(".field");
    const err = form.querySelector(`.field-error[data-for="${name}"]`);
    field.classList.toggle("invalid", !!msg);
    if (err) err.textContent = msg || "";
  };

  const validate = () => {
    let ok = true;
    const name = form.name.value.trim(), email = form.email.value.trim(), message = form.message.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) { setError("name", tr("err.name")); ok = false; } else setError("name", "");
    if (!email) { setError("email", tr("err.email.req")); ok = false; }
    else if (!emailRe.test(email)) { setError("email", tr("err.email.invalid")); ok = false; }
    else setError("email", "");
    if (!message) { setError("message", tr("err.message")); ok = false; } else setError("message", "");
    return ok;
  };

  ["name", "email", "message"].forEach((n) => form[n].addEventListener("input", () => setError(n, "")));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status"; status.textContent = "";
    if (!validate()) return;

    const data = { name: form.name.value.trim(), email: form.email.value.trim(), message: form.message.value.trim() };
    const endpoint = FORM_ENDPOINT || form.getAttribute("action");
    const notConfigured = !FORM_ENDPOINT && /your_form_id/.test(endpoint || "");

    if (notConfigured) {
      const subject = encodeURIComponent(tr("mail.subject")(data.name));
      const body = encodeURIComponent(tr("mail.body")(data.name, data.email, data.message));
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      status.classList.add("success"); status.textContent = tr("status.mailto");
      return;
    }

    submitBtn.disabled = true;
    const label = submitBtn.querySelector(".btn-label");
    label.textContent = tr("status.sending");
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { form.reset(); status.classList.add("success"); status.textContent = tr("status.success"); }
      else throw new Error("request failed");
    } catch (err) {
      status.classList.add("error"); status.textContent = tr("status.error");
    } finally {
      submitBtn.disabled = false; label.textContent = tr("form.submit");
    }
  });

  /* ---------- init ---------- */
  applyLang(lang);
});
