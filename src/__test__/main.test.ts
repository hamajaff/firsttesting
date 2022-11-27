/**

 * @jest-environment jsdom

 */

import * as functions from "./../ts/main";
import * as functionsinfunctions from "./../ts/functions";

/*import {
   createNewTodo,
   createHtml,
   toggleTodo,
   displayError,
   clearTodos,
 } from "./../ts/main";*/

import { Todo } from "../ts/models/Todo";
import { removeAllTodos } from "../ts/functions";

test("should create todo", () => {
  //arrange

  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

  let todoText: string = "ge mig helg";

  let todos: Todo[] = [new Todo("Inlämning", false)];

  //act

  functions.createNewTodo(todoText, todos);

  //assert

  expect(spy).toBeCalled();
});
test("should not create todo", () => {
  //arrange
  let spy = jest.spyOn(functions, "displayError").mockReturnValue();
  let todoText: string = "no";
  let todos: Todo[] = [new Todo("Inlämning", false)];
  //act
  functions.createNewTodo(todoText, todos);
  //assert
  expect(spy).toBeCalled();
});

test("should call change todos", () => {
  //arrange

  let spy = jest.spyOn(functionsinfunctions, "changeTodo").mockReturnValue();

  let todo = new Todo("write a message", false);

  //act

  functions.toggleTodo(todo);

  //assert

  expect(spy).toHaveBeenCalled();
});

test("should call HTML", () => {
  //arrange
  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
  let todo = new Todo("create a new HTML", false);
  //act
  functions.toggleTodo(todo);
  //assert
  expect(spy).toHaveBeenCalled();
});

describe(functions.clearTodos, () => {
  test("should call removeAllTodos", () => {
    //arrange
    let spy = jest
      .spyOn(functionsinfunctions, "removeAllTodos")
      .mockReturnValue();
    let todos: Todo[] = [new Todo("inlämning", false)];
    //act
    functions.clearTodos(todos);
    //assert
    expect(spy).toHaveBeenCalled();
  });
});

test("should call createHtml", () => {
  //arrange

  let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

  let todos: Todo[] = [new Todo("inlämning", false)];

  //act

  functions.clearTodos(todos);

  //assert

  expect(spy).toHaveBeenCalled();
});
