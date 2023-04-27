import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

const TodoForm = ({ formData, handleSubmit, handleChange, style }) => {
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

        <FormGroup>
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
        </FormGroup>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="dis" className={style.form_label}>
                Date
              </Label>

              <Input
                type="date"
                id="date"
                name="date"
                className={style.date}
                autoComplete="false"
                value={formData.date}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="dis" className={style.form_label}>
                Time
              </Label>

              <Input
                type="time"
                id="time"
                name="time"
                className={style.time}
                autoComplete="false"
                value={formData.time}
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
