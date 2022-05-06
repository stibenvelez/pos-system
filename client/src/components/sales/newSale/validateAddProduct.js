const  validateAddProduct = (product) => {
    const errors = {};
    if (product.category === "") {
        errors.category = "Seleccione un producto";
    }
    if (product.product === "") {
        errors.product = "Seleccione un producto";
    }
    if (product.quantity <= 0) {
        errors.quantity = "Ingrese un acantidad";
    }
    if (product.unitPrice <= 0) {
        errors.unitPrice = "Ingrese un precio unitario";
    }
    return errors;
};
export default validateAddProduct