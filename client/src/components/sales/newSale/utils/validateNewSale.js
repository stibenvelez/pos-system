const validateNewSale = ({ dataSale, detail }) => {
    console.log(detail.length);
    const errors = {};
    if (dataSale.date === "") {
        errors.date = "Ingrese una fecha";
    }
    if (dataSale.document === "") {
        errors.document = "Ingrese un numero de documento";
    }
    if (detail.length === 0) {
        errors.document = "Debe agregar al menos un producto";
    }

    return errors;
};
export default validateNewSale;
