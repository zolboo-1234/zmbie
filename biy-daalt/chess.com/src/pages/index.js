import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const index = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen lg:bg-neutral-700 md:bg-neutral-700 sm:bg-neutral-700 flex flex-row">
      {/* side  */}
      <div className="h-full w-40 bg-neutral-800 items items-col ">
        <div className="h-[500px] w-full grid grid-cols-1">
          <div className="ml-4 mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/ru/6/65/Chess.com_logo.png"
              className="h-10 w-32"
            />
          </div>
          <button className="h[50px] w-full flex flex-row text-white font-bold ml-4">
            <img
              src="https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png"
              className="h-10 w-10 bg-cover"
            />
            <h1 className="mt-2 ml-2 2xl:block xl:block hidden">Play</h1>
          </button>
          <button
            onClick={() => {
              router.push("/pzzle");
            }}
            className="h[50px] w-full flex flex-row text-white font-bold"
          >
            <img
              src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/GrandMasterArnab/phpMdWaSK.png"
              className="h-8 w-8 bg-cover ml-4"
            />
            <h1 className="ml-4 xl:block hidden">Puzzle</h1>
          </button>
          <button className="h[50px] w-full flex flex-row text-white font-bold">
            <img
              src="https://png.pngtree.com/png-vector/20230901/ourmid/pngtree-blue-graduation-cap-icon-on-background-vector-png-image_7018173.png"
              className="h-12 w-16"
            />
            <h1 className="mt-2 xl:block hidden">Learn</h1>
          </button>
          <button className="h[50px] w-full flex flex-row text-white font-bold">
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/69732/binoculars-clipart-xl.png"
              className="h-8 w-8 ml-4"
            />
            <h1 className="ml-4 xl:block hidden">Watch</h1>
          </button>
          <button className="h[50px] w-full flex flex-row text-white font-bold">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Newspaper_Cover.svg/2048px-Newspaper_Cover.svg.png"
              className="h-10 w-10 ml-4"
            />
            <h1 className="ml-2 xl:block hidden">News</h1>
          </button>
          <button
            onClick={() => {
              router.push("/social");
            }}
            className="h[50px] w-full flex flex-row text-white font-bold"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/973/092/non_2x/people-icon-sign-symbol-design-free-png.png"
              className="h-8 w-8 ml-4"
            />
            <h1
              className="ml-4 xl:block hidden"
              onClick={() => {
                router.push("/social");
              }}
            >
              Socidddal
            </h1>
          </button>
          <button className="h[50px] w-full flex flex-row text-white font-bold">
            <img
              src="https://static.thenounproject.com/png/1380510-200.png"
              className="h-8 w-8 ml-4"
            />
            <h1 className="ml-4 xl:block hidden">More</h1>
          </button>
          <button className="h[50px] w-full flex flex-row text-white font-bold">
            <img
              src="https://www.freepnglogos.com/uploads/diamond-png/diamond-icon-download-icons-3.png"
              className="h-8 w-8 ml-4"
            />
            <h1 className="ml-4 xl:block hidden">Free Trail</h1>
          </button>
        </div>
      </div>
      {/*board */}
      <div className="lg:flex-row  flex flex-col w-[1200px]">
        <div className="h-fullw-[600px]  sm:w[200px] md:justify-center flex-col flex lg:w-[600px] lg:ml-20">
          <div className="flex flex-row lg:mt-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              className="h-10 w-10"
            />
            <h1 className="ml-4 font-bold text-white">Opponent</h1>
          </div>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phpIiYR5R.png"
            className="mt-4"
          />
          <div className="flex flex-row mt-4">
            <img
              src="https://avatarfiles.alphacoders.com/262/262169.png"
              className="h-10 w-10"
            />
            <h1 className="text-white font-bold ml-4">my-name</h1>
          </div>
        </div>
        {/* */}
        <div className="lg:ml-6 mt-4 ">
          <div className="w-[550px] h-[660px] dark:bg-neutral-800 bg-white rounded-md flex flex-col flex items-center">
            <div className="h-[150px] dark:text-white text-black flex items-center justify-center flex flex-col dark:text-white text-black font-bold text-2xl">
              Play Chess
              <img
                src="https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png"
                className="h-20 w-20 mt-4"
              />
            </div>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 rounded-md items-center flex flex-row">
              <img
                src="https://png.pngtree.com/png-clipart/20230211/ourmid/pngtree-yellow-lightning-bolt-transparent-images-clipart-png-image_6594686.png"
                className="h-16 w-16 ml-2"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">
                  Play Online
                </h1>
                <h1>PLay vs person of similiar skill</h1>
              </div>
            </button>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 mt-2 rounded-md flex-row flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1904/1904259.png"
                className="h-12 ml-4 w-12"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">Computer</h1>
                <h1>Challange a bot from Easy to Master</h1>
              </div>
            </button>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 mt-2 rounded-md flex items-center flex-row">
              <img
                src="https://static.vecteezy.com/system/resources/previews/011/731/576/original/hand-drawn-hand-shaking-hands-illustration-png.png"
                className="h-12 ml-4 w-12"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">
                  Play a Freind
                </h1>
                <h1>Invite a greindto game of chess</h1>
              </div>
            </button>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 mt-2 rounded-md flex items-center flex-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/7645/7645279.png"
                className="h-12 w-12 ml-4"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">Computer</h1>
                <h1>Challange a bot from Easy to Master</h1>
              </div>
            </button>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 mt-2 rounded-md flex items-center flex-row">
              <img
                src="https://pngimg.com/d/dice_PNG41.png"
                className="h-12 w-12 ml-4"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">Computer</h1>
                <h1>Challange a bot from Easy to Master</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/*ad */}
      <div className="h-[660px] w-32 mt-4 rounded-md md:block hidden ml-4 bg-white">
        ad
      </div>
    </div>
  );
};
export default index;
