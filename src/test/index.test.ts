import { verifierEtFormaterEmail } from "../index";

describe("Vérification et formatage d’e-mails", () => {
  test("E-mail valide", () => {
    expect(verifierEtFormaterEmail("exemple.utilisateur@domaine.com")).toEqual(
      "L'adresse 'exemple.utilisateur@domaine.com' est valide et dans le bon format."
    );
  });

  test("E-mail avec plusieurs @", () => {
    expect(verifierEtFormaterEmail("user@@domain.com")).toEqual("L'adresse 'user@@domain.com' est invalide.");
  });

  test("E-mail sans @", () => {
    expect(verifierEtFormaterEmail("utilisateur.domaine.com")).toEqual(
      "L'adresse 'utilisateur.domaine.com' est invalide."
    );
  });

  test("E-mail sans point après @", () => {
    expect(verifierEtFormaterEmail("utilisateur@domainecom")).toEqual(
      "L'adresse 'utilisateur@domainecom' est invalide."
    );
  });

  test("E-mail avec extension trop courte", () => {
    expect(verifierEtFormaterEmail("utilisateur@domaine.c")).toEqual("L'adresse 'utilisateur@domaine.c' est invalide.");
  });

  test("E-mail commençant par @", () => {
    expect(verifierEtFormaterEmail("@domaine.com")).toEqual("L'adresse '@domaine.com' est invalide.");
  });

  test("E-mail avec majuscules", () => {
    expect(verifierEtFormaterEmail("User.Name@DOMAIN.COM")).toEqual(
      "L'adresse 'user.name@domain.com' est valide et dans le bon format."
    );
  });
});
