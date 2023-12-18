import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });
const side = () => {
  const router = useRouter();
  return (
    <div className="h-full w-40 bg-neutral-800 items items-col fixed max-sm:hidden">
      <div className="h-[500px] w-full grid grid-cols-1">
        <button className="ml-4 mt-2">
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
            className="mt-2 ml-2 2xl:block xl:block hidden"
            onClick={() => {
              router.push("/index");
            }}
          >
            Play
          </h1>
        </button>
        <button className="h[50px] w-full flex flex-row text-white font-bold">
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/GrandMasterArnab/phpMdWaSK.png"
            className="h-8 w-8 bg-cover ml-4"
          />
          <h1
            className="ml-4 xl:block hidden"
            onClick={() => {
              router.push("/pzzle");
            }}
          >
            Puzzle
          </h1>
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
          <h1 className="ml-4 xl:block hidden">Social</h1>
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
  );
};
export default side;
