export interface IRoom {
    id: string,
    name: string,
    block: string,
    capacity: number,
    roomTypeId: string,
}

export interface IRoomCreate extends Omit<IRoom, "id"> {

}