import Link from "next/link";
import { useState } from "react";
import { NavLink } from "./nav-link";

const DropdownLink = ({ title, slug, path, subPages = [] }) => {
  return (
    <div className="dropdown group">
      <NavLink href={path} title={title}></NavLink>
      {subPages.length > 0 ? (
        <div className="pt-2">
          <div
            className="absolute z-20 max-w-xs p-2 -translate-x-1/3 bg-white border shadow-lg left-1/2 border-gray-100 rounded-2xl dropdown-content"
            style={{ minWidth: "250px" }}
          >
            {subPages.map((item, idx) => (
              <div key={`submenu-${idx}`}>
                <Link
                  href={`${item?.href ? item.href : `/pages/${item?.slug}`}`}
                  key={`${item?.title}-${idx}`}
                >
                  <a className="block w-full py-3 transition duration-200 ease-in-out rounded-xl sm:px-5 hover:bg-purple-25 group">
                    <h5 className="text-md font-semibold text-purple-600 whitespace-pre-wrap">
                      {item?.title}
                    </h5>
                  </a>
                </Link>
                {idx < subPages.length - 1 && (
                  <hr className="my-1 border-purple-200/30 sm:my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="pt-2"></div>
      )}
    </div>
  );
};

export default DropdownLink;
