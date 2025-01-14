import { Scroll, Timer } from "phosphor-react";
import * as S from "./styles";
import igniteLogo from "src/assets/ignite-logo.svg";
import { NavLink } from "react-router-dom";
import { ERoutes } from "src/@types/routes";

export function Header() {
  return (
    <S.Container>
      <img src={igniteLogo} alt="Ignite Logo" />

      <nav>
        <NavLink to={ERoutes.Home} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={ERoutes.History} title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.Container>
  );
}
