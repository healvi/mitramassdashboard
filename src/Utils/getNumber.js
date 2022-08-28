export const getNumber = (str) => {
    if(!str) return
    const onlyNumbers = str.replace(/\D/g, '');
    return Number(onlyNumbers)
}
