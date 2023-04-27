import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Button } from "reactstrap";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ list, style, handleDelete, handleEdit }) => {
  const cardOne = () => {
    return (
      <div className={style.list_container}>
        {list.map((prev, i) => {
          return (
            <div className={style.card_component}>
              <Card key={i} className={style.card_1}>
                <CardBody className="p-3">
                  <CardSubtitle
                    className={`${style.list_heading} mb-4 text-muted`}
                    tag="h6"
                  >
                    <span className={`${style.list_title}`}>{prev.title}</span>
                    <span className={style.dt_container}>
                      <span>{prev.time}</span>
                      <span>{prev.date}</span>
                    </span>
                  </CardSubtitle>
                  <CardText className={`${style.dis_container}`}>
                    <span className={`${style.dis}`}>{prev.dis}</span>
                    <span className={`${style.btn_delete_conatiner}`}>
                      <Button
                        className={`${style.edit_btn}`}
                        onClick={(e) => handleEdit(e, i)}
                        color="info"
                        outline
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        className={`${style.btn_delete}`}
                        onClick={(e) => handleDelete(e, i)}
                        color="danger"
                        outline
                      >
                        <MdDeleteOutline />
                      </Button>
                    </span>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    );
  };
  return <>{cardOne()}</>;
};

export default TodoList;
