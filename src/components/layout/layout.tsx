import { ReactNode } from "react";

import * as S from "./layout.styled";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

export default Layout;