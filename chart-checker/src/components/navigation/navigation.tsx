import React, { useState, useEffect, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Display3, LinkButton } from "@jsluna/react";
import { ColleagueLayout } from "luna-react";
import { Sainsburys } from "@jsluna/images";
import { Container } from "@jsluna/grid";
import { Text } from "@jsluna/typography";
import { logout } from "../../utils/auth";
import $ from "jquery";
import "./navigation.css";

type NavigationProps = {};

const Navigation: FunctionComponent = (props: NavigationProps) => {
  const [userName, setUserName] = useState("");
  const [stores, setStores] = useState([]);

  const logoutUser = () => {
    logout();
  };

  useEffect(() => {
    const stores = [
      {
        StoreCode: 2,
        StoreName: "Stratford",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 3,
        StoreName: "Pepper Hill",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 4,
        StoreName: "Chertsey",
        StoreLocalTimeZone: "GMT Standard Time"
      }
    ];
    const loggedInUser: string = String(localStorage.getItem("userObject"));
    const loggedInUserObject: any = JSON.parse(loggedInUser);

    const userName: string = loggedInUserObject.name;
    setUserName(userName);
  }, []);

  /*
  const getMenuItemsList = () => {
    let urlsArray = [
      <Link to="/frontend">Open barrier</Link>,
      <Link to="/frontend/managebarriers">Manage barriers</Link>
    ];

    if (userReducer.result.defaultDepot.isDepotAdmin) {
      urlsArray.push(<Link to="/frontend/whitelist">Whitelist</Link>);
    }

    return !window.location.href.endsWith("/unauthorized") ? urlsArray : [];
  };
*/
  return (
    <ColleagueLayout
      logo={
        <Link
          to="/"
          className="ln-u-display-inline-block text-decoration-none barrier-control-link"
        >
          <Display3 element="span">Chart Checker</Display3>
        </Link>
      }
      menuItems={[
        <Link to="/">Home</Link>,
        <Link to="/chart/check">Check a chart</Link>,
        <Link to="/chart/change">Change a chart</Link>
        // <Link to="/chart/success">Chart Success</Link>,
        // <Link to="/chart/error">Chart Error</Link>,
        // <Link to="/chart/loading">Chart Loading</Link>,
        // <Link to="/notfound">Not Found</Link>,
        // <Link to="/unauthorized">Unauthorized</Link>
      ]}
      topBar={{
        logo: (
          <Sainsburys height="25" width="95" className="ln-u-display-block" />
        ),
        meta: (
          <Container className="meta-content">
            <Text element="span" className="ln-u-soft-sm">
              {userName} in StoreName (XXXX)
            </Text>
            <Link to="/changestore" className="changeStoreLink">
              Change store
            </Link>
            <Text element="span" className="ln-u-soft-sm">
              <LinkButton
                className="navigation-logout-button"
                onClick={() => logoutUser()}
              >
                Logout
              </LinkButton>
            </Text>
          </Container>
        )
      }}
      style={{ position: "static" }}
    />
  );
};

export default Navigation;
