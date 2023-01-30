import { useEffect, useState } from "react";
import { removeCartItem, updateCartItem } from "../../services/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CartItem = ({ product, user }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const queryClient = useQueryClient();

  const deleteItem = useMutation({
    mutationFn: (product) => removeCartItem(user, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  useEffect(() => {
    quantity > 0
      ? updateCartItem(user, product, quantity)
      : removeCartItem(user, product);
  }, [quantity]);

  return (
    <>
      <tr>
        <td className="flex gap-3 mt-3">
          <a href={`/products/${product.productId}`}>
            <img
              className="border aspect-square w-[150px] rounded-md md:py-4 md:pr-8 md:border-0"
              src={product.product.photos[0]}
            />
          </a>
          <div className="">
            <a href="" className="text-sm md:text-base">
              {product.product.tittle}
            </a>
            <p className="text-2xl my-3 md:text">${product.price}</p>
            <p className="text-xs">Color: Yellow</p>
            <div className=" gap-3 items-center mt-2">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-discount w-5 h-5"
                viewBox="0 0 12 12">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z"
                  fill="currentColor"></path>
              </svg>

              <span className="text-base">{product.product.category}</span>
            </div>
          </div>
        </td>
        {/* </div> */}
        <td>
          <div className="hidden md:flex gap-2 items-center">
            <div className="">
              <input
                type="number"
                min={0}
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                className="border rounded-md inline-block h-10 w-20 text-center"
              />
            </div>
            <button onClick={() => deleteItem.mutate(product)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </td>
        <td className="">${(product.price * quantity).toFixed(2)}</td>
      </tr>
    </>
  );
};

export default CartItem;
