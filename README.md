# Gemini Desktop

Uma aplicação de desktop nativa para o Google Gemini, criada com Electron.js.



-----

## Sobre o Projeto

Este projeto é um cliente de desktop para o Google Gemini, desenvolvido para oferecer um acesso mais rápido e focado à ferramenta, eliminando a necessidade de manter uma aba de navegador aberta e proporcionando uma experiência mais integrada ao sistema operacional.

O desenvolvimento foi um exercício prático que explorou desde soluções leves com Python até a robustez do Electron, resultando em uma aplicação completa e distribuível.

## Funcionalidades

  * **Acesso Direto:** Inicie o Gemini diretamente da sua área de trabalho.
  * **Sessão Persistente:** Seu login é mantido salvo entre as reinicializações do aplicativo.
  * **Instalador Profissional:** Um instalador `.exe` completo com tela de licença e ícone customizado.
  * **Atualizações Automáticas:** A aplicação verifica e notifica sobre novas versões disponíveis no GitHub.

## Tecnologias Utilizadas

  * [Electron.js](https://www.electronjs.org/) - Framework principal para a criação da aplicação.
  * [Node.js](https://nodejs.org/en) - Ambiente de execução para o JavaScript do backend.
  * [electron-builder](https://www.electron.build/) - Ferramenta para compilar e criar o instalador.
  * [electron-updater](https://www.electron.build/auto-update) - Módulo para gerenciar as atualizações automáticas.
  * [NSIS](https://nsis.sourceforge.io/Main_Page) - Sistema utilizado para a customização do instalador do Windows.

## Como Instalar

1.  Vá para a seção de **[Releases](https://github.com/devmatheusollia/GeminiDesktopApp/releases)** deste repositório.
2.  Baixe o arquivo de instalação da versão mais recente (ex: `Gemini-Desktop-Setup-1.3.2.exe`).
3.  Execute o instalador e siga as instruções na tela.


## Como Executar Localmente (Para Desenvolvedores)

Se você deseja clonar e rodar o projeto localmente, siga estes passos:

```bash
# 1. Clone o repositório
git clone https://github.com/devmatheusollia/geminidesktopapp.git

# 2. Navegue até a pasta do projeto
cd geminidesktopapp

# 3. Instale as dependências
npm install

# 4. Execute a aplicação em modo de desenvolvimento
npm start

# 5. Para compilar o instalador
npm run build
```

## Licença

Este projeto é distribuído sob a Licença MIT. Veja o arquivo **[license.txt](https://github.com/devmatheusollia/GeminiDesktopApp/blob/main/license.txt)** para mais detalhes.
