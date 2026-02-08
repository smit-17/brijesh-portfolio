import { useState } from 'react';

const Header = () => {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-white border-b border-gray-200 px-4 py-3">
                <div className=" mx-auto flex justify-between items-center">
                    <a href="/" className="nav_logo_link flex-shrink-0" aria-label="home">
                        <span className='font-semibold text-3xl'>Brijesh Pansuriya</span>
                    </a>
                    <nav role="navigation" className="nav-menu1 hidden lg:flex items-center">
                        <nav className="nav_links_wrapper1 flex items-center space-x-6">
                            <a href="/blog" className="nav_link inline-block">
                                <div className="text-md font-medium font-semibold text-black hover:text-gray-900">Social Media</div>
                            </a>
                            {/* <div
                                data-hover="true"
                                data-delay="0"
                                className="dropdown1 relative"
                                onMouseEnter={() => setIsCoursesOpen(true)}
                                onMouseLeave={() => setIsCoursesOpen(false)}
                            >
                                <div className="dropdown-toggle1 flex items-center cursor-pointer text-md font-medium font-semibold text-black hover:text-gray-900">
                                    <div>Courses</div>
                                    <img
                                        src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/6244ba99e17cc72d0c94ebc7_Navbar%20arrow.svg"
                                        width="12"
                                        alt=""
                                        className="expand_arrow ml-2"
                                    />
                                </div>
                                {isCoursesOpen && (
                                    <nav className="dropdown-list2-hide-adjust-here-copy absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-lg overflow-hidden" style={{ width: '800px' }}>
                                        <div className="container-3 mega_nav_container1 p-8">
                                            <div className="courses_grid grid grid-cols-3 gap-6">
                                                <a href="https://www.jointimegenius.com/e/join" target="_blank" className="courses_grid_card glow-border p-6 border-2 border-yellow-300 rounded-lg hover:shadow-lg transition">
                                                    <div className="courses_grid_heading mb-3">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/66688677e4dcef495a9c036b_Time%20Genius%20Logo%20(In-Line)2.png"
                                                            loading="lazy"
                                                            width="125"
                                                            alt=""
                                                            className="courses_grid_logo mb-2"
                                                        />
                                                        <div className="text-tab inline-block bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Start Now! 🔥</div>
                                                    </div>
                                                    <p className="courses_grid_paragraph text-sm text-gray-600">Time Genius is a self-paced, on demand coaching program. Get the science-back system you need to take back your time, multiply your profits, and own your freedom — <em>guaranteed.</em></p>
                                                </a>

                                                <a href="/bschool" className="courses_grid_card p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                                                    <div className="courses_grid_heading mb-3">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/66688558459682c199dc55b2_B-School%20Logo.png"
                                                            loading="lazy"
                                                            width="132"
                                                            alt=""
                                                            className="courses_grid_logo"
                                                        />
                                                    </div>
                                                    <p className="courses_grid_paragraph text-sm text-gray-600">Whether you're brand new to business or established and ready to grow, B-School will challenge you to execute at your highest level. We're proud to have nearly 80,000 B-School students.</p>
                                                </a>

                                                <a href="/the-copy-cure" className="courses_grid_card p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                                                    <div className="courses_grid_heading mb-3">
                                                        <img
                                                            src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/662126017232900849a9de8a_Copy%20Cure%20Logo%20(4).png"
                                                            loading="lazy"
                                                            width="57"
                                                            alt=""
                                                            className="copy_cure_logo courses_grid_logo"
                                                        />
                                                    </div>
                                                    <p className="courses_grid_paragraph text-sm text-gray-600">A step-by-step online training course that shows you how to write copy that's powerful, persuasive, and 100% YOU, so people will love – and buy – what you sell.</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="center-container-2 shop-button-box text-center pb-6">
                                            <a href="/shop" className="primary-button bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 inline-block">Shop All</a>
                                        </div>
                                    </nav>
                                )}
                            </div> */}

                            <a href="/marietv" className="nav_link inline-block">
                                <div className="text-md font-medium text-black hover:text-gray-900 font-semibold">Hobbies</div>
                            </a>
                            <a href="/marietv" className="nav_link inline-block">
                                <div className="text-md font-medium text-black hover:text-gray-900 font-semibold">Companies</div>
                            </a>

                            <a href="/podcast" className="nav_link inline-block">
                                <div className="text-md font-medium text-black hover:text-gray-900 font-semibold">Future Plans</div>
                            </a>
                            <a href="/podcast" className="nav_link inline-block">
                                <div className="text-md font-medium text-black hover:text-gray-900 font-semibold">Awards</div>
                            </a>

                            <a href="/about" className="nav_link inline-block">
                                <div className="text-md font-medium text-black hover:text-gray-900 font-semibold">About</div>
                            </a>

                            {/* <div
                                data-delay="0"
                                data-hover="true"
                                className="dropdown1 relative"
                                onMouseEnter={() => setIsMoreOpen(true)}
                                onMouseLeave={() => setIsMoreOpen(false)}
                            >
                                <div className="dropdown-toggle1 flex items-center cursor-pointer text-md font-medium text-black hover:text-gray-900 font-semibold">
                                    <div>More</div>
                                    <img
                                        src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/6244ba99e17cc72d0c94ebc7_Navbar%20arrow.svg"
                                        width="12"
                                        alt=""
                                        className="expand_arrow ml-2"
                                    />
                                </div>
                                {isMoreOpen && (
                                    <nav className="dropdown-list1-hide-adjust-here absolute top-full right-0 mt-2 bg-white shadow-2xl rounded-lg overflow-hidden" style={{ width: '900px' }}>
                                        <div className="columns-15 grid grid-cols-12 gap-6 p-8">
                                            <div className="mega_menu_column content-vflex col-span-3">
                                                <h2 className="mega_menu_heading u-heading text-lg font-bold mb-4">Site</h2>
                                                <ul role="list" className="space-y-2">
                                                    <li className="mega_menu_item"><a href="/" className="mega_menu_link text-sm text-gray-600 hover:text-gray-900">Home</a></li>
                                                    <li className="mega_menu_item"><a href="/new-here" className="mega_menu_link text-sm text-gray-600 hover:text-gray-900">New Here?</a></li>
                                                    <li className="mega_menu_item"><a href="/shop" className="mega_menu_link text-sm text-gray-600 hover:text-gray-900">Courses</a></li>
                                                    <li className="mega_menu_item"><a href="/success-stories" className="mega_menu_link text-sm text-gray-600 hover:text-gray-900">Success Stories</a></li>
                                                    <li className="mega_menu_item"><a href="/free-tools" className="mega_menu_link text-sm text-gray-600 hover:text-gray-900">Free Tools</a></li>
                                                    <li className="mega_menu_item"><a href="/press-media" className="mega_menu_link text-sm text-gray-600 hover:text-gray-900">Press & Media</a></li>
                                                </ul>
                                                <a href="https://programs.marieforleo.com/" target="_blank" className="u-button mt-4 inline-block bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200">Program Login</a>
                                            </div>
                                            <div className="menu-drawer-ad-colulmn col-span-4">
                                                <a href="https://www.marieforleo.com/how-to-get-anything-you-want" target="_blank" className="full-width block">
                                                    <img
                                                        src="https://cdn.prod.website-files.com/5f2ae8131d7fcdaffe1a4a96/62670f45e8fd9a10b2747e17_MarieForleo_HowToGetAnythingYouWant_MoreMenu.webp"
                                                        loading="lazy"
                                                        alt=""
                                                        className="hover-fade rounded-lg hover:opacity-90 transition w-full"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </nav>
                                )}
                            </div> */}
                        </nav>
                    </nav>

                    <div
                        className="hamburger_wrap1 lg:hidden flex flex-col space-y-1.5 cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="hamburger_line w-6 h-0.5 bg-gray-900"></div>
                        <div className="hamburger_line w-6 h-0.5 bg-gray-900"></div>
                        <div className="hamburger_line w-6 h-0.5 bg-gray-900"></div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t pt-4">
                        <div className="flex flex-col space-y-4">
                            <a href="/blog" className="text-md font-medium text-black hover:text-gray-900">Blog</a>
                            <a href="/courses" className="text-md font-medium text-black hover:text-gray-900">Courses</a>
                            <a href="/marietv" className="text-md font-medium text-black hover:text-gray-900">MarieTV</a>
                            <a href="/podcast" className="text-md font-medium text-black hover:text-gray-900">Podcast</a>
                            <a href="/about" className="text-md font-medium text-black hover:text-gray-900">About</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;