const Header = () => {
    return(
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4">
                    <img src="../../src/assets/png/logo.png" className="h-14" alt="" />
                    <div className="flex gap-3">
                        <a href="https://github.com/IGBagusAryaN"><img src="../../src/assets/svg/github-fill.svg" alt="" width="30"/></a>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <a href="" className="text-sm  text-gray-500 dark:text-white hover:underline">My Portofolio</a>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Header