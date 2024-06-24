import React from "react";

import './applicationTable.module.scss';
import {ApplicationTableProps} from "../../lib/types";

const ApplicationTable: React.FC<ApplicationTableProps> = ({applications}) => {
    console.log(applications);
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
                </tr>
            </thead>
            <tbody>
            {
                applications.map((log) => (
                    <tr>
                        <td>{log.id}</td>
                        <td>{log.address}</td>
                        <td>{log.accidentType}</td>
                        <td>{log.priority}</td>
                        <td>{log.name}</td>
                        <td>{log.phone}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}



export default ApplicationTable;