"use client";

import React, {useState} from "react";
import Image from "next/image";
import MiniSideBar from "./miniSideBar";

function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <MiniSideBar props={{sidebarOpen, setSidebarOpen}} />
      <div className="fixed top-32 right-0 z-50 translate-x-[8.3rem] hover:translate-x-0 cursor-pointer transition-all">
        <div className="rounded-tl-full rounded-bl-full py-2 pl-2 pr-4 shadow-md w-48 bg-[#222] text-white">
          <div className="grid grid-cols-3 gap-x-2">
            <div className="w-full">
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8 ml-2"
                style={{ color: "transparent" }}
                srcSet="/assets/google.webp"
                src="/assets/google.webp"
              />
            </div>
            <div className="col-span-2 max-h-5 mt-1 overflow-hidden">
              <div id="google_translate_element">
                <div className="skiptranslate goog-te-gadget" dir="ltr">
                  <div id=":0.targetLanguage">
                    <select
                      className="goog-te-combo"
                      aria-label="Language Translate Widget"
                    >
                      <option value="">Select Language</option>
                      <option value="af">Afrikaans</option>
                      <option value="sq">Albanian</option>
                      <option value="am">Amharic</option>
                      <option value="ar">Arabic</option>
                      <option value="hy">Armenian</option>
                      <option value="az">Azerbaijani</option>
                      <option value="eu">Basque</option>
                      <option value="be">Belarusian</option>
                      <option value="bn">Bengali</option>
                      <option value="bs">Bosnian</option>
                      <option value="bg">Bulgarian</option>
                      <option value="ca">Catalan</option>
                      <option value="ceb">Cebuano</option>
                      <option value="ny">Chichewa</option>
                      <option value="zh-CN">Chinese (Simplified)</option>
                      <option value="zh-TW">Chinese (Traditional)</option>
                      <option value="co">Corsican</option>
                      <option value="hr">Croatian</option>
                      <option value="cs">Czech</option>
                      <option value="da">Danish</option>
                      <option value="nl">Dutch</option>
                      <option value="eo">Esperanto</option>
                      <option value="et">Estonian</option>
                      <option value="tl">Filipino</option>
                      <option value="fi">Finnish</option>
                      <option value="fr">French</option>
                      <option value="fy">Frisian</option>
                      <option value="gl">Galician</option>
                      <option value="ka">Georgian</option>
                      <option value="de">German</option>
                      <option value="el">Greek</option>
                      <option value="gu">Gujarati</option>
                      <option value="ht">Haitian Creole</option>
                      <option value="ha">Hausa</option>
                      <option value="haw">Hawaiian</option>
                      <option value="iw">Hebrew</option>
                      <option value="hi">Hindi</option>
                      <option value="hmn">Hmong</option>
                      <option value="hu">Hungarian</option>
                      <option value="is">Icelandic</option>
                      <option value="ig">Igbo</option>
                      <option value="id">Indonesian</option>
                      <option value="ga">Irish Gaelic</option>
                      <option value="it">Italian</option>
                      <option value="ja">Japanese</option>
                      <option value="jw">Javanese</option>
                      <option value="kn">Kannada</option>
                      <option value="kk">Kazakh</option>
                      <option value="km">Khmer</option>
                      <option value="ko">Korean</option>
                      <option value="ku">Kurdish (Kurmanji)</option>
                      <option value="ky">Kyrgyz</option>
                      <option value="lo">Lao</option>
                      <option value="la">Latin</option>
                      <option value="lv">Latvian</option>
                      <option value="lt">Lithuanian</option>
                      <option value="lb">Luxembourgish</option>
                      <option value="mk">Macedonian</option>
                      <option value="mg">Malagasy</option>
                      <option value="ms">Malay</option>
                      <option value="ml">Malayalam</option>
                      <option value="mt">Maltese</option>
                      <option value="mi">Maori</option>
                      <option value="mr">Marathi</option>
                      <option value="mn">Mongolian</option>
                      <option value="ne">Nepali</option>
                      <option value="no">Norwegian</option>
                      <option value="or">Odia (Oriya)</option>
                      <option value="ps">Pashto</option>
                      <option value="fa">Persian</option>
                      <option value="pl">Polish</option>
                      <option value="pt">Portuguese</option>
                      <option value="pa">Punjabi</option>
                      <option value="ro">Romanian</option>
                      <option value="ru">Russian</option>
                      <option value="sm">Samoan</option>
                      <option value="gd">Scots Gaelic</option>
                      <option value="sr">Serbian</option>
                      <option value="st">Sesotho</option>
                      <option value="sn">Shona</option>
                      <option value="sd">Sindhi</option>
                      <option value="si">Sinhala</option>
                      <option value="sk">Slovak</option>
                      <option value="sl">Slovenian</option>
                      <option value="so">Somali</option>
                      <option value="es">Spanish</option>
                      <option value="su">Sundanese</option>
                      <option value="sw">Swahili</option>
                      <option value="sv">Swedish</option>
                      <option value="tg">Tajik</option>
                      <option value="ta">Tamil</option>
                      <option value="te">Telugu</option>
                      <option value="th">Thai</option>
                      <option value="tr">Turkish</option>
                      <option value="uk">Ukrainian</option>
                      <option value="ur">Urdu</option>
                      <option value="ug">Uyghur</option>
                      <option value="uz">Uzbek</option>
                      <option value="vi">Vietnamese</option>
                      <option value="cy">Welsh</option>
                      <option value="xh">Xhosa</option>
                      <option value="yi">Yiddish</option>
                      <option value="yo">Yoruba</option>
                      <option value="zu">Zulu</option>
                    </select>
                  </div>
                  Powered by
                  <span style={{ whiteSpace: "nowrap" }}>
                    <a
                      className="VIpgJd-ZVi9od-l4eHX-hSRGPd"
                      href="https://translate.google.com"
                      target="_blank"
                    >
                      <Image
                        src="/assets/google.webp"
                        width={37}
                        height={14}
                        style={{ paddingRight: 3 }}
                        alt="Google Translate"
                      />
                      Translate
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full text-white z-30">
        <div className="nav-container flex justify-between duration-300 items-center py-6 px-5 transition-colors">
          <div className="logo-area">
            <h2 className="font-bold text-4xl font-mono text-white" >
              <svg
                width="198"
                height="32"
                viewBox="0 0 198 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                            
