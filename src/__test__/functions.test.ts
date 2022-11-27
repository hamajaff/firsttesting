import { removeAllTodos, changeTodo, addTodo } from "../ts/functions";
import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";

test("should add", () => {
  //Arrange
  let myText: string = "b";
  let myTodos: Todo[] = [];
  //Act
  let myResponse: IAddResponse = addTodo(myText, myTodos);
  //Assert
  expect(myTodos.length).toBe(0);
  expect(myResponse.success).toBe(false);
});

test("should not add", () => {
  //Arrange
  let myText: string = "Hej";
  let myTodos: Todo[] = [];
  //Act
  let myResponse: IAddResponse = addTodo(myText, myTodos);
  //Assert
  expect(myTodos.length).toBe(1);
  expect(myResponse.success).toBe(true);
});

test("should change", () => {
  //Arrenge
  let todo: Todo = new Todo("apple", true);
  //Act
  changeTodo(todo);
  //Assert
  expect(todo.done).toBe(false);
});

test("should remove", () => {
  //Arrenge
  let toDo: Todo[] = [new Todo("apple", false)];
  //Act
  removeAllTodos(toDo);
  //Assert
  expect(toDo.length).toBe(0);
});
