/* Todo o conteúdo editável do site Conrado Prime Imóveis fica aqui.
   Valores e condições dos empreendimentos vieram das artes de divulgação enviadas pela imobiliária:
   conferir com o dono antes de o site ficar oficial. null = ainda não informado. */
window.CONRADO = {
  nome: "Conrado Prime Imóveis",
  creci: "CRECI 23712-J",
  regiao: "Grande Recife, PE",
  lema: "Mais que imóveis, realizamos sonhos",
  instagram: "imobiliariaconrado_prime",
  instagramUrl: "https://www.instagram.com/imobiliariaconrado_prime/",
  seguidores: "438",
  /* link de conversa do WhatsApp Business (vem da bio do Instagram). Não aceita texto pré-preenchido. */
  whatsappLink: "https://wa.me/message/KNPF6KBF45ZFG1",
  /* quando o dono passar o número, preencher (ex.: "5581999999999") e as mensagens já saem prontas */
  whatsappNumero: null,
  whatsappExibido: null,
  endereco: null,
  horario: null,

  corretores: [
    { nome: "Edizia", papel: "CEO", insta: "edizia_corretora" },
    { nome: "Felipe Conrado", papel: "CEO", insta: "felipeconrado_imob" }
  ],

  /* fase: "pronto" | "lancamento" | "breve"
     rendaMin / entrada / parcela: números em reais (entrada 0 = "zero"); null = a confirmar */
  empreendimentos: [
    {
      slug: "patio-camino", nome: "Pátio Camino", fase: "lancamento", destaque: true,
      local: "Av. Caxangá e Av. 17 de Agosto", cidade: null, construtora: null,
      rendaMin: 7000, entrada: 0, parcela: 699, parcelasQtd: null, entregaMeses: null,
      selo: "Esquenta Black Friday",
      frase: "Seu novo capítulo começa aqui.",
      destaques: ["2 quartos (suíte)", "Sala integrada", "Varanda gourmet", "Vaga de garagem", "Elevador"],
      lazer: ["Área de lazer completa", "Piscina"],
      perto: []
    },
    {
      slug: "torres-marina", nome: "Torres Marina", fase: "lancamento", destaque: true,
      local: "Conceição", cidade: "Paulista", construtora: null,
      rendaMin: null, entrada: 1000, parcela: 499, parcelasQtd: 26, entregaMeses: 26,
      selo: "Vista para o mar",
      frase: "O seu novo apê na melhor localização de Paulista.",
      destaques: ["Unidades altas com vista mar", "Ambientes modernos e funcionais", "Pertinho de tudo"],
      lazer: ["Piscina adulto e infantil", "Churrasqueira", "Academia", "Playground", "Quadra poliesportiva", "Salão de festas"],
      perto: []
    },
    {
      slug: "vila-recife", nome: "Vila Recife", fase: "lancamento", destaque: true,
      local: "Guabiraba", cidade: "Recife", construtora: null, complemento: "Condomínio I",
      rendaMin: 1621, entrada: 1000, parcela: null, parcelasQtd: null, entregaMeses: null,
      selo: "O lançamento mais esperado",
      frase: "Mais que um apartamento, um novo estilo de vida.",
      destaques: ["Vaga de garagem", "Elevador", "Varanda"],
      lazer: ["Área de lazer completa", "Piscina"],
      perto: [
        { nome: "Sal & Brasa", dist: "400 m · 5 min" },
        { nome: "UPA Paulista", dist: "11,6 km · 18 min" },
        { nome: "North Way Shopping", dist: "13,6 km · 27 min" },
        { nome: "Tipol/PDAs", dist: "13,6 km · 22 min" },
        { nome: "Parque Recife I", dist: null }
      ]
    },
    {
      slug: "villa-luna-residence", nome: "Villa Luna Residence", fase: "pronto", destaque: true,
      local: "Olinda", cidade: "Olinda", construtora: null,
      rendaMin: 2200, entrada: 2000, parcela: 399, parcelasQtd: null, entregaMeses: null,
      selo: "Pronto pra morar",
      frase: "More bem, viva melhor.",
      destaques: ["Pronto para morar"],
      lazer: ["Piscina", "Salão de festas", "Playground", "Academia"],
      perto: []
    },
    {
      slug: "viva-2-casa-amarela", nome: "Viva 2 Casa Amarela", fase: "breve", destaque: false,
      local: "Casa Amarela", cidade: "Recife", construtora: "Tenda", programa: "Minha Casa Minha Vida · Morar Bem Pernambuco",
      rendaMin: 3000, entrada: 1000, parcela: null, parcelasQtd: null, entregaMeses: null,
      selo: "Lançamento vindo aí",
      frase: "Já saia na frente: faça sua análise de crédito antecipada.",
      destaques: ["2 quartos", "Varanda", "Análise de crédito antecipada"],
      lazer: ["Lazer completo"],
      perto: []
    },
    {
      slug: "vila-alta-vista", nome: "Vila Alta Vista", fase: "lancamento", destaque: false,
      local: "Paulista", cidade: "Paulista", construtora: null,
      rendaMin: null, entrada: null, parcela: 499.99, parcelasQtd: null, entregaMeses: null,
      selo: "800 m da praia",
      frase: "O seu novo lar completo te espera.",
      destaques: ["2 e 3 quartos com suíte e varanda", "Condomínio completo para toda a família", "Mais de 30 itens de lazer"],
      lazer: ["Piscina", "Academia", "Salão de festas", "Churrasqueira", "Playground", "Pet place"],
      perto: [
        { nome: "Praia", dist: "800 m" },
        { nome: "Acesso rápido ao litoral norte", dist: null },
        { nome: "Shoppings, supermercados e comércios", dist: null },
        { nome: "Escolas e serviços essenciais", dist: null }
      ]
    },
    {
      slug: "viva-vida-sao-lourenco", nome: "Direcional Viva Vida", fase: "pronto", destaque: false,
      local: "São Lourenço da Mata", cidade: "São Lourenço da Mata", construtora: "Direcional",
      rendaMin: null, entrada: 500, parcela: null, parcelasQtd: null, entregaMeses: null,
      selo: "Pronto para morar",
      frase: "Seu novo capítulo começa aqui.",
      destaques: ["2 quartos", "Pronto para morar", "Localização privilegiada"],
      lazer: ["Piscina", "Salão de festas", "Playground", "Churrasqueira", "Quadra esportiva", "Área verde"],
      perto: []
    },
    {
      slug: "tenda-lancamento", nome: "Lançamento Tenda", fase: "lancamento", destaque: false,
      /* nome e localização não aparecem na arte: pedir ao dono */
      local: "[localização a confirmar]", cidade: null, construtora: "Tenda",
      rendaMin: 1621, rendaTxt: "1 salário mínimo", entrada: 1000, parcela: null, parcelasQtd: null, entregaMeses: null,
      selo: "Conquiste seu apê",
      frase: "Conquiste seu apê com condições imperdíveis.",
      destaques: ["Térreo + 7 andares", "2 quartos", "Elevador"],
      lazer: ["Área de lazer completa"],
      perto: []
    }
  ],

  /* passos genéricos do atendimento — conferir com o dono se é assim que a imobiliária trabalha */
  passos: [
    { t: "Fale com a gente", d: "Chame no WhatsApp e conte quanto a sua família ganha por mês e o que procura." },
    { t: "Análise de crédito", d: "Fazemos a simulação e a análise para ver qual imóvel cabe no seu orçamento." },
    { t: "Escolha o seu apê", d: "Mostramos os empreendimentos, as plantas e as condições de cada um." },
    { t: "Entrada e assinatura", d: "Com tudo aprovado, acompanhamos você do pagamento da entrada até as chaves." }
  ]
};
