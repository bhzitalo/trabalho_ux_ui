# 1. Definição do Programa
Nome do Projeto: Luz & Esperança — Setembro Amarelo

Tecnologias Utilizadas: HTML5 (Semântico), CSS3 (Variáveis CSS, Flexbox) e JavaScript (Web Speech API / DOM).

Proposta: Um portal de apoio emocional voltado à prevenção do suicídio (Setembro Amarelo), disponibilizando mensagens bíblicas, palavras de encorajamento e contatos de emergência (CVV 188) com acessibilidade para pessoas com deficiência visual e auditiva.

## 2. Elaboração da Persona

| Atributo | Detalhes |
|---|---|
| Nome & Idade | Maria Helena (42 anos) |
| Perfil | Estudante e trabalhadora que enfrenta episódios de ansiedade e possui baixa visão decorrente de diabetes. |
| Necessidades | Precisa de um ambiente digital limpo, com opção de síntese de voz (áudio) para ouvir os textos, botões para aumento do tamanho das letras e cores amigáveis de alto contraste. |
| Frustrações | Sites poluídos, letras muito pequenas e ausência de leitores de voz integrados. |

![MariaHelena](persona.jpg)

## 3. Elaboração do Wireframe
O wireframe estrutural define a distribuição dos elementos na página priorizando a hierarquia visual e pontos de foco de acessibilidade:

![wireframe](/wireframe.png)

## 4. Protótipo
- Paleta de Cores (Padrão): Fundo em amarelo suave `(#FFFDE7)` para acolhimento visual, cartão em branco `(#FFFFFF)`, destaques em amarelo ouro `(#FBC02D)` e texto em cinza escuro `(#212121)` garantindo alto índice de contraste segundo as diretrizes WCAG.

- Paleta de Alto Contraste: Fundo em preto absoluto `(#000000)`, cartões em tom escuro `(#111111)` e textos/botões em amarelo elétrico `(#FFFF00)`.

- Tipografia: Família sem serifa (Arial / Segoe UI) com dimensionamento relativo, altura de linha ampla (line-height: 1.6) e bordas focáveis bem demarcadas para navegação por teclado.

## 5 & 6. Desenvolvimento e Recursos de Acessibilidade

O projeto foi construído e validado com os seguintes critérios de acessibilidade (WCAG 2.1):

- Acessibilidade Visual:

    -  Modo de Alto Contraste com chaveamento via classe CSS no `body`.

    - Redimensionamento dinâmico do tamanho da fonte (A+ / A-) via manipulação do DOM.

    - Atributos ARIA (`aria-label, role="banner", role="main", role="contentinfo") para navegação fluida por leitores de tela (NVDA/TalkBack`).

    - Síntese de voz em português (`window.speechSynthesis`) que lê a mensagem atual ao clicar nos botões.

- Acessibilidade Auditiva:

    -  Conteúdos de mídia em áudio acompanhados obrigatoriamente de transcrição textual completa no próprio documento.

## 7. Hospedagem do Projeto
Para acessar o projeto ao vivo, acesse o link: