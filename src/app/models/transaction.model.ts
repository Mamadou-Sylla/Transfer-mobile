export class TransactionModel{
  prenom: string;
  nom: string;
  telephone: string;
  cni: string;
  montant: number;
  type: string;
  client: {
      prenom: string;
      nom: string;
      telephone: string;
      statut: string;
  };
}


export class Frais{
  id: number;
  min: number;
  max: number;
  frais: number;
}
