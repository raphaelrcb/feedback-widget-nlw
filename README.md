//SQLite nao precisa instalar nada / salva BD como arquivo físico
//MIGRATIONS: forma de manter controle de versao do banco de dados. toda vez que se cria uma tabela, se muda um campo, cria um nove indice, se mantem o historico dessas atualizacoes do banco de dados.
//Prisma ferramente que facilita trabalhar com operacoes de BD, escreve códigos javascript e converte para SQL, converte para varios tipos de banco de dados npm i prisma -D npm i @prisma/client 
//express; mini framework / biblioteca para trabalhar com a parte de http da aplicação backend
//insomnia cliente / gui (interface grafica para fazer operacoes http)
//biblioteca para envio de emails nodemailer + serviços de envio de email (mailtrap)
//cors -> controle de segurança para "front-end inadequados" não acessarem o backend 

#SOLID: sigla pra cinco principios da programacao

    1. Single Responsibility Principle 
    2. Open/Closed Principle 
    3. Liskov Substitution Principle 
    4. Interface Segregation Principle
    5. Dependency Inversion Principle

    1. Cada classe/função tem uma responsabilidade única; (nao ter classes que executam mais de uma regra)
    2. As classes da aplicação devem ser abertas para extensão mas fechadas para modificação (muito ligado a OO) 
    3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando
    4. tentar separar as interfaces o maximo possivel
    5. Inverter as dependencias da função/classe. ao inves da classe buscar dependencias externa, o contexto externo fala quais as dependencias que a classe vai usar.


#JEST framework de testes, possui todos as ferramentas para testar aplicaçÕes javascript
npm install jest -D
npm install ts-node -D
npm i -D @swc
npm i @types/jest -D

testes tem a funcao de trazer segurança no desenvolvimento. confiança e segurança ao adicionar novas funcionalidades e liberar para produção
testes unitarios -> testes que testam pequenas unidades da aplicação desacopladas do restante. sem testar como a função se integra ao restante do código 

spies/espioes -> formas de saber se dentro do teste alguma funcao ser chamada 


# DEPLOY

configurar variaveis de ambiente ".env"