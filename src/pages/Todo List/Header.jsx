import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router";

const Header = ({ style, onSearch, search }) => {
  const navigate = useNavigate();
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
            onChange={(e) => onSearch(e)}
            autoComplete="off"
          />
          <Label for="exampleSearch" className={style.search_label}>
            <FiSearch />
          </Label>
        </div>
        <div>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </>
    </div>
  );
};

export default Header;
