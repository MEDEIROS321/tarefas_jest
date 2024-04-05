module.exports = {
  bail: true, //tentar executar  inumeras vezes
  coverageProvider: "v8", 
  testMatch: [
    "<rootDir>/src/**/*.spec.js" // arquivo de configuraçao, para teste
  ]
  
}