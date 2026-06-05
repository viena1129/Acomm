/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageType } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutView from './components/AboutView';
import CapabilitiesView from './components/CapabilitiesView';
import SolutionsView from './components/SolutionsView';
import ProductsView from './components/ProductsView';
import ContactView from './components/ContactView';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Code, X, FileArchive } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageType>('solutions'); // Defaults to solutions tab as shown in primary pages
  const [showExportPanel, setShowExportPanel] = useState<boolean>(true); // Open by default so the user notices it immediately

  const renderActiveView = () => {
    switch (activeTab) {
      case 'about':
        return <AboutView />;
      case 'capabilities':
        return <CapabilitiesView />;
      case 'solutions':
        return <SolutionsView onContactClick={() => {
          setActiveTab('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      case 'products':
        return <ProductsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <SolutionsView onContactClick={() => setActiveTab('contact')} />;
    }
  };

  return (
    <div id="navbar-target" className="min-h-screen flex flex-col justify-between bg-[#f7f9ff] text-[#161c23] antialiased relative">
      {/* Header Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Responsive Body View Container with page animation transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation details */}
      <Footer setActiveTab={setActiveTab} />

      {/* Direct Website and Source Code Downloader Panel */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        <AnimatePresence>
          {showExportPanel ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white border-2 border-teal-500 rounded-xl p-5 shadow-2xl max-w-sm w-80 relative"
            >
              <button 
                onClick={() => setShowExportPanel(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                title="關閉"
              >
                <X size={16} />
              </button>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-700">
                  <Download size={20} className="animate-bounce" />
                  <h4 className="font-bold text-sm tracking-tight text-gray-900">
                    下載網頁檔案 / Export Website
                  </h4>
                </div>
                
                <p className="text-xs text-gray-500 leading-relaxed">
                  請由此直接下載整套 Acomm 網頁或完整原始碼：
                </p>

                <div className="space-y-2 pt-1">
                  {/* Option 1: Standalone HTML (Recommended) */}
                  <a 
                    href="/acommtw.html" 
                    target="_blank"
                    className="flex items-center justify-between p-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-sm group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileArchive size={18} className="text-white group-hover:scale-110 transition-transform" />
                      <div className="text-left w-full">
                        <p className="text-xs font-bold leading-tight">單一獨立 HTML 網頁 (即點即用)</p>
                        <p className="text-[10px] text-teal-100 font-medium">隨處雙擊直接開啟，免瀏覽器 CORS 限制</p>
                      </div>
                    </div>
                    <Download size={14} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Option 2: Active HTML URL display */}
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-900 text-left space-y-1">
                    <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">您的專屬 HTML 線上網址：</p>
                    <a 
                      href="/acommtw.html" 
                      target="_blank"
                      className="text-xs font-mono font-medium underline text-emerald-600 hover:text-emerald-800 break-all block"
                    >
                      /acommtw.html (點擊在新頁面開啟)
                    </a>
                  </div>

                  {/* Option 3: Compiled Website Zip */}
                  <a 
                    href="/acomm_compiled_website.zip" 
                    download="acomm_compiled_website.zip"
                    className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileArchive size={16} className="text-gray-550 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <p className="text-[11px] font-bold leading-tight">下載完整靜態部署包 (ZIP)</p>
                        <p className="text-[9px] text-gray-500 font-medium">包含完整的獨立 css, js, 圖片資源</p>
                      </div>
                    </div>
                    <Download size={12} className="text-gray-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Option 4: Source Code Zip */}
                  <a 
                    href="/acomm_source_code.zip" 
                    download="acomm_source_code.zip"
                    className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Code size={16} className="text-gray-500 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <p className="text-[11px] font-bold leading-tight">下載原始碼 (ZIP)</p>
                        <p className="text-[9px] text-gray-400 font-medium font-mono">React + Vite + TS 完整專案</p>
                      </div>
                    </div>
                    <Download size={12} className="text-gray-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="bg-teal-50 p-2 rounded text-[10px] text-teal-800 text-left leading-normal font-medium">
                  💡 使用方法：
                  <br />• 點擊「單一獨立 HTML」後，在開啟的網頁畫面中按滑鼠右鍵點擊<strong>「另存新檔 (Save As...)」</strong>，即可儲存出這套能直接在電腦上雙擊開啟運作的完整 HTML 檔案！
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowExportPanel(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center gap-2 cursor-pointer border border-teal-500 hover:border-teal-400 transition-all font-bold text-xs"
              title="下載專案網頁檔案"
            >
              <Download size={18} className="animate-pulse" />
              <span>下載網頁 / Export</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
