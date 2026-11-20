interface PaymentMethod {
  pay(amount: number): void;
}

class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }
}

class CashPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} en efectivo`);
  }
}

// para agregar este no hubo que tocar PaymentProcessor
class TransferPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con transferencia`);
  }
}

class PaymentProcessor {
  pay(method: PaymentMethod, amount: number): void {
    method.pay(amount);
  }
}

// pruebas
const processor = new PaymentProcessor();

processor.pay(new CardPayment(), 100);
processor.pay(new CashPayment(), 250);
processor.pay(new TransferPayment(), 1500);
