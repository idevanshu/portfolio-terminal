import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HanumanChalisaTyping = () => {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const containerRef = useRef(null);
  const clickSoundRef = useRef(null);

  const chalisaText = `Shri Guru Charan Saroj Raj
Nij mane mukure sudhar
Varnao Raghuvar Vimal Jasu
jo dayaku phal Charan

Budhi Hin Tanu Janike
Sumirau Pavan Kumar

Bal budhi vidya Dehu mohe
Harahu Kalesa Vikar

Jai Hanuman gyan gun sagar
Jai Kapis tihun lok ujagar

Ram doot atulit bal dhama
Anjani putra Pavan sut nama

Mahavir Vikram Bajrangi
Kumati nivar sumati Ke sangi

Kanchan varan viraj subesa
Kanan Kundal Kunchit Kalesa

Hath Vajra Aur Dhuvaje Viraje
kandhe moonj janehu sajai

Sankar suvan kesri Nandan
Tej pratap maha jag vandan

Vidyavan guni ati chatur
Ram kaj karibe ko aatur

Prabu charitra sunibe ko rasiya
Ram Lakhan Sita man Basiya

Sukshma roop dhari Siyahi dikhava
Vikat roop dhari lanka jarava

Bhima roop dhari asur sanghare
Ramachandra ke kaj sanvare

Laye Sanjivan Lakhan Jiyaye
Shri Raghuvar Harashi ur Laye

Ragupati Kinhi bahut badai
Tum mam priye Bharathi sam bhai

Sahas badan tumharo yash gaave
Us kahi Shripati kanth lagaave

Sankadik Brahmadi Muneesa
Narad Sarad sahit Aheesa

Yam Kuber Digpal Jagan Te
Kavi kovid kahi sake kahan te

Tum upkar Sugreevahin Keenha
Ram milaye rajpad deenha

Tumharo mantra Vibheeshan mana
Lankeshwar Bhaye Sub jag jana

Yug sahastra jojan par Bhanu
Leelyo tahi madhur phal janu 

Prabhu mudrika meli mukh mahee
Jaladhi langhi gaye achraj nahee

Durgaam Kaj jagat ke jete
Sugam anugraha tumhre tete

Ram dware tum rakhvare
Hoat na agya binu paisare
Sub sukh lahi tumhari sarn
Tum rakshak kahu ko dar na

Aapan tej samharo aapai
Teenhon lok hank te kanpai

Bhoot pisach Nikat nahin aavai
Mahavir jab naam sunavai

Nase rog harai sab peera
japat nirantar Hanumant beera

Sankat se Hanuman chudavai
Man Karam Vachan dyan jo lavai

Sub par Ram tapasvee raja
Tin ke kaj sakal Tum saja

Aur manorath jo koi lavai
Sohi amit jeevan phal pavai

Charon Yug partap tumhara
Hai persidh jagat ujiyara

Sadhu Sant ke tum Rakhware
Asur nikandan Ram dulhare

Ashta sidhi nav nidhi ke dhata
Us var deen janki mata

Ram rasayan tumhare pasa
Sada raho Raghupati ke dasa

Tumhare bhajan Ram ko pavai
Janam Janam ke dukh bisravai

Anth Kaal Raghuvir pur jayee
Jahan janam Hari Bakht Kahayee

Aur Devta Chit na dharehi
Hanumanth se hi sarve sukh karehi

Sankat kate mite sab peera
Jo sumirai Hanumat Balbeera

Jai Jai Jai Hanuman Gosahin
Kripa Karahu Gurudev ke nyahin

Jo sat bar path kare kohi
Chutehi bandhi maha sukh hohi

Jo yah padhe Hanuman Chalisa
Hoye siddhi sakhi Gaureesa 

Tulsidas sada hari chera
Keejai Das Hrdaye mein dera

Pavantnai sankat haran,
Mangal murti roop.
Ram Lakhan Sita sahit,
Hrdaye basahu sur bhoop.`;

  const getVisibleText = () => {
    const paragraphs = chalisaText.split('\n\n');
    let charCount = 0;

    for (let i = 0; i < paragraphs.length; i++) {
      const paragraphLength = paragraphs[i].length + (i < paragraphs.length - 1 ? 2 : 0);

      if (currentCharIndex < charCount + paragraphLength) {
        return {
          text: paragraphs[i],
          startIndex: charCount,
          paragraphIndex: i
        };
      }

      charCount += paragraphLength;
    }

    return {
      text: paragraphs[paragraphs.length - 1],
      startIndex: charCount - paragraphs[paragraphs.length - 1].length,
      paragraphIndex: paragraphs.length - 1
    };
  };

  useEffect(() => {
    containerRef.current?.focus();
    // Initialize click sound
    if (!clickSoundRef.current) {
      clickSoundRef.current = new Audio('/sounds/click.mp3');
      clickSoundRef.current.volume = 0.5;
    }


    const handleGlobalKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (!isStarted && !isFinished) {
        setIsStarted(true);
        setStartTime(Date.now());
      }

      if (isFinished || currentCharIndex >= chalisaText.length) return;

      const typed = e.key;
      const expected = chalisaText[currentCharIndex];

      if (typed === 'Backspace' || typed === 'Delete' || typed === 'Tab') {
        e.preventDefault();
        return;
      }

      // Both Space and Enter work for newlines and spaces
      if (typed === ' ' || typed === 'Enter') {
        e.preventDefault();
        if (expected === '\n' || expected === ' ') {
          // Play click sound
          if (clickSoundRef.current) {
            clickSoundRef.current.currentTime = 0;
            clickSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
          }
          setCorrectChars(prev => prev + 1);
          setCurrentCharIndex(prev => {
            const newIndex = prev + 1;
            if (newIndex >= chalisaText.length) {
              setIsFinished(true);
            }
            return newIndex;
          });
        } else {
          setMistakes(prev => prev + 1);
        }
        return;
      }

      if (typed.length > 1 || e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }

      e.preventDefault();

      if (typed === expected) {
        // Play click sound
        if (clickSoundRef.current) {
          clickSoundRef.current.currentTime = 0;
          clickSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
        }
        setCorrectChars(prev => prev + 1);
        setCurrentCharIndex(prev => {
          const newIndex = prev + 1;
          if (newIndex >= chalisaText.length) {
            setIsFinished(true);
          }
          return newIndex;
        });
      } else {
        setMistakes(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isStarted, isFinished, currentCharIndex, chalisaText.length]);

  useEffect(() => {
    if (isStarted && startTime && correctChars > 0) {
      const timeElapsedMinutes = (Date.now() - startTime) / 60000;
      if (timeElapsedMinutes > 0) {
        const words = correctChars / 5;
        const calculatedWpm = Math.round(words / timeElapsedMinutes);
        setWpm(calculatedWpm);
      }
    }
  }, [correctChars, isStarted, startTime]);

  const resetTest = () => {
    setCurrentCharIndex(0);
    setCorrectChars(0);
    setMistakes(0);
    setWpm(0);
    setIsStarted(false);
    setIsFinished(false);
    setStartTime(null);
    containerRef.current?.focus();
  };

  const totalAttempts = correctChars + mistakes;
  const accuracy = totalAttempts > 0 
    ? Math.round((correctChars / totalAttempts) * 100) 
    : 100;

  const renderVisibleText = () => {
    const { text, startIndex } = getVisibleText();
    const elements = [];

    for (let i = 0; i < text.length; i++) {
      const globalIndex = startIndex + i;
      const char = text[i];

      let colorClass = 'text-gray-500';
      if (globalIndex < currentCharIndex) {
        colorClass = 'text-red-400 drop-shadow-sm';
      } else if (globalIndex === currentCharIndex) {
        colorClass = 'text-white bg-gradient-to-r from-red-500 to-orange-500 px-1 rounded-md shadow-lg shadow-red-500/50 animate-pulse scale-110 inline-block';
      }

      if (char === '\n') {
        elements.push(
          <span 
            key={i} 
            className={colorClass}
          >
            <br />
          </span>
        );
      } else {
        elements.push(
          <span 
            key={i}
            className={`${colorClass} transition-all duration-200`}
          >
            {char}
          </span>
        );
      }
    }
    return elements;
  };

  const { paragraphIndex } = getVisibleText();
  const totalParagraphs = chalisaText.split('\n\n').length;

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-black text-red-100 font-mono p-8 outline-none flex flex-col"
      tabIndex={0}
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="group flex items-center gap-2 text-lg text-red-400 hover:text-red-300 transition-all duration-300"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back</span>
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            ॐ Hanuman Chalisa Typing Test
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-900/40 to-red-950/20 backdrop-blur-sm p-4 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all">
            <div className="text-xs uppercase tracking-wider text-red-400/70 mb-1 font-semibold">WPM</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{wpm}</div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-red-950/20 backdrop-blur-sm p-4 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all">
            <div className="text-xs uppercase tracking-wider text-orange-400/70 mb-1 font-semibold">Accuracy</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">{accuracy}%</div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/40 to-red-950/20 backdrop-blur-sm p-4 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all">
            <div className="text-xs uppercase tracking-wider text-pink-400/70 mb-1 font-semibold">Mistakes</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">{mistakes}</div>
          </div>

          <div className="bg-gradient-to-br from-red-900/40 to-red-950/20 backdrop-blur-sm p-4 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all">
            <div className="text-xs uppercase tracking-wider text-red-400/70 mb-1 font-semibold">Progress</div>
            <div className="text-3xl font-bold text-red-400">{currentCharIndex}<span className="text-xl text-red-600/50">/{chalisaText.length}</span></div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-red-950/20 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all">
            <div className="text-xs uppercase tracking-wider text-purple-400/70 mb-1 font-semibold">Verse</div>
            <div className="text-3xl font-bold text-purple-400">{paragraphIndex + 1}<span className="text-xl text-purple-600/50">/{totalParagraphs}</span></div>
          </div>
        </div>

        <div 
          className="flex-1 relative bg-gradient-to-br from-gray-900/90 to-red-950/50 backdrop-blur-md rounded-3xl border-2 border-red-500/40 shadow-2xl shadow-red-900/30 flex items-center justify-center p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5 rounded-3xl pointer-events-none"></div>

          <div className="relative text-center text-3xl leading-loose font-serif max-w-3xl transition-all duration-500">
            {renderVisibleText()}
          </div>
        </div>

        <div className="flex justify-center gap-6 items-center mt-8">
          <button
            onClick={resetTest}
            className="group relative px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 rounded-xl transition-all duration-300 font-bold shadow-lg hover:shadow-red-500/50 hover:scale-105 border border-red-400/30"
          >
            <span className="relative z-10">{isFinished ? '🔄 Try Again' : '↻ Reset'}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </button>

          {!isStarted && (
            <div className="flex items-center gap-3 text-red-300/70 animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <span className="text-lg">Start typing... (Space/Enter for new line)</span>
            </div>
          )}
        </div>

        {isFinished && (
          <div className="mt-8 p-6 bg-gradient-to-br from-red-900/60 to-orange-900/40 backdrop-blur-md rounded-3xl border-2 border-orange-500/50 shadow-2xl shadow-orange-500/30 animate-in">
            <h2 className="text-2xl mb-4 text-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent font-bold">
              🙏 Jai Bajrangbali 🚩
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-950/30 rounded-xl border border-red-500/20">
                <div className="text-xs text-red-400/70 mb-1 uppercase tracking-wider">Final WPM</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{wpm}</div>
              </div>
              <div className="text-center p-4 bg-red-950/30 rounded-xl border border-orange-500/20">
                <div className="text-xs text-orange-400/70 mb-1 uppercase tracking-wider">Accuracy</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">{accuracy}%</div>
              </div>
              <div className="text-center p-4 bg-red-950/30 rounded-xl border border-pink-500/20">
                <div className="text-xs text-orange-400/70 mb-1 uppercase tracking-wider">Mistakes</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">{mistakes}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-in {
          animation: animate-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HanumanChalisaTyping;