# Respuestas

## 1. SRP

**Que responsabilidades tiene `UserManager`?**
Valida el correo, guarda los usuarios y envia el email de bienvenida. Son tres cosas distintas en una sola clase.

**Que ocurre si cambia la forma de guardar datos?**
Hay que modificar `UserManager` aunque la validacion y el envio de correos no cambiaron. Con el cambio solo se toca `UserRepository`.

**Que clase podria encargarse de enviar correos?**
`EmailService`. Asi si cambia el proveedor de correo no afecta al resto.

## 2. OCP

**Que parte debe modificarse para agregar pago con transferencia?**
En el codigo original habia que agregar `"transfer"` al tipo `PaymentType` y otro `case` en el `switch` de `PaymentProcessor`. Ahora solo se crea la clase `TransferPayment` y `PaymentProcessor` queda igual.

**Como podriamos representar un medio de pago?**
Con una interfaz `PaymentMethod` y una clase por cada medio de pago que la implemente.

**Que comportamiento comun tienen todos los medios de pago?**
Todos pagan un monto, por eso la interfaz tiene el metodo `pay(amount)`.

## 3. LSP

**Por que el area final no coincide con lo que espera `resizeRectangle`?**
Porque `Square` cambia como funcionan `setWidth` y `setHeight`. Al hacer `setHeight(10)` tambien cambia el ancho a 10, entonces el area da 100 y no 50.

**Es siempre correcto modelar un cuadrado como un rectangulo por herencia?**
No. En matematica un cuadrado es un rectangulo, pero en el codigo un rectangulo permite cambiar ancho y alto por separado y el cuadrado no puede cumplir eso.

**Que abstraccion comun podriamos usar?**
Una interfaz `Shape` con `area()`, que es lo que todas las figuras pueden hacer sin problemas.

## 4. ISP

**Que metodo no necesita `SimplePrinter`?**
`scan` y `fax`, solo sabe imprimir.

**Que problema causa implementar metodos que lanzan errores?**
El que usa la clase cree que puede escanear porque el metodo existe, y recien se entera que no cuando el programa falla en tiempo de ejecucion.

**Como separar las capacidades de una impresora?**
En interfaces chicas `Printer`, `Scanner` y `Fax`, y cada clase implementa solo las que puede cumplir.

## 5. DIP

**Que dependencia concreta crea `OrderService`?**
Crea un `EmailSender` adentro de `createOrder` con `new EmailSender()`.

**Como probarias la clase sin enviar un correo?**
Pasandole por constructor un notificador falso como `FakeNotifier` que solo guarda los mensajes en una lista.

**Que contrato comun podrian implementar el correo y el SMS?**
La interfaz `Notifier` con el metodo `send(to, message)`.
