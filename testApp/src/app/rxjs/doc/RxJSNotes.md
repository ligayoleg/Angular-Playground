# RxJS

RxJS is a library for composing asynchronous and event-based programs by using observable sequencies.

RxJs is a library for _observing_ and _reacting_ to data and events by using observable sequencies.

https://rxjs.dev/guide/overview

- Observe and React to Data as It Flows through Time
  - Emit items
  - React to each emitted item
    - Transform
    - Filter
    - Modify
  - Combine
  - Cache

### How Is RxJS Used in Angular?

- Routing
  this.route.paramMap
  this.route.data
  this.router.events
- Reactive Forms
  this.productform.valueChanges
- HttpClient
  getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(this.url);
  }

### Handling Observable Errors

- Catch the error
- Optionally rethrow the error
- Replace the errored Observable with a new Observable
