export enum WORKS_IDS {
  MOMENTUM = "momentum",
  LEAD = "lead",
  TIMELINES = "timeLines",
  NARROW = "narrow",
  LAPSO = "lapso",
}
const { MOMENTUM, LEAD, TIMELINES, NARROW, LAPSO } = WORKS_IDS;

export type WorksIds = keyof typeof WORKS_IDS;

export interface Image {
  source: {
    regular: string;
    thumbnail: string;
  };
  width: number;
  height: number;
  alt: string;
  caption: string;
}
export type WorkImagesArr = Image[];

export interface Work {
  id: WORKS_IDS;
  title: string;
  images: WorkImagesArr;
}

export type Works = {
  [key in WORKS_IDS]: Work;
};

const URL_IMAGES = "assets/images";
const URL_BIO = `${URL_IMAGES}/Bio`;
const URL_MOMENTUM = `${URL_IMAGES}/Momentum`;
const URL_MOMENTUM_THUMB = `${URL_IMAGES}/Momentum/thumb`;
const URL_LEAD = `${URL_IMAGES}/Lead`;
const URL_LEAD_THUMB = `${URL_IMAGES}/Lead/thumb`;
const URL_TIMELINES = `${URL_IMAGES}/TimeLines`;
const URL_TIMELINES_THUMB = `${URL_IMAGES}/TimeLines/thumb`;
const URL_NARROW = `${URL_IMAGES}/Narrow`;
const URL_NARROW_THUMB = `${URL_IMAGES}/Narrow/thumb`;
const URL_LAPSO = `${URL_IMAGES}/Lapso`;
const URL_LAPSO_THUMB = `${URL_IMAGES}/Lapso/thumb`;

