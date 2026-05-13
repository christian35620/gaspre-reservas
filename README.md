# Gym Booking App

Mini aplicación Angular para visualizar clases disponibles de gimnasio, ver su detalle y simular una reserva de cupo.

## Requisitos

- Node: `v22.21.1`
- pnpm: `10.32.1`
- Angular CLI: `21.2.11`

## Instalación

```bash
pnpm install
```

## Ejecución

```bash
pnpm start
```

Luego abrir:

```txt
http://localhost:4200
```

## Rutas principales

- `/bookings`: listado de clases disponibles.
- `/bookings/:bookingId`: detalle de una clase.
- `/bookings/:bookingId/reserve`: formulario de reserva.

## Arquitectura

```txt
src/app/
  core/
    interceptors/
  features/
    bookings/
      components/
        booking-list/
      models/
      mocks/
      pages/
        booking-detail-page/
        booking-reservation-page/
      services/
    shared/
      components/
```

Responsabilidades principales:

- `App`: layout raíz con `router-outlet`.
- `BookingsComponent`: pantalla contenedora del listado; obtiene datos desde `BookingApi` y resuelve estados `loading`, `error` y `success`.
- `BookingListComponent`: renderiza el listado de clases y su empty state cuando recibe `[]`.
- `BookingCardComponent`: card individual con navegación al detalle.
- `BookingDetailPageComponent`: detalle de clase con CTA de reserva y fallback para clase inexistente.
- `BookingReservationPageComponent`: resumen de clase, control del envío y feedback de éxito/error.
- `BookingReservationFormComponent`: formulario de reserva con Reactive Forms.
- `BookingApi`: servicio HTTP tipado para listado, detalle y creación de reserva.
- `bookingsMockInterceptor`: simulación de API con delay y respuestas mockeadas.

## Comunicación entre componentes

La selección de una clase se representa mediante la URL (`bookingId`) usando rutas.
Las páginas ruteadas obtienen los datos desde `BookingApi`.
Dentro de la feature, los componentes presentacionales reciben datos mediante `input()` y comunican acciones mediante `output()`. El caso más claro es `BookingReservationFormComponent`, que emite `reservationSubmitted` hacia `BookingReservationPageComponent`.

Esta decisión evita estado global innecesario y mantiene un flujo simple para una app pequeña.

## Simulación de API

La API se simula con un HTTP interceptor funcional.
`BookingApi` usa `HttpClient` contra endpoints REST-like.
Los datos mock viven separados en `src/app/features/bookings/mocks`.

Endpoints mockeados:

```txt
GET /bookings
GET /bookings/:bookingId
POST /bookings/:bookingId/reservations
GET /bookings?mock=empty
GET /bookings?mock=error
```

## Estados contemplados

```txt
- Loading.
- Error.
- Empty.
- Success de reserva.
- Error de reserva.
- Sin cupos disponibles.
```

## Decisiones técnicas

```txt
- Standalone components.
- Nueva sintaxis @if y @for.
- Signals para el estado local de la reserva.
- Reactive Forms para el formulario.
- Lazy loading por rutas de la feature bookings.
- SCSS puro sin librerías UI.
- Mock API mediante interceptor HTTP.
```

## Limitaciones

La reserva es simulada y no persiste al recargar la aplicación.
No se implementó autenticación ni backend real porque no forman parte del alcance del challenge.
No hay script de lint en `package.json`.

## Validación

```txt
pnpm install: OK
pnpm build: OK (con warning por budget de styles en booking-detail-page.scss)
pnpm test: OK
pnpm lint: no existe script
```
