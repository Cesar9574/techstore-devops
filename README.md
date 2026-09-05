# TechStore DevOps - Proyecto Transformado

## Contexto
TechStore GT poseia una aplicacion pequena desarrollada rapidamente, sin control de
versiones formal, con contrasenas expuestas en el codigo, sin revisiones de codigo
ni integracion continua. Este repositorio documenta la transformacion DevOps aplicada
al proyecto.

## Requisitos
- Node.js 20 o superior
- Git
- Cuenta de GitHub

## Instalacion

1. Clonar el repositorio:
```bash
git clone https://github.com/Cesar9574/techstore-devops.git
cd techstore-devops
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno: copiar .env.example a .env y completar los
valores reales (nunca se sube .env a Git, esta protegido en .gitignore):
```bash
cp .env.example .env
```

## Ejecutar aplicacion
```bash
npm start
```

## Ejecutar pruebas
```bash
npm test
```

## Estructura del proyecto
```text
techstore-devops/
|-- .github/
|   `-- workflows/
|       `-- ci.yml          # Pipeline de integracion continua
|-- config/
|   `-- config.js           # Configuracion via variables de entorno
|-- docs/
|   `-- NOTAS_PROYECTO.txt
|-- src/
|   |-- app.js               # Logica de negocio (calculo de totales y descuentos)
|   `-- demo.js               # Script de demostracion
|-- tests/
|   `-- app.test.js
|-- .env.example              # Plantilla de variables de entorno (sin valores reales)
|-- .gitignore
|-- package.json
`-- README.md
```

## Flujo de ramas (Git Flow simplificado)
- main: codigo estable, protegido, solo recibe cambios via Pull Request aprobado.
- develop: rama de integracion donde se combinan los cambios antes de pasar a main.
- feature/*: ramas individuales para cada nueva funcionalidad, creadas desde develop.

## Flujo de contribucion
1. Crear una rama desde develop: git checkout -b feature/nombre-funcionalidad
2. Hacer cambios y commitear: git add . && git commit -m "descripcion"
3. Subir la rama: git push origin feature/nombre-funcionalidad
4. Abrir un Pull Request hacia develop en GitHub
5. Tras revision y aprobacion, se fusiona a develop
6. Periodicamente, se abre un Pull Request de develop hacia main

## Integracion continua
Cada push o Pull Request hacia main o develop ejecuta automaticamente un pipeline
de GitHub Actions (.github/workflows/ci.yml) que instala dependencias y corre las
pruebas automatizadas con Jest.

## Gestion de pendientes
Los TODOs identificados en el codigo original fueron migrados a Issues formales de
GitHub para su seguimiento (ver pestana Issues del repositorio).

## Seguridad
Las credenciales de base de datos ya no estan escritas en el codigo. Se manejan mediante
variables de entorno (.env, ignorado por Git) y una plantilla publica (.env.example).