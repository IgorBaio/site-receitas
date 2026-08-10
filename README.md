# site-receitas

Esqueleto de site de portfólio + receitas, feito com [Astro](https://astro.build).
Sem backend, sem banco de dados: cada receita é um arquivo Markdown em
`src/content/receitas/`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Adicionando uma receita nova

Crie um arquivo em `src/content/receitas/nome-da-receita.md` seguindo o
formato de `risoto-de-funghi.md` (frontmatter + modo de preparo em Markdown).
O site gera a página automaticamente, sem precisar tocar em código.

Coloque a foto de capa em `public/images/`.

## Publicando no GitHub Pages

1. Edite `astro.config.mjs` e troque `SEU-USUARIO` e o nome do repositório em
   `site` e `base`.
2. Crie um repositório no GitHub e suba este projeto:
   ```bash
   git init
   git add .
   git commit -m "primeira versão do site"
   git remote add origin https://github.com/SEU-USUARIO/site-receitas.git
   git push -u origin main
   ```
3. No GitHub: Settings → Pages → Source → selecione "GitHub Actions".
   O workflow em `.github/workflows/deploy.yml` já está pronto e publica
   automaticamente a cada push na branch `main`.

## O que falta preencher

- Trocar "seu nome aqui" no `Layout.astro` e na página `sobre.astro`
- Trocar `SEU-USUARIO` no `astro.config.mjs`
- Adicionar fotos reais em `public/images/`
- Escrever mais receitas em `src/content/receitas/`

## Próximos passos (v2, sem pressa)

- Escalonamento de porções
- Modo "cozinha" (tela sempre acesa durante o preparo)
- Diário/log de aprendizado
- Busca por ingrediente
