var fs = require('fs');
var CodeGen = require('swagger-js-codegen').CodeGen;
var file = 'swagger/spec.json';
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
var tsSourceCode = CodeGen.getTypescriptCode({ className: 'Test', swagger: swagger, imports: ['../Server/app.ts'] });
console.log(tsSourceCode);
//# sourceMappingURL=swagger.js.map