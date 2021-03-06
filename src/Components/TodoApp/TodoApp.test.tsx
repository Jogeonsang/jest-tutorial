import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

describe('<TodoApp />', () => {
  it('render TodoForm and TodoList', () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText('등록'); // form 존재 확인
    getByTestId('TodoList'); // TodoList 존재 확인
  });

  it('render two defaults todos', () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요"), {
      target: {
        value: "새 항목 추가하기"
      }
    });
    fireEvent.click(getByText('등록'));
    getByText("새 항목 추가하기");
  });

  it('toggles todo', () => {
    const { getByText } = render(<TodoApp />);

    const todoText = getByText("TDD 배우기");
    expect(todoText).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  it('removes todo', () => {
    const { getByText } = render(<TodoApp />);

    const todoText = getByText("TDD 배우기");
    const removeButton = todoText.nextSibling;
    if (removeButton) {
      fireEvent.click(removeButton);
    }
    expect(todoText).not.toBeInTheDocument();
  });
});