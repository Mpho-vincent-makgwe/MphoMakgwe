export const getRepos = async () => {
    try {
      const response = await fetch("https://api.github.com/users/Mpho-vincent-makgwe/repos", {
        headers: {
          Authorization: "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", // Replace with your GitHub access token if needed
        },
      });
      if (!response.ok) {
        throw new Error(`GitHub API request failed with status ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching repos:", error);
      throw error;
    }
  };
  export const getReposByName = async (name) => {
    try {
      const response = await fetch(`https://api.github.com/repos/Mpho-vincent-makgwe/${name}`, {
        headers: {
          Authorization: "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", // Replace with your GitHub access token if needed
        },
      });
  
      if (!response.ok) {
        throw new Error(`GitHub API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching repos:", error);
      throw error;
    }
  };
  