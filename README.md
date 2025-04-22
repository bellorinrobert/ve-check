![Mi logo](https://github.com/bellorinrobert/ve-check/blob/main/assets/logo.jpg)
# ve-check
Biblioteca de JavaScript diseñada para validar números de Registro de Información Fiscal (RIF) utilizados en Venezuela. Esta herramienta es ideal para desarrolladores que trabajan con sistemas relacionados con datos fiscales o necesitan implementar validaciones específicas para el formato del RIF. 

# Validación de RIF

Esta librería está diseñada para validar el formato de los RIF (Registro de Información Fiscal) en Venezuela, asegurando que cumplan con las especificaciones establecidas por el SENIAT.

## Características

- Verifica que las letras iniciales sean válidas:
    - **V**, **E** y **P**  para personas naturales.
    - **C**, **G**, **J** para personas jurídicas.
- Valida que el número de verificación sea correcto antes de enviar el RIF al SENIAT.

## Instalación

Puedes instalar la librería utilizando tu gestor de paquetes favorito:

```bash
npm install ve-check
```

## Uso

A continuación, un ejemplo básico de cómo usar la librería:

```javascript
const { validarRif } = require('ve-check')

const rifValido = validarRif('G200062975')

console.log(rifValido); // true o false dependiendo de la validez
```
## Pruebas
```
/**
 * Imports the `validarRif` function from the main module.
 * 
 * @fileoverview Test file for validating RIF (Registro de Información Fiscal).
 * @requires ../index.js
 * @author bellorinrobert@gmail.com
 * @date 2023-10-06
 */
const { validarRif } = require("../index.js");

describe("isValidRif", () => {
    
    test("should return true for valid RIF", () => {
        //Rif de Digitel
        expect(validarRif("J304689713")).toBe(true);
        expect(validarRif("V158044150")).toBe(true);
        expect(validarRif("V-15.804.415-0")).toBe(true);
        expect(validarRif("V-6.011.457-5")).toBe(true);
        expect(validarRif("V-6.011.4575")).toBe(true);
        expect(validarRif("V-6.011-4575")).toBe(true);
        expect(validarRif("V-6-011-4575")).toBe(true);
        expect(validarRif("V6-011-4575")).toBe(true);
        //Rif de Corpocentro
        expect(validarRif("G200083433")).toBe(true);
        //Rif de la UNEFA
        expect(validarRif("G200062975")).toBe(true);
        //Rif del IUTEPAL
        expect(validarRif("J308810746")).toBe(true);
        expect(validarRif("J75387350")).toBe(true);
    })
    
 

})
```
## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes una idea para mejorar la librería, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.