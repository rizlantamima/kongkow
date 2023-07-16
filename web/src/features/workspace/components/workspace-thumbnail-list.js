import { useEffect, useState } from "react";
import WorkspaceThumbnail from "./workspace-thumbnail";



export default function WorkspaceThumbnailList() {
    const [workspaces, setWorkspaces] = useState([]);

    useEffect(() => {
        const listWs = [
            {
                name: "Ruang Saya"
            },
            {
                name: "Ruang Orang"
            },
            {
                name: "Ruang Gatau Siapa"
            }
        ];
        setWorkspaces(listWs);
        // selectWorkspace(0);
    }, []);

    useEffect(() => {
        console.log(workspaces);
    }, [workspaces]);

    function selectWorkspace(indexSelected){
        const updatedWsList = workspaces.map((workspace, index) => ({
            ...workspace,
            selected: indexSelected === index
          }));
        setWorkspaces(updatedWsList);
    }

    return (
        <ul className="list-none hover:list-disc">
            {workspaces.map((workspace, index) => (
          <li className={index == 0 ? "mt-2" : "mt-4"} key={index} onClick={(e) => selectWorkspace(index)}>
            <WorkspaceThumbnail workspace={workspace} />
          </li>
        ))}
            {/* <li className="mt-2"><WorkspaceThumbnail /></li>
            <li className="mt-4"><WorkspaceThumbnail selected={true} /></li>
            <li className="mt-4"><WorkspaceThumbnail selected={false} notified={true} /></li> */}
        </ul>
    )
}   