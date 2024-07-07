export type ApplicationType = {
    id: string,
    address: string,
    coordinates: number[],
    accidentType: string,
    priority: string,
    name: string,
    phone: string
};

export type FormErrorsType = {
    address: boolean,
    accidentType: boolean,
    priority: boolean,
    name: boolean,
    phone: boolean,
    coordinates: boolean
}

export type ModalFormProps = {
    // application: ApplicationType,
    // setApplication:  React.Dispatch<React.SetStateAction<ApplicationType>>,
    error: FormErrorsType
}

export type PaginationProps = {
    countPages: number,
    prev: number,
    next: number,
}

export type PriorityChipProps = {
    priority: string
}

export type AccidentChipProps = {
    accident: string
}


export type ApplicationStateType = {
    applications: ApplicationType[];
    total: number;
    currentPage: number;
    isLoading: boolean;
    error: string | null;
};

export type ErrorType = {
    data: string,
    error: {
        message: string,
        stack: string,
    },
    internal: boolean,
    status: number,
    statusText: string
}

export const ACCIDENT_TYPES = {
    breakthrough: "Прорыв",
    leak: "Утечка",
    outdoorColumn: "Колонка уличная",
    lowQualityWater: "Некачественная вода",
    blockage: "Закупорка",
    other: "Другое"
}

export const PRIORITY_TYPES = {
    "1": "Незамедлительно",
    "2": "Высокий",
    "3": "Средний",
    "4": "Низкий"
}
