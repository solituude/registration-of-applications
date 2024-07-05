import React from "react";
import {useUnit} from "effector-react";

import {useNavigate} from "react-router-dom";
import {PriorityChip} from "shared/ui/priorityChip";
import {AccidentChip} from "shared/ui/accidentChip";
import {$currApplicationsGetStatus} from "features/infoByPage";

import s from './applicationTable.module.scss';


export const ApplicationTable: React.FC = () => {
    const {loading, error, data} = useUnit($currApplicationsGetStatus);
    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/statement/${id}`);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
                data.data.map((log) => (
                    <tr key={log.id} onClick={() => handleClick(log.id)}>
                        <td className={s.id__col}>{log.id}</td>
                        <td>{log.address}</td>
                        <td className={s.accident__col}><AccidentChip accident={log.accidentType}/></td>
                        <td className={s.priority__col}><PriorityChip priority={log.priority}/></td>
                        <td>{log.name}</td>
                        <td>{log.phone}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
};