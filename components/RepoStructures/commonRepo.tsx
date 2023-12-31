// CommonRepo.js
import { FaStar, FaCodeBranch, FaEye, FaBell } from "react-icons/fa";

const CommonRepo = ({ repo }: any) => {

  return (
    <div>
      <div className={`bg-gray-100 p-4 m-2 rounded-lg shadow-md`}>
          <p className={`font-bold text-2xl overflow-hidden whitespace-nowrap overflow-ellipsis`}>{repo.name}</p>
          <p className={`text-gray-700`}>{repo.description}</p>

          <div className={`flex space-x-2 items-center text-gray-600`}>
            <span>
              <FaStar /> {repo.stargazers_count}
            </span>
            <span>
              <FaCodeBranch /> {repo.forks_count}
            </span>
            <span>
              <FaEye /> {repo.watchers_count}
            </span>
            <span>
              <FaBell /> {repo.open_issues_count}
            </span>
          </div>
      </div>
    </div>
  );
};

export default CommonRepo;
