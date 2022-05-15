import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <>
      <MainNavigation>
        <main>{props.children}</main>
      </MainNavigation>
    </>
  );
}

export default Layout;
