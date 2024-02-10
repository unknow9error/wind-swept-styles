import { useEffect, useId, useRef, useState } from 'react';
import { SelectInterface, SelectOption } from './Select.types';
import { AnimatePresence, motion } from 'framer-motion';

export const Select: SelectInterface = ({ label, onChange, options }) => {
    const [activeOption, setActiveOption] = useState<SelectOption>();
    const [isListVisible, setIsListVisible] = useState(false);

    const selectRef = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsListVisible(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef]);

    const handleActiveKey = (option: SelectOption) => {
        return () => {
            setActiveOption(option);
            if (option.value && onChange) onChange(option.value);

            setIsListVisible(false);
        };
    };

    const dropdownVariants = {
        hidden: { opacity: 0, scaleY: 0, originY: 0 },
        visible: { opacity: 1, scaleY: 1, originY: 0 },
    };

    const handleVisible = (visible: boolean) => {
        return () => {
            setIsListVisible(visible);
        };
    };

    return (
        <div className="w-full max-w-xs">
            <div className="space-y-1">
                {label && (
                    <label className="block text-sm leading-5 font-medium text-gray-700">
                        {label}
                    </label>
                )}
                <div className="relative" ref={selectRef}>
                    <span className="inline-block w-full rounded-md shadow-sm">
                        <button
                            type="button"
                            onClick={handleVisible(true)}
                            className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                        >
                            <div className="flex items-center space-x-3">
                                <span className="block truncate">
                                    {activeOption?.label || 'test'}
                                </span>
                            </div>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </button>
                    </span>
                    <AnimatePresence>
                        {isListVisible && options && (
                            <motion.div
                                className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={dropdownVariants}
                                transition={{ duration: 0.2 }}
                            >
                                <ul
                                    role="listbox"
                                    className="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                >
                                    {options.map((option) => {
                                        return (
                                            <li
                                                key={`${option.value}-${id}`}
                                                role="option"
                                                className="text-gray-900 cursor-default select-none relative py-2 pl-4 pr-9"
                                                onClick={handleActiveKey(
                                                    option
                                                )}
                                            >
                                                <span className="font-normal block truncate">
                                                    {option.label}
                                                </span>
                                                {activeOption &&
                                                    option.value &&
                                                    option.value ===
                                                        activeOption?.value && (
                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                                                            <svg
                                                                className="h-5 w-5"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </span>
                                                    )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
