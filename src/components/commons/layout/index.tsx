import LayoutBanner from "./banner";
import LayoutNavbar from "./navbar";
import LayoutHead from "./header";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../commons/styles/media";

const Body = styled.div`
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.tablet} {
    margin: 1rem;
  }
`;

const HIDDEN_LAYOUT = ["/boards/new", "/products/new", "/products"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHidden = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      <LayoutHead />
      {!isHidden && <LayoutBanner />}
      {!isHidden && <LayoutNavbar />}
      <Body>{props.children}</Body>
    </>
  );
}
