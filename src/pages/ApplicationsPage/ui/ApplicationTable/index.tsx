import React from "react";
import {ApplicationTableProps} from "../../lib/types";

import './applicationTable.module.scss';
import { useNavigate} from "react-router-dom";


const ApplicationTable: React.FC<ApplicationTableProps> = ({applications}) => {

    const navigate = useNavigate();
    const handleClick = (id: number) => {
        navigate(`/statement/${id}`);
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Адрес</th>
                <th>Тип аварии</th>
                <th>Приоритет</th>
                <th>Заявитель</th>
                <th>Номер телефона</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                applications.map((log) => (
                    <tr key={log.id}>
                        <td>{log.id}</td>
                        <td>{log.address}</td>
                        <td>{log.accidentType}</td>
                        <td>{log.priority}</td>
                        <td>{log.name}</td>
                        <td>{log.phone}</td>
                        <td><button onClick={() => handleClick(log.id)}>Edit</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}



export default ApplicationTable;