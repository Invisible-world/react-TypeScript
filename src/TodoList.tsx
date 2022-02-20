import React from "react";
import { List, Avatar } from "antd";

// interface TodoListProps {
//   data: {
//     title: string;
//     isCompleted: boolean;
//   }[];
// }
type TodoListProps = {
  data: {
    title: string;
    isCompleted: boolean;
  }[];
};

export const TodoList = (props: TodoListProps) => {
  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <div style={style.centerInput}>
          <h3>Goals</h3>
          <List
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team "
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};
const style = {
  centerInput: {
    display: " block",
    margin: "0 auto",
    width: "50%",
  },

  container: {
    fontSize: "24px",
    margin: "25px",
    width: "60%",
    // outline: dashed 1px black,
  },
};
