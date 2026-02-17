import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";


const SearchBar = () => {
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <>
            <div className="relative hidden md:block flex-1 max-w-xl">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                </div>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="block w-full ps-9 pe-3 bg-[#187DF9] text-white text-heading text-sm rounded-xl px-2.5 py-2 shadow-xs placeholder:text-[#DEEDFF]" placeholder="Suchen" />
                {query && (
                    <div className="absolute z-50 w-full bg-white border shadow-md max-h-72 overflow-y-auto">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <Link key={item.id} to={`/product/${item.id}`} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100" onClick={() => setQuery("")}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-10 h-10 object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-medium">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.category}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="px-4 py-2 text-sm text-gray-500">
                                No product found
                            </p>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchBar;