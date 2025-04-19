# ve-check
Biblioteca de JavaScript diseñada para validar números de Registro de Información Fiscal (RIF) utilizados en Venezuela. Esta herramienta es ideal para desarrolladores que trabajan con sistemas relacionados con datos fiscales o necesitan implementar validaciones específicas para el formato del RIF. 

# Validación de RIF

Esta librería está diseñada para validar el formato de los RIF (Registro de Información Fiscal) en Venezuela, asegurando que cumplan con las especificaciones establecidas por el SENIAT.

## Características

- Verifica que las letras iniciales sean válidas:
    - **V** y **E** para personas naturales.
    - **C**, **G**, **J** para personas jurídicas.
- Valida que el número de verificación sea correcto antes de enviar el RIF al SENIAT.

## Instalación

Puedes instalar la librería utilizando tu gestor de paquetes favorito:

```bash
npm install validacion-rif
```

## Uso

A continuación, un ejemplo básico de cómo usar la librería:

```javascript
const validarRIF = require('validacion-rif');

const rifValido = validarRIF('V123456789');
console.log(rifValido); // true o false dependiendo de la validez
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes una idea para mejorar la librería, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.