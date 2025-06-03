import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1);
  const [question, setQuestion] = useState('');

  const faqData = [
    {
      id: 1,
      question: "What is Cosmic AI ?",
      answer: "Cosmic AI  is a blockchain ecosystem helping businesses transition from Web2 To Web3. It includes ICB Network (Layer-1 blockchain), ICB Verse (Metaverse), NFT Talent (NFT marketplace), and ICB KYC (decentralized identity verification)"
    },
    {
      id: 2,
      question: "Who founded Cosmic AI ?",
      answer: "Cosmic AI  was founded by a team of blockchain experts and entrepreneurs dedicated to creating innovative Web3 solutions for businesses and individuals."
    },
    {
      id: 3,
      question: "What industries does Cosmic AI  impact?",
      answer: "Cosmic AI  impacts multiple industries including finance, education, gaming, digital art, real estate, supply chain, and enterprise solutions through its comprehensive blockchain ecosystem."
    },
    {
      id: 4,
      question: "Where can I buy or trade $ICBX tokens?",
      answer: "You can buy or trade $ICBX tokens on various cryptocurrency exchanges. Please check our official website for the most up-to-date list of supported exchanges and trading platforms."
    },
    {
      id: 5,
      question: "Which projects are developed by Cosmic AI ?",
      answer: "Cosmic AI  has developed several key projects: ICB Network (blockchain infrastructure), ICB Verse (metaverse platform), NFT Talent (NFT marketplace), and ICB KYC (identity verification system)."
    },
    {
      id: 6,
      question: "What makes $ICBX different from other crypto tokens?",
      answer: "$ICBX is unique as it powers an entire ecosystem of Web3 applications, offers utility across multiple platforms, provides governance rights, and enables seamless transitions from Web2 to Web3 for businesses."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleSubmit = () => {
    if (question.trim()) {
      console.log('Question submitted:', question);
      setQuestion('');
      // Handle form submission here
    }
  };

  return (
    <div className="min-h-screen bg-black  text-white px-[4rem] py-[4rem] ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mb-4">
              <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
                FAQS
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
              Frequently Asked Questions
            </h1>
            <div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden"
              style={{
                borderLeft: '2px solid #a21caf',
                borderRight: '2px solid #a21caf',
                borderBottom: '2px solid #a21caf',
                borderTop: 'none',
                boxShadow: '0 0 16px 2px #a21caf66'
              }}
            >
              <div className="absolute top-4 right-4 w-20 h-20 sm:w-28 sm:h-28 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">?</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-2">
                Have a Question?
              </h3>
              <p className="text-gray-400 text-center mb-6 text-sm sm:text-base">
                Ask your question below, and we'll be happy to assist.
              </p>
              <div className="space-y-2">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Enter here..."
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none min-h-[80px]"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="border-b border-gray-800">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-5 text-left hover:text-purple-400 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-purple-400 font-bold">
                      {String(faq.id).padStart(2, '0')}
                    </span>
                    <span className="text-base sm:text-lg font-medium">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full border-2 border-purple-400 flex items-center justify-center transition-all duration-300 ${openFAQ === faq.id ? 'bg-purple-500 rotate-45' : 'group-hover:border-purple-300'}`}>
                      <span className={`text-lg font-bold ${openFAQ === faq.id ? 'text-white' : 'text-purple-400'}`}>
                        +
                      </span>
                    </div>
                  </div>
                </button>
                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === faq.id ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <div className="pl-6 pr-4 sm:pl-10 sm:pr-10">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;