import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Button } from "reactstrap";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = ({
  list,
  style,
  handleDelete,
  handleEdit,
  currentDate,
  currentTime,
}) => {
  const cardOne = () => {
    return (
      <div className={style.list_container}>
        {list.map((prev, i) => {
          return (
            <div key={i} className={style.card_component}>
              <Card  className={style.card_1}>
                <CardBody className="p-3">
                  <CardSubtitle
                    className={`${style.list_heading} mb-2 text-muted`}
                    tag="h6"
                  >
                    <span className={style.dt_container}>
                      <span>{prev.time}</span>
                      <span>{prev.date}</span>
                    </span>
                  </CardSubtitle>
                  <div className={`${style.dis_container}`}>
                    <div className={`${style.list_title}`}>{prev.title}</div>
                    <div className={`${style.btn_delete_conatiner}`}>
                      <span
                        className={`${style.edit_btn}`}
                        onClick={(e) => handleEdit(e, i)}
                      >
                        <FaEdit />
                      </span>
                      <span
                        className={`${style.btn_delete}`}
                        onClick={(e) => handleDelete(e, i)}
                      >
                        <MdDeleteOutline />
                      </span>
                    </div>
                  </div>
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
