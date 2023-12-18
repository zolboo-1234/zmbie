import Image from "next/image";
import { useRouter } from "next/router";

const pzzle = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen lg:bg-neutral-700 md:bg-neutral-700 sm:bg-neutral-700 flex flex-row">
      {/* side  */}
      <div className="h-full w-40 bg-neutral-800 items items-col ">
        <div className="h-[500px] w-full grid grid-cols-1">
          <button className="ml-4 mt-2 hover-">
            <img
              src="https://upload.wikimedia.org/wikipedia/ru/6/65/Chess.com_logo.png"
              className="h-10 w-32"
            />
          </button>
          <button className="h[50px] w-full flex flex-row text-white font-bold ml-4">
            <img
              src="https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png"
              className="h-10 w-10 bg-cover"
            />
            <h1
              onClick={() => {
                router.push("/");
              }}
              className="mt-2 ml-2 2xl:block xl:block hidden"
            >
              Play
            </h1>
          </button>
          <button className="h[50px] w-full flex flex-row text-white font-bold">
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
          <button className="h[50px] w-full flex flex-row text-white font-bold">
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
              Social
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
        <div className="h-[600px] w-[800px]  sm:w[200px] md:justify-center  flex lg:w-[600px] lg:ml-20">
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phpIiYR5R.png"
            className="mt-4"
          />
        </div>
        {/* */}
        <div className="lg:ml-6 mt-4 ">
          <div className="w-[550px] h-[660px] bg-white dark:bg-neutral-800 lg:mt-6 rounded-md flex flex-col flex items-center">
            <div className="h-[150px] flex items-center justify-center dark:text-white text-black flex flex-col text-white font-bold text-2xl">
              Chess Puzzle
              <img
                src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/GrandMasterArnab/phpMdWaSK.png"
                className="h-20 w-20 mt-4"
              />
            </div>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 bg-neutral-700 rounded-md items-center flex flex-row">
              <img
                src="https://www.pngall.com/wp-content/uploads/12/Graph-PNG-Images-HD.png"
                className="h-16 w-16 ml-2"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">Puzzles</h1>
                <h1>Train whith more than 50000 puzzles</h1>
              </div>
            </button>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 bg-neutral-700 mt-2 rounded-md flex-row flex items-center">
              <img
                src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/GrandMasterArnab/phpMdWaSK.png"
                className="h-12 ml-4 w-12"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">
                  Puzzle rush
                </h1>
                <h1>Race agianst the clock. 3strikes and youre out</h1>
              </div>
            </button>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 bg-neutral-700 mt-2 rounded-md flex items-center flex-row">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f899b52-daf8-4098-83fe-5c5e27b69915/d5erbz9-ccaa187c-5cc5-4df0-8a42-73bf5b1abba6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmODk5YjUyLWRhZjgtNDA5OC04M2ZlLTVjNWUyN2I2OTkxNVwvZDVlcmJ6OS1jY2FhMTg3Yy01Y2M1LTRkZjAtOGE0Mi03M2JmNWIxYWJiYTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yzm_zJf_SuM7W4YV42zrjwE4k72vtYYZxTfqc_Y65uU"
                className="h-12 ml-4 w-12"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">
                  Puzzle Battle
                </h1>
                <h1>Rush agianst another player to win</h1>
              </div>
            </button>
            <button className="w-[411px] h-[80px] bg-gray-200 dark:bg-neutral-700 bg-neutral-700 mt-2 rounded-md flex items-center flex-row">
              <img
                src="https://www.iconpacks.net/icons/3/free-green-calendar-icon-11007-thumb.png"
                className="h-12 w-12 ml-4"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">
                  Daily Puzzle
                </h1>
                <h1>can you solve today's puuzzle?</h1>
              </div>
            </button>
            <button className="w-[411px] bg-gray-200 dark:bg-neutral-700 h-[80px] bg-neutral-700 mt-2 rounded-md flex items-center flex-row">
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/hand-drawn-icon/book-99.png"
                className="h-12 w-12 ml-4"
              />
              <div className="flex flex-col text-white ml-6 dark:text-white text-black">
                <h1 className="font-bold text-xl flex items-start">Custom</h1>
                <h1>choose puzzle</h1>
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
export default pzzle;
