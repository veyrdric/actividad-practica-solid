interface User {
  username: string;
  email: string;
}

class UserValidator {
  validate(email: string): void {
    if (!email.includes("@")) {
      throw new Error("El correo no es valido");
    }
  }
}

class UserRepository {
  private users: User[] = [];

  save(user: User): void {
    this.users.push(user);
  }

  findAll(): User[] {
    return [...this.users];
  }
}

class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

// solo coordina, el trabajo lo hacen las otras clases
class UserRegistrationService {
  private validator: UserValidator;
  private repository: UserRepository;
  private emailService: EmailService;

  constructor(validator: UserValidator, repository: UserRepository, emailService: EmailService) {
    this.validator = validator;
    this.repository = repository;
    this.emailService = emailService;
  }

  register(username: string, email: string): string {
    this.validator.validate(email);
    this.repository.save({ username, email });
    return this.emailService.sendWelcomeEmail(email);
  }
}

// pruebas
const repository = new UserRepository();
const registration = new UserRegistrationService(new UserValidator(), repository, new EmailService());

console.log(registration.register("ana", "ana@example.com"));
console.log(registration.register("juan", "juan@example.com"));

try {
  registration.register("pepe", "pepe-sin-arroba");
} catch (error) {
  console.log("Error:", (error as Error).message);
}

console.log("Usuarios guardados:", repository.findAll());
