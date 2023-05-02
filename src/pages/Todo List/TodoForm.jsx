import React, { useState } from "react";
import { Navigate } from "react-router";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

const TodoForm = ({
  formData,
  handleSubmit,
  handleChange,
  style,
  currentDate,
  currentTime,
  error,
}) => {
  return (
    <div className={style.form_container}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <Label htmlFor="title" className={style.form_label}>
            Title
          </Label>

          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Todo Title here"
            className={style.input}
            autoComplete="false"
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        {error && <p className={style.error}>*Enter ToDo Title</p>}

        {/* <FormGroup>
          <Label htmlFor="dis" className={style.form_label}>
            Discription
          </Label>

          <Input
            type="textarea"
            id="dis"
            name="dis"
            placeholder="Enter Todo discription here"
            className={style.input}
            autoComplete="false"
            value={formData.dis}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup> */}
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="dis" className={style.form_label}>
                Date
              </Label>

              <Input
                type="text"
                id="date"
                name="date"
                className={style.date}
                autoComplete="false"
                value={currentDate}
                readOnly
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="dis" className={style.form_label}>
                Time
              </Label>

              <Input
                type="text"
                id="time"
                name="time"
                readOnly
                className={style.time}
                autoComplete="false"
                value={currentTime}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <div className={style.form_btn_container}>
          <Button type="submit" className={style.login_btn}>
            Add To List
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TodoForm;
