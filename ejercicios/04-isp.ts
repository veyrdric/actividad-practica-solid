interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

// solo implementa lo que puede hacer
class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }
}

class MultifunctionPrinter implements Printer, Scanner, Fax {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }

  scan(document: string): void {
    console.log(`Escaneando: ${document}`);
  }

  fax(document: string): void {
    console.log(`Enviando fax: ${document}`);
  }
}

function printAll(printers: Printer[], document: string): void {
  for (const printer of printers) {
    printer.print(document);
  }
}

// pruebas
const simple = new SimplePrinter();
const multifunction = new MultifunctionPrinter();

simple.print("tarea.txt");
multifunction.scan("dni.pdf");
multifunction.fax("contrato.pdf");

printAll([simple, multifunction], "informe.docx");
