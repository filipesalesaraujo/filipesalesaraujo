import React, { useState, ChangeEvent } from 'react';

export default function CalculadoraCargaTreinamento(){
    const [volume, setVolume] = useState<string>('');
    const [intensidade, setIntensidade] = useState<string>('');
    const [cargaTreinamento, setCargaTreinamento] = useState<string | null>(null);

    const validateNumberInput = (value: string): boolean => {
        // Verificar se o valor é um número válido
        return /^[0-9.]*$/.test(value);
    };

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        if (validateNumberInput(inputValue)) {
            setVolume(inputValue);
        }
    };

    const handleIntensidadeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        if (validateNumberInput(inputValue)) {
            setIntensidade(inputValue);
        }
    };

    const calculateCargaTreinamento = (): void => {
        const volumeValue: number = parseFloat(volume);
        const intensidadeValue: number = parseFloat(intensidade);

        if (!isNaN(volumeValue) && !isNaN(intensidadeValue) && volumeValue >= 0 && intensidadeValue >= 0) {
            const carga = volumeValue * intensidadeValue;
            setCargaTreinamento(carga.toFixed(2));
        } else {
            setCargaTreinamento(null);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Calculadora de Carga de Treinamento</h1>
            <div className="mb-4">
                <label className="block text-gray-700">Volume (em unidades de treinamento)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" value={volume} onChange={handleVolumeChange} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Intensidade (em unidades de treinamento)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" value={intensidade} onChange={handleIntensidadeChange} />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={calculateCargaTreinamento}>Calcular Carga de Treinamento</button>
            {cargaTreinamento !== null && (
                <div className="mt-4">
                    <p className="text-gray-800">Sua Carga de Treinamento é:</p>
                    <p className="text-2xl font-semibold text-blue-500">{cargaTreinamento}</p>
                </div>
            )}
        </div>
    );
}
