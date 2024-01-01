// pages/style-guide.tsx
"use client";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import Button from "@/components/UI/Button";
import { Input, SelectInput } from "@/components/UI/Input";
import Cart from "@/components/UI/Cart";
import Toast from "@/components/UI/Toast";
import { Clipboard, Android } from "iconsax-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const buttonCode = `
// import Button from "@/components/UI/Button";

<Button
onClick={() => console.log('Clicked!')}
variant="primary" // 'secondary', 'tertiary', 'link', 'error'
size="md" // 'sm', 'md', 'lg'
// isLoading={false}
// disabled={false}
// href="/" // if href is provided, the button will be rendered as a link
// spinnerColor or spinnerSize only works when isLoading is true
// leftIcon={<Android />} or any other icon
// rightIcon={<Clipboard />} or any other icon
// fullWidth={false} // if true, the button will take the full width of the parent

>
  Button
</Button>
`;
const inputCode = `
// import { Input } from "@/components/UI/Input";

<Input
  type="text" // 'text', 'password', 'email', 'number', 'search', 'tel', 'url'
    placeholder="Placeholder"
    onChange={(e) => console.log(e.target.value)}
    // isLoading={false}
    // disabled={false}
    // leftIcon={<Android />} or any other icon
    // rightIcon={<Clipboard />} or any other icon
    variant="primary" // 'default', 'primary'
    // inputSize="md" // 'sm', 'md', 'lg'
    // fullWidth // true, false
    />`;

const selectInputCode = `
// import { SelectInput } from "@/components/UI/Input";

<SelectInput
    onChange={(e) => console.log(e.target.value)}
    options={[
        { value: "1", label: "Option 1", disabled: true},
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
    ]}
    // isLoading={false}
    // disabled={false}
    // leftIcon={<Android />} or any other icon
    // rightIcon={<Clipboard />} or any other icon
    variant="primary" // 'default', 'primary'
    // inputSize="md" // 'sm', 'md', 'lg'
    // fullWidth // true, false
    />`;

const cartCode = `
// import Cart from "@/components/UI/Cart";

<Cart item={{
    name: 'Item Name',
    price: 94.99,
    images: [
        'https://via.placeholder.com/600x400/f5f5f5/blue?text=Hello+World',
        'https://placehold.co/600x400/f5f5f5/red?text=Hello+World'
            ],
    isNew: true,
    isHot: false,
    discount: 20, // in percentage
    isRed: true, // if true, the discount price will be red
    isFavorite: true, // if true, a add to favorite button
    variants: ['blue', 'red'], // if there are multiple variants
    rating: 2.5,
    totalRatings: 10,
    ratingPosition: 'below' // or 'side'
  }} />`;

function handleCopy(code: string) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code);
    toast("Copied to clipboard!");
    console.log("Copied to clipboard!");
  } else {
    toast("Copy to clipboard is not supported in this browser.");
  }
}

export default function StyleGuide() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <h1>Style Guide</h1>

        <ul className="flex justify-start items-center gap-6 mb-8 mt-4">
          <li className="text-Text-sm text-primary-3 hover:text-gray-3 transition-all">
            <a href="#button">Button</a>
          </li>
          <li className="text-Text-sm text-primary-3 hover:text-gray-3 transition-all">
            <a href="#input">Input</a>
          </li>
          <li className="text-Text-sm text-primary-3 hover:text-gray-3 transition-all">
            <a href="#select-input">Select Input</a>
          </li>
          <li className="text-Text-sm text-primary-3 hover:text-gray-3 transition-all">
            <a href="#cart">Cart</a>
          </li>
        </ul>

        <h2
          id="button"
          className="text-center text-Display-md font-semibold mb-4"
        >
          Button
        </h2>
        <LiveProvider
          code={buttonCode}
          scope={{ Button }}
          theme={themes.duotoneDark}
        >
          <div className="relative flex flex-col gap-6 w-[80%] m-auto">
            <LiveEditor
              style={{
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            />
            <Clipboard
              className="h-6 w-6 text-gray-500 cursor-pointer absolute top-2 right-2"
              onClick={() => handleCopy(buttonCode)}
            />

            <LivePreview />
          </div>
        </LiveProvider>

        <h2
          id="input"
          className="text-center text-Display-md font-semibold mb-4"
        >
          Input
        </h2>
        <LiveProvider
          code={inputCode}
          scope={{ Input }}
          theme={themes.duotoneDark}
        >
          <div className="relative flex flex-col gap-6 w-[80%] m-auto">
            <LiveEditor
              style={{
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            />
            <Clipboard
              className="h-6 w-6 text-gray-500 cursor-pointer absolute top-2 right-2"
              onClick={() => handleCopy(inputCode)}
            />
            <LivePreview />
          </div>
        </LiveProvider>

        <h2
          id="select-input"
          className="text-center text-Display-md font-semibold mb-4"
        >
          Select Input
        </h2>
        <LiveProvider
          code={selectInputCode}
          scope={{ SelectInput }}
          theme={themes.duotoneDark}
        >
          <div className="relative flex flex-col gap-6 w-[80%] m-auto">
            <LiveEditor
              style={{
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            />
            <Clipboard
              className="h-6 w-6 text-gray-500 cursor-pointer absolute top-2 right-2"
              onClick={() => handleCopy(selectInputCode)}
            />
            <LivePreview />
          </div>
        </LiveProvider>

        <h2
          id="cart"
          className="text-center text-Display-md font-semibold mb-4"
        >
          Cart
        </h2>
        <LiveProvider
          code={cartCode}
          scope={{ Cart }}
          theme={themes.duotoneDark}
        >
          <div className="relative flex flex-col gap-6 w-[80%] m-auto">
            <LiveEditor
              style={{
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            />
            <Clipboard
              className="h-6 w-6 text-gray-500 cursor-pointer absolute top-2 right-2"
              onClick={() => handleCopy(cartCode)}
            />
            <LivePreview />
          </div>
        </LiveProvider>

        {/* Add more components as needed */}

        <ToastContainer />
      </div>
    </>
  );
}
