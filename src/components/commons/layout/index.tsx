import LayoutBanner from "./banner";
import LayoutNavbar from "./navbar";
import LayoutHead from "./header";
import styled from "@emotion/styled";

const Body = styled.div`
  // height: 500px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHead />
      <LayoutBanner />
      <LayoutNavbar />
      <Body>{props.children}</Body>
    </>
  );
}
