# Título

Projetos de Estágios

# Autor

**Vitor Hugo Lobacz Cecchin**

# Descrição do projeto

O sistema "Projetos de Estágios" tem como objetivo conectar alunos e empresas por meio de uma plataforma web. Nele, empresas podem registrar vagas de estágio e alunos podem visualizar e se candidatar a essas oportunidades. O projeto foi desenvolvido como exercício prático de construção de interfaces responsivas e modulares utilizando Angular com o uso de uma API REST para comunicação assíncrona.

# Prototipação

# Framework CSS

Bootstrap 5

# Dependências

- Angular
- Bootstrap 5
- FontAwesome

# Links

📎 [Repositório no GitHub](https://vhlobacz.github.io/plataforma-de-estagios/)  
📎 [Deploy no GitHub Pages](https://vhlobacz.github.io/plataforma-de-estagios/)


# Objetivos

### RA1 - Prototipar e projetar interfaces gráficas de usuário
- [x] ID1: Desenvolver protótipos de interfaces que demonstram compreensão das diretrizes de usabilidade.  
- [x] ID2: Projetar interfaces responsivas que se adaptam a diferentes tamanhos de tela.

### RA2 - Criar e reutilizar componentes em frameworks frontend
- [x] ID3: Desenvolver componentes reutilizáveis e que se adaptem de maneira responsiva.  
- [x] ID4: Incorporar componentes de frameworks CSS.  
- [x] ID5: Aplicar diretivas estruturais para exibir ou ocultar elementos condicionalmente (`*ngIf`).  
- [x] ID6: Utilizar diretivas estruturais para repetir elementos dinamicamente (`*ngFor`).  
- [x] ID7: Aplicar Pipes para formatar apresentação de dados (ex: date, currency).

### RA3 - Sincronizar dados entre interface e modelo
- [x] ID8: Interpolation e Property Binding para exibição dinâmica de dados.  
- [x] ID9: Event Binding com `(click)` para capturar interações do usuário.  
- [x] ID10: Two-way data binding com `[(ngModel)]`.  
- [x] ID11: Uso de variáveis de template para manipulação da interface.

### RA4 - Comunicação entre componentes
- [x] ID12: Comunicação via serviços e injeção de dependência.  
- [x] ID13: Comunicação com `@Input` e `@Output` em componentes filhos/pais.

### RA5 - Interfaces de navegação com roteamento
- [x] ID14: Configuração de rotas com `RouterModule`.  
- [x] ID15: Passagem de parâmetros de rota (`ActivatedRoute`).  
- [ ] ID16: Navegação aninhada com rotas filhas.  
- [ ] ID17: Aplicação de `Route Guards` para proteger rotas.

### RA6 - Requisições assíncronas com serviços web
- [x] ID18: Requisição GET para API pública (ex: JSONPlaceholder).  
- [x] ID19: Requisições GET, POST, PUT e DELETE em API simulada.  
- [x] ID20: Tratamento de erros com `catchError`.  
- [x] ID21: Validação com REGEX e mensagens de erro informativas.  
- [x] ID22: Desabilitar botão submit com `form.invalid`.  
- [x] ID23: Utilização de `Promise` com `firstValueFrom`.  
- [x] ID24: Utilização de `Observable` com `HttpClient`.

### RA7 - Gerenciar o código-fonte e deploy
- [x] ID25: Repositório GitHub com Gitflow (`main`, `develop`, `feature/*`).  
- [x] ID26: Uso de branches e merge com resolução de conflitos.  
- [x] ID27: Build de produção com `ng build` e deploy via `http-server` e Netlify.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v16 ou superior)
- [Angular CLI](https://angular.io/cli) (instale globalmente com `npm install -g @angular/cli`)
- [Google Chrome](https://www.google.com/chrome/)

## Instalação das dependências

Antes de instalar as dependências do projeto, certifique-se de que o [Node.js](https://nodejs.org/) está instalado em seu computador. O Node.js já inclui o npm (Node Package Manager), que é utilizado para gerenciar as dependências do projeto.
Para verificar se o Node.js e o npm estão instalados, execute no terminal:

```bash
node -v
npm -v
```

Se não estiverem instalados, faça o download e a instalação a partir do site oficial do Node.js.

Após instalar o Node.js, instale o Angular CLI globalmente com o comando:

```bash
npm install -g @angular/cli
```

Isso permitirá que você utilize os comandos do Angular CLI para criar, rodar e gerenciar projetos Angular em seu ambiente de desenvolvimento.
No diretório do projeto, execute:

```bash
npm install
```

## Rodando o projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm start
```

Acesse o aplicativo em [http://localhost:4200/](http://localhost:4200/).

## Instalação da extensão Cross Domain no Google Chrome

1. Acesse a Chrome Web Store: [Cross Domain - Chrome Web Store](https://chrome.google.com/webstore/detail/cross-domain/ljdobmomdgdljniojadhoplhkpialdid)
2. Clique em **Adicionar ao Chrome** e siga as instruções para instalar a extensão.

## Testes

Para rodar os testes unitários:

```bash
npm test
```

## Outras informações

- Para gerar novos componentes: `ng generate component nome-do-componente`
- Para mais comandos Angular CLI: `ng help`

---

Para dúvidas, consulte a [documentação oficial do Angular](https://angular.io/docs).

ng add @angular/pwa --project meu-app

ng build --configuration production

    Isso criará a pasta dist/seu-projeto/ 
    com todos os arquivos otimizados e o Service Worker 
    configurado.

npm install -g http-server

http-server -v

Navegue até a pasta de build de produção do seu projeto Angular:

cd dist/seu-projeto/

http-server -p 8080