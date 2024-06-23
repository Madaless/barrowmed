'use client'
import React, { useState } from 'react'

const languages = [
    { code: 'en', name: 'English', flag: '/flags/english.svg' },
    { code: 'pl', name: 'Polish', flag: '/flags/polish.svg' },
];

const LanguageSelect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[1]);
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        onSelectLanguage(language.code);
        setIsOpen(false);
    };

    const onSelectLanguage = (languageCode: string) => {
        console.log(`Selected language: ${languageCode}`);
    };

    return (
        // <div className="flex gap-5">
        //     <select>
        //         {languages.map((language) => (
        //             <option>
        //                 <div
        //                     key={language.code}
        //                     className="flex flex-col items-center cursor-pointer"
        //                     onClick={() => onSelectLanguage(language.code)}
        //                 >
        //                     <img
        //                         src={language.flag}
        //                         alt={`${language.name} flag`}
        //                         className="w-12 h-12 rounded-full object-cover mb-2 border border-gray-300 hover:border-blue-500"
        //                     />
        //                     <span className="text-sm text-gray-700">{language.name}</span>
        //                 </div>
        //             </option>
        //         ))}
        //     </select>
        // </div>
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img
                        src={selectedLanguage.flag}
                        alt={`${selectedLanguage.name} flag`}
                        className="inline w-6 h-6 rounded-full"
                    />
                </button>
            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language)}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                                id={`menu-item-${language.code}`}
                            >
                                <img
                                    src={language.flag}
                                    alt={`${language.name} flag`}
                                    className="inline w-6 h-6 rounded-full mr-2"
                                />
                                {language.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>

    )
}

export default LanguageSelect