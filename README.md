
# Lyutils

Este repositório possui utilidades para usar no Typescript e Javascript!


## Instalando o pacote

Para instalar o pacote, rode o seguinte comando

```bash
  npm i @thayrone_paula/lyutils
```

## Funcionalidades

  ### toDecimals
   <details><summary>Exemplos!</summary>

  ```typescript
    import { toDecimals } from '@thayrone_paula/lyutils/utils';

    //Exemple: 1
    const exemple = 0.1 + 0.2 // 0.30000000000000004
    const result = toDecimals(exemple, 1);
    console.log(result) // 0.3 

    //Exemple: 2
    const exemple2 = 3.14159265359
    const result2 = toDecimals(exemple2, 2) 
    console.log(result2) // 3.14
  ```
  </details>
  
  ### brlToCents
   <details><summary>Exemplos!</summary>
   
  ```typescript
    import { brlToCents } from '@thayrone_paula/lyutils/utils';

    //Exemple: 1
    const brlValue = 40 // -> R$ 40,00 
    const result = brlToCents(exemple) 
    console.log(result) // 4000 centavos

    //Exemple: 2
    const brlValue2 = 3.5
    const result2 = brlToCents(exemple2) 
    console.log(result2) // 350 centavos
  ```
  </details>

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/thayronepaula/lyutils.git
  cd lyutils
  npm install
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

