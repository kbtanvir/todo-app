import { useRef } from "react";
import { create } from "../../redux/blogSlice";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

export default function AddItem() {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();


  function handleSubmit(e) {
    e.preventDefault();

    if (titleRef.current.value === "") return;
    dispatch(
      create({
        title: titleRef.current.value,
        content: contentRef.current.value,
      })
    );
    titleRef.current.value = null;
    contentRef.current.value = null;
  }
  return (
    <>
      <h5>Add item</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" ref={titleRef} placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Content</Form.Label>
          <Form.Control
            placeholder="Content"
            ref={contentRef}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add item
        </Button>
      </Form>
    </>
  );
}
