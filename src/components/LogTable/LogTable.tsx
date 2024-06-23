import React from "react";
import {observer} from "mobx-react-lite";
import logStore from "../../store/LogStore";

import './logTable.module.scss';


const LogTable: React.FC = observer(() => {
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
                logStore.currAppsArray.map((log) => (
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
})



export default LogTable;