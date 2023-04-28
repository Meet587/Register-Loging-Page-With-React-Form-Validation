import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Col, Container, Row } from "reactstrap";
import style from "./todo.module.scss";
import Header from "./Header";

const Todo = () => {
  const [renderList, setRenderList] = useState([]);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  var currentDate = new Date().toLocaleDateString();
  var currentTime = new Date().toLocaleTimeString();
  const [formData, setFormData] = useState({
    title: "",
    dis: "",
    date: currentDate,
    time: currentTime,
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
    let newRenderList = [...renderList];
    let isExixt = list.findIndex((element) => {
      return element.title === tempObj.title;
    });
    if (tempObj.title !== "" && isExixt === -1) {
      newRenderList.push(tempObj);
      setList((prev) => [...prev, tempObj]);
    }
    // setList((prev) => [...prev, tempObj]);
    setRenderList(newRenderList);
    setFormData({
      title: "",
      dis: "",
      date: currentDate,
      time: currentTime,
    });
  };
  const handleDelete = (e, i) => {
    const newList = renderList.filter((obj, index, arr) => index !== i);
    setRenderList([...newList]);
  };
  const handleEdit = (e, i) => {
    e.preventDefault();
    const result = renderList.findIndex((obj, index, arr) => index == i);
    let tempObj = renderList[result];
    setFormData((prevFormData) => {
      return { ...prevFormData, ...tempObj };
    });
  };
  const onSearch = (e) => {
    let newList = [...renderList];
    setSearch(e.target.value);
    if (search.length > 0) {
      const isFound = newList.filter((ele) => {
        return ele.title.match(search);
      });
      if (isFound.length !== 0) {
        setRenderList(isFound);
      } else {
        setRenderList(list);
      }
    }

    // let newList = [...renderList];
    // let isFound = newList.filter((elem) => {
    //   return elem.title === value;
    // });
    // if (isFound.length !== 0) {
    //   setRenderList(isFound);
    // } else {
    //   setRenderList(list);
    // }

  };

  return (
    <div className={style.main_container}>
      <Header
        style={style}
        onSearch={onSearch}
        search={search}
        setSearch={setSearch}
      />
      <div className={style.container}>
        <Row>
          <Col md="5" className="mb-4">
            <TodoForm
              list={list}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              style={style}
              currentDate={currentDate}
              currentTime={currentTime}
            />
          </Col>
          <Col md="6">
            <TodoList
              list={renderList}
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
