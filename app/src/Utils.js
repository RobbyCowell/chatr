export const filterParticipant = (array, particpant) => {
    return array.filter(user => user !== particpant);
}