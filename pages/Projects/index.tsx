import React, { useEffect, useState } from "react";
import CommonRepo from "@/components/RepoStructures/commonRepo";
import {getRepos} from "@/helpers/utils"
import Link from "next/link";
const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = await getRepos();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched (or if there's an error)
      }
    };

    fetchRepos();
  }, []); 

  return (
    <div>
      {loading ? (
        <div>Loading...</div> // Wrap this in a JSX element
      ) : (
        repos.map((repo:any) => (
          <div key={repo.id}>
            <Link href={`/Projects/${repo.name}`} className={`text-blue-500 hover:text-blue-700`}><CommonRepo repo={repo} /></Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectsPage;
