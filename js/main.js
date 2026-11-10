(function () {
  const D = window.CONRADO;
  const page = document.body.dataset.page || "";
  const E = D.empreendimentos;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 });
  const wa = (txt) => (D.whatsappNumero ? `https://wa.me/${D.whatsappNumero}${txt ? "?text=" + encodeURIComponent(txt) : ""}` : D.whatsappLink);
  const faseTxt = { pronto: "Pronto para morar", lancamento: "Lançamento", breve: "Vindo aí" };
  const ph = (t) => `<span class="placeholder">[${esc(t)}]</span>`;

  const sv = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const icons = {
    whats: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
    insta: sv('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'),
    pin: sv('<path d="M12 22s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/>'),
    menu: sv('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    close: sv('<path d="M6 6l12 12M18 6 6 18"/>'),
    seta: sv('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    ok: sv('<path d="m5 12.5 4.5 4.5L19 7.500"/>'),
    zoom: sv('<circle cx="11" cy="11" r="6.500"/><path d="m20 20-4.200-4.200M11 8.500v5M8.500 11h5"/>')
  };

  /* silhueta de prédios em traço dourado (motivo do site) */
  const skyline = `<svg class="skyline" viewBox="0 0 1200 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4">
    <path d="M0 149h1200"/>
    <path d="M40 149V92h46v57M52 92V80h22v12M48 108h34M48 122h34M48 136h34"/>
    <path d="M120 149V50h58v99M132 50V36h34v14M128 70h42M128 90h42M128 110h42M128 130h42M149 50v99"/>
    <path d="M214 149V84h40v65M224 100h20M224 116h20M224 132h20"/>
    <path d="M300 149V28h70v121M312 28V14h46v14M308 48h54M308 68h54M308 88h54M308 108h54M308 128h54M335 28v121"/>
    <path d="M410 149V70h50v79M420 88h30M420 106h30M420 124h30"/>
    <path d="M500 149V96h36v53M508 110h20M508 126h20"/>
    <path d="M580 149V40h62v109M592 40V26h38v14M588 60h50M588 80h50M588 100h50M588 120h50M611 40v109"/>
    <path d="M684 149V88h44v61M694 104h24M694 120h24M694 136h24"/>
    <path d="M770 149V56h54v93M782 70h30M782 90h30M782 110h30M782 130h30"/>
    <path d="M868 149V100h40v49M878 114h20M878 130h20"/>
    <path d="M950 149V34h66v115M962 34V20h42v14M958 54h50M958 74h50M958 94h50M958 114h50M958 134h50M983 34v115"/>
    <path d="M1056 149V86h42v49M1066 102h22M1066 118h22"/>
    <path d="M1140 149V64h46v85M1150 80h26M1150 100h26M1150 120h26"/>
  </svg>`;

  /* ---------- cabeçalho e rodapé ---------- */
  const links = [
    ["index.html", "Início", "inicio"],
    ["empreendimentos.html", "Empreendimentos", "empreendimentos"],
    ["como-comprar.html", "Como comprar", "como"],
    ["contato.html", "Contato", "contato"]
  ];
  const brand = `<a class="brand" href="index.html" aria-label="${esc(D.nome)}, página inicial"><img src="img/logo.png" alt="" width="52" height="52"><span class="brand__txt"><b>Conrado</b> Prime<small>Imóveis</small></span></a>`;

  const header = document.getElementById("header");
  if (header) {
    header.innerHTML = `
    <header class="topbar">
      <div class="container topbar__inner">
        ${brand}
        <nav class="nav" id="nav" aria-label="Principal">
          ${links.map(([h, t, id]) => `<a href="${h}"${id === page || (page === "detalhe" && id === "empreendimentos") ? ' aria-current="page"' : ""}>${t}</a>`).join("")}
        </nav>
        <a class="btn btn--ouro btn--sm topbar__cta" href="${wa("Olá! Vim pelo site da Conrado Prime Imóveis e quero saber mais.")}" target="_blank" rel="noopener">${icons.whats}<span>Falar com corretor</span></a>
        <button class="menu-toggle" type="button" aria-controls="nav" aria-expanded="false" aria-label="Abrir menu">${icons.menu}</button>
      </div>
    </header>`;
    const btn = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav");
    const toggle = (open) => {
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      btn.innerHTML = open ? icons.close : icons.menu;
    };
    btn.addEventListener("click", () => toggle(!nav.classList.contains("is-open")));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) toggle(false); });
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
    <footer class="rodape">
      <div class="rodape__sky">${skyline}</div>
      <div class="container rodape__grid">
        <div>
          ${brand}
          <p class="rodape__lema">${esc(D.lema)}.</p>
          <p class="rodape__peq">${esc(D.creci)} · ${esc(D.regiao)}</p>
        </div>
        <div>
          <h4>Navegar</h4>
          <ul>${links.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Fale conosco</h4>
          <ul>
            <li><a href="${wa("Olá! Vim pelo site e quero saber mais.")}" target="_blank" rel="noopener">${icons.whats} WhatsApp</a></li>
            <li><a href="${D.instagramUrl}" target="_blank" rel="noopener">${icons.insta} @${esc(D.instagram)}</a></li>
          </ul>
        </div>
      </div>
      <div class="container rodape__fim">
        <p>© <span id="ano"></span> ${esc(D.nome)} · ${esc(D.creci)}</p>
        <p>Valores e condições conforme a divulgação de cada empreendimento, sujeitos a análise de crédito e disponibilidade. Fale com um corretor para confirmar.</p>
      </div>
    </footer>
    <div class="barra-fixa">
      <a class="btn btn--ouro" href="${wa("Olá! Vim pelo site e quero saber mais.")}" target="_blank" rel="noopener">${icons.whats}<span>WhatsApp</span></a>
      <a class="btn btn--linha" href="${D.instagramUrl}" target="_blank" rel="noopener">${icons.insta}<span>Instagram</span></a>
    </div>
    <a class="whats-flutuante" href="${wa("Olá! Vim pelo site e quero saber mais.")}" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">${icons.whats}<span>Fale com a gente</span></a>`;
    const ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();
  }

  /* ---------- cards ---------- */
  const entradaTxt = (e) => (e.entrada === 0 ? "Zero" : e.entrada ? brl(e.entrada) : null);
  function numeros(e) {
    const n = [];
    n.push(["Entrada a partir de", entradaTxt(e)]);
    if (e.parcela) n.push([e.parcelasQtd ? `${e.parcelasQtd}x de` : "Parcelas a partir de", brl(e.parcela)]);
    if (e.rendaMin) n.push(["Renda a partir de", e.rendaTxt || brl(e.rendaMin)]);
    return n.filter((x) => x[1]).slice(0, 3);
  }
  function card(e) {
    const nums = numeros(e);
    return `
    <a class="card reveal" href="empreendimento.html?slug=${e.slug}">
      <div class="card__foto">
        <img src="img/emp/${e.slug}.jpg" alt="${esc(e.nome)}, ${esc(e.local)}" loading="lazy">
        <span class="card__fase card__fase--${e.fase}">${faseTxt[e.fase]}</span>
      </div>
      <div class="card__corpo">
        <p class="card__local">${icons.pin}${esc(e.local)}${e.cidade && e.cidade !== e.local ? " · " + esc(e.cidade) : ""}</p>
        <h3>${esc(e.nome)}</h3>
        <dl class="card__nums">
          ${nums.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
        </dl>
        <span class="card__ver">Ver detalhes ${icons.seta}</span>
      </div>
    </a>`;
  }

  /* ---------- números do início (calculados dos dados) ---------- */
  const stats = document.getElementById("stats");
  if (stats) {
    const comEntrada = E.filter((e) => e.entrada !== null);
    const menorEnt = comEntrada.reduce((a, b) => (b.entrada < a.entrada ? b : a));
    const comParc = E.filter((e) => e.parcela);
    const menorParc = comParc.reduce((a, b) => (b.parcela < a.parcela ? b : a));
    const comRenda = E.filter((e) => e.rendaMin);
    const menorRenda = comRenda.reduce((a, b) => (b.rendaMin < a.rendaMin ? b : a));
    const itens = [
      [String(E.length), "empreendimentos para escolher", "da Grande Recife"],
      [menorEnt.entrada === 0 ? "Zero" : brl(menorEnt.entrada), "entrada a partir de", menorEnt.nome],
      [brl(menorParc.parcela).replace(",99", ""), "parcelas a partir de", menorParc.nome],
      [menorRenda.rendaTxt ? "1 salário" : brl(menorRenda.rendaMin), "renda a partir de", menorRenda.nome]
    ];
    stats.innerHTML = itens.map(([n, t, s]) => `<div class="stat"><b>${n}</b><span>${t}</span><small>${esc(s)}</small></div>`).join("");
  }

  const dest = document.getElementById("destaques");
  if (dest) dest.innerHTML = E.filter((e) => e.destaque).map(card).join("");

  const passos = document.getElementById("passos");
  if (passos) {
    passos.innerHTML = D.passos.map((p, i) => `<li class="passo reveal"><span class="passo__n">${i + 1}</span><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></li>`).join("");
  }

  const corr = document.getElementById("corretores");
  if (corr) {
    corr.innerHTML = D.corretores.map((c) => `
      <a class="pessoa reveal" href="https://www.instagram.com/${c.insta}/" target="_blank" rel="noopener">
        <span class="pessoa__ini" aria-hidden="true">${esc(c.nome[0])}</span>
        <span><b>${esc(c.nome)}</b><small>${esc(c.papel)} · @${esc(c.insta)}</small></span>
        ${icons.insta}
      </a>`).join("");
  }

  /* ---------- lista com filtros ---------- */
  const lista = document.getElementById("lista");
  if (lista) {
    const qs = new URLSearchParams(location.search);
    const campo = document.getElementById("renda");
    const chips = document.querySelectorAll("[data-fase]");
    const aviso = document.getElementById("aviso-lista");
    const contagem = document.getElementById("contagem");
    let fase = qs.get("fase") || "todos";
    if (qs.get("renda")) campo.value = qs.get("renda");

    const num = (s) => {
      const d = String(s).replace(/\D/g, "");
      return d ? parseInt(d, 10) : null;
    };
    function render() {
      const renda = num(campo.value);
      chips.forEach((c) => c.setAttribute("aria-pressed", c.dataset.fase === fase));
      let itens = E.filter((e) => fase === "todos" || e.fase === fase);
      let cons = 0;
      if (renda) {
        itens = itens.filter((e) => {
          if (e.rendaMin === null) { cons++; return true; }
          return e.rendaMin <= renda;
        });
      }
      contagem.textContent = itens.length === 1 ? "1 empreendimento" : `${itens.length} empreendimentos`;
      lista.innerHTML = itens.length
        ? itens.map(card).join("")
        : `<p class="vazio">Nenhum empreendimento nessa combinação. Chame um corretor: a renda mínima pode mudar com a composição familiar.</p>`;
      aviso.hidden = !(renda && cons);
      if (renda && cons) aviso.textContent = `${cons === 1 ? "1 empreendimento ainda não tem" : cons + " empreendimentos ainda não têm"} a renda mínima divulgada. Eles aparecem aqui para você confirmar com um corretor.`;
      lista.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
    }
    chips.forEach((c) => c.addEventListener("click", () => { fase = c.dataset.fase; render(); }));
    campo.addEventListener("input", render);
    document.getElementById("form-renda").addEventListener("submit", (ev) => { ev.preventDefault(); render(); });
    render();
  }

  /* ---------- detalhe ---------- */
  const det = document.getElementById("detalhe");
  if (det) {
    const slug = new URLSearchParams(location.search).get("slug");
    const e = E.find((x) => x.slug === slug);
    if (!e) {
      det.innerHTML = `<div class="container secao"><h1>Empreendimento não encontrado</h1><p><a class="btn btn--ouro" href="empreendimentos.html">Ver todos os empreendimentos</a></p></div>`;
    } else {
      document.title = `${e.nome} | ${D.nome}`;
      const fatos = [];
      fatos.push(["Entrada a partir de", entradaTxt(e) || ph("a confirmar")]);
      fatos.push([e.parcelasQtd ? `${e.parcelasQtd} parcelas de` : "Parcelas a partir de", e.parcela ? brl(e.parcela) : ph("a confirmar")]);
      fatos.push(["Renda a partir de", e.rendaMin ? e.rendaTxt || brl(e.rendaMin) : ph("a confirmar")]);
      if (e.entregaMeses) fatos.push(["Entrega em", `${e.entregaMeses} meses`]);
      else if (e.fase === "pronto") fatos.push(["Situação", "Pronto para morar"]);
      const outros = E.filter((x) => x.slug !== e.slug).slice(0, 3);
      const msg = `Olá! Vim pelo site e quero saber mais sobre o ${e.nome} (${e.local}).`;
      det.innerHTML = `
      <section class="d-hero">
        <div class="container d-hero__grid">
          <div class="d-hero__txt">
            <p class="eyebrow">${faseTxt[e.fase]}${e.selo ? " · " + esc(e.selo) : ""}</p>
            <h1>${esc(e.nome)}${e.complemento ? `<small>${esc(e.complemento)}</small>` : ""}</h1>
            <p class="d-hero__local">${icons.pin}${esc(e.local)}${e.cidade && e.cidade !== e.local ? " · " + esc(e.cidade) : ""}${e.construtora ? " · " + esc(e.construtora) : ""}</p>
            <p class="d-hero__frase">${esc(e.frase)}</p>
            ${e.programa ? `<p class="d-hero__prog">${esc(e.programa)}</p>` : ""}
            <div class="d-hero__acoes">
              <a class="btn btn--ouro" href="${wa(msg)}" target="_blank" rel="noopener">${icons.whats}<span>Quero este apê</span></a>
              <a class="btn btn--linha" href="empreendimentos.html">Ver outros</a>
            </div>
          </div>
          <div class="d-hero__foto">
            <img src="img/emp/${e.slug}.jpg" alt="${esc(e.nome)}">
          </div>
        </div>
      </section>
      <section class="secao secao--creme">
        <div class="container">
          <dl class="fatos">${fatos.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
          <div class="d-cols">
            <div>
              <h2 class="h-sec">O apartamento</h2>
              <ul class="lista-ouro">${e.destaques.map((d) => `<li>${icons.ok}${esc(d)}</li>`).join("")}</ul>
              <h2 class="h-sec">Lazer</h2>
              <ul class="lista-ouro">${e.lazer.map((d) => `<li>${icons.ok}${esc(d)}</li>`).join("")}</ul>
            </div>
            <div>
              ${e.perto.length ? `<h2 class="h-sec">Pertinho de tudo</h2>
              <ul class="perto">${e.perto.map((p) => `<li><span>${esc(p.nome)}</span>${p.dist ? `<b>${esc(p.dist)}</b>` : ""}</li>`).join("")}</ul>` : ""}
              <h2 class="h-sec">Arte de divulgação</h2>
              <button class="arte" type="button" data-arte="img/emp/${e.slug}-arte.jpg" aria-label="Ampliar a arte de divulgação">
                <img src="img/emp/${e.slug}-arte.jpg" alt="Arte de divulgação do ${esc(e.nome)}" loading="lazy">
                <span>${icons.zoom} Ampliar</span>
              </button>
            </div>
          </div>
          <p class="aviso">Valores e condições conforme a divulgação do empreendimento, sujeitos a análise de crédito e disponibilidade. Confirme com um corretor.</p>
        </div>
      </section>
      <section class="secao secao--noite">
        <div class="container">
          <h2 class="h-sec h-sec--claro">Outros empreendimentos</h2>
          <div class="grade-cards">${outros.map(card).join("")}</div>
        </div>
      </section>`;
      const modal = document.createElement("div");
      modal.className = "lightbox";
      modal.hidden = true;
      modal.innerHTML = `<button type="button" class="lightbox__x" aria-label="Fechar">${icons.close}</button><img alt="">`;
      document.body.appendChild(modal);
      const fechar = () => { modal.hidden = true; document.body.classList.remove("sem-rolagem"); };
      det.querySelector("[data-arte]").addEventListener("click", (ev) => {
        modal.querySelector("img").src = ev.currentTarget.dataset.arte;
        modal.hidden = false;
        document.body.classList.add("sem-rolagem");
      });
      modal.addEventListener("click", fechar);
      document.addEventListener("keydown", (ev) => { if (ev.key === "Escape") fechar(); });
    }
  }

  /* ---------- contato: dados da imobiliária ---------- */
  document.querySelectorAll("[data-link]").forEach((el) => {
    const k = el.dataset.link;
    if (k === "whats") { el.href = wa("Olá! Vim pelo site e quero saber mais."); el.target = "_blank"; el.rel = "noopener"; }
    if (k === "insta") { el.href = D.instagramUrl; el.target = "_blank"; el.rel = "noopener"; }
  });
  document.querySelectorAll("[data-icon]").forEach((el) => { if (icons[el.dataset.icon]) el.insertAdjacentHTML("afterbegin", icons[el.dataset.icon]); });
  document.querySelectorAll("[data-skyline]").forEach((el) => { el.innerHTML = skyline; });
  document.querySelectorAll("[data-dado]").forEach((el) => {
    const v = D[el.dataset.dado];
    el.innerHTML = v ? esc(v) : ph(el.dataset.falta || "a confirmar");
  });

  /* ---------- animação ao rolar ---------- */
  const rev = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("is-in"); io.unobserve(x.target); } }), { threshold: 0.08 });
    rev.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
      else io.observe(el);
    });
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => { if (el.getBoundingClientRect().top < 0) el.classList.add("is-in"); });
    }, { passive: true });
  } else rev.forEach((el) => el.classList.add("is-in"));
})();
