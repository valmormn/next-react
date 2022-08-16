import Link from "next/link";

// import {
// FaBars,
// FaHome,
// FaSwatchbook,
// FaShoppingBag,
// Fatshirt,
// FaNewspaper,
// FaUserAlt
// } from "react-icons/fa";

// import style from './header.module.scss'
// import './header.module.scss'

// type Props = {
//   children?: ReactNode
//   title?: string
// }
//

const xtyle = `navbar mb-2 shadow-lg bg-neutral text-neutral-content flex justify-between`;

const Header = () => {
  // const router = useRouter()
  //
  return (
    <>
      <header className="fixed navbar bg-primary shadow z-99">
        {/* <div className="flex-none">
          <Link href="/">
            <button className="btn btn-square btn-ghost">
              <FaBars />
            </button>
          </Link>
        </div> */}
        <div className="flex-1">
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">AV</a>
          </Link>
        </div>
        <div className="flex-none">
          {/* <button className="btn btn-square btn-ghost">
            <FaSwatchbook />
          </button> */}
          {/* <Link href="/auth">
            <button className="btn btn-square btn-ghost">
              <FaUserAlt />
            </button>
          </Link> */}
        </div>
      </header>
    </>
  );
};

export default Header;
