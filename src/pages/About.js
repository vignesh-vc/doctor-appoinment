import React, { useEffect, useState } from "react";
import profileImg from "../assests/R.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dotStyle = "absolute w-3.5 h-3.5 bg-[#00CC99] rounded-full left-[-25px] top-2";

  const renderDoctorInfo = () => (
    <div className="w-full md:w-1/2 relative border-l-2 border-[#00CC99] pl-10">
      {/* Header */}
      <div className="mb-8 relative">
        <div className={dotStyle}></div>
        <h1 className="text-3xl font-bold text-gray-800">Dr. Wayne R. Kotzker</h1>
        <p className="text-gray-500 text-lg">MD NEPHROLOGIST</p>
      </div>

      {/* Biography */}
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
        <h2 className="text-2xl font-semibold mb-2">Biography</h2>
        <p className="text-gray-600 leading-relaxed">
          Physician Partner,Clinical Lead for Value Based Care Principle  Investigator (Panoramic Science)  </p>
        <p className="text-gray-600 leading-relaxed">
          Florida Kidney Physicians </p>
      </div>

      {/* Education */}
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Brandeis University, Waltham, MA </h3>
            <p className="text-gray-600">1986-1990</p>
            <p className="text-gray-600">B.S.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">UMDNJ-Robert Wood Johnson Medical School. New Brunswick, NJ </h3>
            <p className="text-gray-600">1990-1994</p>
            <p className="text-gray-600">M.D.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">UMDNJ-Robert Wood Johnson Medical School New Brunswick, NJ</h3>
            <p className="text-gray-600">1994-1997</p>
            <p className="text-gray-600">Inhem and Resicent. Department of internal Medicine</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">University of Pennsylvania School of Medicine, Philadelphia, PA </h3>
            <p className="text-gray-600">1997-1999</p>
            <p className="text-gray-600">Fellow, Rena-Electrolyte and Hypertension Division
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
        <h2 className="text-2xl font-semibold mb-2">Medical License</h2>
        <p className="text-gray-600 leading-relaxed">
          Medical License, Florida:ME88119 - 2003 - Present  </p>
        <p className="text-gray-600 leading-relaxed">
          DEA:BK4938645 - 1995 - Present</p>
      </div>

    </div>
  );
  const renderDoctorCertification = () => (
    <div className="w-full md:w-1/2 relative border-l-2 border-[#00CC99] pl-10">
      

      {/* Certification */}
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Good Clinical Practice Certified</h3>
            <p className="text-gray-600">Year: 2021</p>
          
          </div>
          <div>
            <h3 className="text-lg font-semibold">IATA and Dangerous Goods Handling Certified </h3>
            <p className="text-gray-600">Year: 2020</p>
          
          </div>
          <div>
            <h3 className="text-lg font-semibold">UMDNJ-Robert Wood Johnson Medical School New Brunswick, NJ</h3>
            <p className="text-gray-600">1994-1997</p>
            <p className="text-gray-600">Inhem and Resicent. Department of internal Medicine</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">RAVE EDC Data Capture Tools</h3>
            <p className="text-gray-600">Year:2020</p>
          </div>
        </div>
      </div>
      

    </div>
  );

  const renderDoctorImage = () => (
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="w-full h-full flex items-center  md:mt-[-100px] justify-center">
        <img
          src={profileImg}
          alt="Dr. B M Suraj"
          className="w-full max-w-[400px] h-auto object-cover rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );

  const defaultExperience = [
    "Florida Kidney Physicians, Private Practice, Nephrology. 2003 - Present",
    "Davita West Boynton Beach Dialysis Center, Medical Director. 2015 - Present",
    "Davita Boca Raton Artificial Kidney Center, Medical Director. 2019 - Present",
    "Acute Dialysis Services Boca Raton Regional Hospital, Medical Director 2011-2022.",
    "The Renal Group of Central New Jersey. Attending Physician 2000-2003.",
    "Nephrology, Shaare Zedek Medical Center, Allending Physician 1999-2000.",
    "CompHealth Conemaugh Memorial Medical Center, Locum Tenens Physician. 1999-1999",
    "Complealih Dartmouth-Hilchcock Medical Center. Locum Tenens Physician. 1999-1999"
  ];

  const additionalExperience = {
    "Institutional Affiliations": [
      "Boca Raton Regional Hospital -Present",
      "Delray Medical Center -Present",
      "West Boca Medical Center -Present",
      "Bethesda Memorial Hospitals East & West -Present",
      "Broward Health Imperial Point -Present",
      "Broward Health North -Present",
      " ward Health Medical Center -Present"
    ],
    "Research Experience": [
      "A phase 3 Randomized, double-blind parallel, active control study of the effects. of Sparsentan, a dual endothelin receptor and angiotensin receptor blocker on renal outcomes in patients with primary focal segmental glomerulosclerosis.",
      "A phase 3b, Randomized, Double- Blind, Placebo-controlled study to Evaluate the Efficacy and Safety of TRC101 in Delaying Chronic Kidney Disease Progression in Subjects with Metabolic Acidosis.",
      "A phase 3 randomized, open-label (sponsor-blind), active-controlled, parallel-group. multi-center, event driven study in non-diallysis subjects with anemia associated with chronic kidney disease to evaluate the safety and efficacy of Doprodustat compared to Darbepcetin alfa.",
      "A randomized, double blind, Placebo-Controlled, Parallel-group. multicenter, event-driven Phase III study to investigate the efficacy and safety of Finerenone on the reduction of cardiovascular morbidity and mortality in subjects with type 2 diabetes mellitus and the clinical diagnosis of Diabteic Kidney Disease in addition to standard of care, Bayer Healthcare.",
      "FLOW: A randomized, double blind placebo-controlled trial to determine effect of semaglutide on the progression of renal impairment in subjects with type 2 diabetes and chronic kidney disease. Novo Nordisk",
      "A Phase 2 Randomized, multi-center study evaluating DM199 in approximately (90) participants of AA non-diabetic nature with persistent CKD, IgA Nephropathy with persistent CKD, and Diabetic patients with persistent CKD.",
      "A Phase 3 Randomized, Patient Palatability and Preference Study of 3 Potassium Binders in Patients with Dialysis-Dependent and non-Dialysis-Dependent Chronic Kidney Disease and Hyperkalemia (Sub-Investigator)",
      "A Phase 3, Randomized, Double Blind, Placebo-Controlled Study to Assess the Efficacy and Safety of SNF472 When Added to Background Care for the Treatment of Calciphylaxis. (Sub-Investigator)",
      "A Phase 2, Randomized, Double-Blind, Placebo-Controlled Study on the Safety, Pharmacokinetics, and Pharmacodynamics of Multiple Doses of GoINAC-conjugated FX1 Antisense Oligonucleotide (BAY 2976217) in Patients with End-Stage Renal Disease on Hemodialysis (Sub-investigator)",
      "Erectile Dysfunction in Hemodialysis Patients: Prevalence & Impact on Quality of Life (1998-99) Dr. Harold 1. Feldman & Dr. Sylvia Rosas, Center for Clinical Epidemiology and Biostatistics. Renal Electrolyte and Hypertension Division, University of Pennsylvania School of Medicine",
      "Administration of IV Iron and Relationship to Bacterial Peritonitis in Peritoneal Dialysis Patients (1998-99) Dr. Harold I. Feldman, Center for Clinical Epidemiology and Biostatistics. Renal-Electrolyte and Hypertension Division. University of Pennsylvanic School of Medicine",
      "Effects of Ramipril on Canine Coronary Arteries (Summer 1992) Dr. Abel Moreyra, Department of Cardiology, UMDNJ-Robert Wood Johnson Medical School.",
      "Analysis of Percutaneous Transluminal Coronary. Angioplasty at Robert Wood Johnson University Hospital 1987-1992 (Summer 1992) Dr. Abel Moreyra, Department of Cardiology. UMDNJ-Robert Wood Johnson Medical School."
    ],
    "Consultant": [
      "DaVita Citadel IT Physician Advisory Board 2015-2016",
      "Clinical Committee, Renal Care Organization 2017-2020",
      "Speakers Bureau. Veltassa (Relypsa) 2018",
      "Speaker, Advisory Panel (Retrophin) 2019-2020",
      "Speaker, Jynarque (Otsuka) 2020-2022",
      "Speaker, Scientific Advisory Board. Natera 2020-present",
      "Speaker & Advisory Board, Eurofins 2022-2023",
      "Speaker, Advisory Panel, Astra Zeneca (Lokelma/Farxigo) 2019-present",
      "Speaker,Bayer (Kerendia) 2022-present",
      "Speaker & Advisory Board, Amgen (Kryshexxa) 2022-present",
      "Speaker Bureau, Trovere Therapeutics (Flapori) 2023-present",
      "Speaker Bureau. GSK (Jesduvroq) 2022-2024 ",
      "Speakers Bureau, Boehringer Ingelheim (Jardiance) 2003-present"
    ],
  };

  const renderWorkExperience = () => (
    <div className="w-full relative border-l-2 border-[#00CC99] pl-10">
      {/* Title */}
      <div className="mb-6 relative">
        <div className={dotStyle}></div>
        <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("default")}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeTab === "default"
            ? "bg-[#00CC99] text-white shadow"
            : "bg-white text-[#00CC99] border-[#00CC99] hover:bg-[#00CC99] hover:text-white"
            }`}
        >
          All Experience
        </button>
        {Object.keys(additionalExperience).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeTab === key
              ? "bg-[#00CC99] text-white shadow"
              : "bg-white text-[#00CC99] border-[#00CC99] hover:bg-[#00CC99] hover:text-white"
              }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Experience Content */}
      {activeTab === "default" ? (
        <div className="space-y-6">
          {defaultExperience.map((item, index) => (
            <div className="relative" key={index}>
              <div className={dotStyle}></div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {additionalExperience[activeTab].map((item, index) => (
            <div className="relative" key={index}>
              <div className={dotStyle}></div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-12 flex flex-col gap-16">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row gap-12">
        {renderDoctorImage()}
        {renderDoctorInfo()}
      </div>

      {/* Work Experience Section */}
      <div className="flex flex-col gap-6">
        {renderWorkExperience()}
      </div>
      <div className="flex flex-col gap-6">
      {renderDoctorCertification()}
      </div>
    </div>
  );
};

export default About;
