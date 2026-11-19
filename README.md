# Ayllane Cristine · Site de apresentação

Site de uma página (React + Vite, JavaScript e CSS puro) para apresentar a trajetória acadêmica,
os interesses, as habilidades e o contato de Ayllane Cristine, graduanda em Direito.

## Rodar localmente

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:5173
npm run build      # gera a pasta dist/ para publicação
npm run preview    # confere o build em http://localhost:4173
```

Requer Node 18 ou superior.

## Atualizar o conteúdo

Todos os textos estão em `src/data/content.js`:

- **Formação:** preencha `institution` e `period` em `education.summary` (hoje aparecem como "Em breve").
- **Cursos e certificações:** adicione itens em `education.complementary` e `education.certifications`,
  no formato `{ title: 'Nome do curso', institution: 'Instituição', year: '2026' }`. A seção se ajusta sozinha.
- **Áreas de interesse, habilidades e "Sobre mim":** edite os textos diretamente. Os textos atuais são
  uma proposta e devem ser revisados por Ayllane.

## Identidade visual

As cores e fontes ficam no começo de `src/styles/base.css` (variáveis `--plum-*`, `--amethyst-*`,
`--wisteria-*`, `--mist-*`). Fontes: Libre Caslon (títulos e citação) e Hanken Grotesk (texto),
hospedadas junto com o site, sem chamadas ao Google Fonts.

## Publicar em domínio próprio

1. Defina o domínio em `.env`: `VITE_SITE_URL=https://www.seudominio.com.br` (sem barra no fim).
   Ele alimenta `canonical`, Open Graph, `sitemap.xml` e `robots.txt`, gerados no build.
2. Rode `npm run build` e publique o conteúdo de `dist/`.
3. Hospedagens estáticas que funcionam bem: Netlify, Cloudflare Pages, Vercel ou GitHub Pages.
   Em todas, o domínio próprio é configurado no painel da hospedagem (apontando o DNS) e o HTTPS é automático.
   O arquivo `public/_headers` aplica cabeçalhos de segurança e cache em Netlify e Cloudflare Pages.
4. Depois de publicar, envie o `sitemap.xml` ao Google Search Console.

## Formulário de contato

O formulário valida os campos e abre o aplicativo de e-mail do visitante com a mensagem pronta,
endereçada a `ayllanecristine41@gmail.com`. Não há servidor nem armazenamento de dados.
Para receber mensagens sem depender do aplicativo de e-mail do visitante, dá para trocar o envio
em `src/components/Contact.jsx` por um serviço como Formspree ou EmailJS.

## Acessibilidade e desempenho

Navegação por teclado com foco visível, link "Ir para o conteúdo", rótulos e mensagens de erro
associados aos campos, contraste revisado e animações desligadas para quem usa
`prefers-reduced-motion`. O build gera cerca de 50 kB de JavaScript comprimido.
