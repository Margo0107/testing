import ChangeButton from "../ui/ChangeButton";
import Link from "../ui/Link";

const Header = () => {
  return (
    <header className="header">
      <h1 className="fio">First name / Last name</h1>
      <ul className="header_nav">
        <li>
          <Link href="/">main</Link>
        </li>
        <li>
          <Link href="/todos">todo-list</Link>
        </li>
        <li>
          <Link href="/form">form</Link>
        </li>
        <li>
          <Link href="/modal">modal</Link>
        </li>
      </ul>
      <ChangeButton />
    </header>
  );
};
export default Header;
