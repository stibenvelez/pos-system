import React from 'react'

type TemplateProps = {
    children: React.ReactNode,
    title: string,
    description: string
}
    

const Template = ({ title, description, children }: TemplateProps) => {
    return (
        <div className="container mx-auto">
            <div className="pb-3">
                <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
                <p className="text-gray-800">{description}</p>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Template;