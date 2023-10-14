import React, { useState, ChangeEvent } from 'react';

export default function CalculadoraRCQ() {
    const [waistCircumference, setWaistCircumference] = useState<string>('');
    const [hipCircumference, setHipCircumference] = useState<string>('');
    const [rcqResult, setRCQResult] = useState<string | null>(null);
    const [rcqClassification, setRCQClassification] = useState<string>('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const validateNumberInput = (value: string): boolean => {
        return /^[0-9]*$/.test(value);
    };

    const handleWaistChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        if (validateNumberInput(inputValue)) {
            setWaistCircumference(inputValue);
        }
        updateButtonStatus(inputValue, hipCircumference);
    };

    const handleHipChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        if (validateNumberInput(inputValue)) {
            setHipCircumference(inputValue);
        }
        updateButtonStatus(waistCircumference, inputValue);
    };

    const updateButtonStatus = (waistValue: string, hipValue: string): void => {
        setIsButtonDisabled(waistValue === '' || hipValue === '');
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

        <main className="flex items-center min-h-screen flex-col bg-about bg-cover bg-no-repeat bg-[center_-30px]">
            <section className="max-w-7xl px-5 py-10 flex flex-wrap gap-10 flex-col ">

                <h1 className="text-3xl font-bold">Calculadora de Relação Cintura-Quadril (RCQ)</h1>
                <p className="text-lg">A Calculadora de Relação Cintura-Quadril (RCQ) é uma ferramenta essencial para avaliar a distribuição de gordura corporal e o risco de doenças cardiovasculares. A relação cintura-quadril é um indicador importante da saúde e pode fornecer informações valiosas sobre sua condição física geral.</p>

                <h2 className="text-3xl font-bold">O que é a Relação Cintura-Quadril (RCQ)?</h2>
                <p className="text-lg">A RCQ é uma medida que compara a circunferência da sua cintura com a circunferência do quadril. Essa relação pode indicar como a gordura está distribuída em seu corpo. Uma RCQ elevada, que significa uma cintura proporcionalmente mais larga em relação ao quadril, está associada a um maior risco de doenças cardiovasculares, diabetes e outras condições de saúde.</p>

                <h3 className="text-3xl font-bold">Por que a RCQ é importante?</h3>
                <p className="text-lg">A RCQ é importante porque a gordura visceral, que se acumula na região abdominal, pode ser mais prejudicial à saúde do que a gordura subcutânea que se acumula em outras partes do corpo. Ter uma RCQ saudável está associado a um menor risco de problemas de saúde, enquanto uma RCQ elevada pode indicar a necessidade de ajustes em seu estilo de vida para melhorar sua saúde cardiovascular.</p>

                <h4 className="text-3xl font-bold">Como usar a Calculadora de RCQ:</h4>

                <ul className="text-lg list-decimal pl-5">
                    <li><strong>Circunferência da Cintura:</strong> Meça a circunferência da sua cintura na altura do umbigo em centímetros.</li>
                    <li><strong>Circunferência do Quadril:</strong> Meça a circunferência do quadril na parte mais larga, geralmente na altura das nádegas, em centímetros.</li>
                    <li><strong>Clique em &quot;Calcular RCQ&quot;:</strong> Após inserir as medidas, clique no botão &quot;Calcular RCQ&quot; para obter seu resultado.</li>
                </ul>

                <h5 className="text-3xl font-bold">Resultados da RCQ:</h5>

                <p className="text-lg">Após calcular sua RCQ, a calculadora fornecerá o valor da sua RCQ com duas casas decimais e a classificação correspondente. As classificações incluem:</p>

                <ul className="text-lg list-disc pl-5">
                    <li><strong>RCQ Saudável (Baixo Risco):</strong> Indica uma distribuição saudável de gordura corporal.</li>
                    <li><strong>RCQ Moderadamente Aumentado (Moderado Risco):</strong> Sugere uma distribuição de gordura moderadamente aumentada.</li>
                    <li><strong>RCQ Muito Aumentado (Alto Risco):</strong> Indica um maior risco de problemas de saúde relacionados à gordura abdominal.</li>
                </ul>

                <p className="text-lg">Lembre-se de que a RCQ é apenas um indicador e não deve ser usado isoladamente para avaliar sua saúde. Consultar um profissional de saúde é a melhor maneira de interpretar seus resultados e tomar decisões informadas sobre seu estilo de vida e saúde cardiovascular.</p>
                <p className="text-lg">Use a Calculadora de RCQ para avaliar sua saúde cardiovascular e tomar medidas para um estilo de vida mais saudável!</p>

                <div>
                    <div className="mb-4">
                        <label className="text-lg">Circunferência da Cintura (em centímetros)</label>
                        <input type="text" className="text-lg w-full p-2 border border-gray-300 rounded" value={waistCircumference} onChange={handleWaistChange}/>
                    </div>
                    <div className="mb-4">
                        <label className="text-lg">Circunferência do Quadril (em centímetros)</label>
                        <input type="text" className="text-lg w-full p-2 border border-gray-300 rounded" value={hipCircumference} onChange={handleHipChange}/>
                    </div>
                    <button className={`w-full bg-blue-500 text-white py-2 rounded hover:opacity-80 transition-opacity ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`} onClick={calculateRCQ} disabled={isButtonDisabled}>Calcular RCQ</button>
                    {rcqResult !== null && (
                        <div className={`mt-4 ${resultColorClass} text-white rounded-lg p-4`}>
                            <p className={`text-white`}>Sua Relação Cintura-Quadril (RCQ) é:</p>
                            <p className={`text-2xl font-semibold`}>{rcqResult}</p>
                            <p className={`mt-2`}>Classificação: {rcqClassification}</p>
                        </div>
                    )}
                </div>

            </section>

        </main>
    );
}