export const momentumImages: WorkImagesArr = [
  {
    source: {
      regular: `${URL_MOMENTUM}/Cambridge_I.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Cambridge_I_thumb.jpg`,
    },
    width: 1400,
    height: 677,
    alt: "Alejandro Guijarro - Cambridge I",
    caption: "Cambridge I - C-type print, 117 x 290 cm, 2011",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Cambridge_IV.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Cambridge_IV_thumb.jpg`,
    },
    width: 1482,
    height: 702,
    alt: "Alejandro Guijarro - Cambridge IV",
    caption: "Cambridge IV - C-type print, 119 x 300 cm, 2011",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Oxford_II.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Oxford_II_thumb.jpg`,
    },
    width: 994,
    height: 813,
    alt: "Alejandro Guijarro - Oxford II",
    caption: "Oxford II - C-type print, 110 x 150 cm, 2011",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Cambridge_V.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Cambridge_V_thumb.jpg`,
    },
    width: 1056,
    height: 690,
    alt: "Alejandro Guijarro - Cambridge V",
    caption: "Cambridge V - C-type print, 117 x 200cm, 2011",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Artipelag_1.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Artipelag_1_thumb.jpg`,
    },
    width: 1191,
    height: 689,
    alt: "Alejandro Guijarro - Artipelag Konsthall 2014",
    caption: "Installation View - Artipelag Konsthall, Stockholm, 2014",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/CERN_I.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/CERN_I_thumb.jpg`,
    },
    width: 1173,
    height: 746,
    alt: "Alejandro Guijarro - CERN I",
    caption: "CERN I - C-type print, 100 x 180 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/CERN_II.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/CERN_II_thumb.jpg`,
    },
    width: 1162,
    height: 738,
    alt: "Alejandro Guijarro - CERN II",
    caption: "CERN II - C-type print, 100 x 180 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Harvard_I.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Harvard_I_thumb.jpg`,
    },
    width: 969,
    height: 1328,
    alt: "Alejandro Guijarro - Harvard I",
    caption: "Harvard I - C-type print, 160 x 122 cm, 2014",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/SLAC_IV.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/SLAC_IV_thumb.jpg`,
    },
    width: 1436,
    height: 785,
    alt: "Alejandro Guijarro - SLAC IV",
    caption: "SLAC IV - C-type print, 117 x 243 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/LIMS_I.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/LIMS_I_thumb.jpg`,
    },
    width: 1738,
    height: 695,
    alt: "Alejandro Guijarro - LIMS I",
    caption: "LIMS I - C-type print, 117 x 350 cm, 2015",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/MIT_II.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/MIT_II_thumb.jpg`,
    },
    width: 1345,
    height: 971,
    alt: "Alejandro Guijarro - MIT III",
    caption: "MIT III - C-type print, 112 x 183 cm, 2014",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Oxford_I.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Oxford_I_thumb.jpg`,
    },
    width: 1012,
    height: 819,
    alt: "Alejandro Guijarro - Oxford I",
    caption: "Oxford I - C-type print, 110 x 150 cm, 2011",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/7_tristan_hoare.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/7_tristan_hoare_thumb.jpg`,
    },
    width: 1258,
    height: 765,
    alt: "Installation View - Tristan Hoare, London, 2012",
    caption: "Installation View - Tristan Hoare, London, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Cambridge_III.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Cambridge_III_thumb.jpg`,
    },
    width: 1171,
    height: 1248,
    alt: "Alejandro Guijarro - Cambridge III",
    caption: "Cambridge III - C-type print, 100 x 101 cm, 2011",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/SLAC_III.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/SLAC_III_thumb.jpg`,
    },
    width: 909,
    height: 654,
    alt: "Alejandro Guijarro - SLAC III",
    caption: "SLAC III - C-type print, 117 x 180 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Galerie_Huit.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Galerie_Huit_thumb.jpg`,
    },
    width: 1024,
    height: 592,
    alt: "Alejandro Guijarro - Installation View - Galerie Huit",
    caption: "Installation View - Galerie Huit, Hong Kong, 2017",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Stanford_III.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Stanford_III_thumb.jpg`,
    },
    width: 1434,
    height: 793,
    alt: "Alejandro Guijarro - Stanford III",
    caption: "Stanford III - C-type print, 117 x 240 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/7_saatchi_install.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/7_saatchi_install_thumb.jpg`,
    },
    width: 1369,
    height: 765,
    alt: "Alejandro Guijarro - Installation View - Saatchi Gallery",
    caption: "Installation View - Saatchi Gallery, London, 2014",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/UC_Berkeley_II.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/UC_Berkeley_II_thumb.jpg`,
    },
    width: 1434,
    height: 770,
    alt: "Alejandro Guijarro - UC Berkeley II",
    caption: "UC Berkeley II - C-type print, 112 x 236 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Stanford_II.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Stanford_II_thumb.jpg`,
    },
    width: 982,
    height: 1548,
    alt: "Alejandro Guijarro - Stanford II",
    caption: "Stanford II - C-type print, 174 x 113 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/UC_Berkeley_IV.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/UC_Berkeley_IV_thumb.jpg`,
    },
    width: 1362,
    height: 946,
    alt: "Alejandro Guijarro - UC Berkeley IV",
    caption: "UC Berkeley IV - C-type print, 114 x 180 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Cambridge_II.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Cambridge_II_thumb.jpg`,
    },
    width: 1150,
    height: 767,
    alt: "Alejandro Guijarro - Cambridge II",
    caption: "Cambridge II - C-type print, 117 x 200 cm, 2011",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/UC_Berkeley_V.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/UC_Berkeley_V_thumb.jpg`,
    },
    width: 1300,
    height: 705,
    alt: "Alejandro Guijarro - UC Berkeley V",
    caption: "UC Berkeley V - C-type print, 118 x 236 cm, 2012",
  },
  {
    source: {
      regular: `${URL_MOMENTUM}/Stanford_I.jpg`,
      thumbnail: `${URL_MOMENTUM_THUMB}/Stanford_I_thumb.jpg`,
    },
    width: 1450,
    height: 801,
    alt: "Alejandro Guijarro - Stanford I",
    caption: "Stanford I - C-type print, 117 x 240 cm, 2012",
  },
];

export const leadImages: WorkImagesArr = [
  {
    source: {
      regular: `${URL_LEAD}/P01692a00xf2006_(Adam_and_Eve).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/P01692a00xf2006_(Adam_and_Eve)_thumb.jpg`,
    },
    width: 820,
    height: 1062,
    alt: "Alejandro Guijarro - P01692a00xf2006 (Adam and Eve)",
    caption:
      "P01692a00xf2006 (Adam and Eve) - Archival Pigment Print, 242 x 184.5 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/P01180a00xf2011_(Prince_Baltasar_Carlos_on_Horseback).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/P01180a00xf2011_(Prince_Baltasar_Carlos_on_Horseback)_thumb.jpg`,
    },
    width: 854,
    height: 1042,
    alt: "Alejandro Guijarro - P01180a00xf2011 (Prince Baltasar Carlos on Horseback)",
    caption:
      "P01180a00xf2011 (Prince Baltasar Carlos on Horseback) - Archival Pigment Print, 177 x 211 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/Installation_View_Tristan_Hoare_I.jpg`,
      thumbnail: `${URL_LEAD_THUMB}/Installation_View_Tristan_Hoare_I_thumb.jpg`,
    },
    width: 1200,
    height: 800,
    alt: "Alejandro Guijarro - Installation View, Tristan Hoare, London, 2017",
    caption: "Installation View - Tristan Hoare, London, 2017",
  },
  {
    source: {
      regular: `${URL_LEAD}/20769_(Descent_from_the_cross).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/20769_(Descent_from_the_cross)_thumb.jpg`,
    },
    width: 646,
    height: 902,
    alt: "Alejandro Guijarro - 20769 (Descent from the cross)",
    caption:
      "20769 (Descent from the cross) - Archival Pigment Print, 100 x 77 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/21600_(St_Gregory_the_Great).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/21600_(St_Gregory_the_Great)_thumb.jpg`,
    },
    width: 714,
    height: 731,
    alt: "Alejandro Guijarro - 21600 (St Gregory the Great)",
    caption:
      "21600 (St Gregory the Great) - Archival Pigment Print, 60 x 60 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/15816_(St_Gregory_the_Great).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/15816_(St_Gregory_the_Great)_thumb.jpg`,
    },
    width: 727,
    height: 768,
    alt: "Alejandro Guijarro - 15816 (St Gregory the Great)",
    caption:
      "15816 (St Gregory the Great) - Archival Pigment Print, 60 x 60 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/49757_(St_Gregory_the_Great).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/49757_(St_Gregory_the_Great)_thumb.jpg`,
    },
    width: 747,
    height: 777,
    alt: "Alejandro Guijarro - 49757 (St Gregory the Great)",
    caption:
      "49757 (St Gregory the Great) - Archival Pigment Print, 60 x 60 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/57954_(Saint_Pierre_Released_From_Prison).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/57954_(Saint_Pierre_Released_From_Prison)_thumb.jpg`,
    },
    width: 2680,
    height: 2182,
    alt: "Alejandro Guijarro - 57954 (Saint Pierre Released From Prison)",
    caption:
      "57954 (Saint Pierre Released From Prison) - Archival Pigment Print, 48.5 x 64.5 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/P01627a00xf2013_(Inmaculate_Conception).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/P01627a00xf2013_(Inmaculate_Conception)_thumb.jpg`,
    },
    width: 779,
    height: 1116,
    alt: "Alejandro Guijarro - P01627a00xf2013 (Inmaculate Conception)",
    caption:
      "P01627a00xf2013 (Inmaculate Conception) - Archival Pigment Print, 200 x 134 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/73813_(Siege_of_Beauvais_in_1472).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/73813_(Siege_of_Beauvais_in_1472)_thumb.jpg`,
    },
    width: 957,
    height: 827,
    alt: "Alejandro Guijarro - 73813 (Siege of Beauvais in 1472)",
    caption:
      "73813 (Siege of Beauvais in 1472) - Archival Pigment Print, 84 x 105 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/N_0583_00_000135_(The_Battle_of_San_Romano).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/N_0583_00_000135_(The_Battle_of_San_Romano)_thumb.jpg`,
    },
    width: 1122,
    height: 734,
    alt: "Alejandro Guijarro - N-0583-00-000135 (The Battle of San Romano)",
    caption:
      "N-0583-00-000135 (The Battle of San Romano) - Archival Pigment Print, 180 x 320 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/P01637a00xf2012_(The_Brazen_Serpent).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/P01637a00xf2012_(The_Brazen_Serpent)_thumb.jpg`,
    },
    width: 1070,
    height: 1020,
    alt: "Alejandro Guijarro - P01637a00xf2012 (The Brazen Serpent)",
    caption:
      "P01637a00xf2012 (The Brazen Serpent) - Archival Pigment Print, 207 x 234 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/P01915a00xf2008_(The_Annunciation).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/P01915a00xf2008_(The_Annunciation)_thumb.jpg`,
    },
    width: 772,
    height: 851,
    alt: "Alejandro Guijarro - P01915a00xf2008 (The Annunciation)",
    caption:
      "P01915a00xf2008 (The Annunciation) - Archival Pigment Print, 70 x 78 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/Installation_View_Tristan_Hoare_II.jpg`,
      thumbnail: `${URL_LEAD_THUMB}/Installation_View_Tristan_Hoare_II_thumb.jpg`,
    },
    width: 1200,
    height: 800,
    alt: "Alejandro Guijarro - Installation View - Tristan Hoare, London, 2017",
    caption: "Installation View - Tristan Hoare, London, 2017",
  },
  {
    source: {
      regular: `${URL_LEAD}/P07767a00xf2011_(The_Countess_of_Chinchon).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/P07767a00xf2011_(The_Countess_of_Chinchon)_thumb.jpg`,
    },
    width: 764,
    height: 1115,
    alt: "Alejandro Guijarro - P07767a00xf2011 (The Countess of Chinchon)",
    caption:
      "P07767a00xf2011 (The Countess of Chinchon) - Archival Pigment Print, 216 x 143 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/19207_Boissy_d'Anglas_at_the_National_Convention_[20_May_1795]).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/19207_Boissy_d'Anglas_at_the_National_Convention_[20_May_1795])_thumb.jpg`,
    },
    width: 927,
    height: 759,
    alt: "Alejandro Guijarro - 19207 (Boissy d`Anglas at the National Convention [20 May 1795])",
    caption:
      "19207 (Boissy d`Anglas at the National Convention [20 May 1795]) - Archival Pigment Print, 79 x 104 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/RX3000_(Michelangelo,_Painter,_Sculptor_and_Architect).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/RX3000_(Michelangelo,_Painter,_Sculptor_and_Architect)_thumb.jpg`,
    },
    width: 716,
    height: 886,
    alt: "Alejandro Guijarro - RX3000 (Michelangelo, Painter, Sculptor and Architect)",
    caption:
      "RX3000 (Michelangelo, Painter, Sculptor and Architect) - Archival Pigment Print, 40 x 49 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/RX15259_(The_Bed_of_Justice_held_in_Parliament_by_a_majority_of_Louis_XV_[February_22,_1723]).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/RX15259_(The_Bed_of_Justice_held_in_Parliament_by_a_majority_of_Louis_XV_[February_22,_1723])_thumb.jpg`,
    },
    width: 1066,
    height: 824,
    alt: "Alejandro Guijarro - RX15259 (The Bed of Justice held in Parliament by a majority of Louis XV [February 22, 1723])",
    caption:
      "RX15259 (The Bed of Justice held in Parliament by a majority of Louis XV [February 22, 1723]) - Archival Pigment Print, 56 x 82 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/RX15260_(The_Bestowal_of_the_Order_of_Saint_Spirit,_in_the_chapel_of_Versailles_Palace_[3_June_1724]).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/RX15260_(The_Bestowal_of_the_Order_of_Saint_Spirit,_in_the_chapel_of_Versailles_Palace_[3_June_1724])_thumb.jpg`,
    },
    width: 871,
    height: 671,
    alt: "Alejandro Guijarro - RX15260 (The Bestowal of the Order of Saint-Spirit, in the chapel of Versailles Palace [3 June 1724])",
    caption:
      "RX15260 (The Bestowal of the Order of Saint-Spirit, in the chapel of Versailles Palace [3 June 1724]) - Archival Pigment Print, 56 x 82 cm, 2016",
  },
  {
    source: {
      regular: `${URL_LEAD}/RX15088_(Mona_Lisa).jpg`,
      thumbnail: `${URL_LEAD_THUMB}/RX15088_(Mona_Lisa)_thumb.jpg`,
    },
    width: 700,
    height: 1022,
    alt: "Alejandro Guijarro - RX15088 (Mona Lisa)",
    caption: "RX15088 (Mona Lisa) - Archival Pigment Print, 77 x 53 cm, 2016",
  },
];

