# Logos pendientes de autorización

Archivos descargados de los sitios de cada marca. **Están fuera de `src/` a propósito**: así no entran al build ni se publican.
`[FALTA: autorización escrita de cada marca]`

Cuando haya autorización escrita de una marca:
1. Mover su archivo a `src/assets/clientes/`.
2. En `src/data/clientes.ts`: importarlo, asignarlo a `logo`, poner `autorizado: true` y `fechaAutorizacion: 'AAAA-MM-DD'`.
