import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import VisionMission from './pages/VisionMission';
import Commencement from './pages/Commencement';
import FormerPrincipals from './pages/FormerPrincipals';
import CollegeCalendar from './pages/CollegeCalendar';
import Principal from './pages/Principal';
import NonTeachingStaff from './pages/NonTeachingStaff';
import Committee from './pages/Committee';
import AwardRecognition from './pages/AwardRecognition';
import MaintainingInfrastructure from './pages/MaintainingInfrastructure';
import Academics from './pages/Academics';
import CoursesOffered from './pages/CoursesOffered';
import Departments from './pages/Departments';
import Examinations from './pages/Examinations';
import CLP from './pages/CLP';
import Placement from './pages/Placement';
import Alumni from './pages/Alumni';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Weblinks from './pages/Weblinks';
import Gallery from './pages/Gallery';
import NSS from './pages/NSS';
import YRC from './pages/YRC';
import RRC from './pages/RRC';
import Sports from './pages/Sports';
import Forms from './pages/Forms';

import Tamil from './pages/Tamil';
import English from './pages/English';
import Commerce from './pages/Commerce';
import ComputerScience from './pages/ComputerScience';
import Sociology from './pages/Sociology';
import Statistics from './pages/Statistics';

import IQAC from './pages/IQAC';
import NirfAishe from './pages/NirfAishe';
import RUSA from './pages/RUSA';
import AntiRagging from './pages/AntiRagging';
import UMISDataMaintenance from './pages/UMISDataMaintenance';
import Finance from './pages/Finance';
import CollegeCalendarPreparation from './pages/CollegeCalendarPreparation';
import CollegeMagazineCommittee from './pages/CollegeMagazineCommittee';
import CollegeWebsiteCommittee from './pages/CollegeWebsiteCommittee';
import SportsCommittee from './pages/SportsCommittee';
import DisciplineWelfareCommittee from './pages/DisciplineWelfareCommittee';
import SCSTWelfareCommittee from './pages/SCSTWelfareCommittee';
import PWDCoordinationCommittee from './pages/PWDCoordinationCommittee';
import WomenCell from './pages/WomenCell';
import ICC from './pages/ICC';
import PTA from './pages/PTA';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        {/* Main */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* About sub-pages */}
        <Route path="/history" element={<History />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/commencement" element={<Commencement />} />
        <Route path="/former-principals" element={<FormerPrincipals />} />
        <Route path="/college-calendar" element={<CollegeCalendar />} />

        {/* Administration */}
        <Route path="/principal" element={<Principal />} />
        <Route path="/non-teaching-staff" element={<NonTeachingStaff />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/award-recognition" element={<AwardRecognition />} />
        <Route path="/maintaining-infrastructure" element={<MaintainingInfrastructure />} />

        {/* Academics */}
        <Route path="/academics" element={<Academics />} />
        <Route path="/courses-offered" element={<CoursesOffered />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/clp" element={<CLP />} />

        {/* Department pages */}
        <Route path="/tamil" element={<Tamil />} />
        <Route path="/english" element={<English />} />
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/sociology" element={<Sociology />} />
        <Route path="/statistics" element={<Statistics />} />

        {/* Other main pages */}
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/examinations" element={<Examinations />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/alumni" element={<Alumni />} />

        {/* Activities */}
        <Route path="/nss" element={<NSS />} />
        <Route path="/yrc" element={<YRC />} />
        <Route path="/rrc" element={<RRC />} />
        <Route path="/sports" element={<Sports />} />

        {/* Misc */}
        <Route path="/forms" element={<Forms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/weblinks" element={<Weblinks />} />
        <Route path="/contact" element={<Contact />} />

        {/* Committee sub-pages */}
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/nirf-aishe" element={<NirfAishe />} />
        <Route path="/rusa" element={<RUSA />} />
        <Route path="/anti-ragging" element={<AntiRagging />} />
        <Route path="/umis-data-maintenance" element={<UMISDataMaintenance />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/college-calendar-preparation" element={<CollegeCalendarPreparation />} />
        <Route path="/college-magazine-committee" element={<CollegeMagazineCommittee />} />
        <Route path="/college-website-committee" element={<CollegeWebsiteCommittee />} />
        <Route path="/sports-committee" element={<SportsCommittee />} />
        <Route path="/discipline-welfare-committee" element={<DisciplineWelfareCommittee />} />
        <Route path="/sc-st-welfare-committee" element={<SCSTWelfareCommittee />} />
        <Route path="/pwd-coordination-committee" element={<PWDCoordinationCommittee />} />
        <Route path="/women-cell" element={<WomenCell />} />
        <Route path="/icc" element={<ICC />} />
        <Route path="/pta" element={<PTA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
