import { Route, Routes as RouterContainer } from "react-router-dom";

import { Home } from "src/pages/Home";
import { History } from "src/pages/History";
import { ERoutes } from "src/@types/routes";
import { DefaultLayout } from "src/layouts/DefaultLayout";

export function Routes() {
  return (
    <RouterContainer>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={ERoutes.Home} element={<Home />} />
        <Route path={ERoutes.History} element={<History />} />
      </Route>
    </RouterContainer>
  );
}
