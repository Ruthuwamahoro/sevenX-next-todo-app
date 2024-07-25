import { useEffect, useState } from "react";

interface AccountProps {
    darkMode: boolean
}
export const AccountNavigation = ({darkMode}: AccountProps) => {
    return (
        <div>
            <div className="flex  justify-content-end w-[50px]  bg-white">
                <div></div>
            </div>
        </div>
    )
}