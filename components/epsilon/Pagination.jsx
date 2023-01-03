import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { pagination } from "./utils/Constants";

const Pagination = ({ queries }) => {
    const router = useRouter()
    const { q } = router.query;
    const [page, setPage] = useState(pagination[0].startIndex);
   

    useEffect(() => {
        setPage(pagination[0].startIndex);
    }, [q]);

    const paginationClickHandler = (startIndex) => {
        if (!q) return;
        setPage(startIndex);
        router.push(`/epsilon/search?q=${q}&page=${startIndex}`)
    };

    return (
        <div className="flex gap-4 items-center py-14 max-w-[700px]">
                {queries.previousPage && (
                    <div
                        className=""
                        onClick={() =>
                            paginationClickHandler(
                                queries.previousPage[0].startIndex
                            )
                        }
                    >
                        <FiChevronLeft size={20} className="cursor-pointer" />
                    </div>
                )}
            <div className="flex gap-3 text-[#4285f4] text-sm">
                {pagination.map((p) => (
                    <span
                        key={p.page}
                        onClick={() => paginationClickHandler(p.startIndex)}
                        className={`cursor-pointer ${
                            page === p.startIndex ? "text-black" : ""
                        }`}
                    >
                        {p.page}
                    </span>
                ))}
            </div>
            {queries.nextPage && (
                    <div
                        className=""
                        onClick={() =>
                            paginationClickHandler(
                                queries.nextPage[0].startIndex
                            )
                        }
                    >
                        <FiChevronRight size={20} className="cursor-pointer" />
                    </div>
                )}
        </div>
    );
};

export default Pagination;
