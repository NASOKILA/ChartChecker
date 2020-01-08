import React, { FunctionComponent, useState, useEffect } from "react";
import { Heading3 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { Select, Form } from "@jsluna/form";
import { FilledButton } from "@jsluna/button";
import "./changeStorePage.css";

type ChangeStorePagePropsType = {
  history: any;
  children: any;
};

type dropdownStoresType = {
  label: string;
  value: string;
  key: number;
};

type StoreType = {
  StoreCode: number;
  StoreName: string;
  StoreLocalTimeZone: string;
};

const ChangeStorePage: FunctionComponent<ChangeStorePagePropsType> = props => {
  const [selectedStoreName, setSelectedStoreName] = useState("");
  const [dropdownStores, setDropdownStores] = useState([
    {
      label: "",
      value: "",
      key: 0
    }
  ]);

  useEffect(() => {
    const loggedInUser: any = JSON.parse(
      String(localStorage.getItem("userObject"))
    );

    let loadedStores: Array<StoreType> = [
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
      },
      {
        StoreCode: 5,
        StoreName: "Bath",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 6,
        StoreName: "Chichester",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 7,
        StoreName: "Eltham",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 8,
        StoreName: "Colchester Avenue",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 9,
        StoreName: "Pimlico",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 10,
        StoreName: "Washington Cafe",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 11,
        StoreName: "Lee Green",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 14,
        StoreName: "East Ham",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 15,
        StoreName: "East Grinstead",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 16,
        StoreName: "Wimbledon",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 17,
        StoreName: "Crayford",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 18,
        StoreName: "Lords Hill",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 19,
        StoreName: "Locksbottom",
        StoreLocalTimeZone: "GMT Standard Time"
      },
      {
        StoreCode: 20,
        StoreName: "Tunbridge Wells",
        StoreLocalTimeZone: "GMT Standard Time"
      }
    ];

    const dropdownStores: Array<dropdownStoresType> = [];
    loadedStores.map((ls, i) => {
      dropdownStores.push({ label: ls.StoreName, value: ls.StoreName, key: i });
      return ls;
    });

    dropdownStores.sort(function(a, b) {
      var textA = a.value;
      var textB = b.value;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    setDropdownStores(dropdownStores);
    setSelectedStoreName(loggedInUser.defaultStore.StoreName);
  }, []);

  const storeOnChangeHandler = e => {
    let selectedStoreStringName: string = e.target.value;

    const loggedInUser: any = JSON.parse(
      String(localStorage.getItem("userObject"))
    );

    loggedInUser.defaultStore.StoreName = selectedStoreStringName;
    localStorage.setItem("userObject", JSON.stringify(loggedInUser));

    document.getElementById("selectedStoreNameInNavigation")!.innerHTML =
      "(" + selectedStoreStringName + ")";

    setSelectedStoreName(selectedStoreStringName);
  };

  return (
    <Container element="div" className="changeStorePage">
      <Heading3>Change store!</Heading3>
      <Container id="storeFormContainer">
        <Select
          name="select-1"
          id="stores-list"
          options={dropdownStores}
          onChange={storeOnChangeHandler}
          value={selectedStoreName}
          placeholder=""
        />
      </Container>
    </Container>
  );
};

export default ChangeStorePage;
