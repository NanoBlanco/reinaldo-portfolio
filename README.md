# Reinaldo J. Blanco M.

**Software Developer · Backend · Integration · Architecture**

Desarrollador de software enfocado en el diseño y desarrollo de soluciones empresariales a medida, orientadas a integración, datos y sistemas de software.

Mi experiencia se concentra en el desarrollo backend, las bases de datos relacionales, la integración entre sistemas y el diseño de soluciones que respondan a necesidades reales de negocio.

Este repositorio contiene el código fuente de mi portafolio profesional, desarrollado como un proyecto en evolución para presentar mi experiencia y proyectos, y aplicar buenas prácticas de desarrollo frontend, control de versiones y despliegue.

## Perfil técnico

- **Backend y bases de datos:** desarrollo de soluciones empresariales, SQL, PL/SQL y Oracle Database.
- **Integración de sistemas:** diseño y evolución de procesos de integración, validación de datos, gestión de errores y comunicación entre sistemas.
- **Arquitectura de software:** separación de responsabilidades, mantenibilidad y diseño de soluciones orientadas a necesidades de negocio.
- **Desarrollo web:** experiencia con tecnologías backend y frontend, incluyendo Java, JavaScript y TypeScript.
- **Modernización tecnológica:** evolución de soluciones existentes y adopción de herramientas y tecnologías modernas de desarrollo.

## Proyectos destacados

### 1. Integración de sistemas académicos con Ellucian Banner

Modernización de la arquitectura de integración entre un sistema institucional de gestión estudiantil y Ellucian Banner.

**Tecnologías:** Oracle Database 19c, SQL y PL/SQL.

**Trabajo realizado:**

- Rediseño de la arquitectura de ejecución y centralización de la orquestación.
- Refactorización de aproximadamente 20 triggers y procedimientos PL/SQL.
- Incorporación de validaciones y excepciones personalizadas.
- Optimización de consultas y uso de funcionalidades nativas de Oracle.
- Documentación técnica de los cambios y sus fundamentos.

**Resultado:** reducción aproximada del 90 % en los fallos registrados en los procesos de integración, según las métricas operacionales disponibles.

### 2. Sistema de Gestión de Organizaciones (SGO)

Solución web para la gestión de organizaciones, desarrollada con una arquitectura que separa la interfaz de usuario de los servicios backend.

**Tecnologías:** React, TypeScript, FastAPI, SQLAlchemy y Ellucian Banner.

El proyecto aborda la construcción de interfaces web y servicios backend, junto con la integración con sistemas institucionales.

### 3. Sistema municipal de compras, inventario y activos fijos

Solución para apoyar la gestión de compras, inventario y activos fijos en el ámbito municipal.

**Tecnologías:** Laravel y PostgreSQL.

**Implementación:** solución implementada en cinco municipalidades, con aproximadamente 75 usuarios potenciales.

El proyecto integra procesos administrativos y de gestión, con foco en responder a necesidades operativas concretas.

## Este portafolio

El portafolio está construido como una aplicación frontend independiente, con una estructura sencilla y componentes reutilizables.

### Tecnologías

- React
- TypeScript
- Vite
- CSS
- ESLint
- Prettier
- Git y GitHub

### Características

- Diseño adaptable a distintos tamaños de pantalla.
- Componentes y secciones organizados por responsabilidad.
- Consideraciones de accesibilidad y navegación mediante teclado.
- Respeto por la preferencia del sistema para reducir el movimiento.
- Validación estática del código y formato consistente.
- Compilación optimizada para producción.

## Requisitos

Para ejecutar el proyecto localmente necesitas:

- Node.js.
- npm.

## Instalación y ejecución

Clona el repositorio:

```bash
git clone git@github.com:NanoBlanco/reinaldo-portfolio.git
cd reinaldo-portfolio
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local en la que podrás abrir el portafolio desde el navegador.

## Comandos disponibles

| Comando                | Descripción                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| `npm run dev`          | Inicia el servidor de desarrollo.                                        |
| `npm run build`        | Comprueba los tipos de TypeScript y genera la compilación de producción. |
| `npm run preview`      | Permite previsualizar localmente la compilación generada.                |
| `npm run lint`         | Ejecuta ESLint para analizar el código.                                  |
| `npm run format`       | Aplica el formato definido por Prettier.                                 |
| `npm run format:check` | Comprueba el formato sin modificar los archivos.                         |

Para validar el proyecto antes de publicar cambios:

```bash
npm run format:check
npm run lint
npm run build
```

## Estructura del proyecto

```text
reinaldo-portfolio/
├── public/             # Recursos estáticos
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── sections/       # Secciones del portafolio
│   ├── App.tsx         # Composición principal
│   ├── index.css       # Estilos globales
│   └── main.tsx        # Punto de entrada
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Contacto

- **LinkedIn:** [Reinaldo J. Blanco Medina](https://www.linkedin.com/in/reinaldo-j-blanco-medina/)
- **GitHub:** [NanoBlanco](https://github.com/NanoBlanco)
- **Correo electrónico:** [contacto@reinaldoblanco.cl](mailto:contacto@reinaldoblanco.cl)

---

Este portafolio se encuentra en desarrollo y evoluciona junto con mis proyectos y mi aprendizaje continuo en desarrollo frontend, arquitectura de software y prácticas modernas de ingeniería.

## Development workflow

Changes are developed in feature branches and integrated into `main` through pull requests validated by GitHub Actions.