<text x="0" y="30"  fill="rgba(0,122,225)">S</text>
<text x="20" y="30" fill="rgb(0,122,225)">TOXA</text>



              </svg>
            </h2>
          </div>
          <div className="Navigation-Items">
            <div className="itemcontainer lg:flex hidden text-black text-sm">
              <a>
                <div className="text-xs text-white font-normal opacity0 mx-2 -px-2 pb-1 cursor-pointer transition-opacity duration-500 hover:opacity-100">
                  Home
                </div>
              </a>
              <a className="font-bold">
                <div className="text-xs  font-bold opacity-100 text-blue-500  border-b-2 border-b-blue-500 mx-2 -px-2 pb-1 cursor-pointer transition-opacity duration-500">
                  Getting Started
                </div>
              </a>
              <a>
                <div className="text-xs text-white font-normal opacity0 mx-2 -px-2 pb-1 cursor-pointer transition-opacity duration-500 hover:opacity-100">
                  About Us
                </div>
              </a>
              <a href="#Features & Benefits">
                <div className="text-xs text-white font-normal opacity0 mx-2 -px-2 pb-1 cursor-pointer transition-opacity duration-500 hover:opacity-100">
                  Features &amp; Benefits
                </div>
              </a>
              <a href="#Advantages">
                <div className="text-xs text-white font-normal opacity0 mx-2 -px-2 pb-1 cursor-pointer transition-opacity duration-500 hover:opacity-100">
                  Advantages
                </div>
              </a>
              <a href="#Partners">
                <div className="text-xs text-white font-normal opacity0 mx-2 -px-2 pb-1 cursor-pointer transition-opacity duration-500 hover:opacity-100">
                  Partners
                </div>
              </a>
              <a href="#Testimonials">
                <div className="text-xs text-white font-normal opacity0 mx-2 -px-2 pb-1 cursor-pointer transition-opacity duration-500 hover:opacity-100">
                  Testimonials
                </div>
              </a>
              <a href="#FAQ">
                <div className="text-xs text-white font-normal opacity0 mx-2 -px-2 pb-1 cursor-pointer transition-opacity duration-500 hover:opacity-100">
                  FAQ
                </div>
              </a>
            </div>
          </div>
          <div className="items-center hidden lg:flex">
            <button className="theme-toggler text-white mx-4 p-3 bg-white/10 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </button>
            <a href="/auth">
              <div className="ctaButtons lg:flex justify-between text-sm font-bold hidden items-center">
                <div className="btn1 px-4 cursor-pointer flex py-3 bg-clip-tet text-blue-accent text-blue-500 hover:bg-white rounded-xl">
                  <p className="px-0.5 opacity-90 ">
                    Create an account
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="menu-bar cursor-pointer lg:hidden flex items-center">
            <button className="theme-toggler text-white mr-7 /bg-white/10 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </button>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R53jd3a:"
              data-state="closed"
              onClick={() => {
                setSidebarOpen((f) => !f);
                console.log(sidebarOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
