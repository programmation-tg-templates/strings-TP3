# Chaines de caractères - TP3 - Vérification et formatage d’e-mails

## Consignes

Écrire un programme qui contient une chaîne prédéfinie représentant une adresse e-mail.
La fonction `verifierEtFormaterEmail` doit :
- Vérifier que la chaîne contient exactement un “@” et au moins un point (.) après le “@”.
- Vérifier que le nom de domaine (après le dernier point) contient au moins 2 caractères.
- Si l’e-mail est valide, retourner  : "L’adresse <email> est valide."
- Sinon, retourner : "L’adresse <email> est invalide."
- Transformer l’e-mail en minuscules pour standardiser le format.



**Signature de la fonction :**

```ts
function verifierEtFormaterEmail(email: string): string
```

## Exemples

- `verifierEtFormaterEmail("exemple.utilisateur@domaine.com")` doit retourner `L'adresse 'exemple.utilisateur@domaine.com' est valide et dans le bon format.`
- `verifierEtFormaterEmail("user@@domain.com")` doit retourner `L'adresse 'user@@domain.com' est invalide.`
