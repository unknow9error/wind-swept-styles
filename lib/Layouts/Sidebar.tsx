import { useState } from 'react';
import { SidebarInterface } from './Sidebar.interface';
import { Variants, motion } from 'framer-motion';
import { Button } from '../Button';
import { icons } from '../utils';
import { twMerge } from 'tailwind-merge';

export const SideBar: SidebarInterface = ({
    logo,
    items,
    nav,
    children,
    beta,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isArrowActive, setIsArrowActive] = useState(false);

    const variants: Variants = {
        open: { width: '18rem' },
        closed: { width: '7rem' },
    };

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const handleHover = (active: boolean) => {
        return () => {
            setIsArrowActive(active);
        };
    };

    return (
        <div className="flex items-start w-full">
            <motion.aside
                onHoverStart={handleHover(true)}
                onHoverEnd={handleHover(false)}
                id="logo-sidebar"
                className="z-40 h-screen w-72 bg-white px-6 pt-3 relative"
                aria-label="Sidebar"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={variants}
            >
                <motion.div
                    className="absolute -right-9 w-8 h-8"
                    initial={false}
                    animate={isArrowActive ? 'open' : 'closed'}
                    variants={{
                        open: {
                            opacity: 1,
                        },
                        closed: {
                            opacity: 0,
                        },
                    }}
                >
                    <Button onClick={handleOpen} className="z-30 w-full h-full">
                        {isOpen
                            ? icons('w-full h-full')['arrow-left']
                            : icons('w-full h-full')['arrow-right']}
                    </Button>
                </motion.div>
                <div>{logo}</div>
                <div className="pb-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {Array.isArray(items) &&
                            items.map((item) => {
                                return (
                                    <li key={item.key}>
                                        <a
                                            href={`/${item.link}`}
                                            className={twMerge(
                                                'flex items-center group',
                                                isOpen ? 'p-2' : 'mt-2'
                                            )}
                                        >
                                            {item.icon && item.icon}
                                            <span className="ms-3">
                                                {item.title}
                                            </span>
                                            {item.rightContent}
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                {beta && (
                    <div
                        id="dropdown-cta"
                        className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
                        role="alert"
                    >
                        {beta.title && (
                            <div className="flex items-center mb-3">
                                <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                                    {beta.title}
                                </span>
                                <button
                                    type="button"
                                    className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                                    data-dismiss-target="#dropdown-cta"
                                    aria-label="Close"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg
                                        className="w-2.5 h-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                        {beta.content && (
                            <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                                {beta.content}
                            </p>
                        )}
                    </div>
                )}
            </motion.aside>
            <div className="w-full p-5">
                {nav && (
                    <nav className="z-50 w-full py-4">
                        <div className="w-1/2">{nav}</div>
                    </nav>
                )}
                <div>{children}</div>
            </div>
        </div>
    );
};
