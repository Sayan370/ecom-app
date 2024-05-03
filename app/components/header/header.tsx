import HeaderCategoryMenu from './menu/headercategory-menu';

const Header = () => {
    return (
        <div className="w-full text-[--secondary-text-color] bg-blue-500 pt-5 px-4 py-4 justify-between flex flex-row">
            <div className='flex pl-10 flex-row w-full items-center gap-3'>
                <div className=''>Home</div>
                <div>About</div>
                <div>Shop</div>
                <div className="group  relative dropdown cursor-pointer">
                    <a>Category</a>
                    <div className="group-hover:block dropdown-menu top-[40px] absolute hidden h-auto">

                        <ul className="top-0 w-48 bg-[#374151] shadow px-6 py-8">
                            <li className="py-1"><a className="block cursor-pointer">Item</a></li>
                            <li className="py-1"><a className="block cursor-pointer">Item 2</a></li>
                            <li className="py-1"><a className="block cursor-pointer">Item 3</a></li>
                            <li className="py-1"><a className="block cursor-pointer">Item 4</a></li>
                            <li className="py-1"><a className="block cursor-pointer">Item 5</a></li>
                        </ul>
                    </div>
                </div>
                <div>Blog</div>
                <div>Contact</div>
            </div>
        </div>
    )
}


export default Header;