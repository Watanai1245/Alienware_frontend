import React from "react";

export default function ModalAdd({ visible, onClose }) {
  if (!visible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "clcontainer") onClose();
  };
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div class="relative bg-white rounded-lg shadow w-5/6">
        <button
          id="clcontainer"
          onClick={handleOnClose}
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-3xl font-medium text-gray-900 dark:text-black-500">
            Add Product
          </h3>
          <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-2xl font-sm text-gray-900 dark:text-black">Name</label>
                        <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="" required/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-2xl font-sm text-gray-900 dark:text-black">Pice</label>
                        <input type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="" required/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-2xl font-sm text-gray-900 dark:text-black">Stock</label>
                        <input type="text" name="strock" id="strock" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="" required/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-2xl font-sm text-gray-900 dark:text-black">Detail</label>
                        <input type="text" name="detail" id="detail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="" required/>
                    </div>
                    
                    
                    <button type="submit" class="w-1/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    
                </form>
        </div>
      </div>
    </div>
  );
}
