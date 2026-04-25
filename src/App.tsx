/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArabiNextCaseStudy from './pages/ArabiNextCaseStudy';
import HeliosCaseStudy from './pages/HeliosCaseStudy';
import OmanArabBankCaseStudy from './pages/OmanArabBankCaseStudy';
import CollectiblesCaseStudy from './pages/CollectiblesCaseStudy';
import Resume from './pages/Resume';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case-study/arabi-next" element={<ArabiNextCaseStudy />} />
        <Route path="/case-study/helios" element={<HeliosCaseStudy />} />
        <Route path="/case-study/oman-arab-bank" element={<OmanArabBankCaseStudy />} />
        <Route path="/case-study/collectibles" element={<CollectiblesCaseStudy />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}
