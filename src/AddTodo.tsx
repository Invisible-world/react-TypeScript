import React from "react";
import { Input, Button } from "antd";

type AddTodoProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  styles: {
    display: string;
    justifyContent: string;
    alignItems: string;
    fontSize: string;
  };
};
export const AddTodo = (props: AddTodoProps) => {
  return (
    <>
      <div style={props.styles}>
        <Input
          placeholder=" Enter a goal..."
          onChange={(event) => props.handleChange(event)}
        />
        <div>
          <Button type="primary" style={{ marginLeft: "0.2rem" }}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};
