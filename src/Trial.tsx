import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: { email: string; password: string; plan: string; }) => {
    event.preventDefault();
    console.log(formData);
};

const TrialPage: React.FC = () => {
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
        plan: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [ event.target.name ]: event.target.value,
        });
    };

    return (
        <div className="p-10 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Start Your Trial</h1>

            <form
                onSubmit={ (event) => handleSubmit(event, formData) }
                className="flex flex-col items-center w-full max-w-md mt-5"
            >
                <label className="w-full mb-4">
                    Your email address:
                    <input
                        type="email"
                        name="email"
                        value={ formData.email }
                        onChange={ handleChange }
                        required
                        className="mt-2 w-full p-2 border rounded"
                    />
                </label>

                <label className="w-full mb-4">
                    Create a password:
                    <input
                        type="password"
                        name="password"
                        value={ formData.password }
                        onChange={ handleChange }
                        required
                        className="mt-2 w-full p-2 border rounded"
                    />
                </label>

                <label className="w-full mb-4">
                    Choose a plan:
                    <select
                        name="plan"
                        value={ formData.plan }
                        onChange={ handleChange }
                        required
                        className="mt-2 w-full p-2 border rounded"
                    >
                        <option value="">--Please choose a plan--</option>
                        <option value="free">Free Trial</option>
                        <option value="starter">$14/m (Up to 100,000 monthly page views)</option>
                        <option value="professional">$24/m (Up to 200,000 monthly page views)</option>
                        <option value="enterprise">$44/m (Up to 500,000 monthly page views)</option>
                    </select>
                </label>

                <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                    Start Your Trial
                </button>
            </form>

            <Link
                to="/"
                className="mt-5 text-indigo-600 hover:text-indigo-500"
            >
                Back to homepage
            </Link>
        </div>
    );
};

export default TrialPage;
