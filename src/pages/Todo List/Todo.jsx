import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Col, Container, Row } from "reactstrap";
import style from "./todo.module.scss";

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
    })
  };
  const handleDelete = (e,i) => {
    const newList = list.filter((obj,index,arr)=> index !== i )
    setList([...newList])
  }
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <Row>
          <Col md="5">
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
            <TodoList list={list} style={style} handleDelete={handleDelete} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Todo;
