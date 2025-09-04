# Gemini Desktop

Uma aplicação de desktop nativa para o Google Gemini, criada com Electron.js.



-----

## Sobre o Projeto

Este projeto é um cliente de desktop para o Google Gemini, desenvolvido para oferecer um acesso mais rápido e focado à ferramenta, eliminando a necessidade de manter uma aba de navegador aberta e proporcionando uma experiência mais integrada ao sistema operacional.

![Screenshot do Gemini Desktop](https://private-user-images.githubusercontent.com/204406795/485391720-2528c2d4-24d1-49b1-9d0d-f8b18dc1b7b7.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY5ODgxMzUsIm5iZiI6MTc1Njk4NzgzNSwicGF0aCI6Ii8yMDQ0MDY3OTUvNDg1MzkxNzIwLTI1MjhjMmQ0LTI0ZDEtNDliMS05ZDBkLWY4YjE4ZGMxYjdiNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkwNFQxMjEwMzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NmVhNzEyNzZhNjYyOTU1ZDg3MGFlMmY1MzIxZTk2N2Q0NDM3MDc4NGRkOTc2YzkzNjI2ZWJjMTg5ZWQ2Njc2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.h3ZTJhVLHoZLc_MDTFSKz0ljrEOBcAc5WgYrizVT4aQ)

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
