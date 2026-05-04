---
name: flyup-v2-blueprint
description: Comprehensive blueprint for recreating the Flyup V2 website (Elite Skydiving). Includes exact architecture, design system, component logic, asset links, and critical performance optimizations.
---

# 🛸 Flyup V2 - Protocolo de Reconstrução (Blueprint)

> **Este documento contém o DNA completo do projeto Flyup V2.**
> Se o projeto original for perdido, siga este guia para recriar o site *pixel-perfect* com todas as otimizações de performance.

---

## 🏗️ 1. Tech Stack & Dependências

**Ambiente:** Next.js 16 (App Router) + TypeScript + Tailwind CSS 4.

### `package.json` Essencial
```json
{
  "dependencies": {
    "next": "^16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "framer-motion": "^12.0.0",   // UI Animations
    "gsap": "^3.12.5",            // Scroll Animations
    "@gsap/react": "^2.1.0",
    "lucide-react": "^0.300.0",   // Icons
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "three": "^0.160.0",          // 3D Sphere (Testimonials)
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.96.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
```

---

## 🎨 2. Design System Global

> [!IMPORTANT]
> **Fonte da Verdade**: Todas as alterações visuais, componentes e estilos devem ser baseados obrigatoriamente no Design System da FlyUp documentado no arquivo `design-system.html`. Este arquivo é a referência primária e soberana para cores, tipografia, componentes e padrões de layout.

### 2.1 Cores (Tailwind/CSS Variables)

Definidas em `src/app/globals.css`.

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-neon` | `#39FF14` | Acentos, glows, hover states (Verde Neon) |
| `--color-neon-hover` | `#32D911` | Hover de botões neon |
| `--color-background` | `#050505` | Fundo principal da página (Preto Profundo) |
| `--color-surface` | `#101010` | Cards, seções secundárias |
| `--color-platinum` | `#F5F5F7` | Fundo claro (Testimonial section) |
| `primary` (CTA) | `#E31E24` | Botão "Agendar Agora" (Vermelho Marca) |

### 2.2 Tipografia
Importar no `layout.tsx` via `next/font/google`.

*   **Corpo:** `Inter` (Legibilidade, UI)
*   **Títulos:** `Outfit` (Display, Uppercase, Bold)
*   **Estilo:** Títulos quase sempre em *Italic Black* (`font-black italic uppercase`).

### 2.3 Utilitários Visuais
*   **Stroke Neon:** Texto transparente com borda neon (`-webkit-text-stroke: 1px var(--color-neon)`).
*   **Noise Texture:** Overlay em algumas seções (`noise.svg`).
*   **Glows:** `box-shadow` ou `drop-shadow` com cor neon.

---

## 🚀 3. Padrões de Performance (CRÍTICO)

> **AVISO:** O site original sofria com travamentos devido ao excesso de animações. Estas regras **DEVEM** ser seguidas.

1.  **Global GPU Acceleration (`globals.css`):**
    ```css
    * {
      transform: translateZ(0); /* Força layer GPU */
      backface-visibility: hidden;
    }
    body {
        will-change: scroll-position; /* Scroll suave otimizado */
    }
    ```

2.  **Lazy Loading:**
    *   Todos os iframes (Vimeo/YouTube) devem ter `loading="lazy"`.
    *   Imagens fora da dobra inicial devem ter `loading="lazy"`.

3.  **Redução de Ciclos:**
    *   **SocialWall:** Flip a cada **15 segundos** (Mecanismo: 1 flip -> espera -> shuffle -> repete). **NÃO** usar intervalo curto (ex: 3s).
    *   **Sphere 3D:** Máximo de **21 itens** na esfera (reduzido de 45).

---

## 🧩 4. Anatomia das Seções (Componentes)

### 4.1 Navbar (`src/components/layout/Navbar.tsx`)
*   **Visual:** Transparente no topo, fica `bg-black/95` ao scrolar (>20px).
*   **Lógica:**
    *   Logo centralizado.
    *   **Mega Menu:** Hover em "Experiências" e "Cursos" abre dropdown full-width com animação `AnimatePresence`.
    *   **Mobile:** Menu lateral deslizante (`x: "100%"` -> `x: 0`).
    *   **CTA:** Botão vermelho "AGENDAR AGORA" sempre visível.

### 4.2 Hero (`src/components/sections/Hero.tsx`)
*   **Background:** Vídeo Vimeo (ID: 1162024697) em iframe full-screen (16:9 ratio fixo).
*   **Overlay:** Gradiente forte embaixo (`to-black`) para mesclar com a próxima seção.
*   **Texto:**
    *   "PARAQUEDISMO PROFISSIONAL" (Neon, tracking wide).
    *   **WordRotate:** Troca entre "VIVA A ADRENALINA" e "LIFE IS ADVENTURE".
*   **Animação:** GSAP Timeline. Texto sobe (`y: 100` -> `0`) com stagger.
*   **Otimização:** `loading="lazy"` no iframe + `pointer-events-none`.

### 4.3 Experiences (`src/components/sections/Experiences.tsx`)
*   **Layout:** Coluna Dupla assimétrica (Parallax: Coluna direita move mais rápido que a esquerda).
*   **Cards:**
    *   Imagem de fundo com overlay escuro.
    *   **Hover:** Imagem zoom in, título move up, **painel branco desliza de baixo** revelando detalhes e botão CTA.
