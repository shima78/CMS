import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


const UserRoute = ({ children }) => {
    // state
    const [ok, setOk] = useState(false);
    // router
    const router = useRouter();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const { data } = await axios.get("/api/current-user");
              // console.log(data.ok );
            if (data.ok && JSON.parse(window.localStorage.getItem("user")).role.includes("Admin")) setOk(true);
        } catch (err) {
            console.log(err);
            setOk(false);
            router.push("/auth/login");
        }
    };

    return (
        <>
            {ok ? (
                <>{children}</>
            ) : (
                ''
            )}
        </>
    );
};

export default UserRoute;
