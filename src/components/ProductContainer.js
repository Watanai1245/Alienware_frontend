import React from "react";
import NewItem from "./NewItem";

export default function ProductContainer(props) {
    const { products } = props;

    if (!products) return <div>loading...</div>;

    const listItems = products.map((item, index) => <NewItem
        key={index}
        pic=""
        name={item.Name}
        PID={item.PID}
        CID={item.CID}
        Price={item.Price}
        Stock={item.Stock}
        Detail={item.Detail.length > 50 ? `${item.Detail.substring(0, 50)}...` : item.Detail}
    />);

    return <tbody className="text-center"> {listItems}</tbody>;
}