*   **Dados:**
    *   *Tandem, Balão, Wingsuit* (Coluna 1).
    *   *Curso AFF, Túnel* (Coluna 2).
*   **Tech:** `framer-motion` (`useScroll`, `useTransform` para parallax).

### 4.4 About (`src/components/sections/About.tsx`)
*   **Layout:** Texto à esquerda, Foto do Edu (Founder) à direita.
*   **Foto Edu:** Efeito de *Photo Card* inclinado (`rotate-2`) que endireita no hover, com moldura neon.
*   **Texto:** Título cinemático ("MAIS QUE SALTAR. SABER VOAR."). Palavras animadas individualmente com GSAP `ScrollTrigger`.
*   **Stats:** Contador numérico (GSAP `onUpdate`) na parte inferior (20.000+ Saltos, etc.).
*   **Assets:** Foto Edu: `https://i.imgur.com/gOVHmpV.jpeg`.

### 4.5 Testimonials (`src/components/sections/Testimonials.tsx`)
*   **Fundo:** Claro (`bg-platinum` / `#F5F5F7`) para contraste.
*   **Core:** **Esfera 3D Interativa** (`img-sphere.tsx`).
    *   Imagens orbitam em um grid esférico/toroidal.
    *   Drag para girar. Hover para parar e dar zoom na bolha.
    *   **Otimização:** Usar apenas ~21 imagens duplicadas do array de 7 depoimentos reais.
*   **Assets:** Fotos de alunos reais (Imgur).

### 4.6 YoutubeAuthority (`src/components/sections/YoutubeAuthority.tsx`)
*   **Conceito:** Prova social de autoridade.
*   **Visual:** "Tech/Gamer" aesthetic. Bordas neon, blur effects.
*   **Elementos:**
    *   Badge flutuante: "+100.000 Inscritos".
    *   Lista de Temas: Grid de ícones (Curso AFF, Segurança, Vlogs) com cores específicas.
    *   Foto Edu Tech: Máscara recortada ou frame estilizado.

### 4.7 SocialWall (`src/components/sections/SocialWall.tsx`)
*   **Layout:** Esquerda: Texto + CTA Instagram. Direita: Grid 4x4 de fotos.
*   **Grid Lógica:**
    *   **Flip:** Cartas giram 3D aleatoriamente trocando a imagem.
    *   **Shuffle:** Ocasionalmente, todo o grid se embaralha.
    *   **Zoom:** Clique expande a foto para um modal central (Portal).
*   **Otimização CRÍTICA:**
    *   `frequency`: Flip a cada 3s (1 carta).
    *   `cycle`: Shuffle a cada 15s.
    *   `css`: `perspective: 1000px`, `transform: translateZ(0)`.

### 4.8 FAQ (`src/components/sections/FAQ.tsx`)
*   **Grid:** 2 colunas.
*   **Accordion:** Accordion padrão do Radix UI ou Framer Motion (Expand/Collapse).
*   **Perguntas:** Focadas em segurança, medo, preços e requisitos.

---

## 🔗 5. Asset Library (Imgur Links)

Use estes links exatos para manter a fidelidade visual:

| Asset | URL |
|-------|-----|
| **Logo Flyup** | `https://i.imgur.com/UlfCRZF.png` |
| **Edu Esteves (About)** | `https://i.imgur.com/gOVHmpV.jpeg` |
| **Edu (Youtube)** | `https://i.imgur.com/bmKDXLh.jpeg` |
| **Salto Duplo** | `https://i.imgur.com/5LRiDVB.jpeg` |
| **Balão** | `https://i.imgur.com/XNDYKiy.jpeg` |
| **Curso AFF** | `https://i.imgur.com/j8NZR19.jpeg` |
| **Depoimento 1** | `https://i.imgur.com/vVSjGU3.png` |
| **Depoimento 2** | `https://i.imgur.com/k9sB2x1.png` |
| **Texture Noise** | `https://grainy-gradients.vercel.app/noise.svg` |

---

## 🛠️ 6. Guia Passo a Passo de Reconstrução

1.  **Setup:**
    ```bash
    npx create-next-app@latest flyup-v2 --typescript --tailwind --eslint
    npm install framer-motion gsap @gsap/react lucide-react three @react-three/fiber @react-three/drei
    ```
2.  **Config:**
    *   Atualizar `globals.css` com as variáveis de cor e reset de GPU.
    *   Configurar fonts em `layout.tsx`.
3.  **Components Base:**
    *   Criar UI de `Button`, `SectionReveal` (wrapper de animação).
4.  **Implementar Seções:**
    *   Seguir a ordem: Navbar -> Hero -> Experiences -> About -> SocialWall -> Testimonials -> Footer.
    *   **Importante:** Copiar a lógica de animação exata descrita acima para cada seção.
5.  **Performance Check:**
    *   Rodar script de validação para garantir que `loading="lazy"` e throttles de animação estão presentes.

---

> **Flyup V2** é um site de *Alta Performance* e *Alto Impacto Visual*. A chave é o equilíbrio: Grids 3D e Parallax, mas com controle rigoroso de renders.
