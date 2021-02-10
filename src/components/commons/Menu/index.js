import { MenuWrapper } from "./styles";
import Logo from "../../../theme/Logo";
import { Button } from "../Button";

export default function Menu() {
  const links = [
    {
      display: "Home",
      link: "/",
    },
    {
      display: "Perguntas frequentes",
      link: "/faq",
    },
    {
      display: "Sobre",
      link: "/sobre",
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {links.map((result) => (
          <li key={result.link}>
            <a href={result.link}>{result.display}</a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button variant="secondary.main" ghost>
          Entrar
        </Button>
        <Button variant="primary.main">Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