export const timeLinesImages: WorkImagesArr = [
  {
    source: {
      regular: `${URL_TIMELINES}/1_30_Nov_33.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/1_30_Nov_33_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 30 Noviembre 1933",
    caption: "30 Noviembre 1933 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/2_30_Jun_34.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/2_30_Jun_34_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 30 Junio 1934",
    caption: "30 Junio 1934 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/3_31_Ago_35.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/3_31_Ago_35_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 31 Agosto 1935",
    caption: "31 Agosto 1935 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/4_1_Feb_36.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/4_1_Feb_36_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 4 Febrero 1936",
    caption: "4 Febrero 1936 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/5_1_Abr_36.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/5_1_Abr_36_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 1 Abril 1936",
    caption: "1 Abril 1936 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/6_30_Jun_36.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/6_30_Jun_36_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 30 Junio 1936",
    caption: "30 Junio 1936 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/7_27_Oct_36.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/7_27_Oct_36_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 27 Octubre 1936",
    caption: "27 Octubre 1936 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/8_25_Nov_36.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/8_25_Nov_36_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 25 Noviembre 1936",
    caption: "25 Noviembre 1936 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/9_26_May_37.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/9_26_May_37_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 26 Mayo 1937",
    caption: "26 Mayo 1937 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/10_4_Jun_37.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/10_4_Jun_37_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 4 Junio 1937",
    caption: "4 Junio 1937 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/11_18_Jul_37.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/11_18_Jul_37_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 18 Julio 1937",
    caption: "18 Julio 1937 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/12_21_Jul_37.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/12_21_Jul_37_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 21 Julio 1937",
    caption: "21 Julio 1937 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/13_1_Ago_37.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/13_1_Ago_37_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 1 Agosto 1937",
    caption: "1 Agosto 1937 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/14_13_Ene_38.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/14_13_Ene_38_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 13 Enero 1938",
    caption: "13 Enero 1938 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/15_22_Ene_38.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/15_22_Ene_38_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 22 Enero 1938",
    caption: "22 Enero 1938 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/16_23_Ene_38.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/16_23_Ene_38_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 23 Enero 1938",
    caption: "23 Enero 1938 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/17_26_Ene_38.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/17_26_Ene_38_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 26 Enero 1938",
    caption: "26 Enero 1938 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/18_19_Oct_38.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/18_19_Oct_38_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 19 Octubre 1938",
    caption: "19 Octubre 1938 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/19_25_Mar_39.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/19_25_Mar_39_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 25 Marzo 1939",
    caption: "25 Marzo 1939 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/20_28_Mar_39.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/20_28_Mar_39_thumb.jpg`,
    },
    width: 903,
    height: 983,
    alt: "Alejandro Guijarro - 28 Marzo 1939",
    caption: "28 Marzo 1939 - Photogravure, 64 x 58 cm, 2019",
  },
  {
    source: {
      regular: `${URL_TIMELINES}/21_1_Abr_39.jpg`,
      thumbnail: `${URL_TIMELINES_THUMB}/21_1_Abr_39_thumb.jpg`,
    },
    width: 919,
    height: 1003,
    alt: "Alejandro Guijarro - 1 Abril 1939",
    caption: "1 Abril 1939 - Photogravure, 64 x 58 cm, 2019",
  },
];

