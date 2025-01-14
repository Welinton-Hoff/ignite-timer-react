import { Outlet } from "react-router-dom";
import { Header } from "src/components/Header";

import * as S from "./styles";

export function DefaultLayout() {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
}
