# Contexto do projeto — site-receitas

Conversa com o Claude sobre o planejamento e criação do esqueleto do projeto.
Use este arquivo como contexto ao continuar o desenvolvimento no VS Code.

---

## Briefing inicial

Igor está iniciando na gastronomia e quer criar um site de portfólio e
receitas.

**Decisão:** manter o site simples e fácil de hospedar.

---

## Estrutura definida

Duas frentes do site:
1. **Portfólio** — evolução, pratos feitos, técnicas aprendidas
2. **Receitas** — organizadas com filtros (categoria, tempo, dificuldade)

Páginas: Home, Sobre, Receitas (listagem), Receita individual, Galeria/Portfólio (futuro).

Ideias para depois da v1: modo "cozinha" (tela sempre acesa), escalonamento
de porções interativo, diário/log de aprendizado, busca por ingrediente.

---

## Stack escolhida

- **Astro** — gera HTML estático, sem servidor rodando
- **Receitas em Markdown** — um arquivo `.md` por receita, com frontmatter
  estruturado (sem banco de dados)
- **Hospedagem: GitHub Pages**, com deploy automático via GitHub Actions

### Schema de receita (frontmatter)

```yaml
title: string
data: date
categoria: entrada | prato-principal | massas | sobremesa | padaria | bebida
dificuldade: fácil | médio | difícil
tempoPreparo: number (minutos)
porcoes: number
imagemCapa: string (caminho da imagem)
tags: string[]
ingredientes: string[]
destaque: boolean
```

Corpo do arquivo Markdown: modo de preparo (passos numerados) + notas.

---

## Escopo definido

**v1 (lançamento):**
- Home com últimas receitas
- Listagem de receitas com filtro por categoria
- Página individual de receita
- Página "Sobre"

**v2 (depois, sem pressa):**
- Escalonamento de porções interativo
- Modo "cozinha" (tela sempre acesa)
- Diário/log de aprendizado
- Busca por ingrediente

---

## Identidade visual

Direção de design pensada para fugir do "genérico de IA" (nada de
cream+terracota, nada de dark+neon):

- **Cores:** fundo cor de papel manteiga (`#EFE7D8`), superfície de cartão
  branco quente (`#FAF6EE`), tinta carvão (`#2B2420`), texto secundário
  marrom-acinzentado (`#6B6156`), acento páprica (`#B33F2E`), acento
  secundário oliva (`#6B7A4F`), linha/borda (`#D8CDB8`)
- **Tipografia:** display `Fraunces` (serifada, com personalidade),
  corpo `Work Sans` (sans humanista), utilitária `IBM Plex Mono` (para
  meta-informações como tempo/porções/dificuldade, como se fossem
  etiquetas de medida)
- **Elemento de assinatura:** cards de receita com borda superior "rasgada"
  (clip-path em CSS) e uma etiqueta rotacionada no canto, simulando uma
  ficha de receita física com tag grudada

---

## Estrutura de arquivos do projeto gerado

```
site-receitas/
├── astro.config.mjs
├── package.json
├── README.md
├── .gitignore
├── .github/workflows/deploy.yml       # deploy automático pro GitHub Pages
├── public/images/                     # fotos das receitas entram aqui
└── src/
    ├── content/
    │   ├── config.ts                  # schema (zod) das receitas
    │   └── receitas/
    │       └── risoto-de-funghi.md    # receita de exemplo
    ├── layouts/
    │   └── Layout.astro               # layout base (header, nav, footer)
    ├── components/
    │   └── RecipeCard.astro           # card de receita reutilizável
    ├── styles/
    │   └── global.css                 # design tokens e estilos globais
    └── pages/
        ├── index.astro                # home
        ├── sobre.astro
        └── receitas/
            ├── index.astro            # listagem
            └── [slug].astro           # página individual (gerada por receita)
```

---

## Pendências / próximos passos

- Trocar "seu nome aqui" no `Layout.astro` e em `sobre.astro`
- Trocar `SEU-USUARIO` e nome do repo em `astro.config.mjs` (campos `site` e `base`)
- Adicionar fotos reais em `public/images/`
- Escrever mais receitas em `src/content/receitas/`
- Criar repositório no GitHub, dar push na branch `main` e ativar
  GitHub Pages com source = "GitHub Actions"
- Avaliar features da v2 quando o catálogo de receitas já estiver rodando
