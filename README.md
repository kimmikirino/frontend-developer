# Quer fazer parte da Superbid Webservices ?

O teste consiste basicamente em algumas perguntas abaixo e um teste pratico, basta fazer um fork do repositório responder as perguntas no próprio README.md e submeter o pull request.

## Questionário

* Você já teve alguma experiências em desenvolvimento componentes customizados? Como evitar o problema de componentes complexos com baixa performance?
Criar componentes que tenham uma única responsabilidade.

* Quais patterns você já usou ou conhece para otimizar as chamadas a APIs Rest?
Conheço alguns patterns, mas não sei dizer ao certo qual otimizaria chamadas Rest.

* Como lidar com cache (browser/cdn/proxy) no lançamento das novas versões da sua aplicação web?
Para browser, renomear os nomes dos arquivos compilados.

* Na sua opinião, quais são as vantagens de React? quais são as desvantagens/riscos no uso do React?
DOM virtual, aumentando assim a performance, facilidade na reutilização do código com componentização.
Desvantagens: por ser uma biblioteca principalmente para manipular o UI, normalmente é necessário adicionar outras bibliotecas. 
O entendimento do ciclo e jsx, pode ser que o aprendizado seja alto.

* Considerando uma tela em React contendo informações em tempo real, que deve ser atualizada sempre que ocorrer um determinada ação no servidor, qual arquitetura ou protocolo de comunicação você utilizaria?
Websocket, mensageria. 

* Você já implementou react com suporte a i18n ? quais os pontos importantes a serem considerados?
Não.

## Teste Prático 

Considerando a arquitetura básica utilizando React + Redux, criar uma app contemplando as 3 telas:

![Draft](./draft.png)

Consumir a seguinte api:

https://jsonplaceholder.typicode.com/photos

