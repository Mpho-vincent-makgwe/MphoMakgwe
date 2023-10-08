import { FaStar, FaCodeBranch, FaEye, FaBell } from "react-icons/fa";
import Link from "next/link";
const ExtraRepoInfoStructure = ({ repo }:any) => {
    const renderLink = repo.html_url ? (
        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.html_url}
        </Link>
      ) : (
        "N/A"
      );
  return (
    <div className={` p-4 m-2 rounded-lg shadow-md`}>
      <h1 className={`font-bold text-2xl`}>{repo.name}</h1>
      <p className={`text-gray-700`}>{repo.description}</p>
      <p>Owner:  {repo.owner ? repo.owner.login : "N/A"}</p>
      <p>Language: {repo.language}</p>
      <div className={`flex space-x-2 items-center text-gray-600`}><span>
              <FaStar /> {repo.stargazers_count}
            </span>
      <span>
              <FaCodeBranch /> {repo.forks_count}
            </span>
            <span>
              <FaBell /> {repo.open_issues_count}
            </span>
            <span>
              <FaEye /> {repo.watchers_count}
            </span></div>
      
      <p>URL: {renderLink}</p>
    </div>
  )
}

export default ExtraRepoInfoStructure