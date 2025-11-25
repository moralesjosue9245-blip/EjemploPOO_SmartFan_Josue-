# Fullstack Project (Angular + Spring Boot)

## Backend (Spring Boot)
- Repositorio: /backend
- Requisitos: Java 17, Maven
- Ejecutar:
  1. Abrir terminal en /backend
  2. Ejecutar: mvn spring-boot:run
  3. La API quedará en: http://localhost:8080/api/productos
  4. H2 console: http://localhost:8080/h2-console (jdbc:h2:mem:productosdb, user: sa, sin password)

## Frontend (Angular)
- Repositorio: /frontend
- Requisitos: Node.js, npm, Angular CLI
- Pasos:
  1. Abrir terminal en /frontend
  2. Ejecutar: npm install
  3. Ejecutar: npm start   (esto hace `ng serve --open` si tienes Angular CLI instalado globalmente)
  4. La app se abrirá en: http://localhost:4200
- Nota: Si no tienes Angular CLI global, instala con: `npm install -g @angular/cli`

## Notas
- El backend utiliza una base H2 en memoria con datos iniciales. No necesita configurar DB externa.
- El frontend es una versión ligera basada en componentes standalone de Angular (requiere Angular 16+).