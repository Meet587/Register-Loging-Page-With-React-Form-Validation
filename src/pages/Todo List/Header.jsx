import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { FiSearch } from "react-icons/fi";

const Header = ({ style, onSearch, search, setSearch }) => {
  return (
    <div className={style.header}>
      <>
        <div className={`${style.input_form} `}>
          <Input
            id="exampleSearch"
            name="search"
            placeholder="search..."
            type="search"
            className={style.search_input}
            value={search}
            onChange={(e) => onSearch(e) }
            autoComplete="off"
          />
          <Label for="exampleSearch" className={style.search_label}>
            <FiSearch />
          </Label>
        </div>
      </>
    </div>
  );
};

export default Header;
