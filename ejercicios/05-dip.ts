interface Notifier {
  send(to: string, message: string): void;
}

class EmailSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`Correo para ${to}: ${message}`);
  }
}

class SmsSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`SMS para ${to}: ${message}`);
  }
}

// para probar sin mandar nada, solo guarda los mensajes
class FakeNotifier implements Notifier {
  sent: string[] = [];

  send(to: string, message: string): void {
    this.sent.push(`${to}: ${message}`);
  }
}

class OrderService {
  private notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  createOrder(customer: string): void {
    console.log("Pedido creado");
    this.notifier.send(customer, "Tu pedido fue creado");
  }
}

// pruebas
new OrderService(new EmailSender()).createOrder("ana@example.com");
new OrderService(new SmsSender()).createOrder("3811234567");

const fake = new FakeNotifier();
new OrderService(fake).createOrder("test@example.com");
console.log("Mensajes guardados en el fake:", fake.sent);
