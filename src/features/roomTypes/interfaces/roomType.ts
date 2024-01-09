export interface IRoomType {
    id: string;
    name: string;
    isComputerLab: boolean;
    operationalSystem: string;
}

export interface IRoomTypeCreate extends Omit<IRoomType, "id"> {}
