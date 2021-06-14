const { I } = inject(); //injeta as funções criadas no arquivo steps_file.ts e os helpers
const chai = require('chai') //declara a constante chai instanciando a biblioteca do chai
chai.use(require('chai-json-schema-ajv')) //extende as funcoes do json-schema0ajv para o chai
const assert = chai.assert
const expect = chai.expect
const axios = require ("axios"); //declara a constante axios instanciando a biblioteca do axios
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //desabilita verificao SSL

Feature( 'Validações da API swapi.dev/api/planets' ); //nome da Feature ou API sendo testada


Scenario('Validação do contrato(Schema) com sucesso', ({ I }), async() => { //nome do cenario de teste
    const res = await axios.get('https://swapi.dev/api/planets/1/');  // realiza o GET
    const schema = require( '../resources/schemas/swapi_dev-api-planets-schemaSuccessful.json' );  // seta o schema do teste
    assert.jsonSchema(res.data, schema, "erro")  // compara o response json com o schema esperado
});

Scenario('Validação do contrato(Schema) com falha', ({ I }), async() => {
    const res = await axios.get('https://swapi.dev/api/planets/1/');
    const schema = require( '../resources/schemas/swapi_dev-api-planets-schemaFailed.json' );
    assert.jsonSchema(res.data, schema, "erro")
});

Scenario('Validação da response com sucesso', ({ I }), async() => {
    const res = await axios.get('https://swapi.dev/api/planets/1/');
    res.headers['content-type'];
    expect(res.status).to.equal(200);
    expect(res.data.name).to.equal("Tatooine");
    expect(res.data.rotation_period).to.equal("23");
    expect(res.data.orbital_period).to.equal("304");
    expect(res.data.diameter).to.equal("10465");
    expect(res.data.climate).to.equal("arid");
    expect(res.data.gravity).to.equal("1 standard");
    expect(res.data.terrain).to.equal("desert");
    expect(res.data.surface_water).to.equal("1");
    expect(res.data.population).to.equal("200000");
});


Scenario('Validação da response com falha', ({ I }), async() => {
    const res = await axios.get('https://swapi.dev/api/planets/1/');
    res.headers['content-type'];
    expect(res.status).to.equal(200);
    expect(res.data.name).to.equal("Tatooine");
    expect(res.data.rotation_period).to.equal("23");
    expect(res.data.orbital_period).to.equal("304");
    expect(res.data.diameter).to.equal("10465");
    expect(res.data.climate).to.equal("arid");
    expect(res.data.gravity).to.equal("1 standard");
    expect(res.data.terrain).to.equal("florest");
    expect(res.data.surface_water).to.equal("1");
    expect(res.data.surface_water).to.equal("200000");
});