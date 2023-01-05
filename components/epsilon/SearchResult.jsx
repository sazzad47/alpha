import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { fetchDataFromApi } from "./utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context } from "./utils/ContextApi";

const SearchResult = () => {
    const router = useRouter();
    const { q, page } = router.query;

    const [result, setResult] = useState();
    const { imageSearch } = useContext(Context);

    useEffect(() => {
        fetchSearchResults();
        window.scrollTo(0, 0);
    }, [q, page]);

    const fetchSearchResults = () => {
        if (!q) return;
        let payload = { q, start: page };
        // if (imageSearch) {
        //     payload.searchType = "image";
        // }
        fetchDataFromApi(payload).then((res) => {
            console.log(res);
            setResult(res);
        });
    };

    if (!result) return;
    const { items, queries, searchInformation } = result;

    return (
        <div className="w-full flex flex-col items-center min-h-[100vh]">
            <SearchResultHeader />
            <main className="grow mt-[5rem]">
                <div className="flex text-sm text-[#70757a] mb-3">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}</div>
                {!imageSearch ? (
                    <>
                        {items.map((item, index) => (
                            <SearchedItemTemplate key={index} data={item} />
                        ))}
                    </>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                        {items.map((item, index) => (
                            <SearchedImageItemTemplate
                                key={index}
                                data={item}
                            />
                        ))}
                    </div>
                )}
            </main>
            {/* <Footer /> */}
                <Pagination queries={queries} />
        </div>
    );
};

export default SearchResult;
