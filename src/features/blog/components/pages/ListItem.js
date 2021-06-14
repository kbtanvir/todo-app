import React, { useState, useRef } from "react";
import { update, remove, select } from "../../redux/blogSlice";
import { Col, Row, Container, ListGroup, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function ListItem({ bulkSelect, post: { id, title } }) {
  const [edit, setEdit] = useState(false);
  const [selection, setSelect] = useState(false);
  const titleRef = useRef();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      update({
        id,
        title: titleRef.current.value,
      })
    );
    setEdit(false);
  }
  function handleSelection() {
    selection ? setSelect(false) : setSelect(true);

    dispatch(select({ id, selected: selection }));
  }
  const conditionalTitle = (
    <>
      {edit ? (
        <Col xs={10} block>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={11}>
                <Form.Control
                  type="text"
                  defaultValue={title}
                  ref={titleRef}
                  placeholder="Title"
                  block
                />
              </Col>
              <Col xs={1}>
                <Button type="submit" onClick={() => handleSubmit} block>
                  ✔️
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      ) : (
        <>
          <Col xs={9}>{title} </Col>
          <Col xs lg="1">
            <Button onClick={() => setEdit(true)} block>
              🖊️
            </Button>
          </Col>
        </>
      )}
    </>
  );

  return (
    <>
      <Container>
        <ListGroup.Item>
          <Row>
            <Col>
              {bulkSelect ? (
                <Form.Check onClick={handleSelection} inline type="checkbox" />
              ) : (
                <></>
              )}
            </Col>
            {conditionalTitle}

            <Col xs lg="1">
              <Button
                onClick={() => {
                  if (!edit) dispatch(remove({ id }));
                }}
                block
              >
                ❌
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </Container>
    </>
  );
}
