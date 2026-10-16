<div align="center">

# WK Global Visa

**Plataforma institucional para assessoria em vistos consulares, passaportes e documentação internacional.**

Uma experiência digital desenvolvida para apresentar serviços, facilitar a busca por orientações consulares e aproximar clientes da equipe de atendimento.

[Explorar o projeto](https://github.com/pricilaoliveirarocha/wk-global-visa) · [Ver código-fonte](https://github.com/pricilaoliveirarocha/wk-global-visa/tree/main/src)

</div>

---

## Sobre o projeto

A **WK Global Visa** é uma aplicação web institucional desenvolvida para uma empresa especializada em assessoria de vistos, passaportes e documentação internacional.

O projeto organiza informações sobre os serviços oferecidos e cria caminhos diretos para que visitantes tirem dúvidas e entrem em contato com a equipe. A interface foi estruturada para oferecer navegação objetiva, apresentação clara dos serviços e uma experiência adaptada a diferentes dispositivos.

## Funcionalidades

- **Busca de serviços consulares:** interface para localizar opções de atendimento relacionadas a vistos.
- **Catálogo de serviços:** apresentação das modalidades disponíveis e informações relacionadas.
- **Orientação sobre processos:** seção explicativa com as etapas do atendimento.
- **Depoimentos em vídeo:** carrossel com relatos de clientes.
- **Canais de contato:** acesso ao WhatsApp e contato por e-mail.
- **Páginas institucionais:** áreas dedicadas aos serviços e à apresentação da empresa.
- **Layout responsivo:** estrutura de interface adequada a diferentes tamanhos de tela.

## Tecnologias

| Tecnologia | Aplicação |
| --- | --- |
| **Next.js 16** | Framework React, roteamento e estrutura da aplicação |
| **React 19** | Construção das interfaces e componentes |
| **TypeScript** | Tipagem e manutenção do código |
| **Bootstrap 5** | Recursos de interface e estilização |
| **CSS Modules** | Estilos encapsulados por componente |
| **Lucide React / React Icons** | Iconografia da aplicação |
| **React Select** | Componentes de seleção |
| **ESLint** | Análise estática e padronização do código |

## Estrutura do projeto

```text
wk-global-visa/
├── public/
│   ├── images/                # Recursos visuais
│   └── videos/                # Vídeos e depoimentos
├── src/
│   ├── app/
│   │   ├── servicos/          # Página e catálogo de serviços
│   │   ├── sobre-nos/         # Página institucional
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── components/
│   │   ├── home/              # Busca, formulário e depoimentos
│   │   └── layout/            # Cabeçalho e rodapé
│   ├── data/                  # Dados dos serviços consulares
│   └── lib/                   # Funções auxiliares
├── package.json
└── tsconfig.json
```

## Executando localmente

**Pré-requisitos:** Node.js e npm instalados.

1. Clone o repositório:

   ```bash
   git clone https://github.com/pricilaoliveirarocha/wk-global-visa.git
   cd wk-global-visa
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Executa a versão de produção |
| `npm run lint` | Executa a análise do ESLint |

## Objetivo do desenvolvimento

Desenvolver uma presença digital para a WK Global Visa, reunindo conteúdo institucional, informações sobre assessoria consular e canais de atendimento em uma interface organizada e acessível.

O projeto também contempla a **componentização da interface**, o uso de **tipagem estática** e a separação de estilos e dados para facilitar a manutenção e evolução da aplicação.

---

<div align="center">

Desenvolvido por **[Pricila Oliveira Rocha](https://github.com/pricilaoliveirarocha)**.

</div>
