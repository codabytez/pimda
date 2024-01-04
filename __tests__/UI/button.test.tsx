// import { render, screen } from "@testing-library/react";

// import Button from "@/components/UI/Button";

// test("renders Button component and responds to click events", () => {
//   const onClick = jest.fn();

//   render(<Button onClick={onClick}>Click Me</Button>);

//   const buttonElement = screen.getByText(/click me/i);
//   expect(buttonElement).toBeInTheDocument();

//   buttonElement.click();
//   expect(onClick).toHaveBeenCalledTimes(1);
// });

// test("Button is disabled when disabled prop is true", () => {
//   render(<Button disabled={true}>Disabled Button</Button>);

//   const buttonElement = screen.getByText(/disabled button/i);
//   expect(buttonElement).toBeDisabled();
// });

// test("Button shows loading spinner when isLoading prop is true", () => {
//   render(<Button isLoading={true}>Loading Button</Button>);

//   const spinnerElement = screen.getByTestId("spinner");
//   expect(spinnerElement).toBeInTheDocument();
// });
