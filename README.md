<h1 align="center">🚀 CodeceptJS + Appium</h1>
<p align="center">
  <strong>Automação de Testes Mobile com Node.js, Appium e CodeceptJS</strong><br>
  <em>Um framework moderno e escalável para testes funcionais Android e iOS</em>
</p>

<br>

## 🧩 <span style="color:#4BA3F2">Tecnologias Utilizadas</span>

- 🟩 **Node.js** — Ambiente de execução JavaScript  
- 🤖 **Appium** — Automação mobile multiplataforma  
- ⚙️ **CodeceptJS** — Framework BDD para testes end-to-end  
- 🧪 **Mocha** — Executor de testes  
- 📊 **Mochawesome** — Relatórios HTML detalhados  
- 📱 **ADB** — Comunicação com dispositivos Android  

<br>

## ⚙️ <span style="color:#F2A541">Pré-requisitos</span>

Antes de começar, garanta que você possui as ferramentas abaixo instaladas:

1. **[Node.js](https://nodejs.org/en/download)** (versão 16+)
2. **[Appium Server](https://appium.io/)**
   ```bash
   npm install -g appium
3. **[Appium Inspector](https://github.com/appium/appium-inspector/releases)**

4. Android Studio com SDK e AVD configurados

5. Variáveis de ambiente:

   - ANDROID_HOME → caminho do SDK Android

   - Adicione ao PATH:

      - $ANDROID_HOME/emulator

      - $ANDROID_HOME/tools

      - $ANDROID_HOME/platform-tools

6. (Opcional) Java JDK 11+

<br>

## 📦 <span style="color:#4BA3F2">Instalação do Projeto</span>

Clone este repositório:
```
git clone https://github.com/eduardoamorimqa/codeceptjs-appium.git
cd codeceptjs-appium
```

Instale as dependências:
```
npm install
```

<br>

## ⚙️ <span style="color:#F26CA7">Configuração do Ambiente Mobile</span>

Android

1 - Conecte o dispositivo físico ou inicie um emulador:
```
adb devices
```
Certifique-se de que o dispositivo aparece listado.

2 - No arquivo codecept.conf.js, edite:
```
capabilities: {
  platformName: "Android",
  deviceName: "emulator-5554",
  app: "/caminho/para/seu/app.apk",
  automationName: "UiAutomator2"
}
```
iOS (opcional)
```
capabilities: {
  platformName: "iOS",
  deviceName: "iPhone 14",
  platformVersion: "17.0",
  app: "/caminho/para/seu/app.app",
  automationName: "XCUITest"
}
```

<br>

## 🧪 <span style="color:#7ED957">Executando os Testes</span>

Rodar todos os testes:
```
npx codeceptjs run
```
Visualizar execução passo a passo:
```
npx codeceptjs run --steps
```
Executar um teste específico:
```
npx codeceptjs run --grep "nomeDoTeste"
```
<br>

## 🧾 <span style="color:#FFD166">Gerando Relatórios (Mochawesome)</span>

Após a execução, relatórios são criados em /output.

Gerar e visualizar relatório HTML:
```
npx mochawesome-merge output/*.json > output/report.json
npx marge output/report.json
```
Abra o relatório:
```
output/mochawesome-report/mochawesome.html
```
<br>

## 🧠 <span style="color:#4BA3F2">Estrutura do Projeto</span>
```
codeceptjs-appium/
│
├── tests/                 # Cenários de teste (arquitetura BDD)
│   └── example_test.js
│
├── steps_file.js          # Steps reusáveis globais
├── codecept.conf.js       # Configurações do CodeceptJS
├── package.json           # Dependências e scripts
├── output/                # Relatórios e logs
└── README.md              # Documentação
```
<br>

## 🧰 <span style="color:#F26CA7">Scripts Úteis</span>

| Comando          | Descrição                     |
| ---------------- | ----------------------------- |
| `npm test`       | Executa todos os testes       |
| `npm run report` | Gera o relatório Mochawesome  |
| `appium`         | Inicia o servidor Appium      |
| `adb devices`    | Lista dispositivos conectados |

<br>

## 💡 <span style="color:#7ED957">Boas Práticas</span>

 - Atualize o Appium regularmente:
```
npm install -g appium@latest
```
- Use IDs de elementos únicos e acessíveis no app.

- Centralize steps reutilizáveis em steps_file.js.

- Integre o projeto em pipelines CI/CD (Jenkins, GitLab, GitHub Actions).

- Analise relatórios Mochawesome para identificar falhas recorrentes.

<br>

## 🤝 <span style="color:#4BA3F2">Contribuições</span>

Contribuições são bem-vindas!
Abra issues, envie pull requests ou compartilhe melhorias.

<br>

## 👨‍💻 <span style="color:#4BA3F2">Autor</span>

💼 Desenvolvido por: Eduardo Amorim - Especialista em QA e Automação de Testes  
💻 LinkedIn: https://www.linkedin.com/in/eduardoamorim-ti/

<br>

<h3 align="center">⭐ Se este projeto te ajudou, não esqueça de deixar uma estrela no repositório!</h3>




















