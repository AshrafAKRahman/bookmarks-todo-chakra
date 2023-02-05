import React, { useEffect, useState } from "react";

import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import {
  Button,
  Card,
  Box,
  Input,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  const [editedTodo, setEditedTodo] = useState("");
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodos = (prevTodos) => [
      ...prevTodos,
      {
        id: new Date().getTime(),
        todoText: todo,
        isCompleted: false,
        ...todo,
      },
    ];

    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const newTodos = (prevTodos) => prevTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (e, id) => {
    e.preventDefault();
    const newTodos = [...todos].map((todo) => {
      if (id === todo.id) {
        todo.todoText = editedText;
      }
      return todo;
    });
    setTodos(newTodos);
    setEditedTodo(null);
  };

  const toggleTodoState = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const setInputFocus = (input) => {
    if (input !== null) {
      input.focus();
    }
  };

  return (
    <Card
      boxShadow="2xl"
      p="6"
      rounded="md"
      maxHeight="400px"
      overflow="scroll"
      style={{
        background: "radial-gradient(circle, #99edc3, #B2d3C2)",
        width: "550px",
        marginLeft: "30px",
        marginTop: "30px",
        borderRadius: "30px",
      }}
    >
      <Box>
        <Heading ml="150px">Todos</Heading>
        <form onSubmit={addTodo}>
          <Input
            style={{ borderRadius: "60px" }}
            size="lg"
            width="300px"
            type="text"
            onChange={(e) => {
              setTodo(e.target.value);
              console.log(todo);
            }}
            value={todo}
            ref={setInputFocus}
          />
          <Button
            type="submit"
            ml="80px"
            boxShadow="inset 0 0 0 2px #FFFFFF"
            style={{
              borderRadius: "20px",
              background: "#1D2951",
              color: "white",
            }}
          >
            Add +
          </Button>
        </form>
        {todos.map((todo) => (
          <Box
            key={todo.id}
            pt="20px"
            mt="20px"
            style={{
              borderRadius: "20px",
              background: "#1D2951",
              color: "white",
            }}
          >
            {todo.id === editedTodo ? (
              <div>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  onSubmit={(e) => editTodo(e, todo.id)}
                >
                  <Input
                    type="text"
                    onChange={(e) => setEditedText(e.target.value)}
                    defaultValue={todo.todoText}
                    ref={setInputFocus}
                    style={{ borderRadius: "60px" }}
                    size="lg"
                    width="230px"
                    mb="40px"
                    ml="15px"
                  />
                  <Button
                    onClick={() => setEditedTodo("")}
                    mr="20px"
                    style={{
                      borderRadius: "60px",
                      background: "#99edc3",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={(e) => editTodo(e, todo.id)}
                    mr="20px"
                    style={{
                      borderRadius: "60px",
                      background: "#99edc3",
                    }}
                  >
                    Update
                  </Button>
                </Box>
              </div>
            ) : (
              <Box display="flex">
                <Text ml="20px" mb="20px">
                  {todo.todoText}
                </Text>
                <Spacer />
                <Box display="flex" mr="20px">
                  {todo.isCompleted === true ? (
                    <ImCheckboxChecked
                      onClick={() => toggleTodoState(todo.id)}
                    />
                  ) : (
                    <ImCheckboxUnchecked
                      onClick={() => toggleTodoState(todo.id)}
                    />
                  )}
                  <DeleteIcon onClick={() => deleteTodo(todo.id)} />

                  <EditIcon onClick={() => setEditedTodo(todo.id)} />
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default Todo;
