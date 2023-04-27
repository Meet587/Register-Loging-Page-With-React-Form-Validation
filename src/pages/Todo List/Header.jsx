import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { FiSearch } from "react-icons/fi";


const Header = ({style, onSearch}) => {
  return (
    <div className={style.header}>
      <Form >
        <div className={`${style.input_form} `}>
          <Input
            id="exampleSearch"
            name="search"
            placeholder="search..."
            type="search"
            className={style.search_input}
            // onChange={e => onSearch(e)}
          />
          {/* <Label for="exampleSearch" className={style.search_label}><FiSearch /></Label> */}
        </div>
      </Form>
    </div>
  );
};

export default Header;
