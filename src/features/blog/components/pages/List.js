import { Col, Container, Form, ListGroup, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectBlog, removeSelected } from "../../redux/blogSlice";
import ListItem from "./ListItem";
import { useState } from "react";
export default function List() {
  const blog = useSelector(selectBlog);
  const [bulkSelect, setBulkSelect] = useState();
  const dispatch = useDispatch();
  const posts = blog.length ? (
    blog.map(post => (
      <ListItem key={post.id} post={post} bulkSelect={bulkSelect} />
    ))
  ) : (
    <>No items</>
  );

  return (
    <>
      {/* {JSON.stringify(blog)} */}

      <Container>
        <ListGroup.Item>
          <Row>
            <Col>{/* <Form.Check inline type="checkbox" /> */}</Col>

            <Col></Col>
            <Col xs={9}>{bulkSelect ? "Select items" : ""}</Col>
            <Col xs={2}>
              {bulkSelect ? (
                <Button
                  onClick={() => {
                    setBulkSelect(false);
                    dispatch(removeSelected());
                  }}
                  block
                >
                  ❌
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setBulkSelect(true);
                    }}
                    block
                  >
                    Bulk Select
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </ListGroup.Item>
      </Container>
      {posts}
    </>
  );
}
