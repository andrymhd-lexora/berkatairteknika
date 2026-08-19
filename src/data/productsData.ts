import { ProductItem, PillarItem, PortfolioProject, TestimonialItem, BlogPost, PricingPlan } from '../types';

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'wwtp-environmental',
    title: 'Pengembangan Solusi Pengolahan Limbah & Lingkungan',
    titleEn: 'Wastewater & Environmental Engineering Solutions',
    subtitle: 'EPC & O&M Prasarana Pengolahan Air Limbah Terintegrasi',
    subtitleEn: 'Integrated EPC & O&M for Industrial & Municipal Wastewater',
    description: 'Menyediakan jasa rancang bangun (EPC), retrofit, pemeliharaan berkala, serta pengoperasian prasarana IPAL/WTP industri & domestik untuk memenuhi baku mutu lingkungan ketat dengan efisiensi energi optimal.',
    descriptionEn: 'Providing turnkey engineering (EPC), retrofitting, scheduled maintenance, and operation of industrial & municipal WWTP/WTP systems to meet stringent environmental standards with optimal energy efficiency.',
    iconName: 'Droplets',
    stats: { value: '99.4%', label: 'Kepatuhan Baku Mutu Lingkungan', labelEn: 'Environmental Compliance Rate' },
    color: 'from-blue-600 to-cyan-500',
    keyPoints: [
      {
        title: 'Desain Sistem IPAL / WWTP Presisi',
        titleEn: 'Precision WWTP / ETP Plant Design',
        text: 'Kombinasi proses Fisika-Kimia (DAF, Koagulasi-Flokulasi) dan Biologis Lanjut (MBBR, MBR, Anaerobic UASB).',
        textEn: 'Hybrid Physico-Chemical (DAF, Coagulation-Flocculation) and Advanced Biological (MBBR, MBR, UASB) treatment.'
      },
      {
        title: 'Retrofit & Optimasi Kapasitas',
        titleEn: 'Plant Retrofit & Capacity Upgrades',
        text: 'Meningkatkan kapasitas pengolahan hingga 250% pada jejak lahan (footprint) yang sama tanpa henti operasional total.',
        textEn: 'Increasing processing capacity by up to 250% on existing footprint with zero total downtime.'
      },
      {
        title: 'O&M & Layanan Kimia Terpadu',
        titleEn: 'Integrated O&M & Chemical Treatment',
        text: 'Operator tersertifikasi KLHK, pasokan koagulan/flokulan kualitas tinggi, dan telemetri pemantauan daring continuous.',
        textEn: 'Certified field operators, high-grade coagulant/flocculant supplies, and continuous online telemetry monitoring.'
      }
    ]
  },
  {
    id: 'salt-innovation',
    title: 'Inovasi Produk Pengolahan Garam Berkualitas Tinggi',
    titleEn: 'High-Purity Salt Processing Technology Innovation',
    subtitle: 'Teknologi Pemurnian & Kristalisasi Garam Industri & Pangan',
    subtitleEn: 'Advanced Refining & Vacuum Crystallization for Industrial & Food Salt',
    description: 'Rancang bangun sistem pemurnian garam (Salt Refinery Plant) mutakhir berteknologi pencucian mekanis multi-stage, pelarutan terekayasa, dan kristalisasi vakum guna memproduksi garam NaCl > 99.2% standar farmasi, klor-alkali, dan konsumsi premium.',
    descriptionEn: 'Turnkey advanced salt refinery engineering utilizing multi-stage hydro-washing, controlled dissolution, and vacuum crystallization to produce high-grade NaCl > 99.2% for chlor-alkali, pharmaceutical, and food grades.',
    iconName: 'Sparkles',
    stats: { value: '>99.5%', label: 'Tingkat Kemurnian NaCl Terverifikasi', labelEn: 'Verified NaCl Purity Level' },
    color: 'from-indigo-600 to-blue-500',
    keyPoints: [
      {
        title: 'Pencucian Multi-Stage Hydro-Cyclone',
        titleEn: 'Multi-Stage Hydro-Cyclone Washing',
        text: 'Mengeliminasi impuritas magnesium, kalsium, dan sulfat serta zat tak larut hingga kadar minimal.',
        textEn: 'Eliminating magnesium, calcium, sulfate, and insoluble impurities down to trace thresholds.'
      },
      {
        title: 'Sistem Evaporasi & Kristalisasi Hemat Energi',
        titleEn: 'Energy-Efficient Evaporation & Crystallization',
        text: 'Teknologi MVR (Mechanical Vapor Recompression) untuk efisiensi termal dan konsumsi uap terendah.',
        textEn: 'MVR (Mechanical Vapor Recompression) technology for maximal thermal efficiency and minimal steam usage.'
      },
      {
        title: 'Drying, Iodization, & Packaging Otomatis',
        titleEn: 'Automated Fluidized Bed Drying & Packaging',
        text: 'Sistem pengeringan fluidized bed, fortifikasi iodium presisi tinggi, dan bagging otomatis kedap kelembaban.',
        textEn: 'Fluidized bed drying systems, precise KIO3 micro-dosing fortification, and hermetic automatic bagging.'
      }
    ]
  },
  {
    id: 'circular-economy',
    title: 'Penerapan Ekonomi Sirkular (Limbah ke Kompos)',
    titleEn: 'Circular Economy: Organic Waste to Bio-Compost',
    subtitle: 'Transformasi Limbah Padat Organik Menjadi Pupuk Hayati Bernilai Tinggi',
    subtitleEn: 'Valorization of Organic Waste & Sludge into High-Grade Bio-Fertilizer',
    description: 'Mewujudkan zero-waste industrial ecosystem dengan mengolah lumpur IPAL (sludge non-B3), sisa biomassa agroindustri, dan sampah organik perkotaan menjadi kompos organik granular kaya hara melalui bioreaktor fermentasi aerobik terakselerasi.',
    descriptionEn: 'Achieving a zero-waste industrial ecosystem by transforming biological dewatered sludge, agro biomass, and municipal organic waste into nutrient-dense granular bio-compost via accelerated in-vessel aerobic fermenters.',
    iconName: 'Recycle',
    stats: { value: '85%', label: 'Pengurangan Volume Limbah ke TPA', labelEn: 'Landfill Waste Diversion' },
    color: 'from-emerald-600 to-teal-500',
    keyPoints: [
      {
        title: 'Rotary In-Vessel Bioreactor & Windrow Turner',
        titleEn: 'Rotary In-Vessel Bioreactors & Aerobic Turners',
        text: 'Waktu pematangan dipercepat dari 60 hari menjadi hanya 7-14 hari dengan kontrol suhu termofilik otomatis.',
        textEn: 'Composting cycle accelerated from 60 days to just 7-14 days with automated thermophilic temperature controls.'
      },
      {
        title: 'Bio-Inokulan Konsorsium Mikroba Unggul',
        titleEn: 'Proprietary Microbial Inoculant Consortium',
        text: 'Mengurai selulosa & lignin dengan cepat, mensterilkan patogen, dan meniadakan emisi bau busuk (odorless).',
        textEn: 'Rapidly degrades cellulose & lignin, sterilizes pathogens, and completely eliminates foul odor emissions.'
      },
      {
        title: 'Granulasi & Fortifikasi Unsur Hara',
        titleEn: 'Granulation & Nutrient Fortification',
        text: 'Menghasilkan pupuk organik standar Kementan dengan C/N rasio ideal dan kandungan asam humat tinggi.',
        textEn: 'Produces certified organic fertilizer compliant with Ministry of Agriculture standards with ideal C/N ratio.'
      }
    ]
  },
  {
    id: 'sustainable-tech',
    title: 'Penerapan Inovasi Teknologi Berkelanjutan',
    titleEn: 'Sustainable Green Technology & Telemetry',
    subtitle: 'Digitalisasi SCADA, IoT Telemetri & Sistem Efisiensi Energi',
    subtitleEn: 'Smart SCADA Automation, Online IoT Sensors & Energy Recovery',
    description: 'Integrasi instrumentasi sensor online, otomasi PLC-SCADA, sistem pemulihan energi (energy recovery), serta pemantauan emisi dan debit limbah terhubung langsung ke sistem SPARING / SISPEK KLHK.',
    descriptionEn: 'Integration of online water quality sensors, PLC-SCADA automation, variable-frequency drives (VFD), energy recovery devices, and direct telemetry integration with national environmental agency (SPARING KLHK).',
    iconName: 'Cpu',
    stats: { value: '38%', label: 'Penghematan Konsumsi Daya Listrik', labelEn: 'Average Power Consumption Savings' },
    color: 'from-blue-600 to-indigo-600',
    keyPoints: [
      {
        title: 'SPARING & Continuous Monitoring Telemetry',
        titleEn: 'SPARING Online Telemetry Integration',
        text: 'Sensor pH, COD, TSS, NH3-N, debit kontinu dengan transmisi data terenkripsi real-time 24/7.',
        textEn: 'Continuous pH, COD, TSS, Ammonia-Nitrogen, and flow sensors with 24/7 encrypted cloud telemetry.'
      },
      {
        title: 'Otomasi Cerdas VFD & AI Dissolved Oxygen Control',
        titleEn: 'Smart VFD Automation & AI DO Modulation',
        text: 'Modulasi aerasi blower otomatis berdasarkan pembacaan oksigen terlarut mencegah pemborosan daya listrik.',
        textEn: 'Automatic blower modulation based on dissolved oxygen feedback preventing aeration power wastage.'
      },
      {
        title: 'Sistem Netralisasi Emisi Zero-Odor & Zero-Toxic',
        titleEn: 'Zero-Odor & Zero-Toxic Neutralization',
        text: 'Kombinasi scrubber basah dan ozonasi lanjut untuk memastikan udara kerja dan lingkungan sekitar 100% aman.',
        textEn: 'Advanced wet scrubbers and inline ozonation ensuring workplace and ambient air remain 100% clean and compliant.'
      }
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'mbbr-system',
    name: 'MBBR (Moving Bed Biofilm Reactor)',
    nameEn: 'MBBR (Moving Bed Biofilm Reactor) Systems',
    tagline: 'Media Biofilm K1/K3/K5 & Sistem Bioreaktor Aerobik-Anoksik Efisiensi Tinggi',
    taglineEn: 'High Surface Area K1/K3/K5 Bio-Media & Aerobic/Anoxic Bioreactor Systems',
    category: 'wwtp',
    badge: 'Teknologi Biologis Unggulan',
    badgeEn: 'Flagship Biological Tech',
    description: 'Media biofilm khusus berbahan Virgin Virgin High-Density Polyethylene (HDPE) dengan luas permukaan efektif terlindung hingga >1200 m²/m³. Memungkinkan konsentrasi biomassa sangat padat dalam tangki aerasi yang kompak, meningkatkan kapasitas reduksi BOD/COD hingga 300% dibanding sistem lumpur aktif konvensional tanpa risiko penyumbatan (clogging).',
    descriptionEn: 'Engineered biofilm carriers crafted from 100% Virgin HDPE offering protected specific surface area up to >1200 m²/m³. Facilitates extremely high active biomass concentrations in compact aeration basins, boosting BOD/COD degradation capacity by 300% over conventional activated sludge without clogging risks.',
    specifications: {
      'Material': '100% Virgin HDPE (High Density Polyethylene) Food Grade',
      'Luas Permukaan Efektif': '800 m²/m³ - 1200 m²/m³ (Tergantung Tipe K1/K3/K5)',
      'Densitas': '0.94 - 0.97 g/cm³ (Fluidized suspensi sempurna)',
      'Filling Fraction (Pengisian)': '30% - 67% dari total volume reaktor',
      'Efisiensi Reduksi BOD/COD': '88% - 96% pada HRT lebih singkat',
      'Umur Pakai Teknis': '≥ 15 - 20 Tahun (Tahan UV & Kimia Keras)'
    },
    specificationsEn: {
      'Material': '100% Virgin HDPE (Food-grade & UV Stabilized)',
      'Protected Surface Area': '800 m²/m³ - 1200 m²/m³ (Depending on K1/K3/K5)',
      'Specific Density': '0.94 - 0.97 g/cm³ (Optimal fluidized suspension)',
      'Reactor Filling Ratio': '30% - 67% of total tank volume',
      'BOD/COD Removal Efficiency': '88% - 96% at significantly reduced HRT',
      'Design Lifespan': '≥ 15 - 20 Years (Chemical & mechanical wear resistant)'
    },
    features: [
      'Self-cleaning mechanism akibat turbulensi aerasi kontinu (bebas backwash)',
      'Cocok untuk peningkatan kapasitas (upgrade/retrofit) IPAL eksisting yang over-capacity',
      'Tahan terhadap shock loading konsentrasi COD/BOD dan fluktuasi toksisitas limbah',
      'Mendukung simultan Nitrifikasi-Denitrifikasi (SND) untuk eliminasi amonia tuntas',
      'Dilengkapi dengan grid aerasi coarse bubble stainless steel non-clogging & retention sieve'
    ],
    featuresEn: [
      'Continuous self-cleaning motion driven by aeration turbulence (zero backwashing needed)',
      'Ideal for upgrading/retrofitting existing overloaded WWTP basins without expanding land footprint',
      'High resistance against hydraulic and organic shock loads and toxic peaks',
      'Facilitates Simultaneous Nitrification-Denitrification (SND) for total ammonia elimination',
      'Supplied with custom stainless steel coarse-bubble aeration grids and media retention sieves'
    ],
    applications: [
      'IPAL Industri Makanan & Minuman (F&B) dengan beban organik tinggi',
      'Pabrik Kelapa Sawit (PKS), Karet, dan Pulp & Paper',
      'Industri Tekstil, Farmasi, dan Kimia Organik',
      'IPAL Domestik Komunal, Apartemen, Rumah Sakit, & Hotel Bintang Lima'
    ],
    applicationsEn: [
      'High-BOD Food & Beverage Processing WWTP',
      'Palm Oil Mills (POME polish), Rubber, and Pulp & Paper plants',
      'Textile, Pharmaceutical, and Petrochemical industrial effluent',
      'Municipal, Commercial Real Estate, Hospital, and High-Rise WWTP'
    ],
    schematicSteps: [
      {
        title: 'Influent Loading & Screening',
        titleEn: 'Influent Loading & Screening',
        desc: 'Air limbah yang telah diproses awal dialirkan ke dalam tangki bioreaktor MBBR.',
        descEn: 'Pre-treated wastewater enters the MBBR bioreactor aeration basin.'
      },
      {
        title: 'Fluidized Biofilm Contact',
        titleEn: 'Fluidized Biofilm Contact',
        desc: 'Ribuan media biofilm bergerak bebas terfluidisasi oleh injeksi gelembung udara blower.',
        descEn: 'Thousands of biofilm carriers fluidize dynamically powered by bottom blower aeration.'
      },
      {
        title: 'Deep Biological Degradation',
        titleEn: 'Deep Biological Degradation',
        desc: 'Lapisan mikroorganisme aktif pada media mengonsumsi polutan organik dan amonia secara intensif.',
        descEn: 'Specialized microbial consortia colonizing media grooves rapidly digest COD, BOD, and NH3-N.'
      },
      {
        title: 'Retention & Clarification',
        titleEn: 'Retention & Clarification',
        desc: 'Saringan stainless steel menahan media tetap di dalam tangki, air olahan jernih keluar menuju sedimentasi.',
        descEn: 'Stainless steel media retention sieves retain carriers while purified effluent flows to clarifier.'
      }
    ],
    compliance: ['SNI 6989.72:2009', 'Permen LHK No. P.68/2016', 'ISO 9001:2015']
  },
  {
    id: 'chlorine-cylinders',
    name: 'Tabung Klorin & Chlorine Ton Container',
    nameEn: 'Chlorine Ton Containers & Gas Cylinders',
    tagline: 'Tabung Gas Klorin Baja Seamless Standar DOT-3AA480 / ASME Berkualitas Tinggi',
    taglineEn: 'ASME Section VIII & DOT-3AA480 Certified Heavy-Duty Chlorine Cylinders',
    category: 'chlorination',
    badge: 'Sertifikasi Keamanan Tertinggi',
    badgeEn: 'Maximum Safety Certified',
    description: 'Wadah silinder gas klorin cair terstandarisasi internasional untuk penyimpanan dan penyaluran gas klorin (Cl2) murni 99.8% pada instalasi pengolahan air bersih (WTP/PDAM), pendingin industri pembangkit, dan pabrik kimia. Dilengkapi katup valve Monel/Hastelloy, safety fusible plug (suhu leleh 70-74°C), dan sertifikat hidrotest berkala.',
    descriptionEn: 'Heavy-duty certified liquid chlorine gas ton containers and cylinders engineered for safe storage and feeding of 99.8% pure Cl2 into municipal WTP, power plant cooling circuits, and chemical facilities. Equipped with Monel/Hastelloy valves, fusible safety plugs (melting point 70-74°C), and full hydro-test certification.',
    specifications: {
      'Kapasitas Muatan': '1000 kg (Ton Container) & 50 kg / 68 kg (Silinder Vertikal)',
      'Standar Manufaktur': 'ASME Section VIII Div 1 / DOT-3AA480 / BS 5045',
      'Material Badan Silinder': 'High Tensile Normalized Carbon Steel (SA 516 Gr 70)',
      'Tekanan Uji Hidrostatis': '3.45 MPa (34.5 bar / 500 psig)',
      'Tekanan Kerja Normal': '0.7 - 1.2 MPa (pada suhu 20-35°C)',
      'Fitur Pengaman': 'Dual Fusible Plugs leleh otomatis pada 71°C - 74°C mencegah ledakan'
    },
    specificationsEn: {
      'Holding Capacity': '1000 kg (1 Ton Drum) & 50 kg / 68 kg (Vertical Cylinder)',
      'Design Standards': 'ASME Section VIII Div 1 / DOT-3AA480 / BS 5045',
      'Shell Metallurgy': 'Normalized High-Strength Carbon Steel (SA 516 Gr 70)',
      'Hydrostatic Test Pressure': '3.45 MPa (34.5 bar / 500 psig)',
      'Operating Working Pressure': '0.7 - 1.2 MPa (at ambient 20-35°C)',
      'Safety Relief': 'Dual certified fusible plugs melting at 71°C - 74°C preventing over-pressurization'
    },
    features: [
      'Katup standar The Chlorine Institute (USA) dengan material paduan anti-korosi Monel 400',
      'Dilengkapi dengan lifting beam derek khusus bersertifikat uji beban Disnaker',
      'Termasuk trunnion roller base berpelindung untuk memudahkan rotasi penempatan tabung',
      'Sistem pemantauan timbangan digital (load cell) continuous dengan alarm kebocoran',
      'Pemeriksaan NDT (Non-Destructive Testing) dan rekondisi berkala bersertifikat'
    ],
    featuresEn: [
      'Valves engineered strictly to The Chlorine Institute (USA) specs with Monel 400 corrosion alloy',
      'Supplied with heavy-duty certified overhead crane lifting beams and rigging hooks',
      'Includes dual roller trunnion supports for easy drum orientation during gas/liquid withdrawal',
      'Continuous dual-drum digital weighing platform (load cells) with local & SCADA alarms',
      'Comprehensive NDT (Ultrasonic Thickness & Magnetic Particle) recertification service'
    ],
    applications: [
      'Instalasi Pengolahan Air Minum (WTP / PDAM) skala kota dan regional',
      'Pembangkit Listrik Tenaga Uap (PLTU) & Gas (PLTGU) untuk bio-fouling control',
      'Industri Petrokimia, Pupuk, dan Pabrik Klor-Alkali',
      'Sistem Disinfeksi Air Limbah Akhir (Effluent Disinfection)'
    ],
    applicationsEn: [
      'Municipal & Regional Drinking Water Treatment Plants (WTP/PDAM)',
      'Thermal & Combined Cycle Power Plants (Condenser Cooling Bio-fouling Control)',
      'Petrochemical, Fertilizer, and Chlor-Alkali Manufacturing',
      'Final Industrial Effluent Disinfection Facilities'
    ],
    compliance: ['DOT-3AA480', 'ASME Sec VIII', 'The Chlorine Institute Pamphlet 17', 'Disnaker RI']
  },
  {
    id: 'fan-blower',
    name: 'Industrial Fan & Roots Aeration Blower',
    nameEn: 'Industrial Roots & Turbo Aeration Blowers',
    tagline: 'Roots Blower Three-Lobe & High-Efficiency Turbo Blower Tekanan Presisi',
    taglineEn: 'Three-Lobe Positive Displacement Roots & High-Speed Turbo Blowers',
    category: 'air_treatment',
    badge: 'Efisiensi Energi Tinggi',
    badgeEn: 'Energy Efficient Aeration',
    description: 'Unit blower industri berperforma tinggi untuk pasokan udara aerasi kontinu pada tangki IPAL/MBBR, sistem pembakaran, pneumatic conveying, dan exhaust gas scrubber. Memiliki rotor Three-Lobe bermesin CNC presisi tinggi dengan tingkat kebisingan rendah, getaran minimal, dan keandalan operasional 24/7 tanpa henti.',
    descriptionEn: 'High-performance industrial blower packages designed for continuous aeration duty in WWTP/MBBR basins, combustion air supply, pneumatic conveying, and scrubber exhaust ventilation. Features precision CNC-machined three-lobe rotors delivering low pulsation, reduced noise, and uninterrupted 24/7 durability.',
    specifications: {
      'Tipe Konstruksi': 'Three-Lobe Positive Displacement Roots & Magnetic Turbo Blower',
      'Kapasitas Debit Udara': '0.5 m³/min hingga 350 m³/min (30 - 21,000 m³/hr)',
      'Tekanan Buang (Pressure)': '10 kPa hingga 100 kPa (0.1 bar - 1.0 bar differential)',
      'Daya Motor Penggerak': '1.5 kW hingga 250 kW (IE3 / IE4 Ultra-Premium Efficiency)',
      'Tingkat Kebisingan': '< 75 - 82 dB(A) dengan Acoustic Enclosure Peredam Suara',
      'Sistem Pelumasan': 'Dual Splash Oil Lubrication pada kedua sisi gear & bearing'
    },
    specificationsEn: {
      'Blower Type': 'Three-Lobe Positive Displacement Roots & High-Speed Direct-Drive Turbo',
      'Air Flow Capacity': '0.5 m³/min up to 350 m³/min (30 - 21,000 m³/hr)',
      'Discharge Pressure': '10 kPa to 100 kPa (0.1 bar - 1.0 bar differential)',
      'Motor Rating': '1.5 kW up to 250 kW (IE3 / IE4 Ultra-Premium Efficiency)',
      'Sound Attenuation': '< 75 - 82 dB(A) with weather-proof acoustic enclosure',
      'Lubrication': 'Dual-end oil splash lubrication with heavy-duty SKF/FAG bearings'
    },
    features: [
      'Rotor profil heliks tri-lobe menghasilkan aliran udara halus bebas getaran berlebih',
      '100% Bebas Oli (Oil-Free Air Discharge) aman bagi bakteri biologis IPAL',
      'Dilengkapi check valve khusus, safety relief valve presisi, dan silencer ganda',
      'Opsi enclosure peredam suara tahan cuaca dengan sistem ventilasi mandiri',
      'Kompatibel dengan inverter VFD untuk penghematan listrik hingga 35%'
    ],
    featuresEn: [
      'Precision tri-lobe helical profile ensures smooth, pulse-free discharge airflow',
      '100% Oil-Free air delivery ensuring zero contamination to biological WWTP cultures',
      'Supplied with non-return check valve, pressure relief valve, and dual suction/discharge silencers',
      'Heavy-duty weatherproof acoustic hood with built-in forced ventilation cooling fan',
      'Fully VFD-ready for automated DO-coupled speed control saving up to 35% electrical power'
    ],
    applications: [
      'Aerasi Biologis Tangki IPAL, MBBR, dan Kolam Oksigenasi',
      'Penyedia Udara Tekan untuk Filter Backwash & Flotasi DAF',
      'Sistem Penarikan Udara Gas Buang (Forced Draft) pada Wet Scrubber',
      'Pneumatic Conveying serbuk garam, semen, dan tepung industri'
    ],
    applicationsEn: [
      'Biological Aeration Basins, MBBR, and Aerobic Digestors',
      'Filter Air Scouring & DAF Flotation Air Supply',
      'Wet Scrubber Induced / Forced Draft Toxic Fume Extraction',
      'Pneumatic Bulk Conveying for refined salt, chemicals, and grain'
    ],
    compliance: ['ISO 1217 Annex C', 'IEC 60034-30 IE3/IE4', 'DIN EN 10204']
  },
  {
    id: 'circulation-pumps',
    name: 'Pompa Sirkulasi & Chemical Sludge Pump',
    nameEn: 'Circulation & Heavy Sludge Chemical Pumps',
    tagline: 'Pompa Sirkulasi Kimia Magnetik, Sludge End-Suction & Pompa Celup Limbah',
    taglineEn: 'Sealless Magnetic Drive Chemical, Sludge End-Suction & Submersible Pumps',
    category: 'pumps',
    badge: 'Heavy-Duty Anti-Korosi',
    badgeEn: 'Heavy-Duty Anti-Corrosive',
    description: 'Rangkaian pompa sirkulasi berstandar industri berat untuk mengalirkan air limbah berlumpur kental (sludge), cairan kimia korosif (asam sulfat, klorin cair, kaustik soda, PAC), dan sirkulasi larutan scrubber basah. Tersedia dalam material PVDF, FRP, SS316L, Duplex Stainless Steel, dan Cast Iron berlapis keramik tahan abrasi.',
    descriptionEn: 'Industrial-grade circulation pump series engineered for conveying thick abrasive wastewater sludge, aggressive corrosive chemicals (sulfuric acid, sodium hypochlorite, caustic soda, PAC), and continuous wet scrubber chemical recirculation. Constructed from PVDF, FRP, SS316L, Super Duplex, and wear-resistant lined alloys.',
    specifications: {
      'Kapasitas Debit (Flow)': '2 m³/jam hingga 1,200 m³/jam',
      'Total Head Tekanan': '5 meter hingga 95 meter',
      'Pilihan Material Basah': 'PVDF, ETFE, Polypropylene (PP), SS316L, Super Duplex 2507',
      'Tipe Impeller': 'Open Vortex, Semi-Open, Non-Clogging Channel, & Magnetic Drive',
      'Toleransi Suhu Kerja': '-20°C hingga +140°C',
      'Pilihan Penggerak': 'Motor IEC Explostion-Proof (ATEX / Ex-d) atau Standard IP55/IE3'
    },
    specificationsEn: {
      'Flow Rate Capacity': '2 m³/hr up to 1,200 m³/hr',
      'Total Dynamic Head': '5 meters up to 95 meters',
      'Wetted End Materials': 'PVDF, ETFE, Virgin PP, SS316L, Super Duplex 2507',
      'Impeller Geometry': 'Open Vortex, Semi-Open, Non-Clogging Channel, & Magnetic Drive Sealless',
      'Operating Temperature': '-20°C up to +140°C',
      'Drive Configurations': 'IEC Flameproof/Explosion-Proof (ATEX / Ex-d) or IP55/IE3 Standard'
    },
    features: [
      'Teknologi Sealless Magnetic Drive meniadakan potensi kebocoran cairan kimia berbahaya 100%',
      'Impeller tipe vortex anti-sumbat mampu melewati padatan suspensi hingga diameter 75 mm',
      'Mechanical seal ganda (Double Mechanical Seal) dengan sistem pendingin thermosiphon',
      'Efisiensi hidrolik tinggi menghemat konsumsi energi operasional tahunan',
      'Kemudahan perawatan dengan desain back pull-out tanpa melepas pipa instalasi'
    ],
    featuresEn: [
      '100% Sealless Magnetic Drive design eliminating any hazardous chemical leakage risks',
      'Solid-handling vortex & channel impellers passing non-clogging solids up to 75mm diameter',
      'Double Cartridge Mechanical Seals with external thermosiphon barrier fluid cooling plan',
      'High hydraulic efficiency profiles maximizing lifetime energy conservation',
      'Back pull-out architecture allowing rapid motor/bearing maintenance without breaking pipe joints'
    ],
    applications: [
      'Sirkulasi Larutan Netralisasi (NaOH, NaOCl) pada Menara Wet Scrubber',
      'Transfer Lumpur Aktif (RAS/WAS) & Pengurasan Bak Sedimentasi IPAL',
      'Sirkulasi Larutan Garam Jenuh (Brine Circulation) pada Salt Refinery',
      'Dosing Bahan Kimia Koagulasi, Flokulasi, dan Asam/Basa pH Adjustment'
    ],
    applicationsEn: [
      'Continuous Recirculation of Neutralizing Caustic/Acid in Wet Scrubbers',
      'Return/Waste Activated Sludge (RAS/WAS) and Primary Sludge Transfer',
      'Saturated Brine Recirculation in High-Purity Salt Refining',
      'Chemical Dosing of Coagulants, Flocculants, and pH Neutralizing Reagents'
    ],
    compliance: ['ISO 2858', 'ISO 5199', 'API 685 (Mag-Drive)', 'CE Marking']
  },
  {
    id: 'chlorination-system',
    name: 'Sistem Klorinasi (Vacuum Regulator, Klorinator, Ejector)',
    nameEn: 'Full Chlorination Systems (Vacuum Regulator, Chlorinator, Ejector)',
    tagline: 'Sistem Injeksi Gas Klorin Otomatis Berbasis Vakum Aman, Presisi & Bebas Tekanan Positif',
    taglineEn: 'All-Vacuum Gas Chlorination Systems: Fail-Safe Regulators, Sonic Feeders & Venturi Ejectors',
    category: 'chlorination',
    badge: 'Sistem Presisi Tinggi',
    badgeEn: 'High Precision Gas Feed',
    description: 'Sistem klorinasi gas lengkap beroperasi di bawah prinsip vakum aman (All-Vacuum Operation). Gas klorin hanya akan mengalir saat terdapat kevakuman yang diciptakan oleh Ejector Venturi. Jika terjadi kebocoran pipa atau air berhenti, Vacuum Regulator seketika menutup aliran gas secara mekanis otomatis, meniadakan risiko kebocoran gas beracun ke ruang operator.',
    descriptionEn: 'Engineered all-vacuum gas chlorination package guaranteeing fail-safe operation. Liquid/gas chlorine is regulated exclusively under vacuum created by high-efficiency water ejector venturis. If piping leaks or water flow stops, the cylinder-mounted Vacuum Regulator instantly seals gas flow shut mechanically, eliminating toxic pressurized leaks.',
    specifications: {
      'Kapasitas Dosing Klorin': '10 g/jam hingga 200 kg/jam (0.5 PPD hingga 10,000 PPD)',
      'Prinsip Operasi': 'All-Vacuum System (Hanya bertekanan positif di dalam tabung)',
      'Komponen Utama Paket': 'Vacuum Regulator, Automatic Gas Chlorinator, Differential Ejector, Auto Switchover',
      'Akurasi Dosing': '± 4% dari pembacaan skala rotameter terkalibrasi',
      'Sinyal Kontrol Otomasi': '4-20 mA Proportional Flow Pacing & Residual Chlorine Feedback (PID)',
      'Material Konstruksi': 'Tantalum, Hastelloy-C, PTFE Teflon, PVDF, & Monel Springs'
    },
    specificationsEn: {
      'Chlorine Feed Range': '10 g/hr up to 200 kg/hr (0.5 PPD up to 10,000 PPD)',
      'Operating Principle': '100% Sonic/Vacuum Feed (Positive pressure strictly confined to cylinder valve)',
      'Package Components': 'Vacuum Regulator, Automatic Sonic Chlorinator, Differential Ejector, Auto Switchover',
      'Dosing Accuracy': '± 4% of full scale calibrated rotameter reading',
      'Control Modulation': '4-20 mA Flow Proportional & Residual Feedback (Closed-Loop PID)',
      'Metallurgy & Plastics': 'Tantalum, Hastelloy-C, Virgin PTFE, PVDF, & Monel Inconel Springs'
    },
    features: [
      'Vacuum Regulator langsung terpasang pada valve tabung (Cylinder/Ton Mounted) meminimalkan jalur pipa bertekanan',
      'Automatic Switchover Unit: Otomatis berpindah ke tabung cadangan saat tabung utama habis tanpa henti proses',
      'Water Ejector Venturi efisiensi tinggi dilengkapi double internal check valve anti-backflow air ke pipa gas',
      'Kontroler Klorinator Otomatis dilengkapi layar digital mikroprosesor dan komunikasi Modbus/SCADA',
      'Termasuk integrasi Gas Chlorine Leak Detector 2-channel dengan sirene & aktivasi scrubber darurat otomatis'
    ],
    featuresEn: [
      'Direct cylinder/ton-container mounted vacuum regulators isolating high pressure at the point of origin',
      'Automatic Vacuum Switchover: Seamlessly switches to standby cylinders upon empty signal with zero process interruption',
      'High-thrust water ejector with dual spring-loaded PTFE non-return check valves preventing water back-siphonage',
      'Smart micro-processor electronic gas chlorinator with color LCD and Modbus/Ethernet SCADA links',
      'Integrated dual-sensor ambient chlorine gas leak detector with strobe alarm & auto scrubber trigger'
    ],
    applications: [
      'Disinfeksi Air Minum PDAM / Regional Water Supply Systems',
      'Water Treatment Plant (WTP) Kawasan Industri & Pabrik Kimia',
      'Pengendalian Pertumbuhan Lumut & Alga pada Menara Pendingin (Cooling Tower PLTU)',
      'Pengolahan Air Limbah Akhir & Netralisasi Sianida pada Industri Elektroplating'
    ],
    applicationsEn: [
      'Municipal & Regional Potable Water Disinfection Facilities',
      'Industrial Park Water Treatment Plants & Chemical Works',
      'Bio-fouling and Algae Eradication in Power Station Cooling Towers',
      'Cyanide Destruction & Final Effluent Disinfection in Industrial Parks'
    ],
    schematicSteps: [
      {
        title: 'Water Booster & Ejector Suction',
        titleEn: 'Water Booster & Ejector Suction',
        desc: 'Air bertekanan melewati nozzle Venturi Ejector menciptakan daya hisap vakum kuat.',
        descEn: 'Motive water rushes through the venturi ejector creating high vacuum suction.'
      },
      {
        title: 'Vacuum Regulator Activation',
        titleEn: 'Vacuum Regulator Activation',
        desc: 'Kevakuman menarik diafragma regulator pada tabung klorin untuk membuka katup gas secara aman.',
        descEn: 'Vacuum pulls open the spring-loaded diaphragm inside the cylinder-mounted regulator.'
      },
      {
        title: 'Precision Flow Modulation',
        titleEn: 'Precision Flow Modulation',
        desc: 'Gas ditarik melewati rotameter pengukur & katup V-notch servo motor sesuai sinyal flow water meter.',
        descEn: 'Gas flows under vacuum through the calibrated V-notch orifice modulated by SCADA signals.'
      },
      {
        title: 'Instant Flash Mixing & Delivery',
        titleEn: 'Instant Flash Mixing & Delivery',
        desc: 'Gas klorin larut sempurna seketika dalam air di throat ejector membentuk larutan asam hipoklorit disinfektan.',
        descEn: 'Chlorine gas instantly dissolves in motive water generating active hypochlorous solution.'
      }
    ],
    compliance: ['The Chlorine Institute Standard', 'AWWA B301', 'ISO 9001:2015', 'Permenkes No. 2/2023']
  },
  {
    id: 'scrubber-system',
    name: 'Sistem Scrubber (Wet Packed Bed Scrubber)',
    nameEn: 'Industrial Wet Packed Bed Scrubber Systems',
    tagline: 'Sistem Absorpsi & Netralisasi Gas Beracun, Asam, Amonia, dan Bau Industri',
    taglineEn: 'Multi-Stage Wet Chemical Packed Bed Absorbers for Acid, Chlorine & Toxic Fumes',
    category: 'air_treatment',
    badge: 'Efisiensi Absorpsi >99.8%',
    badgeEn: '>99.8% Removal Efficiency',
    description: 'Instalasi pembersih udara basah (Wet Scrubber) multi-tahap berefisiensi tinggi untuk menangkap dan menetralisasi uap asam (HCl, H2SO4, HNO3), gas beracun (Klorin Cl2, SO2, NH3, H2S), dan bau busuk limbah. Dilengkapi random packing ring berluas kontak tinggi, spray nozzle non-clogging, mist eliminator demister, dan sistem dosing kimia otomatis dengan kontrol pH & ORP terintegrasi.',
    descriptionEn: 'Turnkey multi-stage vertical and horizontal wet packed bed scrubbers engineered to absorb and neutralize corrosive acid fumes (HCl, H2SO4, HNO3), toxic gases (Chlorine Cl2, SO2, NH3, H2S), and industrial odors. Features high-surface structured random packing, non-clogging full-cone spray nozzles, chevron mist eliminators, and automated pH/ORP dosing controls.',
    specifications: {
      'Kapasitas Debit Udara (Airflow)': '500 CFM hingga 50,000 CFM (850 m³/jam - 85,000 m³/jam)',
      'Efisiensi Penyerapan Gas': '≥ 99.5% - 99.9% (Memenuhi Baku Mutu Emisi KLHK)',
      'Material Kolom Scrubber': 'FRP (Fiberglass Reinforced Plastic), Polypropylene (PP), PVC, atau Dual-Laminate',
      'Tipe Packing Media': 'Pall Rings, Tellerette, atau Tri-Packs berbahan PP/PVDF tahan kimia',
      'Sistem Netralisasi': 'Injeksi Otomatis NaOH (Kaustik Soda), NaOCl, H2O2, atau Asam Sitrun berbasis pH/ORP',
      'Konstruksi Demister': 'Multi-Blade Chevron Mist Eliminator (Drop out efisiensi 99.9% butiran cairan > 10 micron)'
    },
    specificationsEn: {
      'Exhaust Airflow Capacity': '500 CFM up to 50,000 CFM (850 m³/hr - 85,000 m³/hr)',
      'Gas Absorption Efficiency': '≥ 99.5% - 99.9% (Meets global and national emission benchmarks)',
      'Vessel Construction': 'Corrosion-Proof FRP (Vinyl Ester), Solid PP, PVC, or PVDF Dual-Laminate',
      'Packing Media Type': 'High Specific Surface Pall Rings, Tellerettes, or Tri-Packs',
      'Neutralizing Chemistry': 'Automatic closed-loop dosing of NaOH, NaOCl, H2O2, or Acid driven by pH/ORP sensors',
      'Mist Eliminator': 'High-velocity chevron/vane demister removing 99.9% of entrained liquid droplets > 10 microns'
    },
    features: [
      'Desain hidrodinamik kolom menjamin waktu tinggal (residence time) gas optimal dengan penurunan tekanan (pressure drop) minimal',
      'Tangki penampung sirkulasi kimia terintegrasi di bagian dasar (integral sump) dengan sensor level ultrasonik',
      'Panel kontrol SCADA otomatis dengan interlock darurat terhadap sensor kebocoran gas ruangan',
      'Dilengkapi dengan Blower Fan FRP tahan korosi khusus gas asam/beracun',
      'Desain modular ringkas yang dapat disesuaikan dengan ruang terbatas di atap atau area utilitas pabrik'
    ],
    featuresEn: [
      'Optimized hydrodynamic column geometry providing required gas residence time with ultra-low pressure drop',
      'Integral lower recirculation sump equipped with ultrasonic level transmitters and dry-run safety locks',
      'Automated PLC/SCADA control panel with instant emergency interlock tied to ambient leak sensors',
      'Heavy-duty direct/belt-driven anti-corrosive FRP centrifugal fan built for aggressive chemical exhaust',
      'Compact modular skid architecture easily configured for rooftop or confined plant utility layouts'
    ],
    applications: [
      'Emergency Chlorine Scrubber pada Ruang Penyimpanan Tabung Klorin PDAM & Pembangkit',
      'Pengolahan Gas Buang Asam Industri Elektroplating, Peleburan Logam & Pabrik Aki',
      'Netralisasi Gas H2S dan Bau Busuk pada IPAL Industri Makanan, PKS, dan TPA Sampah',
      'Industri Farmasi, Laboratorium Kimia Terpadu, dan Pabrik Pupuk'
    ],
    applicationsEn: [
      'Emergency Chlorine Gas Neutralization for Municipal Waterworks and Power Stations',
      'Exhaust Fume Treatment in Electroplating, Metal Pickling, and Battery Plants',
      'H2S and Odor Abatement in High-Load WWTPs, Palm Oil Mills, and Waste Transfer Hubs',
      'Pharmaceutical Synthesis, Chemical Testing Facilities, and Fertilizer Manufacturing'
    ],
    schematicSteps: [
      {
        title: 'Fume Ingestion & Inlet',
        titleEn: 'Fume Ingestion & Inlet',
        desc: 'Gas beracun/asam ditarik oleh fan blower masuk ke bagian bawah kolom scrubber basah.',
        descEn: 'Contaminated air is induced by the FRP blower into the bottom of the scrubber column.'
      },
      {
        title: 'Counter-Current Absorption',
        titleEn: 'Counter-Current Absorption',
        desc: 'Gas naik melewati media packing sambil disemprot cairan kimia penetral dari nozzle atas secara berlawanan arah.',
        descEn: 'Gas rises through high-surface packing against a continuous downward spray of chemical neutralizer.'
      },
      {
        title: 'Chemical Neutralization Reaction',
        titleEn: 'Chemical Neutralization Reaction',
        desc: 'Reaksi kimia seketika mengubah polutan gas berbahaya menjadi garam larut yang aman di dalam air sirkulasi.',
        descEn: 'Instant chemical reactions convert hazardous gases into harmless soluble salts collected in the sump.'
      },
      {
        title: 'Mist Elimination & Clean Release',
        titleEn: 'Mist Elimination & Clean Release',
        desc: 'Demister menangkap tetesan cairan, melepaskan udara bersih bebas polusi dan bau ke atmosfer cerobong.',
        descEn: 'Chevron demisters strip moisture droplets, releasing clean, certified air safely through the stack.'
      }
    ],
    compliance: ['Permen LHK No. P.17/2019', 'OSHA 1910.1200', 'ACGIH Industrial Ventilation', 'ISO 14001:2015']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-pdam-metro',
    title: 'Modernisasi Sistem Klorinasi & Emergency Scrubber 1000 MLD PDAM',
    titleEn: 'Modernization of 1000 MLD Municipal WTP Chlorination & Emergency Scrubber',
    clientSector: 'PDAM / Perusahaan Air Minum Daerah',
    clientSectorEn: 'Municipal Water Utility',
    location: 'Jawa Timur, Indonesia',
    year: '2025',
    category: 'chlorination',
    summary: 'Pembangunan sistem klorinasi otomatis all-vacuum 4x1000 kg container dengan sistem switchover terintegrasi, detector kebocoran gas Cl2 4-titik, dan emergency packed bed scrubber berkapasitas 12,000 CFM.',
    summaryEn: 'Turnkey upgrade of automated all-vacuum 4x1000 kg ton-container chlorine feed with automatic switchover, 4-point gas leak detection, and 12,000 CFM emergency wet scrubber.',
    capacity: '1,000 MLD (Mega Liter / Hari)',
    results: [
      { metric: 'Kestabilan Sisa Klor', metricEn: 'Residual Chlorine Stability', before: '± 0.45 ppm', after: '± 0.05 ppm', unit: 'ppm' },
      { metric: 'Waktu Respon Kebocoran', metricEn: 'Leak Response Time', before: '12 Menit', after: '< 3 Detik', unit: 'Detik' },
      { metric: 'Penghematan Bahan Kimia', metricEn: 'Chemical Usage Optimization', before: 'Basis Manual', after: '+24% Efisien', unit: '%' }
    ],
    tags: ['Sistem Klorinasi', 'Tabung Klorin', 'Emergency Scrubber', 'PDAM']
  },
  {
    id: 'proj-fnb-mbbr',
    title: 'Retrofit IPAL Industri Makanan Ringan dengan Teknologi MBBR',
    titleEn: 'Food & Beverage Industrial WWTP Retrofit via Advanced MBBR Media',
    clientSector: 'Industri Makanan & Minuman Multinasional',
    clientSectorEn: 'Multinational Food & Beverage',
    location: 'Cikarang, Jawa Barat',
    year: '2025 - 2026',
    category: 'wwtp',
    summary: 'Meningkatkan kapasitas pengolahan air limbah dari 1,200 m³/hari menjadi 2,800 m³/hari pada tangki aerasi eksisting tanpa perluasan lahan, menggunakan Media MBBR K3 dan Roots Blower efisiensi tinggi.',
    summaryEn: 'Upgrading wastewater throughput from 1,200 m³/day to 2,800 m³/day inside the existing aeration tank volume without land expansion using K3 MBBR carriers and high-efficiency roots blowers.',
    capacity: '2,800 m³/hari (COD Beban 4,500 mg/L)',
    results: [
      { metric: 'Reduksi COD Akhir', metricEn: 'Effluent COD Reduction', before: '4,500 mg/L', after: '< 45 mg/L', unit: 'mg/L' },
      { metric: 'Reduksi Beban BOD', metricEn: 'BOD Removal Rate', before: '2,200 mg/L', after: '< 15 mg/L', unit: 'mg/L' },
      { metric: 'Kepatuhan Baku Mutu', metricEn: 'Compliance with Permen LHK', before: 'Sering Fluktuatif', after: '100% Lolos Uji', unit: '%' }
    ],
    tags: ['MBBR', 'Fan Blower', 'Pompa Sirkulasi', 'Industri F&B']
  },
  {
    id: 'proj-salt-refinery',
    title: 'Rancang Bangun Salt Refinery Pabrik Garam Industri Kemurnian Tinggi',
    titleEn: 'Engineering of High-Purity Industrial Salt Refinery & Crystallizer',
    clientSector: 'Produsen Garam Industri & Pangan Nasional',
    clientSectorEn: 'National Industrial Salt Producer',
    location: 'Madura & Gresik, Jawa Timur',
    year: '2024 - 2025',
    category: 'salt',
    summary: 'Pembangunan lini pengolahan garam industri terpadu mencakup hydro-cyclone washing, pelarutan brine jenuh, clarifier kimiawi, dan fluidized bed drying otomatis untuk mencapai kemurnian NaCl > 99.4%.',
    summaryEn: 'Turnkey implementation of an integrated salt refining line incorporating hydro-cyclone multi-stage washing, chemical brine clarification, and fluidized bed drying yielding NaCl > 99.4%.',
    capacity: '150 Ton / Hari Garam Halus Industri',
    results: [
      { metric: 'Kadar Kemurnian NaCl', metricEn: 'NaCl Purity Level', before: '88.5%', after: '99.45%', unit: '%' },
      { metric: 'Kadar Kalsium & Magnesium', metricEn: 'Ca & Mg Impurity', before: '1.45%', after: '< 0.08%', unit: '%' },
      { metric: 'Kadar Air Garam (Moisture)', metricEn: 'Moisture Content', before: '4.2%', after: '< 0.15%', unit: '%' }
    ],
    tags: ['Pengolahan Garam', 'Fluidized Bed', 'Pompa Kimia', 'Otomasi Pabrik']
  },
  {
    id: 'proj-circular-compost',
    title: 'Fasilitas Konversi Lumpur Sludge IPAL & Biomassa ke Pupuk Kompos Organik',
    titleEn: 'Biological WWTP Sludge & Agro Waste Circular Composting Plant',
    clientSector: 'Agroindustri & Kawasan Industri Hijau',
    clientSectorEn: 'Agro-Industrial & Eco-Industrial Park',
    location: 'Riau, Sumatera',
    year: '2025',
    category: 'circular',
    summary: 'Penerapan konsep ekonomi sirkular zero-waste dengan mengolah 60 ton/hari lumpur dewatered sludge IPAL biologis dan limbah tandan kosong menjadi kompos organik granul bernilai ekonomi tinggi.',
    summaryEn: 'Deployment of a zero-waste circular model converting 60 tons/day of dewatered biological WWTP sludge and agricultural biomass into premium organic fertilizer granules.',
    capacity: '60 Ton Limbah Masuk / Hari (Yield 22 Ton Kompos/Hari)',
    results: [
      { metric: 'Limbah Teralihkan dari TPA', metricEn: 'Landfill Waste Diversion', before: '0 Ton/Bulan', after: '1,800 Ton/Bulan', unit: 'Ton' },
      { metric: 'Waktu Siklus Fermentasi', metricEn: 'Fermentation Cycle Time', before: '60 Hari', after: '9 Hari', unit: 'Hari' },
      { metric: 'Nilai Ekonomi Produk Kompos', metricEn: 'New Revenue from Fertilizer', before: 'Biaya Pembuangan', after: 'Rp 320 Jt/Bln', unit: 'IDR' }
    ],
    tags: ['Ekonomi Sirkular', 'Kompos Organik', 'Zero Waste', 'Agroindustri']
  },
  {
    id: 'proj-petrochem-scrubber',
    title: 'Sistem Dual-Stage Packed Scrubber Gas Asam & Klorin Industri Kimia',
    titleEn: 'Dual-Stage Wet Scrubber for Acid & Chlorine Gas Emissions in Chemical Plant',
    clientSector: 'Pabrik Petrokimia & Sintesis Kimia',
    clientSectorEn: 'Petrochemical & Specialty Chemical',
    location: 'Cilegon, Banten',
    year: '2025 - 2026',
    category: 'scrubber',
    summary: 'Pemasangan sistem menara scrubber basah FRP 2-tahap (Stage 1 Water Pre-quench + Stage 2 Caustic Packed Bed) untuk menetralisasi uap HCl dan gas klorin reaktor dengan efisiensi penyerapan 99.85%.',
    summaryEn: 'Turnkey installation of dual-stage FRP packed bed scrubber (Stage 1 Water Quench + Stage 2 Caustic Absorption) capturing HCl vapor and reactor chlorine gas with 99.85% efficiency.',
    capacity: '25,000 CFM (42,500 m³/jam Exhaust Air)',
    results: [
      { metric: 'Kadar Emisi Cl2 Cerobong', metricEn: 'Stack Cl2 Emission Level', before: '185 ppm', after: '< 0.5 ppm', unit: 'ppm' },
      { metric: 'Kadar Emisi HCl Asam', metricEn: 'Stack HCl Emission Level', before: '240 mg/Nm³', after: '< 3.2 mg/Nm³', unit: 'mg/Nm³' },
      { metric: 'Kepatuhan Permen LHK 17', metricEn: 'Permen LHK Compliance', before: 'Melebihi Ambang', after: 'Jauh di Bawah BML', unit: 'Status' }
    ],
    tags: ['Sistem Scrubber', 'Fan Blower', 'Pompa PVDF', 'Petrokimia']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Ir. Bambang Sugiarto, M.T.',
    role: 'Direktur Teknik & Operasional',
    roleEn: 'Technical & Operations Director',
    company: 'PDAM Tirta Kencana Regional',
    location: 'Surabaya, Jawa Timur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Sistem Klorinasi All-Vacuum dan Emergency Scrubber dari Berkat Air Teknika memberikan ketenangan luar biasa bagi tim operasional kami. Presisi dosing klorin sangat stabil dan sistem keamanannya bekerja sempurna saat uji simulasi.',
    quoteEn: 'The all-vacuum chlorination package and emergency scrubber provided by Berkat Air Teknika give immense peace of mind to our operators. The dosing accuracy is rock solid and safety interlocks performed flawlessly in safety drills.',
    rating: 5,
    projectType: 'Sistem Klorinasi & Scrubber 1000 MLD'
  },
  {
    id: 'test-2',
    author: 'Hendro Wicaksono, S.T.',
    role: 'Plant & Environmental Manager',
    roleEn: 'Plant & Environmental Manager',
    company: 'PT Indofood Agrotech Manufacturing',
    location: 'Cikarang Industrial Estate',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'Proyek retrofit MBBR berhasil meningkatkan kapasitas IPAL kami hingga lebih dari dua kali lipat tanpa perlu membeli tanah baru. Nilai COD dan BOD kami sekarang selalu berada jauh di bawah ambang baku mutu KLHK.',
    quoteEn: 'The MBBR retrofit successfully doubled our WWTP processing capacity without requiring a single square meter of new land. Our effluent COD and BOD parameters are now consistently well below strict environmental limits.',
    rating: 5,
    projectType: 'Retrofit MBBR & Blower Aerasi'
  },
  {
    id: 'test-3',
    author: 'Dra. Maya Angelina',
    role: 'Head of Quality Assurance & R&D',
    roleEn: 'Head of QA & Industrial R&D',
    company: 'PT Nusantara Garam Sejahtera',
    location: 'Gresik, Jawa Timur',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote: 'Inovasi pabrik pemurnian garam berkat sistem hydro-cyclone dan kristalisasi dari Berkat Air Teknika memungkinkan kami memproduksi garam industri grade A kemurnian 99.4% yang lolos uji sertifikasi klor-alkali dan farmasi.',
    quoteEn: 'The salt refining innovation and crystallization system delivered by Berkat Air Teknika enabled us to produce Grade-A industrial salt with 99.4% purity, qualifying for stringent chlor-alkali and pharma certifications.',
    rating: 5,
    projectType: 'Pabrik Salt Refinery 150 TPD'
  },
  {
    id: 'test-4',
    author: 'Dr. Ir. Raden Subagja',
    role: 'VP of Sustainability & Circular Economy',
    roleEn: 'VP of Sustainability & Circular Economy',
    company: 'PT Sawit Lestari Nusantara',
    location: 'Pekanbaru, Riau',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'Sistem bioreaktor pengomposan lumpur limbah mengubah pos beban biaya pembuangan sludge kami menjadi lini pendapatan baru dari penjualan pupuk organik bersertifikasi. Ini adalah teladan nyata ekonomi sirkular.',
    quoteEn: 'The sludge composting bioreactor turned our previous high-cost waste disposal burden into a brand new revenue stream of certified organic bio-fertilizers. A prime benchmark of practical industrial circular economy.',
    rating: 5,
    projectType: 'Fasilitas Pengomposan Sirkular 60 TPD'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-mbbr-vs-cas',
    title: 'Perbandingan Komprehensif: Teknologi MBBR vs Lumpur Aktif Konvensional (CAS) pada IPAL Industri',
    titleEn: 'Comprehensive Benchmark: MBBR Technology vs Conventional Activated Sludge in Industrial WWTP',
    category: 'Teknologi Pengolahan Air Limbah',
    categoryEn: 'Wastewater Engineering',
    date: '10 Agustus 2026',
    readTime: '6 menit baca',
    readTimeEn: '6 min read',
    excerpt: 'Mengapa semakin banyak pabrik di Indonesia beralih ke media biofilm terfluidisasi MBBR untuk mengatasi lonjakan beban COD/BOD dan menghemat lahan hingga 60%.',
    excerptEn: 'Why leading Indonesian manufacturing plants are adopting fluidized MBBR biofilm technology to tackle high organic loads while cutting footprint by 60%.',
    content: 'Peningkatan kapasitas produksi pabrik kerap berbenturan dengan keterbatasan lahan untuk memperluas kolam aerasi IPAL konvensional. Teknologi Moving Bed Biofilm Reactor (MBBR) memecahkan kendala ini dengan memanfaatkan media HDPE khusus berpori terlindung yang menjadi tempat melekatnya populasi biomassa berkonsentrasi tinggi. Tulisan ini membedah kalkulasi hidrolik, kinetika biodegradasi, dan analisa Return on Investment (ROI) dari retrofit MBBR.',
    contentEn: 'Plant capacity expansions often collide with land limitations when trying to enlarge conventional aeration basins. Moving Bed Biofilm Reactor (MBBR) resolves this dilemma by introducing protected-surface HDPE carriers that support dense biofilm colonies. This article explores hydraulic sizing, biodegradation kinetics, and ROI metrics.',
    author: { name: 'Tim Rekayasa Proses BAT', title: 'Senior Process Engineer' },
    tags: ['MBBR', 'IPAL Industri', 'Retrofit', 'Baku Mutu Limbah']
  },
  {
    id: 'blog-safety-chlorination',
    title: 'Protokol Keselamatan Sistem Klorinasi Gas: Mengapa Prinsip All-Vacuum Adalah Standar Wajib',
    titleEn: 'Gas Chlorination Safety Protocols: Why the All-Vacuum Principle is the Universal Standard',
    category: 'Sistem Klorinasi & Keselamatan',
    categoryEn: 'Chlorination Safety',
    date: '02 Agustus 2026',
    readTime: '5 menit baca',
    readTimeEn: '5 min read',
    excerpt: 'Panduan teknis pencegahan kebocoran gas klorin beracun, pemilihan vacuum regulator yang benar, dan integrasi emergency wet scrubber otomatis.',
    excerptEn: 'Engineering best practices for preventing toxic chlorine gas leaks, vacuum regulator selection, and emergency scrubber auto-engagement.',
    content: 'Gas klorin (Cl2) cair yang tersimpan dalam tabung silinder memiliki tekanan uap tinggi. Mengalirkan gas klorin di bawah tekanan positif di dalam pipa ruangan sangat berisiko fatal jika terjadi kebocoran kecil. Standar internasional mewajibkan pemasangan Vacuum Regulator langsung pada katup tabung, sehingga seluruh jalur perpipaan di dalam gedung berada pada kondisi vakum (tekanan negatif). Jika terjadi retak atau kebocoran pipa, udara sekitar justru terhisap ke dalam dan sistem otomatis mengunci seketika.',
    contentEn: 'Liquid chlorine stored inside ton containers creates high vapor pressures. Running pressurized chlorine gas through indoor piping poses severe life-safety hazards. International standards mandate direct cylinder-mounted Vacuum Regulators, ensuring all downstream piping operates strictly under negative pressure. If a pipe cracks, room air is pulled inwards and the spring-loaded regulator snaps shut instantly.',
    author: { name: 'Ir. Farhan Ardiansyah', title: 'Lead Safety & Automation Specialist' },
    tags: ['Tabung Klorin', 'Vacuum Regulator', 'Ejector', 'Keselamatan Kerja']
  },
  {
    id: 'blog-circular-sludge-compost',
    title: 'Transformasi Lumpur IPAL Biologis Menjadi Kompos Organik: Strategi Zero Waste & Nilai Ekonomi',
    titleEn: 'Transforming Biological Sludge into Certified Bio-Compost: Zero Waste Strategies',
    category: 'Ekonomi Sirkular & Keberlanjutan',
    categoryEn: 'Circular Economy',
    date: '24 Juli 2026',
    readTime: '7 menit baca',
    readTimeEn: '7 min read',
    excerpt: 'Cara mengeliminasi biaya hauling pembuangan lumpur IPAL dan mengubahnya menjadi produk pupuk organik berkualitas tinggi bersertifikasi.',
    excerptEn: 'How to eliminate recurring sludge hauling disposal fees and turn waste byproducts into profitable certified organic fertilizer.',
    content: 'Lumpur biologis (sludge non-B3) hasil sedimentasi sekunder IPAL kaya akan unsur hara nitrogen, fosfor, dan bahan organik. Dengan teknologi aerated rotary bioreactor dan konsorsium mikroba termofilik terakselerasi, lumpur dewatered dapat dikonversi menjadi kompos steril beraroma tanah dalam waktu kurang dari dua pekan. Tulisan ini menyajikan studi kasus implementasi di pabrik agroindustri di Sumatera.',
    contentEn: 'Biological non-hazardous secondary sludge is naturally rich in nitrogen, phosphorus, and organic matter. Utilizing accelerated rotary bioreactors and selected thermophilic microbial strains, dewatered cake is converted into sterilized, earthy-smelling organic compost in under two weeks. We review a real-world industrial case study in Sumatra.',
    author: { name: 'Dr. Sarah Prameswari', title: 'Environmental Biotech Lead' },
    tags: ['Ekonomi Sirkular', 'Pupuk Kompos', 'Sludge Dewatering', 'Zero Waste']
  },
  {
    id: 'blog-scrubber-design-rules',
    title: 'Panduan Desain Wet Packed Bed Scrubber: Menghitung Rasio L/G, Packing Height, dan Pemilihan Reagen',
    titleEn: 'Engineering Guide to Packed Bed Scrubbers: Liquid-to-Gas Ratios, Packing Height & Reagent Selection',
    category: 'Teknologi Pengendalian Udara',
    categoryEn: 'Air Pollution Control',
    date: '15 Juli 2026',
    readTime: '8 menit baca',
    readTimeEn: '8 min read',
    excerpt: 'Formula rekayasa penting untuk menjamin efisiensi penyerapan gas asam dan klorin di atas 99.8% sesuai standar baku mutu cerobong KLHK.',
    excerptEn: 'Critical engineering formulas for sizing packed columns, liquid-to-gas ratios, and chemical dosing to achieve >99.8% absorption efficiency.',
    content: 'Merancang wet scrubber industri memerlukan perhitungan cermat antara debit udara buang (CFM), transfer massa gas-cair, rasio cairan terhadap gas (L/G Ratio), serta konstanta kesetimbangan Henry. Pemilihan packing media seperti Tellerette atau Pall Rings menentukan luas area kontak efektif tanpa membebani fan blower dengan pressure drop berlebih. Artikel ini membedah kalkulasi praktis untuk aplikasi industri kimia.',
    contentEn: 'Designing industrial wet scrubbers requires rigorous calculation of exhaust air volume (CFM), gas-liquid mass transfer coefficients, L/G ratios, and Henry law constants. Packing media geometry dictates the effective mass transfer surface without inflicting excessive pressure drop on the FRP fan blower.',
    author: { name: 'Budi Santoso, S.T.', title: 'Air Treatment Systems Specialist' },
    tags: ['Sistem Scrubber', 'Fan Blower', 'Pompa Sirkulasi', 'Emisi KLHK']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'tier-assessment',
    name: 'Audit Teknis & Studi Kelayakan',
    nameEn: 'Technical Audit & Feasibility Engineering',
    tagline: 'Evaluasi menyeluruh performa IPAL, Sistem Klorinasi, atau Scrubber eksisting',
    taglineEn: 'Comprehensive on-site assessment of existing WWTP, Chlorination, or Scrubber assets',
    priceNote: 'Mulai dari Rp 15.000.000,- / Proyek',
    priceNoteEn: 'Starting at IDR 15,000,000 / Site Assessment',
    features: [
      { text: 'Survei lokasi komprehensif & uji sampling laboratorium air/gas', textEn: 'Detailed on-site audit & accredited lab water/gas sampling', included: true },
      { text: 'Laporan neraca massa, debit hidrolik & identifikasi bottleneck sistem', textEn: 'Mass balance report, hydraulic profiling & bottleneck diagnostic', included: true },
      { text: 'Rekomendasi optimasi & simulasi perhitungan kapasitas MBBR / Scrubber', textEn: 'Optimization blueprint & MBBR / Scrubber sizing calculations', included: true },
      { text: 'Penyusunan Rencana Anggaran Biaya (RAB) & estimasi ROI investasi', textEn: 'Full CAPEX / OPEX Bill of Quantities (BOQ) & ROI roadmap', included: true },
      { text: 'Pendampingan konsultasi regulasi perizinan KLHK / AMDAL / SPARING', textEn: 'Environmental compliance advisory for KLHK / SPARING permits', included: true }
    ],
    ctaText: 'Jadwalkan Audit Lapangan',
    ctaTextEn: 'Schedule Site Audit'
  },
  {
    id: 'tier-turnkey',
    name: 'Turnkey EPC & Pengadaan Sistem',
    nameEn: 'Turnkey EPC & Equipment Delivery',
    tagline: 'Solusi lengkap rancang-bangun prasarana, fabrikasi alat & komisioning tuntas',
    taglineEn: 'Complete design, custom equipment manufacturing, installation & commissioning',
    priceNote: 'Kustomisasi Sesuai Spesifikasi Teknis',
    priceNoteEn: 'Custom Tailored to Engineering Specs',
    popular: true,
    features: [
      { text: 'Rancang bangun engineering detail (DED, P&ID, 3D Layout, As-Built Drawing)', textEn: 'Detailed Engineering Design (DED, P&IDs, 3D modeling, As-Built docs)', included: true },
      { text: 'Fabrikasi tangki, penyediaan Media MBBR, Tabung Klorin, Blower & Scrubber', textEn: 'Vessel fabrication, genuine MBBR media, Chlorine Ton Drums, Blowers & Scrubbers', included: true },
      { text: 'Pemasangan pipa, kabel instrumentasi, dan integrasi panel PLC-SCADA', textEn: 'Piping, instrumentation wiring, and full PLC-SCADA integration', included: true },
      { text: 'Uji fungsi kering & basah, wet commissioning hingga lolos uji baku mutu', textEn: 'Dry & wet commissioning until full environmental compliance verification', included: true },
      { text: 'Garansi performa proses 12 - 24 bulan & pelatihan sertifikasi operator', textEn: '12 - 24 months process performance warranty & operator training program', included: true }
    ],
    ctaText: 'Minta Penawaran EPC Lengkap',
    ctaTextEn: 'Request Turnkey EPC Quote'
  },
  {
    id: 'tier-retainer',
    name: 'Kontrak O&M & Pasokan Bahan Kimia',
    nameEn: 'Comprehensive O&M & Chemical Retainer',
    tagline: 'Operasional harian tanpa repot, pasokan reagen klorin/kimia & servis berkala',
    taglineEn: 'Hassle-free 24/7 plant operation, continuous chemical logistics & maintenance',
    priceNote: 'Kontrak Bulanan / Tahunan Fleksibel',
    priceNoteEn: 'Flexible Monthly / Annual Retainer',
    features: [
      { text: 'Penempatan tim operator & teknisi ahli tersertifikasi di lokasi pabrik', textEn: 'Dedicated certified station operators & process engineers on-site', included: true },
      { text: 'Jaminan pasokan gas klorin, koagulan, flokulan, dan bio-inokulan kompos', textEn: 'Guaranteed replenishment of chlorine, coagulants, and bio-inoculants', included: true },
      { text: 'Pemeliharaan preventif rutin pompa sirkulasi, fan blower, dan vacuum regulator', textEn: 'Scheduled preventive servicing of pumps, blowers, and vacuum regulators', included: true },
      { text: 'Layanan darurat siaga 24/7 dengan garansi response time < 4 jam', textEn: '24/7 emergency response guarantee with < 4 hours arrival window', included: true },
      { text: 'Pelaporan uji laboratorium berkala untuk pelaporan kepatuhan KLHK', textEn: 'Periodic accredited laboratory testing reports for statutory KLHK filings', included: true }
    ],
    ctaText: 'Konsultasi Layanan O&M',
    ctaTextEn: 'Inquire About O&M Support'
  }
];
