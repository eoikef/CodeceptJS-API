const { I } = inject(); //injeta as funções criadas no arquivo steps_file.ts e os helpers
const chai = require('chai') //declara a constante chai instanciando a biblioteca do chai
chai.use(require('chai-json-schema-ajv')) //extende as funcoes do json-schema0ajv para o chai
const assert = chai.assert
const expect = chai.expect
const axios = require ("axios"); //declara a constante axios instanciando a biblioteca do axios
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //desabilita verificao SSL

Feature( 'Validações da API swapi.dev/api/people' ); //nome da Feature ou API sendo testada


Scenario('Validação do contrato(Schema) com sucesso', ({ I }), async() => { //nome do cenario de teste
    const res = await axios.get('https://swapi.dev/api/people/1/');  // realiza o GET
    const schema = require( '../resources/schemas/swapi_dev-api-people-schemaSuccessful.json' );  // seta o schema do teste
    assert.jsonSchema(res.data, schema, "erro")  // compara o response json com o schema esperado
});

Scenario('Validação do contrato(Schema) com falha', ({ I }), async() => {
    const res = await axios.get('https://swapi.dev/api/people/1/');
    const schema = require( '../resources/schemas/swapi_dev-api-people-schemaFailed.json' );
    assert.jsonSchema(res.data, schema, "erro")
});

Scenario('Validação da response com sucesso', ({ I }), async() => {
    const res = await axios.get('https://swapi.dev/api/people/1/');
    res.headers['content-type'];
    expect(res.status).to.equal(200);
    expect(res.data.name).to.equal("Luke Skywalker");
    expect(res.data.height).to.equal("172");
    expect(res.data.mass).to.equal("77");
    expect(res.data.hair_color).to.equal("blond");
    expect(res.data.skin_color).to.equal("fair");
    expect(res.data.eye_color).to.equal("blue");
    expect(res.data.birth_year).to.equal("19BBY");
    expect(res.data.gender).to.equal("male");
});

Scenario('Validação da response com falha', ({ I }), async() => {
    const res = await axios.get('https://swapi.dev/api/people/1/');
    res.headers['content-type'];
    expect(res.status).to.equal(200);
    expect(res.data.name).to.equal("Luke Skywalker");
    expect(res.data.height).to.equal("172");
    expect(res.data.mass).to.equal("77");
    expect(res.data.hair_color).to.equal("blond");
    expect(res.data.skin_color).to.equal("fair");
    expect(res.data.eye_color).to.equal("green");
    expect(res.data.birth_year).to.equal("19BBY");
    expect(res.data.gender).to.equal("male");
});