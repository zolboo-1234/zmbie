import Image from "next/image";
import { Inter } from "next/font/google";
import Side from "./side";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faAndroid,
  faApple,
  faDiscord,
  faFacebook,
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAndroid, faX } from "@fortawesome/free-solid-svg-icons";
const inter = Inter({ subsets: ["latin"] });

const social = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full overflow-auto flex bg-gray-900">
      <Side />
      <div className="w-full h-[900px] flex justify-end max-sm:h-[1500px]">
        <div className="w-[80%] h-full flex shrink relative flex-col">
          <div className="w-[86%] h-[800px] shrink-0 relative max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-[86%] max-sm:h-[1400px]">
            <div className="w-full h-[80px] flex items-center">
              <img
                src="https://www.chess.com/bundles/web/images/color-icons/friends.d2e3c382.svg"
                className="h-10 w-10 mx-4"
              />
              <h1 className="text-3xl font-bold">Social</h1>
            </div>
            <div className="w-full h-[600px] grid grid-cols-4 gap-5 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col rounded-xl cursor-pointer group">
                <div className="w-full h-[60%] bg-orange-200 flex justify-center items-center rounded-t-xl">
                  <img
                    className="h-28 w-28"
                    src="https://www.chess.com/bundles/web/images/color-icons/friends.d2e3c382.svg"
                  />
                </div>
                <div className="w-full h-[40%] flex flex-col dark:bg-gray-800 bg-white group-hover:bg-slate-200 dark:group-hover:bg-gray-900  gap-1 rounded-b-xl">
                  <h1 className="text-lg font-bold ml-5 mt-5 dark:text-white text-black">
                    Friends
                  </h1>
                  <p className="ml-5 text-sm text-slate-300 mb-4">
                    Find and add players
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-xl cursor-pointer group">
                <div className="w-full h-[60%] bg-green-800 flex justify-center items-center rounded-t-xl">
                  <img
                    className="h-28 w-28"
                    src="https://www.chess.com/bundles/web/images/color-icons/clubs.0f968e66.svg"
                  />
                </div>
                <div className="w-full h-[40%] flex flex-col dark:bg-gray-800 bg-white group-hover:bg-slate-200 dark:group-hover:bg-gray-900  gap-1 rounded-b-xl">
                  <h1 className="text-lg font-bold ml-5 mt-5 dark:text-white text-black">
                    Clubs
                  </h1>
                  <p className="ml-5 text-sm text-slate-300 mb-4">
                    Join and compete in club
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-xl cursor-pointer group">
                <div className="w-full h-[60%] bg-sky-600 flex justify-center items-center rounded-t-xl">
                  <img
                    className="h-28 w-28"
                    src="https://www.chess.com/bundles/web/images/color-icons/forums.6dae5766.svg"
                  />
                </div>
                <div className="w-full h-[40%] flex flex-col dark:bg-gray-800 bg-white group-hover:bg-slate-200 dark:group-hover:bg-gray-900  gap-1 rounded-b-xl">
                  <h1 className="text-lg font-bold ml-5 mt-5 dark:text-white text-black">
                    Forums
                  </h1>
                  <p className="ml-5 text-sm text-slate-300 mb-4">
                    Find answers from the community
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-xl cursor-pointer group">
                <div className="w-full h-[60%] bg-cyan-800 flex justify-center items-center rounded-t-xl">
                  <img
                    className="h-28 w-28"
                    src="https://www.chess.com/bundles/web/images/color-icons/members.d5f10490.svg"
                  />
                </div>
                <div className="w-full h-[40%] flex flex-col dark:bg-gray-800 bg-white group-hover:bg-slate-200 dark:group-hover:bg-gray-900  gap-1 rounded-b-xl">
                  <h1 className="text-lg font-bold ml-5 mt-5 dark:text-white text-black">
                    Members
                  </h1>
                  <p className="ml-5 text-sm text-slate-300 mb-4">
                    Search and find players across the world
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-xl cursor-pointer group">
                <div className="w-full h-[60%] bg-orange-400 flex justify-center items-center rounded-t-xl">
                  <img
                    className="h-28 w-28"
                    src="https://www.chess.com/bundles/web/images/color-icons/blogs.0f3f8af1.svg"
                  />
                </div>
                <div className="w-full h-[40%] flex flex-col dark:bg-gray-800 bg-white group-hover:bg-slate-200 dark:group-hover:bg-gray-900  gap-1 rounded-b-xl">
                  <h1 className="text-lg font-bold ml-5 mt-5 dark:text-white text-black">
                    Blogs
                  </h1>
                  <p className="ml-5 text-sm text-slate-300 mb-4">
                    Read and improve on your chess journey
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-xl cursor-pointer group">
                <div className="w-full h-[60%] bg-cyan-700 flex justify-center items-center rounded-t-xl">
                  <img
                    className="h-28 w-28"
                    src="https://www.chess.com/bundles/web/images/color-icons/coaches.e4e9d916.svg"
                  />
                </div>
                <div className="w-full h-[40%] flex flex-col dark:bg-gray-800 bg-white group-hover:bg-slate-200 dark:group-hover:bg-gray-900  gap-1 rounded-b-xl">
                  <h1 className="text-lg font-bold ml-5 mt-5 dark:text-white text-black">
                    Coaches
                  </h1>
                  <p className="ml-5 text-sm text-slate-300 mb-4">
                    Find a coach to help you improve
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[60px] flex items-center gap-2 max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-[86%] flex-col">
            <div>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Help |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Chess Terms |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                About |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Jobs |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Developers |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                User Agreement |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Privacy |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Fair Play |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Community |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Partners |
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Compliance |{" "}
              </a>
              <a className="text-slate-400 text-xs hover:text-white cursor-pointer mr-2">
                Chess.com
              </a>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faApple}
                style={{ width: "20px" }}
                className=" mr-2 text-slate-300"
              />
              <FontAwesomeIcon
                icon={faAndroid}
                style={{ width: "20px" }}
                className=" mr-2 text-slate-300"
              />
              <FontAwesomeIcon
                icon={faTiktok}
                style={{ width: "20px" }}
                className=" mr-2 text-slate-300"
              />
              <FontAwesomeIcon
                icon={faX}
                style={{ width: "20px" }}
                className=" mr-2 text-slate-300"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ width: "20px" }}
                className=" mr-2 text-slate-300"
              />
              <FontAwesomeIcon
                icon={faTwitch}
                style={{ width: "20px" }}
                className=" mr-2 text-slate-300"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ width: "20px" }}
                className=" mr-2 text-slate-300"
              />
              <FontAwesomeIcon
                icon={faDiscord}
                style={{ width: "20px" }}
                className=" mr-2 text-slate-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default social;
