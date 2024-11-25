
'use client'

import { useRouter } from "next/navigation";

const Dashboardlayout = ({ children }) => {
    const router = useRouter();
    const navigateTo = (path) => {
        router.push(path);
    };

    console.log("log hit dashboard");
    

    return (
        <div className="flex gap-x-16">
            <ul>
                <li onClick={() => navigateTo("/Dashboard/Research")}>Research</li>
                <li onClick={() => navigateTo("/Dashboard/Library")}>Library</li>
                <li onClick={() => navigateTo("/Dashboard/Interaction")}>Interaction</li>
                <li onClick={() => navigateTo("/Dashboard/Templates")}>Templates</li>
                <li onClick={() => navigateTo("/Dashboard/Collab")}>Collab</li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Dashboardlayout
