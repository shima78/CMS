import React from "react";

// components

import StudentNavbar from "components/Navbars/StudentNavbar.js";
import StudentSidebar from "components/Sidebar/StudentSidebar.js";
import StudentHeaderStats from "components/Headers/StudentHeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Student({ children }) {
    return (
        <>
            <StudentSidebar />
            <div className="relative  bg-blueGray-100 myAdminLayout ">
                <StudentNavbar />
                {/* Header */}
                <StudentHeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {children}
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
