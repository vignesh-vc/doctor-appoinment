import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const publications = [
  { id: 1, title: 'Brown A, Christie JD, Kotzker WR, Lautenbach E. Pre-AIDS physical disability. (Letter) Archives of Physical Medicine & Rehabilitation. 80(4):473, 1999 Apr.', year: 1999 },
  { id: 2, title: 'Furst H, Hallows K, Post J, Chen S, Kotzker W, Ziyadeh F, Goldfarb S, and Neilson E. The urine/electrolyte ratio: a predictive guide to water restriction. American Journal of The Medical Sciences. 319(4):240-4, 2000 Apr.', year: 2000 },
  { id: 3, title: 'Rosas SE; Joffe M; Franklin E; Strom BL; Kotzker W; Bresinger C; Grossman E; Glasser D; Feldman HI. Prevalence and determinants of erectile dysfunction in hemodialysis patients. Kidney International. 59(6):2259-66, 2001 Jun.', year: 2001 },
  { id: 4, title: 'Rosas SE, Joffe M, Franklin E, Strom BL, Kotzker W, Bresinger C, Grossman E, Glasser DB, Feldman HI. Association of decreased quality of life and erectile dysfunction in hemodialysis patients. Kidney International. 64(1):232-8, 2003 Jul.', year: 2003 },
  { id: 5, title: 'Casaretto A, Rosario R, Kotzker W, Pagan-Rosario Y, Groenhoff C, Guest S. Urgent-start peritoneal dialysis: report from a US private nephrology practice. Advances Peritoneal Dialysis 2012; 28: 102–5.', year: 2012 },
  { id: 6, title: 'Bleyer AJ, Westermeyer M, Xie J, Bloom MS, Brossart K, Eckel JJ, Jones F, Molnar MZ, Kotzker W, Anand P, Kmoch S, Xue Y, Strom S, Punj S, Demko ZP, Tabriziani H, Billings PR, McKanna T. Genetic Etiologies for Chronic Kidney Disease Revealed through Next-Generation Renal Gene Panel. American Journal of Nephrology DOI: 10.1159/000522226, 2022 May; 53(4): 297–306.', year: 2022 },
  { id: 7, title: 'Diaz-Martinez J, Kallus L, Levine HM, Lavernia F, Pierre AJ, Mancilla J, Barthe A, Duran C, Kotzker W, Wagner E and Hospital MM. Community-Engaged Research (CEnR) to Address Gaps in Chronic Kidney Disease Education among Underserved Latines—The CARE Study Int. J. Environ. Res. Public Health 2023, 20, 7026.', year: 2023 },
  { id: 8, title: 'Diaz-Martinez J, Kotzker W, Mendoza-Hernandez MA, Gadh RS, Hernandez-Fuentes GA, Bañuelos A, Guzmán-Esquivel J, Hong A, Delgado-Encisio OG, Geyer-Roberts E, Martinez-Fierro ML, Rodriguez-Sanchez IP, Garza-Veloz I, Canseco-Avila LM, Delgado-Encisio I. Analysis of Survival Modification by Furosemide Use in a Cohort of Hospitalized COVID-19 Patients with Severe or Critical Disease in Mexico: Due to Its Chemical Structure, Furosemide is More Than a Diuretic. Pharmaceutics 2023, 15(6):1720.', year: 2023 },
  { id: 9, title: 'Rastogi A, Collins A, Kelepouris E, Kotzker W, Middleton JP, Rajpal M, Roy-Chaudhury P, Chertow GM. Practical Considerations and Implementation of Sodium-Glucose Co-Transporter-2 Inhibitors in Chronic Kidney Disease: Who, When, and How? A Position Statement by Nephrologists. J Prim Care Community Health. 2024 Jan-Dec;15:21501319241259905.', year: 2024 },
  { id: 10, title: 'Diaz-Martinez, J.; Delgado-Enciso, I.; Duran, C.; Kallus, L.; Jean-Pierre, A.; Lopez, B.; Mancilla, J.; Madruga, Y.; Hernandez-Fuentes, G.A.; Kotzker,W. et al. Patients’ Perspectives on the Acceptability and Effectiveness of a Community Health Worker-Led Intervention to Increase Chronic Kidney Disease Knowledge and Screening among Underserved Latine Adults: The CARE 2.0 Study. Behav. Sci. 2024, 14, 750.', year: 2024 },
  { id: 11, title: 'Anjay Rastogi, Glenn M Chertow, Ashté Collins, Ellie Kelepouris, Wayne Kotzker. Utilization of Potassium Binders for the Management of Hyperkalemia in Chronic Kidney Disease: A Position Statement by US Nephrologists. Advances in Kidney Disease and Health 2024-11-01', year: 2024 },
];

const certifications = [
  { id: 1, title: 'Good Clinical Practice Certified', year: 2021 },
  { id: 2, title: 'IATA and Dangerous Goods Handling Certified', year: 2020 },
  { id: 3, title: 'RAVE EDC Data Capture Tools', year: 2020 },
];

const Articles = () => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const navigate = useNavigate();

  const handleNavigation = (type, id) => {
    navigate(`/${type}/${id}`);
  };

  const renderList = (items, type) => (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 cursor-pointer hover:border-l-4 hover:border-[#00CC99] hover:pl-6"
          onClick={() => handleNavigation(type, item.id)}
        >
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-500">Year: {item.year}</p>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Publications & Certifications</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Publications</h2>
          {renderList(publications, 'publication')}
        </section>

        <div className="border-t-4 border-[#00CC99] w-48 mx-auto my-10 rounded-full"></div>

        {/* <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Certifications</h2>
          {renderList(certifications, 'certification')}
        </section> */}
      </div>
    </div>
  );
};

export default Articles;
