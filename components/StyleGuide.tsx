"use client";
import React from "react";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import Button from "@/components/UI/Button";
import { Input, SelectInput } from "@/components/UI/Input";
import Cart from "@/components/UI/Cart";
import { notify, fetchErrorToast } from "@/components/UI/Toast";
import { Clipboard } from "iconsax-react";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import { NextPage } from "next";

const buttonCode = `
// import Button from "@/components/UI/Button";

<Button
onClick={() => console.log('Clicked!')}
variant="primary" // 'secondary', 'text'
size="md" // 'sm', 'md', 'lg'
// isLoading={false}
// disabled={false}
// href="/" // if href is provided, the button will be rendered as a link
// spinnerColor or spinnerSize only works when isLoading is true
// leftIcon={<Android />} or any other icon
// rightIcon={<Clipboard />} or any other icon
// width="200px" // if width is provided, the button will be rendered with the width

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
    // width="200px" // if width is provided, the input will be rendered with the width
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
    // width="500px" // if width is provided, the input will be rendered with the width
    />`;

const cartCode = `
// import Cart from "@/components/UI/Cart";

<Cart item={{
    name: 'iPhone 9',
    price: 579,
    images: [
        'https://via.placeholder.com/600x400/f5f5f5/blue?text=Hello+World',
        'https://placehold.co/600x400/f5f5f5/red?text=Hello+World'
            ],

    discount: 12.96, // in percentage
    variants: ['black', 'white'], // if there are multiple variants
    rating: 4.69,
    totalRatings: 10,
  }}
  isNew= {true}
  isHot= {false}
  isRed= {true} // if true, the discount price will be red
  isFavorite= {true} // if true, a add to favorite button
  ratingPosition= 'below' // or 'side'

   />`;

function handleCopy(code: string) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code);
    console.log("Copied to clipboard!!");
    notify({
      message: "Copied to clipboard!",
    });
  } else {
    fetchErrorToast(
      "to clipboard. Copy to clipboard is not supported in this browser."
    );
  }
}

const StyleGuide: NextPage = () => {
  return (
    <>
      <BreadCrumbs
        homeElement={"Home"}
        separator={<span className="w-[1px] h-4 flex bg-black/50 rotate-12" />}
        activeClasses="!text-black"
        containerClasses="flex items-end h-6 gap-2 text-Text-sm my-5"
        listClasses="text-black/50 capitalize hover:text-black transition-colors duration-300"
        capitalizeLinks
      />

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
      </div>
    </>
  );
};

export default StyleGuide;
