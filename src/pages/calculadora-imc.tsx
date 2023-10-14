import React, { useState, ChangeEvent } from 'react';

type Category =
    | 'Abaixo do Peso'
    | 'Peso Normal'
    | 'Sobrepeso'
    | 'Obesidade Grau 1'
    | 'Obesidade Grau 2'
    | 'Obesidade Grau 3';

function getBackgroundColorClass(category: Category | null): string {
    switch (category) {
        case 'Abaixo do Peso':
            return 'bg-yellow-500'; // Amarelo para Abaixo do Peso
        case 'Peso Normal':
            return 'bg-green-500'; // Verde para Peso Normal
        case 'Sobrepeso':
            return 'bg-red-500'; // Vermelho para Sobrepeso
        case 'Obesidade Grau 1':
            return 'bg-red-600'; // Vermelho mais escuro para Obesidade Grau 1
        case 'Obesidade Grau 2':
            return 'bg-red-700'; // Vermelho ainda mais escuro para Obesidade Grau 2
        case 'Obesidade Grau 3':
            return 'bg-red-800'; // Vermelho mais escuro para Obesidade Grau 3
        default:
            return ''; // Use uma classe vazia para outras categorias
    }
}

export default function CalculadoraIMC(): JSX.Element {
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [category, setCategory] = useState<Category | null>(null); // Inicializado como null

    const validateNumberInput = (value: string): boolean => {
        // Verificar se o valor é um número válido
        if (/^[0-9]+$/.test(value) || value === '') {
            return true;
        }
        return false;
    };

    const handleWeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        // Verificar se o valor inserido é válido
        if (validateNumberInput(inputValue)) {
            setWeight(inputValue);
        }
    };

    const handleHeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        // Verificar se o valor inserido é válido
        if (validateNumberInput(inputValue)) {
            setHeight(inputValue);
        }
    };

    const calculateIMC = (): void => {
        const weightInKg: number = parseFloat(weight);
        const heightInMeters: number = parseFloat(height) / 100;
        const imc: number = weightInKg / (heightInMeters * heightInMeters);

        setResult(imc.toFixed(2));

        if (imc < 18.5) {
            setCategory('Abaixo do Peso');
        } else if (imc >= 18.5 && imc < 24.9) {
            setCategory('Peso Normal');
        } else if (imc >= 25 && imc < 29.9) {
            setCategory('Sobrepeso');
        } else if (imc >= 30 && imc < 34.9) {
            setCategory('Obesidade Grau 1');
        } else if (imc >= 35 && imc < 39.9) {
            setCategory('Obesidade Grau 2');
        } else {
            setCategory('Obesidade Grau 3');
        }
    };

    return (
        <main className="flex items-center justify-center flex-col bg-orange-gradient lg:min-h-screen p-5">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Calculadora de IMC</h1>
                <div className="mb-4">
                    <label className="block text-gray-700">Peso (em kg)</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" value={weight} onChange={handleWeightChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Altura (em cm)</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" value={height} onChange={handleHeightChange} />
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:opacity-80 transition-opacity" onClick={calculateIMC}>Calcular IMC</button>
                {result !== '' && category !== null && (
                    <div className={`mt-4 ${getBackgroundColorClass(category)} text-white rounded-lg p-4`}>
                        <p className="text-white">Seu IMC é:</p>
                        <p className="text-2xl font-semibold text-white">{result}</p>
                        <p className="mt-2 text-white">Categoria: {category}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
