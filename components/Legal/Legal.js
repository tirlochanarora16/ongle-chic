import style from "./Legal.module.scss";

import Title from "../Title/Title";
import Contact from "../Contact/Contact";

const Legal = () => {
  return (
    <section className={style.legal}>
      <div className={style["legal__title"]}>
        <Title />
      </div>
      <div className={style["legal__contact"]}>
        <Contact />
      </div>
      <div className={style["legal__content"]}>
        <div className={style["legal__content-1"]}>
          <p>Raison sociale : ONGLE CHIC (01 45 31 11 20)</p>
          <p>
            Identité juridique : Entreprise individuelle - N°SIRET
            50439900700013
          </p>
          <p>Responsable : Sophie Manneville</p>
          <p>TVA intra-communautaire : TVA FR 40 504399007</p>
          <p>
            Conception : <b>GOMAKEAPPS.COM</b> (+33 7 50 50 21 31)
          </p>
        </div>
        <div className={style["legal__content-2"]}>
          <p>
            Vous êtes actuellement connecté au site
            http://www.ongle-chic-paris.com qui est la propriété de l'entreprise
            ONGLE CHIC. De facto, vous acceptez de vous conformer aux lois
            françaises sur les données nominatives, sur la propriété
            intellectuelle, les droits d'auteurs, la presse et la communication,
            ainsi qu'aux traités et accords internationaux relatifs à ces
            domaines.
          </p>
        </div>
        <div className={style["legal__content-3"]}>
          <p>
            Toutes les marques et services référencés sur ce site appartiennent
            à leurs propriétaires respectifs. Ils ne peuvent être utilisés sans
            la permission expresse de leurs propriétaires.
          </p>
        </div>
        <div className={style["legal__content-4"]}>
          <p>
            La reproduction ou représentation, intégrale ou partielle, des
            pages, des données et de toute autre élément constitutif au site
            http://www.ongle-chic-paris.com, par quelque procédé ou support que
            ce soit, est interdite et constitue sans autorisation du
            propriétaire une contrefaçon.
          </p>
        </div>
        <p>
          <b>CE SITE INTERNET EST CO-FINANCER PAR FRANCE CONNECT</b>
        </p>
      </div>
    </section>
  );
};

export default Legal;
