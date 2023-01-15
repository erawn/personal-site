import cx from "classnames";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className"> & {};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cx(
        "inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-lg font-medium",
        "bg-darkGrey text-gray-100 hover:bg-quickpose-20 hover:text-black",
        "focus:outline-none focus-visible:ring focus-visible:ring-quickpose-80 focus-visible:ring-opacity-75",
        // Register all radix states
        "group",
        "radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900",
        "radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900",
        "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;
