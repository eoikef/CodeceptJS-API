# Introdução
Este projeto visa ser um MVP de testes na camada de serviço utilizando CodeceptJS.

### Tecnologia utilizada
**NodeJS**

**CodeceptJS**

**Chai**

**Allure Reporter**

**Java 8**

**IntelliJ IDEA**


### Configurar este projeto
Estando na pasta raiz do projeto e possuindo o NodeJS e o CodeceptJS instalados,
entrar com o seguinte comando no terminal:

```npm install``` (instala as dependências e helpers do projeto)

Para conseguir utilizar o Allure Reporter, é necessario
ter o Java 8 instalado e devidamente configurado.

### Rodar testes
Para rodar os testes,
entrar com o seguinte comando no terminal:

```npm test```

Para gerar o report, entrar com o seguinte comando no terminal:

```allure serve output```





## Passo-a-passo de criação do projeto + lógica:
1. Ter as tecnologias necessarias instaladas.


2. Na pasta raiz do projeto, digitar no terminal os seguintes comandos:

```npm init``` (cria o package.json)


```npm install codeceptjs``` (instala os pacotes do codeceptjs)


```npm update codeceptjs``` (atualiza os pacotes do codeceptjs)


```npx codeceptjs init ``` (cria arquivos de configuração do codeceptjs automaticamente)


```npm i codeceptjs-chai``` (instala os pacotes do codecept-chai)


```npm i ajv --save-dev``` (instala localmente os pacotes do ajv)


```npm i chai-json-schema-ajv --save-dev``` (instala localmente os pacotes do codeceptjs)


```npm install axios``` (instala os pacotes do axios)


```npm install -g allure-commandline --save-dev``` (instala os pacotes do allure)



Com isso, temos todo setup inicial do projeto concluído.

Na pasta raiz do projeto, foi criado um arquivo ***codecept.conf.js***,
nele é onde faremos as configurações iniciais do projeto.

Vamos apontar para o Codecept a pasta que está os nossos testes, pela chave ```tests```

Logo abaixo temos a chave ```helpers```,
esta chave é onde vamos colocar a biblioteca do codecept-chai. Caso fosse teste de front-end mobile deveriamos colocar Appium,
front-end web SeleniumWebdriver e assim por diante.

Tambêm temos a chave
```plugins```, é nela onde colocamos o Allure Reporter, e deixaremos a opção de ficar sempre ligado.

Por fim, ainda na pasta raiz, temos o arquivo ***steps_file.ts***, onde podemos
criar funções globais para o projeto.

### Estrutura
Tentei deixar a estrutura o mais simples e intuitiva possível.

Na pasta raiz do projeto temos as pastas ***tests*** com os nossos testes e a de recursos chamada de ***resources***.

Dentro da pasta ***resources*** é onde vamos armazenar nossos schemas para os testes de contrato.

Na pasta ***tests***, separei um arquivo de teste para cada API.

Dentro de cada arquivo de teste, temos a feature(ou nome da API sendo testada), e todos os seus cenários de teste.

Para facilitar as validações e verificar que as asserções estão sendo realizadas corretamente,
eu optei por incluir também testes com falha no projeto.

Procurei deixar o código comentado para facilitar entendimento do que está sendo feito.

### Testes
Vamos realizar testes em duas APIs do swapi.dev.

A primeira é a ```swapi.dev/api/people/```, procurando pelo id ***1***.

Realizei teste de contrato(schema), e também testes validando a resposta esperada individualmente de cada campo.

Também valido o status code da chamada.

A segunda API é a ```swapi.dev/api/planets/```, também procurando pelo id ***1***.

Os testes são basicamente os mesmos da primeira API, só que com os atributos desejados da ***planets***.

Note que neste MVP temos somentes chamadas do tipo ***GET***, porém o jeito para fazer ***Post***, ***Delete*** e ***Put*** é basicamente o mesmo, só precisando enviar um body(no caso do post e put).


### Melhorias Futuras
Criar um page object com as variaveis que vão ser validadas;

Utilizar o objeto "I" do codecept para tirar maior vantagem do framework;

Deixar variável ***id*** dinâmica;

Implementar teste de tempo de resposta da api.


### Fontes de pesquisa
[Setup CodeceptJS](https://codecept.io/typescript/#getting-started)

[Configuração Allure Report](https://codecept.io/plugins/#allure)

[Documentação Chai](https://www.chaijs.com/)

[Documentação Chai Schema Ajv](https://github.com/up9cloud/chai-json-schema-ajv)

[Documentação Axios](https://github.com/axios/axios#response-schema)

[Documentação Star Wars API](https://swapi.dev/documentation)

[Formatador de Schema](https://www.jsonschema.net/home)

[Desativar certificado SSL](https://stackoverflow.com/questions/12180552/openssl-error-self-signed-certificate-in-certificate-chain)

[Formatador de .md](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)



