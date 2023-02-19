import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

function NewItem(props) {
    const [enabled, setEnabled] = useState(false);

    const {
        pic,
        name,
        PID,
        CID,
        Price,
        Stock,
        Detail
    } = props;

    return (
        <tr>
            <td className="px-6 py-3">
                <img width="75" height="75" src={pic} alt="" className="mx-auto my-auto" />
            </td>
            <td className="font-bol px-6 py-3">{name}</td>
            <td className="font-bol px-6 py-3">{PID}</td>
            <td className="font-bol px-6 py-3">{CID}</td>
            <td className="font-bol px-6 py-3">{Price}</td>
            <td className="font-bol px-6 py-3">{Stock}</td>
            <td className="font-bol px-6 py-3">{Detail}</td>
            <td className="px-6 py-3">
                <label className="inline-flex relative items-center cursor-pointer mt-2">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                </label>
            </td>
            <td className="px-6 py-3 justify-items-center">
                <IconButton onClick={() => { console.log("edit") }}>
                    <EditIcon style={{ color: "DD225D" }} />
                </IconButton>
                <IconButton onClick={() => { console.log("remove") }}>
                    <DeleteOutlineIcon style={{ color: "DD225D" }} />
                </IconButton>
            </td>
        </tr>
    )
}

export default NewItem;
