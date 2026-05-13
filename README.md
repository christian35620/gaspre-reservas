# Gaspre Reservas

Aplicación Angular para explorar clases disponibles, ver el detalle de cada clase y simular una reserva.

## Requisitos

- `Node.js` 20 o superior
- `pnpm` 10 o superior

## Correr la app en local

1. Instalar dependencias:

```bash
pnpm install
```

2. Levantar el servidor de desarrollo:

```bash
pnpm start
```

3. Abrir la app en el navegador:

```text
http://localhost:4200/
```

La app recarga automáticamente cuando cambiás archivos en `src/`.

## Scripts útiles

Iniciar el servidor de desarrollo:

```bash
pnpm start
```

Generar un build de producción:

```bash
pnpm build
```

Ejecutar tests:

```bash
pnpm test
```

## Estructura básica

- `src/app/features/bookings/` contiene el flujo de listado, detalle y reserva
- `src/app/features/shared/` agrupa componentes visuales reutilizables
- `public/assets/images/` contiene las imágenes usadas por la UI

## Notas

- La reserva es simulada; no existe persistencia real.
- Si el puerto `4200` está ocupado, Angular te lo va a indicar al iniciar `pnpm start`.
