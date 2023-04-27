import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Col, Container, Row } from "reactstrap";
import style from "./todo.module.scss";
import Header from "./Header";

const Todo = () => {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    dis: "",
    date: "",
    time: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempObj = { ...formData };
    setList((prev) => [...prev, tempObj]);
    setFormData({
      title: "",
      dis: "",
      date: "",
      time: "",
    });
  };
  const handleDelete = (e, i) => {
    const newList = list.filter((obj, index, arr) => index !== i);
    setList([...newList]);
  };
  const handleEdit = (e, i) => {
    e.preventDefault()
    const result = list.findIndex((obj, index, arr) => index == i)
    let tempObj = list[result]
    setFormData(prevFormData =>{
      return({...prevFormData, ...tempObj})
    })
  }
  // const onSearch = (e) => {
  //   e.preventDefault();
  //   let temObj;
  //   const result = list.find((obj) => obj.title === e.target.value);
  //   if(result !== undefined) {
  //     temObj = { ...result };
  //     setList([{ ...temObj }]);
  //   }

  //   console.log(result)
  //   console.log(temObj)
  //   console.log(list)
  // };

  return (
    <div className={style.main_container}>
      <Header
        style={style}
        // onSearch={onSearch}
      />
      <div className={style.container}>
        <Row>
          <Col md="5" className="mb-4">
            {" "}
            <TodoForm
              list={list}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              style={style}
            />
          </Col>
          <Col md="6">
            <TodoList
              list={list}
              style={style}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Todo;
