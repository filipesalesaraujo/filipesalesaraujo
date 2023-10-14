import React, {useState, ChangeEvent} from 'react';

export default function CalculadoraRCQ() {
    const [waistCircumference, setWaistCircumference] = useState<string>('');
    const [hipCircumference, setHipCircumference] = useState<string>('');
    const [rcqResult, setRCQResult] = useState<string | null>(null);
    const [rcqClassification, setRCQClassification] = useState<string>('');

    const validateNumberInput = (value: string): boolean => {
        // Use uma expressão regular para verificar se o valor contém apenas dígitos
        return /^[0-9]*$/.test(value);
    };

    const handleWaistChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        if (validateNumberInput(inputValue)) {
            setWaistCircumference(inputValue);
        }
    };

    const handleHipChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        if (validateNumberInput(inputValue)) {
            setHipCircumference(inputValue);
        }
    };

    const calculateRCQ = (): void => {
        const waist = parseFloat(waistCircumference);
        const hip = parseFloat(hipCircumference);

        if (!isNaN(waist) && !isNaN(hip) && waist > 0 && hip > 0) {
            const rcq = waist / hip;
            setRCQResult(rcq.toFixed(2));

            if (rcq < 0.90) {
                setRCQClassification('RCQ Saudável (Baixo Risco)');
            } else if ((rcq >= 0.90 && rcq <= 0.99) || (rcq >= 0.85 && rcq <= 0.89)) {
                setRCQClassification('RCQ Moderadamente Aumentado (Moderado Risco)');
            } else {
                setRCQClassification('RCQ Muito Aumentado (Alto Risco)');
            }
        } else {
            setRCQResult(null);
            setRCQClassification('');
        }
    };

    const resultColorClass = rcqClassification.includes('Baixo Risco') ? 'bg-green-500' : rcqClassification.includes('Moderado Risco') ? 'bg-yellow-500' : 'bg-red-500';
    return (
        <main className="flex items-center justify-center flex-col bg-orange-gradient lg:min-h-screen p-5">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Calculadora de Relação Cintura-Quadril (RCQ)</h1>
                <div className="mb-4">
                    <label className="block text-gray-700">Circunferência da Cintura (em centímetros)</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" value={waistCircumference} onChange={handleWaistChange}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Circunferência do Quadril (em centímetros)</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" value={hipCircumference} onChange={handleHipChange}/>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:opacity-80 transition-opacity" onClick={calculateRCQ}>Calcular RCQ
                </button>
                {rcqResult !== null && (
                    <div className={`mt-4 ${resultColorClass} text-white rounded-lg p-4`}>
                        <p className={`text-gray-800 text-white`}>Sua Relação Cintura-Quadril (RCQ) é:</p>
                        <p className={`text-2xl font-semibold`}>{rcqResult}</p>
                        <p className={`mt-2`}>Classificação: {rcqClassification}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
