import { useEffect, useState } from "react";

const useAboutDetails = () => {
    const [githubProfile, setGithubProfile] = useState(null);

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/yashas8197");
        const json = await data.json();
        setGithubProfile(json)
    }
    return githubProfile;
}

export default useAboutDetails;
