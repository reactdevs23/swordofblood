import { config } from "../functions/config";

export default function Strings() {
  return {
    tokenAddress: "ADRESSE DU JETON",
    logoTitle: "Logo",
    aboutTtl: "À propos de",
    wpTtl: "Whitepaper",
    allocTtl: "Allocation de jetons",
    deckTtl: "Pitchdeck",
    presaleTtl: "Prévente",
    rmTtl: "Feuille de route",
    auditTtl: "Audit",
    projectTtl: "Projet",
    quickLinksTtl: "Quick links",
    privPolicy: "Politique de confidentialité",
    termsAndConds: "Conditions générales d'utilisation",
    amlPolicy: "Politique anti-blanchiment d'argent",
    salePolicy: `Conditions de vente de ${config.tokenSymbol}`,
    descText1:
      "Save the realm from anarchy in this immersive, mobile Action RPG! Fight enemies from the ancient underworld using magic spells and fierce iron weapons! Follow our socials to stay updated!",
    descText2:
      "Copyright © {YEAR} Hitbox Holdings SVG LLC, a St Vincent Corporation",
    descText3:
      "Suite 305 Griffith Corporate Centre, Kingstown, St Vincent, and the Grenadines.",
    quickLinks: "Quick links",
    // presaleStage: 'Phase de prévente',
    presaleStage: "La PRÉVENTE 1 est en ligne!",
    // buyBeforeTheEnd: "Dépêchez-vous avant la fin de la prévente!",
    buyBeforeTheEnd: "Veuillez attendre les annonces",
    buyBefore:
      "Dépêchez-vous avant que le prix de l'étape {STAGE}  n'atteigne $0,056!",

    soldTtl: "Vendu",
    raisedTtl: "Collecté",
    connectWallet: "Connecter le portefeuille",
    minimumPurchWarn: `Le montant de l'achat ne doit pas être inférieur à {VALUE1} ${config.tokenSymbol} ni supérieur à {VALUE2} ${config.tokenSymbol}.`,
    minimumPurchWarn2: `DLe montant de l'achat ne doit pas être supérieur à {VALUE1} ${config.tokenSymbol}.`,
    presaleInactive: "La prévente est inactive.",
    insufFunds:
      "Vous n'avez pas assez d'argent pour effectuer une transaction.",
    impossToTx: "Il est impossible d'effectuer une transaction.",
    invalidTime: "Heure non valide.",
    stayAndWait: `Merci de ne pas quitter le site et d'attendre la confirmation de la transaction.`,
    goesWrong: `Tu as annulé l'opération ou un problème est survenu.`,
    thankYou: "Merci pour votre achat!",
    tokPayFailed: "Échec du paiement par jetons",
    claimNoFunds: `Tu n'as pas de tokens disponibles pour le retrait.`,
    statClaimed: `Tes tokens ${config.tokenSymbo} vont bientôt être envoyés à ton adresse.`,
    connectNote:
      "*Please note that, this action can not be undone once the wallet is authorize.",
    connectTheWallet: "Connect the wallet",
    youOwn: "Vous avez",
    buyWith: "Acheter avec",
    claimTokens: "Réclamation",
    buyTokenWith: `Acheter ${config.tokenSymbol} avec`,
    minimumTtl: "Minimum",
    buyDesc: `Entrez le montant de ${config.tokenSymbol} que vous souhaitez acheter, puis cliquez sur "Acheter"`,
    buyTtl: "Acheter",
    payTtl: "Payer",
    approveMessage: `Pour payer avec des stablecoins, il est nécessaire de confirmer deux transactions : tout d'abord pour autoriser les dépenses et ensuite pour acheter des ${config.tokenSymbol}. Reste sur le site jusqu'à ce que toutes les transactions soient confirmées. Les tokens ERC-20 sont uniquement pris en charge.`,
    wygTitle1: "Un RPG hack n slash dynamique",
    wygTitle2: "Un gameplay très immersif et magnifiquement rendu",
    wygTitle3: "Modes PvE et PvP",
    aboutDesc1: `Avec ses combats spectaculaires, ses graphismes époustouflants et ses différents modes de jeu, ${config.appName} est le premier RPG de qualité AAA à rythme rapide de type F2P sur la blockchain, lancé par Polygon.`,
    aboutDesc2: `La violence, la trahison et la malveillance ont entraîné la chute brutale du monde d'Ezura. Le Traître, un être d'un mal immense, a anéanti les vaillants protecteurs du royaume et depuis 1 000 ans, les ténèbres règnent.`,
    aboutDesc3: `C'est une époque de désespoir et de mort, alors que les armées du Betrayer couvrent le pays.`,
    aboutDesc4: `Mais des ruines surgit un salut possible : le dernier ordre guerrier autrefois puissant a été ressuscité par une ancienne déesse connue sous le nom de Sentinelle. Ensemble, vous allez tenter d'apporter une étincelle d'espoir à cette terre désolée.`,
    aboutDesc5: `Devenez un explorateur de donjon intrépide, un mage de combat chasseur de primes ou un puissant guerrier, en moulinant pour obtenir du butin et des équipements rares. Fabriquez des équipements épiques, pliez la magie de la nature à votre volonté et vengez vos frères tombés au combat dans une quête épique de puissance et de vengeance.`,
    contactUsDesc: `Devenez un ambassadeur de ${config.appName} et gagnez des jetons de jeu, de l'or et des gemmes.`,
    contactUs: "Contactez-nous",
    asSeenOnTtl: "Tel que vu sur",
    facTtl1: `Découvrez le monde magnifique d'Ezura.`,
    facTtl2: `Maîtrisez une grande variété d'armes et d'éléments`,
    facTtl3: `Créez des combinaisons d'attaques dévastatrices.`,
    facTtl4: "Fabriquez des engins et des armes uniques et puissants.",
    facTtl5: "Utilisez le jeu de hack n slash pour massacrer vos adversaires.",
    facTtl6: `Affrontez d'autres joueurs dans un JcJ rapide et brutal.`,
    teamName1: "James Seaman",
    teamTtl1: "CEO",
    teamName2: "Jeremy Brown",
    teamTtl2: "COO",
    teamName3: "Mariusz Szynalik",
    teamTtl3: "Project Director for HitBox Games",
    teamName4: "Yupeng Qin",
    teamTtl4: "Project Director for Asian Dev Team",
    teamName5: "Jakub Szamalek",
    teamTtl5: "Narrative Director",
    teamName6: "John Moyer",
    teamTtl6: "American musician",
    teamName7: "Vee Lozano",
    teamTtl7: "Business Development Lead",
    teamName8: "Jason Hung",
    teamTtl8: "Advisor",
    teamName9: "Charlie Hu",
    teamTtl9: "Advisor",
    teamName10: "Adam Vigne",
    teamTtl10: "Directeur de la conception narrative",
    teamName11: "Ben Abbott",
    teamTtl11: "Créateur d'armes et consultant",
    teamTtl: `L'équipe`,
    partnersTtl: "Partenaires",
    backersTtl: "Soutiens",
    launchPartnTtl: "Partenaires de lancement",
    techPartnTtl: "Partenaires technologiques",
    comPartnTtl: "Partenaires communautaires",
    presTtl: "Comment acheter",
    presStep1: "ETAPE 1",
    presStep2: "ETAPE 2",
    presStep3: "ETAPE 3",
    presStep1Desc: `Tout d'abord, assurez-vous que le portefeuille MetaMask est installé sur votre navigateur, ou utilisez l'un des portefeuilles pour vous connecter à l'un des portefeuilles pris en charge (nous recommandons Trust Wallet).<br>L'achat à partir d'un navigateur de bureau vous donnera une expérience d'achat plus fluide. Pour cela, nous recommandons Metamask. <br>Si vous achetez sur un téléphone mobile, nous vous recommandons d'utiliser Trust Wallet et de vous connecter via le navigateur intégré (il suffit de copier https://swordsofblood.com vers le navigateur de Trust Wallet).`,
    presStep2Desc: `Une fois que vous avez choisi le fournisseur de portefeuille que vous voulez utiliser, cliquez sur Connect Wallet et sélectionnez l'option appropriée. Dans le cas d'une application de portefeuille mobile, vous devrez sélectionner Connecter le portefeuille.`,
    presStep3Desc: `Vous pouvez acheter ${config.tokenSymbol} avec ETH, USDT, USDC et DAI. Une fois la prévente terminée, vous pourrez réclamer vos jetons ${config.tokenSymbol}. Nous publierons les détails plus tard, mais vous devrez vous rendre sur le site principal https://swordsofblood.com et cliquer sur le bouton argenté "Claim".`,
  };
}
