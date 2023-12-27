import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  /*const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/iamPankajGhosh")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);*/

  return (
    <>
      <div className="p-5">
        <img
          className=" rounded-full mx-auto"
          src={data.avatar_url}
          alt="github picture"
          width={300}
        />
      </div>
      <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
        Github Respository : {data.public_repos}
      </div>
    </>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/iamPankajGhosh");
  return response.json();
};
