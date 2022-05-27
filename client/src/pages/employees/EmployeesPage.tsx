import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeesAction } from "../../actions/employees.action";
import EmployeeList from "../../components/employe/EmployeeList";
import ActionsSections from "../../components/employees/ActionsSections";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card/Card";
import Template from "../../components/ui/Template";


const EmployeesPage = () => {
    const dispatch = useDispatch()

    const [optionsState, setOptionsState] = useState<string>('');

    useEffect(() => {
        (() => dispatch<any>(getAllEmployeesAction()))();
    }, []);

    const employees = useSelector(({ employees}:any) => employees.employees);

    const handleClick = () => {
        console.log('agregando empelado');
    }

    console.log(optionsState);

    return (
        <Template
            title={"Empleados"}
            description={"Administre la información de los empleados aquí"}
        >
            <div className="flex flex-col gap-4">
                <Card>
                    <div>
                        <Button
                            value={"agregar empelado"}
                            onClick={() => setOptionsState('addEmploye')}
                        />
                    </div>
                </Card>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="lg:w-1/2">
                        <ActionsSections optionsState={optionsState} />
                    </div>
                    <div className="lg:w-1/2">
                        <EmployeeList
                            employees={employees}
                            setOptionsState={setOptionsState}
                        />
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default EmployeesPage;
