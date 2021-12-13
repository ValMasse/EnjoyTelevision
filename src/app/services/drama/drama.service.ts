import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Drama } from 'src/app/models/drama.model';
import { newArray } from '@angular/compiler/src/util';
import { Comments } from 'src/app/models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class DramaService {
  drama1 : Drama;
  drama2 : Drama;
  drama3 : Drama;
  drama4 : Drama;
  drama5 : Drama;

  dramas:Array<Drama>;

  dramaSubject = new Subject();
  private _drama: Drama;

  public get drama(): Drama {
    return this._drama;
  }
  public set drama(value: Drama) {
    this._drama = value;
  }  

  constructor() { 
    this.dramas = new Array<Drama>();
    this.drama1 = new Drama(0, 'Breaking bad', '20/01/2008', '5', 'Walter White, un professeur de chimie surqualifié et père de famille, qui, ayant appris qu\'il est atteint d\'un cancer du poumon en phase terminale, sombre dans le crime pour assurer l\'avenir financier de sa famille. Pour cela, il se lance dans la fabrication et la vente de méthamphétamine avec l\'aide de l\'un de ses anciens élèves, Jesse Pinkman. L\'histoire se déroule à Albuquerque au Nouveau-Mexique.', 'Cette série finalement méconnue du grand public n\'a pas le succès qu\'elle mérite. Breaking Bad s\'impose certainement comme l\'un des meilleurs show de ces dernières années, alors que nous sommes constamment envahis par des séries bas de gamme, redondantes et donc sans intérêt. Cette série est un véritable chef d\'oeuvre portée par une interprétation excellente de ses comédiens, Bryan Cranston en tête', 'https://static.hitek.fr/img/actualite/i_breaking-bad.png');
    this.drama1.comments.push(new Comments(0, '01/02/2020', 'Jean-jacques', 'tip top cette série !'));
    this.drama1.comments.push(new Comments(1, '24/03/2020', 'Benoit1734', 'Cette série mérite tous les awards qu\'elle a remporté'));
    this.drama1.comments.push(new Comments(2, '04/04/2020', 'Steven118', 'L\'acteur qui joue Walter White est sensationnel !!'));
    this.drama1.comments.push(new Comments(3, '17/05/2020', 'SauvezWilly34', 'Je  suis un grand Fan de cette série ;)'));
    this.drama1.comments.push(new Comments(4, '28/05/2020', 'sophieDu78', 'J\'adore tout simplement'));
    this.dramas.push(this.drama1); 

    this.drama2 = new Drama(1, 'The Walking Dead', '31/10/2010', '10', 'Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, un groupe d\'hommes et de femmes mené par l\'officier Rick Grimes tente de survivre... Ensemble, ils vont devoir tant bien que mal faire face à ce nouveau monde devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.', 'Lancée en 2010 par Frank Darabont, et basée sur les BD de Bob Kirkman, The Walking Dead est une série post-apocalyptique reprenant une créature mythique plus que jamais à la mode: le zombie. On suit en effet les aventures de Rick Grimes, incarné par Andrew Lincoln, dans un monde déchiré et terrifiant, d\'autant plus que la propagation du virus n\'est pas mise en scène.', 'https://mcetv.fr/wp-content/uploads/2016/04/The-Walking-Dead-images-casting-et-derni%C3%A8res-infos-de-la-saison-7.jpg',);
    this.drama2.comments.push(new Comments(0, '11/01/2020', 'Rampant14', 'Tellement hâte de voir la saison 11 !!!!!'));
    this.drama2.comments.push(new Comments(1, '02/02/2020', 'SergentPepper', 'C\'est vraiment une bonne série, continuez comme ca !'));
    this.drama2.comments.push(new Comments(2, '01/03/2020', 'Philippe75006', 'Je suis un des plus grand fan de cette série'));
    this.drama2.comments.push(new Comments(3, '18/03/2020', 'EmmanuelleG', 'I love Daryl'));
    this.drama2.comments.push(new Comments(4, '19/04/2020', 'Emilie77', 'Je kiff tellement cette série, j\' ai vu toutes les saisons !!'));
    this.dramas.push(this.drama2);

    this.drama3 = new Drama(2, 'Friends', '22/09/1994', '10', 'Les péripéties de 6 jeunes newyorkais liés par une profonde amitié. Entre amour, travail, famille, ils partagent leurs bonheurs et leurs soucis au Central Perk, leur café favori.', 'Première apparition sur les télés américaines en 1994 (et en 1996 en France), "Friends" a immédiatement séduit le public (américain d\'abord puis mondial) et a connu un immense succès que beaucoup de séries actuelles rêvent de rencontrer. Considéré comme étant le sitcom par excellence, le modèle dont certaines séries tentent de suivre l\'exemple, "Friends" est une série qui a marqué toute une génération.', 'https://voila.cd/wp-content/uploads/2016/12/FRIENDS-620x356.png');
    this.drama3.comments.push(new Comments(0, '18/01/2020', 'RossAndRachel4Ever', 'C\'est juste un classique cette série :)'));
    this.drama3.comments.push(new Comments(1, '07/02/2020', 'Jeremy1988', 'C\'est magique cette sitcom'));
    this.drama3.comments.push(new Comments(2, '14/03/2020', 'FriendsBigFan', 'juste la meilleure série au monde !'));
    this.drama3.comments.push(new Comments(3, '18/05/2020', 'LucieD', 'Toujours aussi marrant, meme 20ans après !!!'));
    this.drama3.comments.push(new Comments(4, '24/05/2020', 'ChanandlerBong', 'Je connais chacun des épisodes par coeur à force mdr'));
    this.dramas.push(this.drama3);

    this.drama4 = new Drama(3, '13 Reasons Why', '31/03/2017', '4', 'Inspirée des best-sellers de Jay Asher, 13 Reasons Why suit Clay Jensen, un adolescent qui découvre sous son porche au retour du lycée une mystérieuse boîte portant son nom. À l\'intérieur, des cassettes enregistrées par Hannah Baker, une camarade de classe qui s\'est tragiquement suicidée deux semaines auparavant. Les enregistrements révèlent que la jeune fille, dont il était amoureux, a décidé de mettre fin à ses jours pour treize raisons. Clay est-il l\'une de ces raisons ?', '13 reasons why..." L\'histoire d\'une ado ordinaire qui a vu sa vie lui échapper... La solitude l\'envahir... Elle n\'avait rien demandé à personne à part une oreille attentive pour l\'écouter...Une chute vertigineuse dans le néant..... Une pépite de série à la fois touchante, énervante, bouleversante, choquante, révoltante, écoeurante mais malheureusement tellement réaliste bref elle me hante encore...', 'https://res.cloudinary.com/m1717/image/upload/v1528228983/article/hrfeosj8wnlxudp7t5dd.jpg');
    this.drama4.comments.push(new Comments(0, '17/02/2020', 'Eleanore24', 'Vraiment bouleversante et attanchante cette série !'));
    this.drama4.comments.push(new Comments(1, '12/03/2020', 'Valou18', 'J\'attendais la saison 4 et j\'ai pas été déçu'));
    this.drama4.comments.push(new Comments(2, '09/04/2020', 'ClemT', 'Excellent, vraiment :)'));
    this.drama4.comments.push(new Comments(3, '10/04/2020', 'Chouchou24', 'L\'une des meilleures série de ces 10 dernières années'));
    this.drama4.comments.push(new Comments(4, '17/05/2020', 'ClaireS', 'C\'est ma série préférée, je suis une grande fan'));
    this.dramas.push(this.drama4);

    this.drama5 = new Drama(4, 'Le Bureau des Légendes', '27/04/2015', '5', 'Au sein de la DGSE (Direction Générale de la Sécurité Extérieure), un département appelé le Bureau des légendes (BDL) pilote à distance les agents les plus importants des services de renseignements français : les clandestins. En immersion dans des pays hostiles, leur mission consiste à repérer les personnes susceptibles d\'être recrutées comme source de renseignements. Opérant dans l\'ombre "sous légende", c\'est-à-dire sous une identité fabriquée de toutes pièces, ils vivent durant de longues années dans une duplicité permanente. De retour d\'une mission clandestine de six années à Damas, notre héros - plus connu sous le nom de code Malotru - est promu au sein du BDL et reprend peu à peu pied dans sa vraie vie. Mais contrairement à toute procédure de sécurité, il semble ne pas abandonner sa légende et l\'identité sous laquelle il vivait en Syrie...', 'Le Bureau des légendes , une fin à couper le souffle, une sorte d\'Homeland like à la française plus que réussi ! Une fiction qui colle à la géopolitique actuelle et des acteurs excellents.', 'https://bonheur101.typepad.com/.a/6a01b8d2c12fdb970c022ad39d59ad200d-pi');
    this.drama5.comments.push(new Comments(0, '06/01/2020', 'FrenchSerieLover2', 'Meilleure série française de tous les temps !'));
    this.drama5.comments.push(new Comments(1, '14/02/2020', 'BadBoy4Ever', 'Un homeland à la française ;)'));
    this.drama5.comments.push(new Comments(2, '25/02/2020', 'StevieWonder28', 'les acteurs sont formidables'));
    this.drama5.comments.push(new Comments(3, '04/04/2020', 'AlanisMorissette23', 'je suis certainement la plus grande fan de cette série !!!!!!!'));
    this.drama5.comments.push(new Comments(4, '06/06/2020', 'TupacShakur18', 'Je me suis abonné à Canal+ juste pour voir la saison4 à sa sortie'));
    this.dramas.push(this.drama5);
  }

  // Method to search a drama by id
  getElementById(idDrama: number){
    for(const drama of this.dramas){
      if(drama.id === idDrama){
        return drama;
      }
    }
  }

  // Method to add a new drama in the array 'dramas'
  addDrama(dramaName: string, dateRelease: string, numberSeasons: string, description: string,
    critical: string, picture: string){
      const dramaObject = new Drama(this.dramas[(this.dramas.length - 1)].id + 1, dramaName, dateRelease, numberSeasons, description,
      critical, picture);

  this.dramas.push(dramaObject);

}

emitDramaSubject(){
  this.dramaSubject.next(this.drama);
}

updateDrama(id, dramaName, dateRelease, numberSeasons, description, critical, picture){
  console.log('dans la fonction' + id);
  const drama = this.getElementById(+id);
  console.log('serie :' + drama)
  drama.name = dramaName;
  drama.releaseDate = dateRelease;
  drama.numberSeasons = numberSeasons;
  drama.description = description;
  drama.critical = critical;
  drama.picture = picture;
  this.emitDramaSubject();
}

deleteDrama(idDrama: number){
  for(let i=0; i<this.dramas.length; i++){
    if(this.dramas[i].id === idDrama){
      this.dramas.splice(i, 1);
    }
  } 
}


deleteComment(idDrama: number, idComment: number){
  const drama = this.getElementById(+idDrama);
  for(let j = 0; j < drama.comments.length; j++){
    if(drama.comments[j].id === idComment){
      drama.comments.splice(j, 1);
    }
  }
}
  
}