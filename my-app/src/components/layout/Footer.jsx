import Link from "../ui/Link";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="fio">First name / Last name</h1>
      <ul className="footer_nav">
        <li>
          {" "}
          phone number:<Link href="tel:+097261527393">+097261527393</Link>
        </li>
        <li>
          {" "}
          email:<Link href="mailto:@kjdjdjdj.com>">test@gmail.com</Link>
        </li>
        <li>
          {" "}
          git:
          <Link href="https://gitHub.com/test">https://gitHub.com/test"</Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