export const narrowImages: WorkImagesArr = [
  {
    source: {
      regular: `${URL_NARROW}/Untitled_01.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_01_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#01",
    caption: "Untitled_#01",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_02.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_02_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#02",
    caption: "Untitled_#02",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_03.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_03_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#03",
    caption: "Untitled_#03",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_04.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_04_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#04",
    caption: "Untitled_#04",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_06.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_06_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#06",
    caption: "Untitled_#06",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_07.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_07_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#07",
    caption: "Untitled_#07",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_08.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_08_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#08",
    caption: "Untitled_#08",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_09.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_09_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#09",
    caption: "Untitled_#09",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_10.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_10_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#10",
    caption: "Untitled_#10",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_11.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_11_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#11",
    caption: "Untitled_#11",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_15.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_15_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#15",
    caption: "Untitled_#15",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_16.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_16_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#16",
    caption: "Untitled_#16",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_17.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_17_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#17",
    caption: "Untitled_#17",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_19.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_19_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#19",
    caption: "Untitled_#19",
  },

  {
    source: {
      regular: `${URL_NARROW}/Untitled_22.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_22_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#22",
    caption: "Untitled_#22",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_28.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_28_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#28",
    caption: "Untitled_#28",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_32.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_32_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#32",
    caption: "Untitled_#32",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_33.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_33_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#33",
    caption: "Untitled_#33",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_35.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_35_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#35",
    caption: "Untitled_#35",
  },
  {
    source: {
      regular: `${URL_NARROW}/Untitled_36.jpg`,
      thumbnail: `${URL_NARROW_THUMB}/Untitled_36_thumb.jpg`,
    },
    width: 768,
    height: 768,
    alt: "Alejandro Guijarro - Untitled_#36",
    caption: "Untitled_#36",
  },
];

export const lapsoImages: WorkImagesArr = [
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_1.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_1_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_1",
    caption: "Untitled_1",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_2.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_2_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_2",
    caption: "Untitled_2",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_3.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_3_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_3",
    caption: "Untitled_3",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_4.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_4_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_4",
    caption: "Untitled_4",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_5.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_5_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_5",
    caption: "Untitled_5",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_6.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_6_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_6",
    caption: "Untitled_6",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_7.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_7_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_7",
    caption: "Untitled_7",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_8.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_8_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_8",
    caption: "Untitled_8",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_10.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_10_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_10",
    caption: "Untitled_10",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_11.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_11_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_11",
    caption: "Untitled_11",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_12.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_12_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_12",
    caption: "Untitled_12",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_15.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_15_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_15",
    caption: "Untitled_15",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_16.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_16_thumb.jpg`,
    },
    width: 983,
    height: 1229,
    alt: "Alejandro Guijarro - Untitled_16",
    caption: "Untitled_16",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_17.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_17_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_17",
    caption: "Untitled_17",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_19.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_19_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_19",
    caption: "Untitled_19",
  },
  {
    source: {
      regular: `${URL_LAPSO}/Untitled_20.jpg`,
      thumbnail: `${URL_LAPSO_THUMB}/Untitled_20_thumb.jpg`,
    },
    width: 1058,
    height: 1323,
    alt: "Alejandro Guijarro - Untitled_20",
    caption: "Untitled_20",
  },
];

export const works: Works = {
  [MOMENTUM]: {
    id: MOMENTUM,
    title: "Momentum",
    images: momentumImages,
  },
  [LEAD]: { id: LEAD, title: "Lead", images: leadImages },
  [TIMELINES]: {
    id: TIMELINES,
    title: "Time Lines",
    images: timeLinesImages,
  },
  [NARROW]: {
    id: NARROW,
    title: "The Narrow Road to the Deep North and Other Travel Sketches",
    images: narrowImages,
  },
  [LAPSO]: {
    id: LAPSO,
    title: "[Lapso]",
    images: lapsoImages,
  },
};

export const homePagePic: Image = leadImages[0];
export const bioPic: Image = {
  source: {
    regular: `${URL_BIO}/2_alejandro-guijarro.jpg`,
    thumbnail: "",
  },
  width: 1118,
  height: 837,
  alt: "Alejandro Guijarro",
  caption: "Alejandro Guijarro",
};
