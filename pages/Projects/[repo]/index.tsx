// Repository.js
import CommonRepo from "@/components/RepoStructures/commonRepo";
import Link from "next/link";
import { useRouter } from "next/router";
import { getReposByName } from "@/helpers/utils";
import { useEffect, useState } from "react";

const Repository = () => {
    const [ repoData, setRepoData ] = useState({});
    const router = useRouter();

    const fetchRepoData = async()=>{
        const { repo } = router.query;
        if(repo){
            try {
              const repos = await getReposByName(repo)
                setRepoData(repos); 
            } catch (error) {
                console.error("Error fetching repo data:", error);
            } 
        }
    };

    useEffect(()=>{
          fetchRepoData()  
    },[router.query.repo]);
  return (
    <section>
      <Link href="/Projects" className="rounded">
        Back
      </Link>
      {repoData !== null && <CommonRepo repo={repoData} />}
    </section>
  );
};

export default Repository;
